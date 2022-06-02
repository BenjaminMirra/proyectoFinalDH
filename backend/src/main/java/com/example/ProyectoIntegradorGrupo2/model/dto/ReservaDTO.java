package com.example.ProyectoIntegradorGrupo2.model.dto;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Getter
@Setter
@ToString

public class ReservaDTO {

    private Long id;
    @NotNull
    private Date fechaInicioReserva;
    @NotNull
    private Date fechaFinReserva;

    //private ProductoDTO productoDTO;

    public ReservaDTO() {
    }
}
