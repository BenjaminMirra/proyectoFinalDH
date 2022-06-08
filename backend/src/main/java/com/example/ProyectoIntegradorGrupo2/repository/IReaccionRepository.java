package com.example.ProyectoIntegradorGrupo2.repository;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import com.example.ProyectoIntegradorGrupo2.model.Reaccion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IReaccionRepository extends JpaRepository<Reaccion, Long> {
}
