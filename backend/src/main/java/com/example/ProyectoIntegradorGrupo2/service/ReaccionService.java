package com.example.ProyectoIntegradorGrupo2.service;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.Producto;
import com.example.ProyectoIntegradorGrupo2.model.Reaccion;
import com.example.ProyectoIntegradorGrupo2.model.Usuario;
import com.example.ProyectoIntegradorGrupo2.model.dto.ReaccionDTO;
import com.example.ProyectoIntegradorGrupo2.repository.IProductoRepository;
import com.example.ProyectoIntegradorGrupo2.repository.IReaccionRepository;
import com.example.ProyectoIntegradorGrupo2.repository.IUsuarioRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ReaccionService implements IReaccionService {

    @Autowired
    private IReaccionRepository reaccionRepository;

    @Autowired
    private IProductoRepository productoRepository;

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public ReaccionDTO agregarReaccion(ReaccionDTO reaccionDTO) throws BadRequestException {

        Reaccion reaccion = mapper.convertValue(reaccionDTO, Reaccion.class);

        Optional<Producto> productoDesdeDB = productoRepository.findById(reaccionDTO.getProducto_id());
        reaccion.setProducto(productoDesdeDB.get());

        Optional<Usuario> usuarioDesdeDB = usuarioRepository.findById(reaccionDTO.getUsuario_id());
        reaccion.setUsuario(usuarioDesdeDB.get());

        Reaccion reaccionGuardada = reaccionRepository.save(reaccion);

        reaccionDTO.setId(reaccionGuardada.getId());

        return reaccionDTO;
    }

    @Override
    public ReaccionDTO obtenerReaccionPorId(Long id) throws ResourceNotFoundException {

        Optional<Reaccion> reaccionPorId = reaccionRepository.findById(id);
        ReaccionDTO reaccionDTOPorId = null;
        if (reaccionPorId.isEmpty()) {
            throw new ResourceNotFoundException("No se pudo encontrar la reacción con el ID indicado");
        }
        if (reaccionPorId.isPresent()) {
            reaccionDTOPorId = mapper.convertValue(reaccionPorId, ReaccionDTO.class);
            reaccionDTOPorId.setProducto_id(reaccionPorId.get().getProducto().getId());
            reaccionDTOPorId.setUsuario_id(reaccionPorId.get().getUsuario().getId());
        }
        return reaccionDTOPorId;
    }

    @Override
    public List<ReaccionDTO> listarTodas() {
        List<Reaccion> reaccionList = reaccionRepository.findAll();
        List<ReaccionDTO> reaccionDTOList = new ArrayList<>();
        for (Reaccion r : reaccionList
        ) {
            Usuario usuario = r.getUsuario();
            Producto prod = r.getProducto();
            ReaccionDTO reaccionDTO = mapper.convertValue(r, ReaccionDTO.class);
            reaccionDTO.setUsuario_id(usuario.getId());
            reaccionDTO.setProducto_id(prod.getId());
            reaccionDTOList.add(reaccionDTO);
        }
        return reaccionDTOList;
    }

    @Override
    public ReaccionDTO editar(ReaccionDTO reaccionDTO) throws ResourceNotFoundException, BadRequestException {
        Optional<Reaccion> reaccion = reaccionRepository.findById(reaccionDTO.getId());
        if (reaccionDTO.getUsuario_id()==null || reaccionDTO.getProducto_id()==null)
            throw new BadRequestException("La reacción debe tener asignado un producto y un usuario");
        if (reaccion.isEmpty()) {
            throw new ResourceNotFoundException("No se pudo encontrar la reacción para editar");
        }
        return agregarReaccion(reaccionDTO);
    }

    @Override
    public void eliminar(Long id) throws ResourceNotFoundException {
        Optional<Reaccion> reaccion = reaccionRepository.findById(id);
        if (reaccion.isEmpty()){
            throw new ResourceNotFoundException("No se pudo encontrar la reacción a eliminar");
        }
        reaccionRepository.deleteById(id);
    }
}