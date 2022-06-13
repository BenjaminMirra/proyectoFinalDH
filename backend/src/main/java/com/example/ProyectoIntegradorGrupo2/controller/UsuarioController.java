package com.example.ProyectoIntegradorGrupo2.controller;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.model.dto.ProductoDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.UsuarioDTO;
import com.example.ProyectoIntegradorGrupo2.service.IUsuarioService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private IUsuarioService usuarioService;

    @Operation(summary = "Agregar un usuario")
    @PostMapping("/agregar")
    public ResponseEntity<?> agregarUsuario(@RequestBody UsuarioDTO usuarioDTO) throws BadRequestException {
        UsuarioDTO usuarioAgregado = usuarioService.agregarUsuario(usuarioDTO);
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/usuarios/agregar").toUriString());
        return ResponseEntity.created(uri).body(usuarioAgregado.getId());
        /*return ResponseEntity.ok(usuarioAgregado.getId());*/
    }
}
