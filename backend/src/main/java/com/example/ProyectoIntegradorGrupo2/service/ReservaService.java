package com.example.ProyectoIntegradorGrupo2.service;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.Producto;
import com.example.ProyectoIntegradorGrupo2.model.Reserva;
import com.example.ProyectoIntegradorGrupo2.model.Usuario;
import com.example.ProyectoIntegradorGrupo2.model.dto.ReservaDTO;
import com.example.ProyectoIntegradorGrupo2.repository.IProductoRepository;
import com.example.ProyectoIntegradorGrupo2.repository.IReservaRepository;
import com.example.ProyectoIntegradorGrupo2.repository.IUsuarioRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ReservaService implements IReservaService{

    @Autowired
    private IReservaRepository reservaRepository;

    @Autowired
    private IProductoRepository productoRepository;

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public ReservaDTO agregarReserva(ReservaDTO reservaDTO) throws BadRequestException {
        Reserva reserva = mapper.convertValue(reservaDTO, Reserva.class);
        //reservaDTO.setFechaEnLaQueSeHaceLaReserva(new Date());
        LocalDate hoy = LocalDate.now();
        LocalTime ahora = LocalTime.now();

        LocalDateTime fecha = LocalDateTime.of(hoy, ahora);
        reserva.setFechaEnLaQueSeHaceLaReserva(fecha);


        Optional<Producto> productoDesdeDB = productoRepository.findById(reservaDTO.getProducto_id());
        reserva.setProducto(productoDesdeDB.get());

        Optional<Usuario> usuarioDesdeDB = usuarioRepository.findById(reservaDTO.getUsuario_id());
        reserva.setUsuario(usuarioDesdeDB.get());

        Reserva reservaGuardada = reservaRepository.save(reserva);

        reservaDTO.setId(reservaGuardada.getId());


        return reservaDTO;
    }

    @Override
    public ReservaDTO obtenerReservaPorId(Long id) throws ResourceNotFoundException {
        return null;
    }

    @Override
    public List<ReservaDTO> listarTodas() {
        return null;
    }

    @Override
    public ReservaDTO editar(ReservaDTO reservaDTO) throws ResourceNotFoundException, BadRequestException {
        return null;
    }

    @Override
    public void eliminar(Long id) throws ResourceNotFoundException {

    }
}
