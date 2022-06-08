package com.example.ProyectoIntegradorGrupo2.repository;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import com.example.ProyectoIntegradorGrupo2.model.Puntuacion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPuntuacionRepository extends JpaRepository<Puntuacion, Long> {
}
