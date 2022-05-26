package com.example.ProyectoIntegradorGrupo2.service;

import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.dto.CategoriaDTO;

import java.util.Set;

public interface ICategoriaService {

    CategoriaDTO agregarCategoria(CategoriaDTO categoriaDTO);
    CategoriaDTO obtenerCategoriaPorId(Long id) throws ResourceNotFoundException;
    Set<CategoriaDTO> listarTodas();
    CategoriaDTO editar(CategoriaDTO categoriaDTO)throws ResourceNotFoundException;
    void eliminar(Long id)throws ResourceNotFoundException;
}
