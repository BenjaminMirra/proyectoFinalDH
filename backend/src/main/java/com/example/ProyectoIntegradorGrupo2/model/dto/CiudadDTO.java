package com.example.ProyectoIntegradorGrupo2.model.dto;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

public class CiudadDTO {

    private Long id;
    @NotNull
    private String nombre;

    private String provincia;

    private String pais;

    public CiudadDTO() {
    }
}
