package com.example.ProyectoIntegradorGrupo2.repository;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Long> {
   @Query(
            "SELECT p " +
                    "FROM Producto p " +
                    "inner join Categoria cat " +
                    "on cat.id = p.categoria.id" +
                    "WHERE cat.titulo = ?1 ")
   List<Optional<Producto>> listarProductosByCategoryName(String titulo);
}
