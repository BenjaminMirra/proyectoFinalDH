package com.example.ProyectoIntegradorGrupo2.model.dto;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Getter
@Setter
@ToString

public class PoliticaDTO {

    private Long id;

    private String norma_descripcion;//hacer tabla politicas

    private String seguridad_descripcion;

    private String cancelacion_descripcion;

    public PoliticaDTO() {
    }
}
