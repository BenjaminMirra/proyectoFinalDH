package com.example.ProyectoIntegradorGrupo2.utils;

import com.example.ProyectoIntegradorGrupo2.model.*;
import com.example.ProyectoIntegradorGrupo2.repository.ICategoriaRepository;
import com.example.ProyectoIntegradorGrupo2.repository.ICiudadRepository;
import com.example.ProyectoIntegradorGrupo2.repository.ITipoDePoliticasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    private ICategoriaRepository categoriaRepository;

    @Autowired
    private ICiudadRepository ciudadRepository;

    @Autowired
    private ITipoDePoliticasRepository tipoDePoliticasRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Categoria categoria = new Categoria("Hoteles", "Descripcion","http://urlImagen");
        Categoria categoria1 = new Categoria("Hosteles", "Descripcion","http://urlImagen");
        Categoria categoria2 = new Categoria("Departamentos", "Descripcion","http://urlImagen");
        Categoria categoria3 = new Categoria("Bed & Breakfast", "Descripcion","http://urlImagen");

        categoriaRepository.save(categoria);
        categoriaRepository.save(categoria1);
        categoriaRepository.save(categoria2);
        categoriaRepository.save(categoria3);

        Ciudad ciudad = new Ciudad("San Carlos de Bariloche", "Rio Negro", "Argentina");
        Ciudad ciudad1 = new Ciudad("Buenos Aires", "Mendoza", "Argentina");
        Ciudad ciudad2 = new Ciudad("Mendoza", "Mendoza", "Argentina");
        Ciudad ciudad3 = new Ciudad("Córdoba", "Córdoba", "Argentina");

        ciudadRepository.save(ciudad);
        ciudadRepository.save(ciudad1);
        ciudadRepository.save(ciudad2);
        ciudadRepository.save(ciudad3);

        TipoDePoliticas tipoDePoliticas = new TipoDePoliticas("normas");
        TipoDePoliticas tipoDePoliticas1 = new TipoDePoliticas("seguridad");
        TipoDePoliticas tipoDePoliticas2 = new TipoDePoliticas("cancelacion");

        tipoDePoliticasRepository.save(tipoDePoliticas);
        tipoDePoliticasRepository.save(tipoDePoliticas1);
        tipoDePoliticasRepository.save(tipoDePoliticas2);


       /* Producto producto = new Producto("Hotel Bariloche", "Bienvenido", "El mejor hotel", "calle imaginaria 123", 8.5,8.5,categoria, ciudad);
        Role role = new Role("usuarioRole");
        Usuario usuario = new Usuario("n","a","a@mail.com","1234", role);
        Reserva reserva = new Reserva(LocalDate.of(2022, 6, 10),"mensaje nuevo", true,LocalDate.of(2022,6,10), LocalDate.of(2022,6,15),producto,usuario);
        Reserva reserva2 = new Reserva(LocalDate.of(2022, 6, 16),"mensaje nuevo", true,LocalDate.of(2022,6,20), LocalDate.of(2022,6,15),producto,usuario);
        Reserva reserva3 = new Reserva(LocalDate.of(2022, 6, 25),"mensaje nuevo", true,LocalDate.of(2022,6,30), LocalDate.of(2022,6,15),producto,usuario);*/
    }
}
