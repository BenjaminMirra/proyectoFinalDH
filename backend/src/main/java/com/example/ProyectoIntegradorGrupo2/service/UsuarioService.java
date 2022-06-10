package com.example.ProyectoIntegradorGrupo2.service;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.Role;
import com.example.ProyectoIntegradorGrupo2.model.Usuario;
import com.example.ProyectoIntegradorGrupo2.model.dto.RoleDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.UsuarioDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.UsuarioGETByIdDTO;
import com.example.ProyectoIntegradorGrupo2.repository.IRoleRepository;
import com.example.ProyectoIntegradorGrupo2.repository.IUsuarioRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService implements IUsuarioService{

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Autowired
    private IRoleRepository roleRepository;

    @Autowired
    ObjectMapper mapper;


    @Override
    public UsuarioDTO agregarUsuario(UsuarioDTO usuarioDTO) throws BadRequestException {

        if (usuarioDTO.getRoleDTO() == null){
            throw new BadRequestException("No se puede guardar un usuario sin asignarle un rol");
        }

        RoleDTO roleUsuario = usuarioDTO.getRoleDTO();
        Role roleGuardado = roleRepository.save(mapper.convertValue(roleUsuario, Role.class));
        Optional<Role> roleDesdeDB = roleRepository.findById(roleGuardado.getId());

        Usuario usuario = mapper.convertValue(usuarioDTO, Usuario.class);
        usuario.setRole(roleDesdeDB.get());

        Usuario usuarioGuardado = usuarioRepository.save(usuario);

        Optional<Usuario> usuarioDesdeDB = usuarioRepository.findById(usuarioGuardado.getId());
        roleDesdeDB.get().setUsuario(usuarioDesdeDB.get());

        UsuarioDTO usuarioDTOGuardado = mapper.convertValue(usuarioDesdeDB, UsuarioDTO.class);



        return usuarioDTOGuardado;
    }

    @Override
    public UsuarioGETByIdDTO obtenerUsuarioPorId(Long id) throws ResourceNotFoundException {
        return null;
    }

    @Override
    public List<UsuarioDTO> listarTodos() {
        return null;
    }

    @Override
    public UsuarioDTO editar(UsuarioDTO usuarioDTO) throws ResourceNotFoundException, BadRequestException {
        return null;
    }

    @Override
    public void eliminar(Long id) throws ResourceNotFoundException {

    }
}
