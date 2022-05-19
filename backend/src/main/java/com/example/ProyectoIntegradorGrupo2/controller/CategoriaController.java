package com.example.ProyectoIntegradorGrupo2.controller;

import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.dto.CategoriaDTO;
import com.example.ProyectoIntegradorGrupo2.service.ICategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    private ICategoriaService categoriaService;

    @PostMapping
    public ResponseEntity<?> agregarCategoria(@RequestBody CategoriaDTO categoriaDTO){
        categoriaService.agregarCategoria(categoriaDTO);

        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Collection<CategoriaDTO>> listarCategorias(){
        return ResponseEntity.ok(categoriaService.listarTodas());
    }

    @PutMapping
    public ResponseEntity<?> editarCategoria(@RequestBody CategoriaDTO categoriaDTO) throws ResourceNotFoundException {
        categoriaService.editar(categoriaDTO);

        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarCategoria(@PathVariable Long id) throws ResourceNotFoundException {
        categoriaService.eliminar(id);

        return ResponseEntity.ok(HttpStatus.OK);
    }
}
