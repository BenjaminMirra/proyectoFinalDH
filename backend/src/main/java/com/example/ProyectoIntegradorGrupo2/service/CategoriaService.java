package com.example.ProyectoIntegradorGrupo2.service;

import com.example.ProyectoIntegradorGrupo2.exceptions.ResourceNotFoundException;
import com.example.ProyectoIntegradorGrupo2.model.Categoria;
import com.example.ProyectoIntegradorGrupo2.model.dto.CategoriaDTO;
import com.example.ProyectoIntegradorGrupo2.repository.ICategoriaRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@Transactional
public class CategoriaService implements ICategoriaService{

    @Autowired
    private ICategoriaRepository categoriaRepository;

    @Autowired
    ObjectMapper mapper;

    //Método compartido entre la función aqgregarCategoría y editarCategoria
    //Guarda una categoria en la base de datos y retorna una categoriaDTO
    private CategoriaDTO cargarCategoria(CategoriaDTO categoriaDTO){
        Categoria categoria = mapper.convertValue(categoriaDTO, Categoria.class);
        Categoria categoriaGuardadaEnDB = categoriaRepository.save(categoria);
        return mapper.convertValue(categoriaGuardadaEnDB, CategoriaDTO.class);
    }

    //Guarda una categoria en la base de datos y retorna una categoriaDTO
    @Override
    public CategoriaDTO agregarCategoria(CategoriaDTO categoriaDTO) {
        return cargarCategoria(categoriaDTO);
    }

    //Busca las categorias en la base de datos y retorna una coleccion de categoriasDTO
    @Override
    public Set<CategoriaDTO> listarTodas() {
        List<Categoria> categoriasList = categoriaRepository.findAll();

        Set<CategoriaDTO> categoriaDTOSet = new HashSet<>();

        for (Categoria c:categoriasList) {
            categoriaDTOSet.add(mapper.convertValue(c, CategoriaDTO.class));

        }

        return categoriaDTOSet;
    }


    //Busca una categoria a editar por su id. Si no existe devuelve exceptcion
    // y si existe guarda la categoria con los cambios
    @Override
    public CategoriaDTO editar(CategoriaDTO categoriaDTO) throws ResourceNotFoundException {
        Optional<Categoria> c = categoriaRepository.findById(categoriaDTO.getId());

        if (c.isEmpty()){
            throw new ResourceNotFoundException("No se pudo encontrar la caegoria para editar");
        }

        return cargarCategoria(categoriaDTO);
    }

    //Elimina una categoria de la base de datos
    @Override
    public void eliminar(Long id) throws ResourceNotFoundException {
        Optional<Categoria> c = categoriaRepository.findById(id);

        if (c.isEmpty()){
            throw new ResourceNotFoundException("No se pudo encontrar la caegoria a eliminar");
        }

        categoriaRepository.deleteById(id);
    }
}
