package com.example.ProyectoIntegradorGrupo2.controller;


import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.dto.reservaDTO.ReservaActualizarDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.reservaDTO.ReservaDTO;
import com.example.ProyectoIntegradorGrupo2.service.IReservaService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @Operation(summary = "Obtener una reserva por su id")
    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerReservaPorId(@PathVariable Long id) throws ResourceNotFoundException {


        return ResponseEntity.ok(reservaService.obtenerReservaPorId(id));
    }

    @Operation(summary = "Eliminar una reserva por su id")
    @DeleteMapping ("eliminar/{id}")
    public ResponseEntity<?> eliminarReservaPorId(@PathVariable Long id) throws ResourceNotFoundException {

        reservaService.eliminar(id);
        return ResponseEntity.ok().body("DELETED");
    }

    @Operation(summary = "Obtener una lista de todas las reservas")
    @GetMapping("/todas")
    public ResponseEntity<?> listarReservas(){

        return ResponseEntity.ok(reservaService.listarTodas());
    }

    @Operation(summary = "Listar las reservas por producto")
    @GetMapping("/porProductoId/{id}")
    public  ResponseEntity<?> listarReservasPorIdProducto(@PathVariable Long id) throws ResourceNotFoundException {

        return ResponseEntity.ok(reservaService.buscarReservasPorProductoId(id));
    }

    @Operation(summary = "Listar las reservas por usuario")
    @GetMapping("/porUsuarioId/{id}")
    public  ResponseEntity<?> listarReservasPorIdUsuario(@PathVariable Long id) throws ResourceNotFoundException {

        return ResponseEntity.ok(reservaService.buscarReservasPorUsuarioId(id));
    }

    @Operation(summary = "Modificar una reserva")
    @PutMapping("/editar")
    public ResponseEntity<?> editarReserva(@RequestBody ReservaActualizarDTO reservaActualizarDTO) throws ResourceNotFoundException, BadRequestException {
        reservaService.editar(reservaActualizarDTO);
        return ResponseEntity.ok().body("UPDATED");
    }

}
