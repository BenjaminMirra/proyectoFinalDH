package com.example.ProyectoIntegradorGrupo2.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.Usuario;
import com.example.ProyectoIntegradorGrupo2.model.dto.usuarioDTO.TokenYIdDeRegistroDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.usuarioDTO.UsuarioDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.usuarioDTO.UsuarioEditarDTO;
import com.example.ProyectoIntegradorGrupo2.service.IUsuarioService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.*;
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

    @Operation(summary = "Obtener un usuario por su id")
    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerUsuarioPorId(@PathVariable Long id) throws ResourceNotFoundException{


        return ResponseEntity.ok(usuarioService.obtenerUsuarioPorId(id));
    }

    @Operation(summary = "Obtener una lista de todos los usuarios")
    @GetMapping("/todos")
    public ResponseEntity<?> listarProductos(){
        return ResponseEntity.ok(usuarioService.listarTodos());
    }

    @Operation(summary = "Eliminar un usuario por su id")
    @DeleteMapping ("eliminar/{id}")
    public ResponseEntity<?> eliminarUsuarioPorId(@PathVariable Long id) throws ResourceNotFoundException {

        usuarioService.eliminar(id);
        return ResponseEntity.ok().body("DELETED");
    }

    @Operation(summary = "Modificar un usuario")
    @PutMapping("/editar")
    public ResponseEntity<?> editarUsuario(@RequestBody UsuarioEditarDTO usuarioEditarDTO) throws ResourceNotFoundException, BadRequestException {
        usuarioService.editar(usuarioEditarDTO);
        return ResponseEntity.ok().body("UPDATED");
    }

    @Operation(summary = "Obtener un usuario por su email")
    @GetMapping("/porEmail")
    public ResponseEntity<?> obtenerProductoPorId(@RequestBody String email) throws ResourceNotFoundException{


        return ResponseEntity.ok(usuarioService.obtenerUsuarioPorEmail(email));
    }
}
