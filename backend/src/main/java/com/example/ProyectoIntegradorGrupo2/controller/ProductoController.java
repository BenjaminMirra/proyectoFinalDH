package com.example.ProyectoIntegradorGrupo2.controller;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.dto.CategoriaDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.DisponibilidadDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.ProductoDTO;
import com.example.ProyectoIntegradorGrupo2.service.IProductoService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.Collection;
import java.util.List;

/*@CrossOrigin("*")*/
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

    @Operation(summary = "Obtener un producto por su id")
    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerProductoPorId(@PathVariable Long id) throws ResourceNotFoundException{


        return ResponseEntity.ok(productoService.obtenerProductoPorId(id));
    }

    @Operation(summary = "Eliminar un producto por su id")
    @DeleteMapping ("eliminar/{id}")
    public ResponseEntity<?> eliminarProductoPorId(@PathVariable Long id) throws ResourceNotFoundException {

      productoService.eliminar(id);
      return ResponseEntity.ok().body("DELETED");
    }
    @Operation(summary = "Obtener una lista de todos los productos")
    @GetMapping("/todos")
    public ResponseEntity<?> listarProductos(){
        return ResponseEntity.ok(productoService.listarTodos());
    }

    @Operation(summary = "Obtener una lista de todos los productos ordenados")
    @GetMapping("/todos/ordenados")
    public ResponseEntity<?> listarProductosOrdenados(){
        return ResponseEntity.ok(productoService.listarTodosOrdenados());
    }

    @Operation(summary = "Listar los productos según su categoría")
    @GetMapping("/porCategoria/{id}")
    public  ResponseEntity<?> listarProductosPorIdCategoria(@PathVariable Long id) throws ResourceNotFoundException {

        return ResponseEntity.ok(productoService.buscarProductosPorCategoria(id));
    }

    @Operation(summary = "Listar los productos según su ciudad")
    @GetMapping("/porCiudad/{id}")
    public  ResponseEntity<?> listarProductosPorIdCiudad(@PathVariable Long id) throws ResourceNotFoundException {

        return ResponseEntity.ok(productoService.buscarProductosPorCiudad(id));
    }

    @Operation(summary = "Listar los productos según su disponibilidad")
    @GetMapping("/disponibles")
    public  ResponseEntity<?> listarProductosPorDisponibilidad(@RequestBody DisponibilidadDTO disponibilidadDTO) throws ResourceNotFoundException {
        List<ProductoDTO> productosDTO = productoService.buscarProductosPorDisponibilidad(disponibilidadDTO);

        return ResponseEntity.ok(productosDTO);
    }

    @Operation(summary = "Modificar un producto")
    @PutMapping("/editar")
    public ResponseEntity<?> editarProducto(@RequestBody ProductoDTO productoDTO) throws ResourceNotFoundException, BadRequestException {
        productoService.editar(productoDTO);
        return ResponseEntity.ok().body("UPDATED");
    }
}
