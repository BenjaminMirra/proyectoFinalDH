package com.example.ProyectoIntegradorGrupo2.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.*;

@Getter
@Setter
@ToString
/*@AllArgsConstructor
@NoArgsConstructor*/


@Entity
@Table(name = "productos")
public class Producto {

    @Id
    @NotNull
    @SequenceGenerator(name = "producto_sequence", sequenceName = "producto_sequence", allocationSize = 1, initialValue=33) // //initialValue=33
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "producto_sequence")
    private Long id;
    @NotNull
    @NotBlank //trimea la propiedad y chequea si el length es mayor a uno
    private String titulo;

    private String titulo_descripcion;
    @Column(length = 5000)
    private String descripcion;

    private String direccion;

    private double latitud;

    private double longitud;

    //@Size(min=1,max = 10)
    //@Min(value= 1) @Max(value=10)

    private int puntaje;

    @OneToMany(mappedBy = "producto", fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    private List<Politica> politicaList = new ArrayList<>();

    @OneToMany(mappedBy = "producto", fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    private List<Reserva> reservaSet = new ArrayList<>();//hacer otra tabla



    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "categoria_id", nullable = false)
    @JsonIgnore
    private Categoria categoria;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "ciudad_id", nullable = false)
    @JsonIgnore
    private Ciudad ciudad;

    @OneToMany(mappedBy = "producto", fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    private List<Imagen> imagenesList = new ArrayList<>();

    @OneToMany(mappedBy = "producto", fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    private List<Caracteristicas> caracteristicasList = new ArrayList<>();

    public Producto() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getTitulo_descripcion() {
        return titulo_descripcion;
    }

    public void setTitulo_descripcion(String titulo_descripcion) {
        this.titulo_descripcion = titulo_descripcion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public double getLatitud() {
        return latitud;
    }

    public void setLatitud(double latitud) {
        this.latitud = latitud;
    }

    public double getLongitud() {
        return longitud;
    }

    public void setLongitud(double longitud) {
        this.longitud = longitud;
    }

    public int getPuntaje() {
        return puntaje;
    }

    public void setPuntaje(int puntaje) {
        this.puntaje = puntaje;
    }

    public List<Politica> getPoliticaList() {
        return politicaList;
    }

    public void setPoliticaList(List<Politica> politicaList) {
        this.politicaList = politicaList;
    }

    public List<Reserva> getReservaSet() {
        return reservaSet;
    }

    public void setReservaSet(List<Reserva> reservaSet) {
        this.reservaSet = reservaSet;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Ciudad getCiudad() {
        return ciudad;
    }

    public void setCiudad(Ciudad ciudad) {
        this.ciudad = ciudad;
    }

    public List<Imagen> getImagenesList() {
        return imagenesList;
    }

    public void setImagenesList(List<Imagen> imagenesList) {
        this.imagenesList = imagenesList;
    }

    public List<Caracteristicas> getCaracteristicasList() {
        return caracteristicasList;
    }

    public void setCaracteristicasList(List<Caracteristicas> caracteristicasList) {
        this.caracteristicasList = caracteristicasList;
    }
}
