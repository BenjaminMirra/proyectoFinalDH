package com.example.ProyectoIntegradorGrupo2.repository;

import com.example.ProyectoIntegradorGrupo2.model.Producto;
import com.example.ProyectoIntegradorGrupo2.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRoleRepository extends JpaRepository<Role, Long> {
}
