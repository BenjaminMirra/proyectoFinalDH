package com.example.ProyectoIntegradorGrupo2.model.dto;

import com.example.ProyectoIntegradorGrupo2.model.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@ToString

public class ProductoDTO {


    private Long id;

    private String titulo;

    private String titulo_descripcion;

    private String descripcion;


    private int rating;


    private List<PoliticaDTO> politicaListDTO = new ArrayList<>(); //precargar



    private Long categoria_id;
    //private Long idCategoria;
    private Long ciudad_id;//precargar

    private List<ReservaDTO> reservaDTOList = new ArrayList<>();

    private List<ImagenDTO> imagenDTOList = new ArrayList<>();

    private List<CaracteristicasDTO> caracteristicasDTOList = new ArrayList<>();

    public ProductoDTO() {
    }
}
