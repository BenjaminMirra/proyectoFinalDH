package com.example.ProyectoIntegradorGrupo2.repository;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Long> {
   @Query( "SELECT p FROM Producto p WHERE p.categoria.id = ?1 ")
   List<Optional<Producto>> listarProductosByCategoryId(Long id);


   @Query( "SELECT p FROM Producto p WHERE p.ciudad.id = ?1 ")
   List<Optional<Producto>> listarProductosByCiudadId(Long id);
}
