package com.example.ProyectoIntegradorGrupo2.repository;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import com.example.ProyectoIntegradorGrupo2.model.Reaccion;
import com.example.ProyectoIntegradorGrupo2.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface IReaccionRepository extends JpaRepository<Reaccion, Long> {

}
