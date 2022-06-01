package com.example.ProyectoIntegradorGrupo2.service;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.*;
import com.example.ProyectoIntegradorGrupo2.model.dto.CaracteristicasDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.ImagenDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.ProductoDTO;
import com.example.ProyectoIntegradorGrupo2.model.dto.ReservaDTO;
import com.example.ProyectoIntegradorGrupo2.repository.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ProductoService implements IProductoService {

    @Autowired
    private IProductoRepository productoRepository;

    @Autowired
    private ICategoriaRepository categoriaRepository;

    @Autowired
    private ICaracteristicasRepository caracteristicasRepository;

    @Autowired
    private ICiudadRepository ciudadRepository;

    @Autowired
    private IImagenRepository imagenRepository;

    @Autowired
    private IReservaRepository reservaRepository;

    @Autowired
    private IPoliticaRepository politicaRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public ProductoDTO agregarProducto(ProductoDTO productoDTO) throws BadRequestException {
        Producto producto = mapper.convertValue(productoDTO, Producto.class);

        Ciudad ciudad = mapper.convertValue(productoDTO.getCiudadDTO(), Ciudad.class);
        Politica politica = mapper.convertValue(productoDTO.getPoliticaDTO(), Politica.class);

        Producto p = productoRepository.save(producto);

        Optional<Producto> productoDesdeDB = productoRepository.findById(p.getId());

        ciudad.getProductoSet().add(productoDesdeDB.get());
        productoDesdeDB.get().setCiudad(ciudad);

        politica.getProductoSet().add(productoDesdeDB.get());
        productoDesdeDB.get().setPolitica(politica);

        Categoria categoria = mapper.convertValue(productoDTO.getCategoriaDTO(), Categoria.class);
        Optional<Categoria> c = categoriaRepository.findById(categoria.getId());
        if (c.isEmpty())
            c= categoriaRepository.findCategoryByTitle(categoria.getTitulo());

        productoDesdeDB.get().setCategoria(c.get());
        c.get().getProductoSet().add(productoDesdeDB.get());

        List<ReservaDTO> reservaDTOList = productoDTO.getReservaDTOList();

        for (ReservaDTO r:reservaDTOList) {
            Reserva reserva = mapper.convertValue(r, Reserva.class);
            reserva.setProducto(productoDesdeDB.get());
            productoDesdeDB.get().getReservaSet().add(reserva);
        }

        List<CaracteristicasDTO> caracteristicasDTOList = productoDTO.getCaracteristicasDTOList();

        for (CaracteristicasDTO caracteristicasDTO:caracteristicasDTOList) {
            Caracteristicas caracteristica = mapper.convertValue(caracteristicasDTO, Caracteristicas.class);
            caracteristica.setProducto(productoDesdeDB.get());
            productoDesdeDB.get().getCaracteristicasList().add(caracteristica);
        }

        List<ImagenDTO> imagenDTOList = productoDTO.getImagenDTOList();

        for (ImagenDTO i:imagenDTOList) {
            Imagen imagen = mapper.convertValue(i, Imagen.class);
            imagen.setProducto(productoDesdeDB.get());
            productoDesdeDB.get().getImagenesList().add(imagen);
        }

        Producto productoGuardado = productoRepository.save(productoDesdeDB.get());
        ProductoDTO productoDTOGuardado = mapper.convertValue(productoGuardado, ProductoDTO.class);
        return productoDTOGuardado;
    }

    @Override
    public ProductoDTO obtenerProductoPorId(Long id) throws ResourceNotFoundException {
        return null;
    }

    @Override
    public List<ProductoDTO> listarTodos() {
        return null;
    }

    @Override
    public ProductoDTO editar(ProductoDTO productoDTO) throws ResourceNotFoundException {
        return null;
    }

    @Override
    public void eliminar(Long id) throws ResourceNotFoundException {

    }

    /*@Override
    public List<ProductoDTO> buscarProductoPorCategoria(String titulo) throws ResourceNotFoundException {
        return null;
    }*/
}
