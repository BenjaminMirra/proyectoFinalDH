package com.example.ProyectoIntegradorGrupo2.service;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.dto.CategoriaDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.ProductoDTO;

import java.util.List;

public interface IProductoService {
    ProductoDTO agregarProducto(ProductoDTO productoDTO) throws BadRequestException;
    ProductoDTO obtenerProductoPorId(Long id) throws ResourceNotFoundException;
    List<ProductoDTO> listarTodos();
    ProductoDTO editar(ProductoDTO productoDTO)throws ResourceNotFoundException;
    void eliminar(Long id)throws ResourceNotFoundException;
    List<ProductoDTO> buscarProductosPorCategoria(Long id) throws ResourceNotFoundException;

}
