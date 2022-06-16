package com.example.ProyectoIntegradorGrupo2.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.ProyectoIntegradorGrupo2.emailsender.IEmailSenderService;
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

    @Autowired
    private IEmailSenderService emailSenderService;

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

      /*  emailSenderService.sendEmail(usuarioDTO.getEmail(), "Registro realizado","Bienvenido/a "+usuarioDTO.getNombre()+"! Su registro ha sido realizado. Muchas gracias por ser parte de Digital Booking.");*/
        emailSenderService.sendEmail(usuarioDTO.getEmail(), "Registro realizado",buildEmail(usuarioDTO.getNombre()));
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


    private String buildEmail(String name) {
        return "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                "    <title>Document</title>\n" +
                "</head>\n" +
                "<body>" +
                "<div style=\"font-family:Helvetica,Arial,sans-serif;font-size:16px;margin:0;color:#0b0c0c\">\n" +
                "\n" +
                "<span style=\"display:none;font-size:1px;color:#fff;max-height:0\"></span>\n" +
                "\n" +
                "  <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;min-width:100%;width:100%!important\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"100%\" height=\"53\" bgcolor=\"#0b0c0c\">\n" +
                "        \n" +
                "        <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;max-width:580px\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n" +
                "          <tbody><tr>\n" +
                "            <td width=\"70\" bgcolor=\"#0b0c0c\" valign=\"middle\">\n" +
                "                <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td style=\"padding-left:10px\">\n" +
                "                  \n" +
                "                    </td>\n" +
                "                    <td style=\"font-size:28px;line-height:1.315789474;Margin-top:4px;padding-left:10px\">\n" +
                "                      <span style=\"font-family:Helvetica,Arial,sans-serif;font-weight:700;color:#ffffff;text-decoration:none;vertical-align:top;display:inline-block\">Registro realizado</span>\n" +
                "                    </td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "              </a>\n" +
                "            </td>\n" +
                "          </tr>\n" +
                "        </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"10\" height=\"10\" valign=\"middle\"></td>\n" +
                "      <td>\n" +
                "        \n" +
                "                <table role=\"presentation\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td bgcolor=\"#1D70B8\" width=\"100%\" height=\"10\"></td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\" height=\"10\"></td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "\n" +
                "\n" +
                "\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "      <td style=\"font-family:Helvetica,Arial,sans-serif;font-size:19px;line-height:1.315789474;max-width:560px\">\n" +
                "        \n" +
                "            <p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\">Bienvenido/a " + name + ",</p><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\">! Su registro ha sido realizado. Muchas gracias por ser parte de Digital Booking. </p><blockquote style=\"Margin:0 0 20px 0;border-left:10px solid #b1b4b6;padding:15px 0 0.1px 15px;font-size:19px;line-height:25px\"><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\"> </p>" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "  </tbody></table><div class=\"yj6qo\"></div><div class=\"adL\">\n" +
                "\n" +
                "</div></div>"+
                "</body>\n" +
                "</html>";
    }
}
