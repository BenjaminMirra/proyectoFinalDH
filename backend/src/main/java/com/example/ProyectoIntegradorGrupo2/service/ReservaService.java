package com.example.ProyectoIntegradorGrupo2.service;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.dto.ReservaDTO;
import com.example.ProyectoIntegradorGrupo2.repository.IReservaRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservaService implements IReservaService{

    @Autowired
    private IReservaRepository reservaRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public ReservaDTO agregarReserva(ReservaDTO reservaDTO) throws BadRequestException {
        return null;
    }

    @Override
    public ReservaDTO obtenerReservaPorId(Long id) throws ResourceNotFoundException {
        return null;
    }

    @Override
    public List<ReservaDTO> listarTodas() {
        return null;
    }

    @Override
    public ReservaDTO editar(ReservaDTO reservaDTO) throws ResourceNotFoundException, BadRequestException {
        return null;
    }

    @Override
    public void eliminar(Long id) throws ResourceNotFoundException {

    }
}
