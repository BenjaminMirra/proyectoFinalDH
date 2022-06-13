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
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UsuarioService implements IUsuarioService, UserDetailsService {

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Autowired
    private IRoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    ObjectMapper mapper;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Usuario> usuario = usuarioRepository.findUserByEmail(email);
        if (usuario.isEmpty()){
            throw new UsernameNotFoundException("No se ha encontrado al usuario con ése email");
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(usuario.get().getRole().getNombre()));
        return new org.springframework.security.core.userdetails.User(usuario.get().getEmail(),usuario.get().getPassword(),authorities);
    }

    @Override
    public UsuarioDTO agregarUsuario(UsuarioDTO usuarioDTO) throws BadRequestException {

        if (usuarioDTO.getNombre_rol() == null){
            throw new BadRequestException("No se puede guardar un usuario sin asignarle un rol");
        }
        Optional<Role> roleDesdeDB = roleRepository.findRoleByName(usuarioDTO.getNombre_rol());

        Usuario usuario = mapper.convertValue(usuarioDTO, Usuario.class);
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        usuario.setRole(roleDesdeDB.get());

        Usuario usuarioGuardado = usuarioRepository.save(usuario);

        Optional<Usuario> usuarioDesdeDB = usuarioRepository.findById(usuarioGuardado.getId());
        roleDesdeDB.get().getUsuarioList().add(usuarioDesdeDB.get());

        UsuarioDTO usuarioDTOGuardado = mapper.convertValue(usuarioDesdeDB, UsuarioDTO.class);

        /*RoleDTO roleUsuario = usuarioDTO.getRoleDTO();
        Role roleGuardado = roleRepository.save(mapper.convertValue(roleUsuario, Role.class));
        Optional<Role> roleDesdeDB = roleRepository.findById(roleGuardado.getId());

        Usuario usuario = mapper.convertValue(usuarioDTO, Usuario.class);
        usuario.setRole(roleDesdeDB.get());

        Usuario usuarioGuardado = usuarioRepository.save(usuario);

        Optional<Usuario> usuarioDesdeDB = usuarioRepository.findById(usuarioGuardado.getId());
        roleDesdeDB.get().setUsuario(usuarioDesdeDB.get());

        UsuarioDTO usuarioDTOGuardado = mapper.convertValue(usuarioDesdeDB, UsuarioDTO.class);*/



        return usuarioDTOGuardado;
    }

    @Override
    public UsuarioGETByIdDTO obtenerUsuarioPorId(Long id) throws ResourceNotFoundException {
        return null;
    }

    @Override
    public Usuario getUsuario(Long id) throws ResourceNotFoundException{
        return usuarioRepository.findById(id).get();
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
