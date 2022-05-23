package com.example.ProyectoIntegradorGrupo2.model.dto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoriaDTO {

    private Long id;
    private String titulo;
    private String descripcion;
    private String url_imagen;

    public CategoriaDTO() {
    }
}
