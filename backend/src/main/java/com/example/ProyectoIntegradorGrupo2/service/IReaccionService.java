package com.example.ProyectoIntegradorGrupo2.service;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.Reaccion;
import com.example.ProyectoIntegradorGrupo2.model.dto.ReaccionDTO;

import java.util.List;
import java.util.Optional;

public interface IReaccionService {

    ReaccionDTO agregarReaccion(ReaccionDTO reaccionDTO) throws BadRequestException;
    ReaccionDTO obtenerReaccionPorId(Long id) throws ResourceNotFoundException;
    List<ReaccionDTO> listarTodas();
    ReaccionDTO editar(ReaccionDTO reaccionDTO)throws ResourceNotFoundException,BadRequestException;
    void eliminar(Long id)throws ResourceNotFoundException;
    List<ReaccionDTO> findReaccionesByUsuarioId(Long id) throws ResourceNotFoundException;

}
