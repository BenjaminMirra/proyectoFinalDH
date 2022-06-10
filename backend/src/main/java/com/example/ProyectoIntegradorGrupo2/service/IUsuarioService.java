package com.example.ProyectoIntegradorGrupo2.service;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.dto.ProductoDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.UsuarioDTO;

import java.util.List;

public interface IUsuarioService {
    UsuarioDTO agregarUsuario(UsuarioDTO usuarioDTO) throws BadRequestException;
    UsuarioDTO obtenerUsuarioPorId(Long id) throws ResourceNotFoundException;
    List<UsuarioDTO> listarTodos();
    UsuarioDTO editar(UsuarioDTO usuarioDTO)throws ResourceNotFoundException,BadRequestException;
    void eliminar(Long id)throws ResourceNotFoundException;
}
