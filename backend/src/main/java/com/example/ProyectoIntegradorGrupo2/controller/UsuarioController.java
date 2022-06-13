package com.example.ProyectoIntegradorGrupo2.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.Role;
import com.example.ProyectoIntegradorGrupo2.model.Usuario;
import com.example.ProyectoIntegradorGrupo2.model.dto.ProductoDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.TokenYIdDeRegistroDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.UsuarioDTO;
import com.example.ProyectoIntegradorGrupo2.service.IUsuarioService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private IUsuarioService usuarioService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Operation(summary = "Agregar un usuario")
    @PostMapping("/agregar")
    public ResponseEntity<?> agregarUsuario(@RequestBody UsuarioDTO usuarioDTO) throws BadRequestException, ResourceNotFoundException {
        UsuarioDTO usuarioAgregado = usuarioService.agregarUsuario(usuarioDTO);
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/usuarios/agregar").toUriString());
        /*String email = usuarioAgregado.getEmail();
        String password = usuarioAgregado.getPassword();
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email,password);

        Authentication authentication = authenticationManager.authenticate(authenticationToken);

        */

        Usuario usuarioEncontrado = usuarioService.getUsuario(usuarioAgregado.getId());
        List<String> usuarioRoles = new ArrayList<>();
        usuarioRoles.add(usuarioAgregado.getNombre_rol());


        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
        String token_de_acceso = JWT.create()
                .withSubject(usuarioEncontrado.getEmail()) //usuarioEncontrado.getEmail()
                .withExpiresAt(new Date(System.currentTimeMillis() + 60 * 60 * 1000))
                .withIssuer(uri.toString())
                .withClaim("roles", usuarioEncontrado.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                .sign(algorithm);
                /*.withClaim("roles", usuarioRoles.stream().map(Role::getNombre).collect(Collectors.toList()))*/

        TokenYIdDeRegistroDTO tokenYIdDeRegistroDTO = new TokenYIdDeRegistroDTO(usuarioAgregado.getId(),token_de_acceso);

        return ResponseEntity.created(uri).body(tokenYIdDeRegistroDTO);
        /*return ResponseEntity.ok(usuarioAgregado.getId());*/
    }
}
