package com.example.ProyectoIntegradorGrupo2.controller;


import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.model.dto.ProductoDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.ReservaDTO;
import com.example.ProyectoIntegradorGrupo2.service.IReservaService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reservas")
public class ReservaController {

    @Autowired
    private IReservaService reservaService;

    @Operation(summary = "Agregar una reserva")
    @PostMapping("/agregar")
    public ResponseEntity<?> agregarReserva(@RequestBody ReservaDTO reservaDTO) throws BadRequestException {
        ReservaDTO reservaAgregada = reservaService.agregarReserva(reservaDTO);

        return ResponseEntity.ok(reservaAgregada.getId());
    }
}
