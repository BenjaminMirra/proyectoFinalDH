package com.example.ProyectoIntegradorGrupo2.controller;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.dto.CiudadDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.PuntuacionDTO;
import com.example.ProyectoIntegradorGrupo2.service.IPuntuacionService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/puntuaciones")
public class PuntuacionController {

    @Autowired
    private IPuntuacionService puntuacionService;

    @Operation(summary = "Agregar una puntuacion")
    @PostMapping("/agregar")
    public ResponseEntity<?> agregarPuntuacion(@RequestBody PuntuacionDTO puntuacionDTO) throws BadRequestException {

        PuntuacionDTO puntuacionAgregada = puntuacionService.agregarPuntuacion(puntuacionDTO);
        return ResponseEntity.ok(puntuacionAgregada.getId());

    }

    @Operation(summary = "Obtener una puntuación por su id")
    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerPuntuacionPorId(@PathVariable Long id) throws ResourceNotFoundException {

        return ResponseEntity.ok(puntuacionService.obtenerPuntuacionPorId(id));

    }

    @Operation(summary = "Borrar una puntuación")
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminarPuntuacion(@PathVariable Long id) throws ResourceNotFoundException {

       puntuacionService.eliminar(id);
        return ResponseEntity.ok().body("DELETED");

    }

    @Operation(summary = "Obtener una lista de todas las puntuaciones")
    @GetMapping("/todas")
    public ResponseEntity<Collection<PuntuacionDTO>> listarTodas() {
        return ResponseEntity.ok(puntuacionService.listarTodas());
    }

    @Operation(summary = "Modificar una puntuacion")
    @PutMapping("/editar")
    public ResponseEntity<?> editarPuntuacion(@RequestBody PuntuacionDTO puntuacionDTO) throws ResourceNotFoundException, BadRequestException {
        puntuacionService.editar(puntuacionDTO);
        return ResponseEntity.ok().body("UPDATED");
    }

}
