package com.example.ProyectoIntegradorGrupo2.model.dto;

import com.example.ProyectoIntegradorGrupo2.model.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

public class ProductoDTO {

    @NotNull
    private Long id;
    @NotNull
    private String titulo;

    private String descripcion;

    private PoliticaDTO politicaDTO;

    private CategoriaDTO categoriaDTO;

    private CiudadDTO ciudadDTO;

    public ProductoDTO() {
    }
}
