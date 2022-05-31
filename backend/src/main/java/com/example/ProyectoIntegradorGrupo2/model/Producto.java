package com.example.ProyectoIntegradorGrupo2.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.*;

@Getter
@Setter
@ToString


@Entity
@Table(name = "productos")
public class Producto {

    @Id
    @NotNull
    @SequenceGenerator(name = "producto_sequence", sequenceName = "producto_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "producto_sequence")
    private Long id;
    @NotNull
    private String titulo;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "politica_id", nullable = false)
    @JsonIgnore
    private Politica politica;

    @OneToMany(mappedBy = "producto", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    private Set<Reserva> reservaSet = new HashSet<>();//hacer otra tabla



    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "categoria_id", nullable = false)
    @JsonIgnore
    private Categoria categoria;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "ciudad_id", nullable = false)
    @JsonIgnore
    private Ciudad ciudad;

    @OneToMany(mappedBy = "producto", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    private Set<Imagen> imagenesList = new HashSet<>();

    @OneToMany(mappedBy = "producto", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    private Set<Caracteristicas> caracteristicasList = new HashSet<>();

    public Producto() {
    }

    public Producto(Long id, String titulo, Politica politica, Set<Reserva> reservaSet, Categoria categoria, Ciudad ciudad, Set<Imagen> imagenesList, Set<Caracteristicas> caracteristicasList) {
        this.id = id;
        this.titulo = titulo;
        this.politica = politica;
        this.reservaSet = reservaSet;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.imagenesList = imagenesList;
        this.caracteristicasList = caracteristicasList;
    }

    public Producto(String titulo, Politica politica, Set<Reserva> reservaSet, Categoria categoria, Ciudad ciudad, Set<Imagen> imagenesList, Set<Caracteristicas> caracteristicasList) {
        this.titulo = titulo;
        this.politica = politica;
        this.reservaSet = reservaSet;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.imagenesList = imagenesList;
        this.caracteristicasList = caracteristicasList;
    }
}
