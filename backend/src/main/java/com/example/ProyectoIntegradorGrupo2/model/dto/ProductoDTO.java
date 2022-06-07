package com.example.ProyectoIntegradorGrupo2.model.dto;

import com.example.ProyectoIntegradorGrupo2.model.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@ToString

public class ProductoDTO {


    private Long id;

    private String titulo;

    private String titulo_descripcion;

    private String descripcion;


    private int puntaje;

    private String direccion;

    private double latitud;

    private double longitud;


    private List<PoliticaDTO> politicaListDTO = new ArrayList<>(); //precargar



    private Long categoria_id;
    //private Long idCategoria;
    private Long ciudad_id;//precargar

    private List<ReservaDTO> reservaDTOList = new ArrayList<>();

    private List<ImagenDTO> imagenDTOList = new ArrayList<>();

    private List<CaracteristicasDTO> caracteristicasDTOList = new ArrayList<>();

    private List<ReaccionDTO> reaccionDTOList = new ArrayList<>();

    private List<PuntuacionDTO> puntuacionDTOList = new ArrayList<>();

    public ProductoDTO() {
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

    public int getPuntaje() {
        return puntaje;
    }

    public void setPuntaje(int puntaje) {
        this.puntaje = puntaje;
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

    public List<PoliticaDTO> getPoliticaListDTO() {
        return politicaListDTO;
    }

    public void setPoliticaListDTO(List<PoliticaDTO> politicaListDTO) {
        this.politicaListDTO = politicaListDTO;
    }

    public Long getCategoria_id() {
        return categoria_id;
    }

    public void setCategoria_id(Long categoria_id) {
        this.categoria_id = categoria_id;
    }

    public Long getCiudad_id() {
        return ciudad_id;
    }

    public void setCiudad_id(Long ciudad_id) {
        this.ciudad_id = ciudad_id;
    }

    public List<ReservaDTO> getReservaDTOList() {
        return reservaDTOList;
    }

    public void setReservaDTOList(List<ReservaDTO> reservaDTOList) {
        this.reservaDTOList = reservaDTOList;
    }

    public List<ImagenDTO> getImagenDTOList() {
        return imagenDTOList;
    }

    public void setImagenDTOList(List<ImagenDTO> imagenDTOList) {
        this.imagenDTOList = imagenDTOList;
    }

    public List<CaracteristicasDTO> getCaracteristicasDTOList() {
        return caracteristicasDTOList;
    }

    public void setCaracteristicasDTOList(List<CaracteristicasDTO> caracteristicasDTOList) {
        this.caracteristicasDTOList = caracteristicasDTOList;
    }
}
