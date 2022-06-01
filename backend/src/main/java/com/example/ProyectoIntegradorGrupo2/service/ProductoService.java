package com.example.ProyectoIntegradorGrupo2.service;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.dto.ProductoDTO;
import com.example.ProyectoIntegradorGrupo2.repository.ICategoriaRepository;
import com.example.ProyectoIntegradorGrupo2.repository.IProductoRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ProductoService implements IProductoService {

    @Autowired
    private IProductoRepository productoRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public ProductoDTO agregarProducto(ProductoDTO productoDTO) throws BadRequestException {


        return null;
    }

    @Override
    public ProductoDTO obtenerProductoPorId(Long id) throws ResourceNotFoundException {
        return null;
    }

    @Override
    public List<ProductoDTO> listarTodos() {
        return null;
    }

    @Override
    public ProductoDTO editar(ProductoDTO productoDTO) throws ResourceNotFoundException {
        return null;
    }

    @Override
    public void eliminar(Long id) throws ResourceNotFoundException {

    }

    @Override
    public List<ProductoDTO> buscarProductoPorCategoria(String titulo) throws ResourceNotFoundException {
        return null;
    }
}
