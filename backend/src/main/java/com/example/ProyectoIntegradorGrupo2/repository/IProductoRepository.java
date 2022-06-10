package com.example.ProyectoIntegradorGrupo2.repository;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Long> {
   @Query( "SELECT p FROM Producto p WHERE p.categoria.id = ?1 ")
   List<Optional<Producto>> listarProductosByCategoryId(Long id);


   @Query( "SELECT p FROM Producto p WHERE p.ciudad.id = ?1 ")
   List<Optional<Producto>> listarProductosByCiudadId(Long id);

   @Query( "SELECT p FROM Producto p INNER JOIN Reserva r ON p.id = r.producto.id WHERE (r.fechaInicioReserva NOT BETWEEN ?1 AND ?2) AND (r.fechaFinReserva NOT BETWEEN ?1 AND ?2)")
   List<Optional<Producto>> listarProductosByDisponibilidad(LocalDate fechaInicio, LocalDate fechaFin);

   /*

   SELECT *
FROM product p INNER JOIN orders o
ON p.id=o.product_id
WHERE (from_date NOT BETWEEN '2017-06-13' AND '2017-06-21')
AND (to_date NOT BETWEEN '2017-06-13' AND '2017-06-21')
AND p.id=$pid;*/


}
