package com.example.ProyectoIntegradorGrupo2.model.dto;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

public class ImagenDTO {

    private Long id;
    @NotNull
    private String url_img_producto;

    private String titulo_img_producto;

    private ProductoDTO productoDTO;

    public ImagenDTO() {
    }
}
