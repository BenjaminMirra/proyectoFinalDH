package com.example.ProyectoIntegradorGrupo2.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Getter
@Setter

@NoArgsConstructor
public class PuntuacionDTO {


    private Long id;

    private int puntuacion;

}
