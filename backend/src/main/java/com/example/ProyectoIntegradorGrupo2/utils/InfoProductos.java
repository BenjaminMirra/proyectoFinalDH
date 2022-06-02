package com.example.ProyectoIntegradorGrupo2.utils;

import com.example.ProyectoIntegradorGrupo2.model.dto.ProductoDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class InfoProductos {
    private int size;
    private List<ProductoDTO> productos = new ArrayList<>();
}
