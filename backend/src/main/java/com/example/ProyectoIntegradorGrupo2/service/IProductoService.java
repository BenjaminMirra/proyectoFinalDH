package com.example.ProyectoIntegradorGrupo2.service;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.dto.productoDTO.CiudadYFechaReservaDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.productoDTO.DisponibilidadDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.productoDTO.ProductoDTO;

import java.util.List;

public interface IProductoService {
    ProductoDTO agregarProducto(ProductoDTO productoDTO) throws BadRequestException;
    ProductoDTO obtenerProductoPorId(Long id) throws ResourceNotFoundException;
    List<ProductoDTO> listarTodos();
    List<ProductoDTO> listarTodosOrdenados();
    ProductoDTO editar(ProductoDTO productoDTO)throws ResourceNotFoundException,BadRequestException;
    void eliminar(Long id)throws ResourceNotFoundException;
    List<ProductoDTO> buscarProductosPorCategoria(Long id) throws ResourceNotFoundException;
    List<ProductoDTO> buscarProductosPorCiudad(Long id) throws ResourceNotFoundException;
    List<ProductoDTO> buscarProductosPorDisponibilidad(DisponibilidadDTO disponibilidadDTO) throws ResourceNotFoundException;
    List<ProductoDTO> buscarProductosPorCiudadYRangoFecha(CiudadYFechaReservaDTO ciudadYFechaReservaDTO)throws ResourceNotFoundException;
    List<ProductoDTO> listarProductosFavoritosByUsuarioId(Long id) throws ResourceNotFoundException;

}
