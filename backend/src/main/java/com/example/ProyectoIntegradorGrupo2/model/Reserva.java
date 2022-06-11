package com.example.ProyectoIntegradorGrupo2.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@ToString

@AllArgsConstructor
@Entity
@Table(name = "reservas")
public class Reserva {

    @Id
    @NotNull
    @SequenceGenerator(name = "reserva_sequence", sequenceName = "reserva_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reserva_sequence")
    private Long id;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime fechaEnLaQueSeHaceLaReserva;

    @Column(length = 3000)
    private String mensajeUsuario;

    @Column(columnDefinition = "TINYINT")
    private boolean vacunadoCovid;
    @NotNull
    @Column(columnDefinition = "DATE")
    private LocalDate fechaInicioReserva;
    @NotNull
    @Column(columnDefinition = "DATE")
    private LocalDate fechaFinReserva;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "producto_id", nullable = false)
    @JsonIgnore
    private Producto producto;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "usuario_id", nullable = false)
    @JsonIgnore
    private Usuario usuario;

    public Reserva() {
    }


    public Reserva(LocalDateTime fechaEnLaQueSeHaceLaReserva, String mensajeUsuario, boolean vacunadoCovid, LocalDate fechaInicioReserva, LocalDate fechaFinReserva, Producto producto, Usuario usuario) {
        this.fechaEnLaQueSeHaceLaReserva = fechaEnLaQueSeHaceLaReserva;
        this.mensajeUsuario = mensajeUsuario;
        this.vacunadoCovid = vacunadoCovid;
        this.fechaInicioReserva = fechaInicioReserva;
        this.fechaFinReserva = fechaFinReserva;
        this.producto = producto;
        this.usuario = usuario;
    }
}
