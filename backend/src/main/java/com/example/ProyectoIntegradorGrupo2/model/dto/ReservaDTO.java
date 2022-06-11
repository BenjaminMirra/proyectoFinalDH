package com.example.ProyectoIntegradorGrupo2.model.dto;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;


@Getter
@Setter
@ToString

public class ReservaDTO {

    private Long id;
    @NotNull
    private LocalDate fechaInicioReserva;
    @NotNull
    private LocalDate fechaFinReserva;

    //private LocalDate fechaEnLaQueSeHaceLaReserva;

    private String mensajeUsuario;

    private boolean vacunadoCovid;

    private Long usuario_id;

    private Long producto_id;

    //private ProductoDTO productoDTO;

    public ReservaDTO() {
    }
}
