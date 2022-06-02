package com.example.ProyectoIntegradorGrupo2.repository;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Long> {
   /* @Query(
            "SELECT p, " +
                    "cat.titulo, c.nombre, c.provincia, c.pais, " +
                    "pol.cancelacion_descripcion, pol.norma_descripcion, pol.seguridad_descripcion " +
                    "FROM Producto p " +
                    "inner join Categoria cat " +
                    "on cat.id = p.categoria.id" +
                    "inner join Ciudad c" +
                    "on c.id = p.ciudad.id" +
                    "inner join Politica pol" +
                    "on pol.id = p.politica.id" +
                    "WHERE cat.titulo = ?1 ")
    Optional<Producto> findProductByCategoryName(String titulo);*/
}
