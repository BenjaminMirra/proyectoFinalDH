package com.example.ProyectoIntegradorGrupo2.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Getter
@Setter
@ToString


@Entity
@Table(name = "politicas")
public class Politica {

    @Id
    @NotNull
    @SequenceGenerator(name = "politica_sequence", sequenceName = "politica_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "politica_sequence")
    private Long id;

    private String norma_descripcion;

    private String seguridad_descripcion;

    private String cancelacion_descripcion;

    @OneToMany(mappedBy = "politica", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    private Set<Producto> productoSet;

    public Politica() {
    }

    public Politica(Long id, String norma_descripcion, String seguridad_descripcion, String cancelacion_descripcion, Set<Producto> productoSet) {
        this.id = id;
        this.norma_descripcion = norma_descripcion;
        this.seguridad_descripcion = seguridad_descripcion;
        this.cancelacion_descripcion = cancelacion_descripcion;
        this.productoSet = productoSet;
    }

    public Politica(String norma_descripcion, String seguridad_descripcion, String cancelacion_descripcion, Set<Producto> productoSet) {
        this.norma_descripcion = norma_descripcion;
        this.seguridad_descripcion = seguridad_descripcion;
        this.cancelacion_descripcion = cancelacion_descripcion;
        this.productoSet = productoSet;
    }
}
