package com.example.ProyectoIntegradorGrupo2.service;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.Puntuacion;
import com.example.ProyectoIntegradorGrupo2.model.dto.ProductoDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.PuntuacionDTO;

import java.util.List;

public interface IPuntuacionService {
    PuntuacionDTO agregarPuntuacion(PuntuacionDTO puntuacionDTO) throws BadRequestException;
    PuntuacionDTO obtenerPuntuacionPorId(Long id) throws ResourceNotFoundException;
    List<PuntuacionDTO> listarTodas();
    PuntuacionDTO editar(PuntuacionDTO puntuacionDTO)throws ResourceNotFoundException,BadRequestException;
    void eliminar(Long id)throws ResourceNotFoundException;

}
