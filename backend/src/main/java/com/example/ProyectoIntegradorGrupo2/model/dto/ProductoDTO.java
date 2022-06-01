package com.example.ProyectoIntegradorGrupo2.model.dto;

import com.example.ProyectoIntegradorGrupo2.model.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@ToString

public class ProductoDTO {

    @NotNull
    private Long id;
    @NotNull
    private String titulo;

    private String descripcion;

    private PoliticaDTO politicaDTO;

    private CategoriaDTO categoriaDTO;

    private CiudadDTO ciudadDTO;

    private List<ReservaDTO> reservaDTOList;

    private List<ImagenDTO> imagenDTOList;

    private List<CaracteristicasDTO> caracteristicasDTOList;

    public ProductoDTO() {
    }
}
