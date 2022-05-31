package com.example.ProyectoIntegradorGrupo2.model.dto;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

public class CaracteristicasDTO {


    private Long id;

    private String titulo;

    private String nombre_icono;

    private ProductoDTO productoDTO;

    public CaracteristicasDTO() {
    }
}
