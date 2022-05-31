package com.example.ProyectoIntegradorGrupo2.model.dto;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

public class PoliticaDTO {

    private Long id;

    private String norma_descripcion;//hacer tabla politicas

    private String seguridad_descripcion;

    private String cancelacion_descripcion;

    public PoliticaDTO() {
    }
}
