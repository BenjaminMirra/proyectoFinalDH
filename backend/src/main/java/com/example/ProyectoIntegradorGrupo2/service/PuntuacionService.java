package com.example.ProyectoIntegradorGrupo2.service;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.*;
import com.example.ProyectoIntegradorGrupo2.model.dto.PuntuacionDTO;
import com.example.ProyectoIntegradorGrupo2.repository.IProductoRepository;
import com.example.ProyectoIntegradorGrupo2.repository.IPuntuacionRepository;
import com.example.ProyectoIntegradorGrupo2.repository.IUsuarioRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
@Transactional
public class PuntuacionService implements IPuntuacionService{

    @Autowired
    private IPuntuacionRepository puntuacionRepository;

    @Autowired
    private IProductoRepository productoRepository;

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public PuntuacionDTO agregarPuntuacion(PuntuacionDTO puntuacionDTO) throws BadRequestException {

        Puntuacion puntuacion = mapper.convertValue(puntuacionDTO, Puntuacion.class);

        Optional<Producto> productoDesdeDB = productoRepository.findById(puntuacionDTO.getProducto_id());
        puntuacion.setProducto(productoDesdeDB.get());

        Optional<Usuario> usuarioDesdeDB = usuarioRepository.findById(puntuacionDTO.getUsuario_id());
        puntuacion.setUsuario(usuarioDesdeDB.get());

        Puntuacion puntuacionGuardada = puntuacionRepository.save(puntuacion);

        puntuacionDTO.setId(puntuacionGuardada.getId());

        return puntuacionDTO;
    }

    @Override
    public PuntuacionDTO obtenerPuntuacionPorId(Long id) throws ResourceNotFoundException {

        Optional<Puntuacion> puntuacionPorId = puntuacionRepository.findById(id);
        PuntuacionDTO puntuacionDTOPorId = null;
        if (puntuacionPorId.isEmpty()) {
            throw new ResourceNotFoundException("No se pudo encontrar la puntuacion con el ID indicado");
        }
        if (puntuacionPorId.isPresent()) {
            puntuacionDTOPorId = mapper.convertValue(puntuacionPorId, PuntuacionDTO.class);
            puntuacionDTOPorId.setProducto_id(puntuacionPorId.get().getProducto().getId());
            puntuacionDTOPorId.setUsuario_id(puntuacionPorId.get().getUsuario().getId());
        }
        return puntuacionDTOPorId;
    }

    @Override
    public List<PuntuacionDTO> listarTodas() {

        List<Puntuacion> puntuacionList = puntuacionRepository.findAll();
        List<PuntuacionDTO> puntuacionDTOList = new ArrayList<>();
        for (Puntuacion p : puntuacionList
        ) {
            Usuario usuario = p.getUsuario();
            Producto prod = p.getProducto();
            PuntuacionDTO puntuacionDTO = mapper.convertValue(p, PuntuacionDTO.class);
            puntuacionDTO.setUsuario_id(usuario.getId());
            puntuacionDTO.setProducto_id(prod.getId());
           puntuacionDTOList.add(puntuacionDTO);
        }
        return puntuacionDTOList;

    }

    @Override
    public PuntuacionDTO editar(PuntuacionDTO puntuacionDTO) throws ResourceNotFoundException, BadRequestException {
        Optional<Puntuacion> puntuacion = puntuacionRepository.findById(puntuacionDTO.getId());
        if (puntuacionDTO.getUsuario_id()==null || puntuacionDTO.getProducto_id()==null)
            throw new BadRequestException("La puntuación debe tener asignado un producto y un usuario");
        if (puntuacion.isEmpty()) {
            throw new ResourceNotFoundException("No se pudo encontrar la puntuacion para editar");
        }
        return agregarPuntuacion(puntuacionDTO);
    }

    @Override
    public void eliminar(Long id) throws ResourceNotFoundException {
        Optional<Puntuacion> puntuacion = puntuacionRepository.findById(id);
        if (puntuacion.isEmpty()){
            throw new ResourceNotFoundException("No se pudo encontrar la puntuación a eliminar");
        }
    puntuacionRepository.deleteById(id);

    }


}
