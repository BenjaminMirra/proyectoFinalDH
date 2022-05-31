package com.example.ProyectoIntegradorGrupo2.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@ToString


@Entity
@Table(name = "caracteristicas")
public class Caracteristicas {

    @Id
    @NotNull
    @SequenceGenerator(name = "caracteristicas_sequence", sequenceName = "caracteristicas_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "caracteristicas_sequence")
    private Long id;
    @NotNull
    private String titulo;

    private String nombre_icono;


    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "producto_id", nullable = false)
    @JsonIgnore
    private Producto producto;

    public Caracteristicas() {
    }

    public Caracteristicas(Long id, String titulo, String nombre_icono, Producto producto) {
        this.id = id;
        this.titulo = titulo;
        this.nombre_icono = nombre_icono;
        this.producto = producto;
    }

    public Caracteristicas(String titulo, String nombre_icono, Producto producto) {
        this.titulo = titulo;
        this.nombre_icono = nombre_icono;
        this.producto = producto;
    }
}
