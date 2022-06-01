package com.example.ProyectoIntegradorGrupo2.model.dto;

import com.example.ProyectoIntegradorGrupo2.model.Politica;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString

public class TipoDePoliticasDTO {


    private Long id;

    private String nombre_tipo_politica;


    private List<PoliticaDTO> politicaListDTO = new ArrayList<>();

    public TipoDePoliticasDTO() {
    }
}
