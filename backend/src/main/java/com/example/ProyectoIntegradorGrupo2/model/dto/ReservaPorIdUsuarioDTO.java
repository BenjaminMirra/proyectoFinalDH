package com.example.ProyectoIntegradorGrupo2.model.dto;

import lombok.*;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalTime;


@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ReservaPorIdUsuarioDTO {

    private Long id;

    private LocalDate fechaInicioReserva;

    private LocalDate fechaFinReserva;

    private Long producto_id;
}
