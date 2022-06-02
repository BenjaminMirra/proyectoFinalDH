package com.example.ProyectoIntegradorGrupo2.service;

import com.example.ProyectoIntegradorGrupo2.exceptions.BadRequestException;
import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.*;
import com.example.ProyectoIntegradorGrupo2.model.dto.*;
import com.example.ProyectoIntegradorGrupo2.repository.*;
import com.example.ProyectoIntegradorGrupo2.utils.InfoProductos;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Comparator;
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
    private ITipoDePoliticasRepository tipoDePoliticasRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public ProductoDTO agregarProducto(ProductoDTO productoDTO) throws BadRequestException {
        Producto producto = mapper.convertValue(productoDTO, Producto.class);
        /*producto.setTitulo(productoDTO.getTitulo());
        producto.setTitulo_descripcion(productoDTO.getTitulo_descripcion());
        producto.setDescripcion(productoDTO.getDescripcion());
        producto.setRating(productoDTO.getRating());*/

        Optional<Categoria> categoriaDesdeDB = categoriaRepository.findById(productoDTO.getCategoria_id());
        producto.setCategoria(categoriaDesdeDB.get());

        Optional<Ciudad> ciudadDesdeDB = ciudadRepository.findById(productoDTO.getCiudad_id());
        producto.setCiudad(ciudadDesdeDB.get());

        Producto pConId = productoRepository.save(producto);
        Optional<Producto> productoDesdeDB = productoRepository.findById(pConId.getId());


        List<CaracteristicasDTO> caracteristicasDTOList = productoDTO.getCaracteristicasDTOList();

        for (CaracteristicasDTO caracteristicasDTO : caracteristicasDTOList) {
            Caracteristicas caracteristica = mapper.convertValue(caracteristicasDTO, Caracteristicas.class);
            caracteristica.setProducto(productoDesdeDB.get());
            caracteristicasRepository.save(caracteristica);
            productoDesdeDB.get().getCaracteristicasList().add(caracteristica);
        }

        List<ReservaDTO> reservaDTOList = productoDTO.getReservaDTOList();

        for (ReservaDTO r : reservaDTOList) {
            Reserva reserva = mapper.convertValue(r, Reserva.class);
            reserva.setProducto(productoDesdeDB.get());
            reservaRepository.save(reserva);
            productoDesdeDB.get().getReservaSet().add(reserva);
        }

        List<ImagenDTO> imagenDTOList = productoDTO.getImagenDTOList();

        for (ImagenDTO i : imagenDTOList) {
            Imagen imagen = mapper.convertValue(i, Imagen.class);
            imagen.setProducto(productoDesdeDB.get());
            imagenRepository.save(imagen);
            productoDesdeDB.get().getImagenesList().add(imagen);
        }

        List<PoliticaDTO> politicaDTOList = productoDTO.getPoliticaListDTO();

        for (PoliticaDTO p : politicaDTOList) {
            Politica politica = mapper.convertValue(p, Politica.class);
            politica.setProducto(productoDesdeDB.get());
            Optional<TipoDePoliticas> tipoDePoliticas = tipoDePoliticasRepository.findById(p.getTipo_politica_id());
            politica.setTipoDePoliticas(tipoDePoliticas.get());
            politicaRepository.save(politica);
            tipoDePoliticas.get().getPoliticaList().add(politica);
            productoDesdeDB.get().getPoliticaList().add(politica);
        }

        productoDTO.setId(productoDesdeDB.get().getId());
        return productoDTO;
    }

    @Override
    public ProductoDTO obtenerProductoPorId(Long id) throws ResourceNotFoundException {
        Optional<Producto> producto = productoRepository.findById(id);
        ProductoDTO productoDTO = null;

        if (producto.isEmpty())
            throw new ResourceNotFoundException("No se ha encontrado el producto con el id");

        if (producto.isPresent())
            productoDTO = mapper.convertValue(producto.get(), ProductoDTO.class);

        productoDTO.setCategoria_id(producto.get().getCategoria().getId());
        productoDTO.setCiudad_id(producto.get().getCiudad().getId());

        List<Optional<Imagen>> optionalImagenesList = imagenRepository.findImagesByProductId(id);
        for (Optional<Imagen> i : optionalImagenesList) {
            ImagenDTO imagenDTO = mapper.convertValue(i.get(), ImagenDTO.class);
            productoDTO.getImagenDTOList().add(imagenDTO);
        }

        List<Optional<Reserva>> optionalReservaList = reservaRepository.findReservasByProductoId(id);
        for (Optional<Reserva> r : optionalReservaList) {
            ReservaDTO reservaDTO = mapper.convertValue(r.get(), ReservaDTO.class);
            productoDTO.getReservaDTOList().add(reservaDTO);

        }

        List<Optional<Caracteristicas>> optionalCaracteristicasList = caracteristicasRepository.findCaracteristicasByProductoId(id);
        for (Optional<Caracteristicas> c : optionalCaracteristicasList) {
            CaracteristicasDTO caracteristicasDTO = mapper.convertValue(c.get(), CaracteristicasDTO.class);
            productoDTO.getCaracteristicasDTOList().add(caracteristicasDTO);

        }

        List<Optional<Politica>> optionalPoliticaList = politicaRepository.findPoliticasByProductId(id);
        for (Optional<Politica> pol : optionalPoliticaList) {
            PoliticaDTO politicaDTO = mapper.convertValue(pol.get(), PoliticaDTO.class);
            politicaDTO.setTipo_politica_id(pol.get().getTipoDePoliticas().getId());
            productoDTO.getPoliticaListDTO().add(politicaDTO);

        }

        return productoDTO;
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

        Optional<Producto> producto = productoRepository.findById(id);
        if (producto.isEmpty()){
            throw new ResourceNotFoundException("No se pudo encontrar el producto a eliminar");
        }
        productoRepository.deleteById(id);
    }

    @Override
    public List<ProductoDTO> buscarProductosPorCategoria(Long id) throws ResourceNotFoundException {
        List<Optional<Producto>> productosList = productoRepository.listarProductosByCategoryId(id);
        ProductoDTO productoDTO = null;
        List<ProductoDTO> productoDTOList = new ArrayList<>();
        for (Optional<Producto> producto : productosList
        ) {
            productoDTO = mapper.convertValue(producto.get(), ProductoDTO.class);

            productoDTO.setCategoria_id(producto.get().getCategoria().getId());
            productoDTO.setCiudad_id(producto.get().getCiudad().getId());

            List<Optional<Imagen>> optionalImagenesList = imagenRepository.findImagesByProductId(id);
            for (Optional<Imagen> i : optionalImagenesList) {
                ImagenDTO imagenDTO = mapper.convertValue(i.get(), ImagenDTO.class);
                productoDTO.getImagenDTOList().add(imagenDTO);
            }

            List<Optional<Reserva>> optionalReservaList = reservaRepository.findReservasByProductoId(id);
            for (Optional<Reserva> r : optionalReservaList) {
                ReservaDTO reservaDTO = mapper.convertValue(r.get(), ReservaDTO.class);
                productoDTO.getReservaDTOList().add(reservaDTO);

            }

            List<Optional<Caracteristicas>> optionalCaracteristicasList = caracteristicasRepository.findCaracteristicasByProductoId(id);
            for (Optional<Caracteristicas> c : optionalCaracteristicasList) {
                CaracteristicasDTO caracteristicasDTO = mapper.convertValue(c.get(), CaracteristicasDTO.class);
                productoDTO.getCaracteristicasDTOList().add(caracteristicasDTO);

            }

            List<Optional<Politica>> optionalPoliticaList = politicaRepository.findPoliticasByProductId(id);
            for (Optional<Politica> pol : optionalPoliticaList) {
                PoliticaDTO politicaDTO = mapper.convertValue(pol.get(), PoliticaDTO.class);
                politicaDTO.setTipo_politica_id(pol.get().getTipoDePoliticas().getId());
                productoDTO.getPoliticaListDTO().add(politicaDTO);

            }


            productoDTOList.add(productoDTO);

        }


        productoDTOList.sort(Comparator.comparing(ProductoDTO::getId));
        return productoDTOList;
    }


    @Override
    public InfoProductos buscarProductosPorCiudad(Long id) throws ResourceNotFoundException {

        List<Optional<Producto>> productosList = productoRepository.listarProductosByCiudadId(id);
        ProductoDTO productoDTO = null;
        List<ProductoDTO> productoDTOList = new ArrayList<>();
        for (Optional<Producto> producto : productosList
        ) {
            productoDTO = mapper.convertValue(producto.get(), ProductoDTO.class);

            productoDTO.setCategoria_id(producto.get().getCategoria().getId());
            productoDTO.setCiudad_id(producto.get().getCiudad().getId());

            List<Optional<Imagen>> optionalImagenesList = imagenRepository.findImagesByProductId(id);
            for (Optional<Imagen> i : optionalImagenesList) {
                ImagenDTO imagenDTO = mapper.convertValue(i.get(), ImagenDTO.class);
                productoDTO.getImagenDTOList().add(imagenDTO);
            }

            List<Optional<Reserva>> optionalReservaList = reservaRepository.findReservasByProductoId(id);
            for (Optional<Reserva> r : optionalReservaList) {
                ReservaDTO reservaDTO = mapper.convertValue(r.get(), ReservaDTO.class);
                productoDTO.getReservaDTOList().add(reservaDTO);

            }

            List<Optional<Caracteristicas>> optionalCaracteristicasList = caracteristicasRepository.findCaracteristicasByProductoId(id);
            for (Optional<Caracteristicas> c : optionalCaracteristicasList) {
                CaracteristicasDTO caracteristicasDTO = mapper.convertValue(c.get(), CaracteristicasDTO.class);
                productoDTO.getCaracteristicasDTOList().add(caracteristicasDTO);

            }

            List<Optional<Politica>> optionalPoliticaList = politicaRepository.findPoliticasByProductId(id);
            for (Optional<Politica> pol : optionalPoliticaList) {
                PoliticaDTO politicaDTO = mapper.convertValue(pol.get(), PoliticaDTO.class);
                politicaDTO.setTipo_politica_id(pol.get().getTipoDePoliticas().getId());
                productoDTO.getPoliticaListDTO().add(politicaDTO);

            }


            productoDTOList.add(productoDTO);
        }

        productoDTOList.sort(Comparator.comparing(ProductoDTO::getId));
        InfoProductos infoProductos = new InfoProductos(productoDTOList.size(),productoDTOList);
        return infoProductos;
    }

}