package com.example.ProyectoIntegradorGrupo2.controller;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.dto.ReaccionDTO;
import com.example.ProyectoIntegradorGrupo2.service.IReaccionService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/reacciones")
public class ReaccionController {

    @Autowired
    private IReaccionService reaccionService;

    @Operation(summary = "Agregar una reacción")
    @PostMapping("/agregar")
    public ResponseEntity<?> agregarReaccion(@RequestBody ReaccionDTO reaccionDT0) throws BadRequestException {

        ReaccionDTO reaccionAgregada = reaccionService.agregarReaccion(reaccionDT0);
        return ResponseEntity.ok(reaccionAgregada.getId());

    }

    @Operation(summary = "Obtener una reacción por su id")
    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerReaccionPorId(@PathVariable Long id) throws ResourceNotFoundException {

        return ResponseEntity.ok(reaccionService.obtenerReaccionPorId(id));

    }

    @Operation(summary = "Borrar una reacción")
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminarReaccion(@PathVariable Long id) throws ResourceNotFoundException {

        reaccionService.eliminar(id);
        return ResponseEntity.ok().body("DELETED");

    }

    @Operation(summary = "Obtener una lista de todas las reacciones")
    @GetMapping("/todas")
    public ResponseEntity<Collection<ReaccionDTO>> listarTodas() {
        return ResponseEntity.ok(reaccionService.listarTodas());
    }

    @Operation(summary = "Modificar una reacción")
    @PutMapping("/editar")
    public ResponseEntity<?> editarReaccion(@RequestBody ReaccionDTO reaccionDTO) throws ResourceNotFoundException, BadRequestException {
        reaccionService.editar(reaccionDTO);
        return ResponseEntity.ok().body("UPDATED");
    }

}