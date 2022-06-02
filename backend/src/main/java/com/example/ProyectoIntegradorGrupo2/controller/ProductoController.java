package com.example.ProyectoIntegradorGrupo2.controller;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.model.dto.CategoriaDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.ProductoDTO;
import com.example.ProyectoIntegradorGrupo2.service.IProductoService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
//@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/productos")
public class ProductoController {

    @Autowired
    private IProductoService productoService;

    @Operation(summary = "Agregar una categoría")
    @PostMapping("/agregar")
    public ResponseEntity<?> agregarProducto(@RequestBody ProductoDTO productoDTO) throws BadRequestException {
        ProductoDTO productoAgregado = productoService.agregarProducto(productoDTO);

        return ResponseEntity.ok(productoAgregado.getId());
    }
}
