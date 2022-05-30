package com.example.ProyectoIntegradorGrupo2.model;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@ToString


@Entity
@Table(name = "categorias")
public class Categoria {
    @Id
    @NotNull
    @SequenceGenerator(name = "categoria_sequence", sequenceName = "categoria_sequence", allocationSize = 1, initialValue=5)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "categoria_sequence")
    private Long id;
    @NotNull
    private String titulo;
    @NotNull
    private String descripcion;
    @NotNull
    private String url_imagen;

    public Categoria() {
    }

    public Categoria(Long id, String titulo, String descripcion, String URL_imagen) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url_imagen = URL_imagen;
    }

    public Categoria(String titulo, String descripcion, String url_imagen) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url_imagen = url_imagen;
    }
}
