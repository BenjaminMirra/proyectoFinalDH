package com.example.ProyectoIntegradorGrupo2.service;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.dto.ProductoDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.ReservaDTO;

import java.util.List;

public interface IReservaService {
    ReservaDTO agregarReserva(ReservaDTO reservaDTO) throws BadRequestException;
    ReservaDTO obtenerReservaPorId(Long id) throws ResourceNotFoundException;
    List<ReservaDTO> listarTodas();
    ReservaDTO editar(ReservaDTO reservaDTO)throws ResourceNotFoundException,BadRequestException;
    void eliminar(Long id)throws ResourceNotFoundException;
}
