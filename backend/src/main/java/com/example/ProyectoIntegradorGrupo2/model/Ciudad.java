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
@Table(name = "ciudades")
public class Ciudad {

    @Id
    @NotNull
    @SequenceGenerator(name = "ciudad_sequence", sequenceName = "ciudad_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ciudad_sequence")
    private Long id;
    @NotNull
    private String nombre;

    private String provincia;
    @NotNull
    private String pais;

    @OneToMany(mappedBy = "ciudad", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    private Set<Producto> productoSet = new HashSet<>();

    public Ciudad() {
    }

    public Ciudad(Long id, String nombre, String provincia, String pais) {
        this.id = id;
        this.nombre = nombre;
        this.provincia = provincia;
        this.pais = pais;
    }

    public Ciudad(String nombre, String provincia, String pais) {
        this.nombre = nombre;
        this.provincia = provincia;
        this.pais = pais;
    }

    public Ciudad(Long id, String nombre, String provincia, String pais, Set<Producto> productoSet) {
        this.id = id;
        this.nombre = nombre;
        this.provincia = provincia;
        this.pais = pais;
        this.productoSet = productoSet;
    }
}
