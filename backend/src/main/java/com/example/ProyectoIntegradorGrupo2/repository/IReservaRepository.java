package com.example.ProyectoIntegradorGrupo2.repository;

import com.example.ProyectoIntegradorGrupo2.model.Caracteristicas;
import com.example.ProyectoIntegradorGrupo2.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IReservaRepository extends JpaRepository<Reserva, Long> {
    @Query("SELECT r FROM Reserva r where r.producto.id =?1")
    List<Optional<Reserva>> findReservasByProductoId(Long id);
}
