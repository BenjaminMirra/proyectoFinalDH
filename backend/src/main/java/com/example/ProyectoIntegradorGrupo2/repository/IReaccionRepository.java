package com.example.ProyectoIntegradorGrupo2.repository;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import com.example.ProyectoIntegradorGrupo2.model.Puntuacion;
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
    @Query("SELECT r FROM Reaccion r WHERE r.usuario.id =?1")
    List<Optional<Reaccion>> findReaccionesByUsuarioId(Long id);


    @Query("SELECT r FROM Reaccion r WHERE r.producto.id =?1 AND r.usuario.id = ?2")
    Optional<Reaccion> findReaccionByProductoIdAndUsuarioId(Long id_producto, Long id_usuario);
}
