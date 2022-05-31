package com.example.ProyectoIntegradorGrupo2.model;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

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

    private String descripcion;
    @NotNull
    private String url_imagen;

    @OneToMany(mappedBy = "categoria", fetch = FetchType.LAZY) //orphanRemoval = true
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    private Set<Producto> productoSet = new HashSet<>();

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

    public Categoria(Long id, String titulo, String descripcion, String url_imagen, Set<Producto> productoSet) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url_imagen = url_imagen;
        this.productoSet = productoSet;
    }
}
