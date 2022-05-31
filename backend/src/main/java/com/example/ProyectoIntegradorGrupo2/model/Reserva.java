package com.example.ProyectoIntegradorGrupo2.model;

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


@Entity
@Table(name = "reservas")
public class Reserva {

    @Id
    @NotNull
    @SequenceGenerator(name = "reserva_sequence", sequenceName = "reserva_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reserva_sequence")
    private Long id;
    @NotNull
    private Date fechaInicioReserva;
    @NotNull
    private Date fechaFinReserva;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "producto_id", nullable = false)
    @JsonIgnore
    private Producto producto;

    public Reserva() {
    }

    public Reserva(Long id, Date fechaInicioReserva, Date fechaFinReserva, Producto producto) {
        this.id = id;
        this.fechaInicioReserva = fechaInicioReserva;
        this.fechaFinReserva = fechaFinReserva;
        this.producto = producto;
    }

    public Reserva(Date fechaInicioReserva, Date fechaFinReserva, Producto producto) {
        this.fechaInicioReserva = fechaInicioReserva;
        this.fechaFinReserva = fechaFinReserva;
        this.producto = producto;
    }
}
