package com.example.ProyectoIntegradorGrupo2.model.dto;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import com.example.ProyectoIntegradorGrupo2.model.TipoReaccion;
import com.example.ProyectoIntegradorGrupo2.model.Usuario;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Getter
@Setter

@NoArgsConstructor
public class ReaccionDTO {


    private Long id;

    private boolean favorito;

    /*private Long tipo_reaccion_id;*/
}
