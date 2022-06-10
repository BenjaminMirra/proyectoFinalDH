package com.example.ProyectoIntegradorGrupo2.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@Getter
@Setter

@NoArgsConstructor
public class UsuarioGETByIdDTO {
    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private String password;
    private RoleDTO roleDTO;


    private List<ReaccionDTO> reaccionDTOList = new ArrayList<>();


    private List<PuntuacionDTO> puntuacionDTOList = new ArrayList<>();


    private List<ReservaDTO> reservaDTOList = new ArrayList<>();
}
