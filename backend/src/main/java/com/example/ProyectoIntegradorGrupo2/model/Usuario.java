package com.example.ProyectoIntegradorGrupo2.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor


@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @NotNull
    @SequenceGenerator(name = "usuario_sequence", sequenceName = "usuario_sequence", allocationSize = 1) //
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "usuario_sequence")
    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private String password;
    private String ciudad;

    /*@OneToOne(cascade = CascadeType.ALL,fetch= FetchType.LAZY)
    @JoinColumn(name="role_id", referencedColumnName = "id")
    private Role role;*/

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "role_id", nullable = false)
    @JsonIgnore
    private Role role;

    @OneToMany(mappedBy = "usuario", fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    private List<Reaccion> reaccionList = new ArrayList<>();

    @OneToMany(mappedBy = "usuario", fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    private List<Puntuacion> puntuacionList = new ArrayList<>();

    @OneToMany(mappedBy = "usuario", fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    private List<Reserva> reservaList = new ArrayList<>();


}
