package com.example.ProyectoIntegradorGrupo2.controller;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
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

    @Operation(summary = "Agregar un producto")
    @PostMapping("/agregar")
    public ResponseEntity<?> agregarProducto(@RequestBody ProductoDTO productoDTO) throws BadRequestException {
        ProductoDTO productoAgregado = productoService.agregarProducto(productoDTO);

        return ResponseEntity.ok(productoAgregado.getId());
    }

    @Operation(summary = "Obtener una producto por su id")
    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerProductoPorId(@PathVariable Long id) throws ResourceNotFoundException {


        return ResponseEntity.ok(productoService.obtenerProductoPorId(id));
    }

    @Operation(summary = "Listar los productos según su categoría")
    @GetMapping("/porCategoria/{id}")
    public  ResponseEntity<?> listarProductosPorIdCategoria(@PathVariable Long id) throws ResourceNotFoundException {

        return ResponseEntity.ok(productoService.buscarProductosPorCategoria(id));
    }
}
