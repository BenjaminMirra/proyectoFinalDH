import React, { useEffect, useState } from 'react';
import { Input } from '../../../atoms/Input/Input';
import { Button } from '../../../atoms/Button/Button';
import { Heading } from '../../../atoms/Heading/Heading';
import { useNavigate } from "react-router-dom";
import Label from '../../../atoms/Label/Label';
import { InputLabel } from '../../../molecules/InputLabel/InputLabel';
import './MobileAdministration.css';
import { SelectPickerPlaces } from '../../../atoms/SelectPickerPlaces/SelectPickerPlaces';
import { SelectPickerCategories } from '../../../atoms/SelectPickerCategories/SelectPickerCategories';
import { AtributeCard } from '../../../molecules/AtributesCard/AtributeCard';
import axios from 'axios';
import { urlAPI } from '../../../../global.js'

export const MobileAdministration = () => {

  //Mensajes de error
  const [errors, setErrors] = useState({ server: false, data: false });

  //le envío al select Place
  const [places, setPlaces] = useState([]);

  //le envío al select Category
  const [categories, setCategories] = useState([]);

  //Guardo toda la info del form aquí
  const [dataForm, setDataForm] = useState({
    descripcion: " ",
    longitud: " ",
    direccion: " ",
    latitud: " ",
    nombre: " ",
    ciudad: " ",
    categoria: " ",
    imagenes: {
      imagen_1: " ",
      imagen_2: " ",
      imagen_3: " ",
      imagen_4: " ",
      imagen_5: " "
    },
    politicaListDTO: {
      seguridadysalud: {
        pol_seguridadysalud_1: " ",
        pol_seguridadysalud_2: " ",
        pol_seguridadysalud_3: " "
      },
      cancelacion: {
        pol_cancelacion_1: " ",
        pol_cancelacion_2: " ",
        pol_cancelacion_3: " "
      },
      normas: {
        pol_normas_1: " ",
        pol_normas_2: " ",
        pol_normas_3: " "
      },
    }
  })

  const firstValidation = () => {
    setTimeout(() => {
      if (dataForm.descripcion === " " || dataForm.latitud === " " || dataForm.longitud === " " || dataForm.nombre === " " || dataForm.ciudad === " " || dataForm.categoria === " " || dataForm.direccion === " ") {
        errorContainer.innerHTML = ` <p>
      Debes completar todos los datos que tienen un " * "
    </p>`
        setButtonValue({ value: "Crear", disabled: false })
      } else {
        errorContainer.innerHTML = "";
      }
    }, 2000)

  }

  const cityValidation = () =>{
    if (dataForm.ciudad === "San carlos de Bariloche") {
      dataForm.ciudad = 1
    } else if (dataForm.ciudad === "Buenos Aires") {
      dataForm.ciudad = 2
    } else if (dataForm.ciudad === "Mendoza") {
      dataForm.ciudad = 3
    } else {
      dataForm.ciudad = 4
    }
  }

  const categoryValidation = () => {
    if (dataForm.categoria === "Hoteles") {
      dataForm.categoria = 1
    } else if (dataForm.categoria === "Hostels") {
      dataForm.categoria = 2
    } else if (dataForm.categoria === "Departamentos") {
      dataForm.categoria = 3
    } else {
      dataForm.categoria = 4
    }
  }

  const atributeContainer = document.getElementById("atributeContainer");
  const atributoNombre = document.getElementById("AtributoNombre");
  const atributoIcono = document.getElementById("AtributoIcono");
  const selectPlaceInfo = document.getElementById("selectPlace");
  const selectCategoryInfo = document.getElementById("selectCategory");
  const errorContainer = document.getElementById("errorContainer");

  const [buttonValue, setButtonValue] = useState({ disabled: false, value: 'Crear' })

  const postData = () => {
    setButtonValue({ value: "Creando reserva...", disabled: true })
    setDataForm((prevData) => ({ ...prevData, ciudad: selectPlaceInfo.value }))
    setDataForm((prevData) => ({ ...prevData, categoria: selectCategoryInfo.value }))
    firstValidation()

    cityValidation()
    categoryValidation()

    const data = {
      titulo: dataForm.nombre,
      descripcion: dataForm.descripcion,
      direccion: dataForm.direccion,
      latitud: dataForm.latitud,
      longitud: dataForm.longitud,
      ciudad_id: dataForm.ciudad,
      categoria_id: dataForm.categoria,
    }

    axios({
      method: 'POST',
      url: `${urlAPI}productos/agregar`,
      data: data,
      headers: { 'Access-Control-Allow-Origin': '*/*' }
    }).then(res => {
      console.log(res.data)
    })
  }

  const addAtribute = () => {
    const nombre = atributoNombre.value;
    const icono = atributoIcono.value

    if (nombre.length > 2 && icono.length > 2) {
      atributeContainer.innerHTML += <AtributeCard />
    } else {
      alert("pone bien")
    }
  }

  const handleChangeDescription = (e) => {
    setDataForm(prevData => ({ ...prevData, descripcion: e.target.value }))
  }
  const handleChangeLatitud = (e) => {
    setDataForm(prevData => ({ ...prevData, latitud: e.target.value }))
  }
  const handleChangeLongitud = (e) => {
    setDataForm(prevData => ({ ...prevData, longitud: e.target.value }))
  }
  const handleChangeNombre = (e) => {
    setDataForm(prevData => ({ ...prevData, nombre: e.target.value }))
  }
  const handleChangeDireccion = (e) => {
    setDataForm(prevData => ({ ...prevData, direccion: e.target.value }))
  }


  return (
    <div className="mobileAdministration-container">
      <div className="mobileAdministration">
        <Heading title='h4' variant='primary' type='lg' >
          Crear Alojamiento
        </Heading>
        <div className="mobileAdministracion-add">
          <div className="mobileAdministracion-add-name-category">
            <div className="mobileAdministracion-add-name">
              <InputLabel onChange={handleChangeNombre} placeholder="Hotel Hermitage " label='Nombre' required={true} disabled={false}>
              </InputLabel>

            </div>
            <div className="mobileAdministracion-add-category">
              <SelectPickerCategories categories={categories} setCategories={setCategories} />

            </div>
          </div>
          <div className="mobileAdministracion-add-direccion-ciudad">
            <div className="mobileAdministracion-add-direccion">
              <InputLabel required={true} onChange={handleChangeDireccion} placeholder="Av. Colón 1242" label='Dirección' disabled={false}>
              </InputLabel>
            </div>
            <div className="mobileAdministracion-add-ciudad">
              <SelectPickerPlaces places={places} setPlaces={setPlaces} />
            </div>
          </div>
          <div className="mobileAdministracion-add-descripcion">
            <div className="mobileAdministracion-add-descripcion-info">
              <Label required={true} label='Descripción'></Label>
              <textarea value={dataForm.descripcion} onChange={handleChangeDescription} placeholder='Escriba aquí' name="" id="descripcionInfo" cols="30" rows="10" />
            </div>
          </div>
          <div className="mobileAdministracion-add-latitud-longitud">
            <div className="mobileAdministracion-add-latitud">
              <InputLabel required={true} onChange={handleChangeLatitud} name="latitud" placeholder="Latitud" label='Latitud' disabled={false}>
              </InputLabel>
            </div>
            <div className="mobileAdministracion-add-longitud">
              <InputLabel required={true} onChange={handleChangeLongitud} name="longitud" placeholder="Longitud" label='Longitud' disabled={false}>
              </InputLabel>
            </div>
          </div>
        </div>
        <div className="mobileAdministration-parte2">
          <div className="mobileAdministracion-add-agregarAtributo">
            <Heading title='h5' variant='primary' type='md' >
              Agregar atributos
            </Heading>
            <div className='renderButton-mobileAtributo' id="atributeContainer"></div>
            <div className="mobileAdministracion-add-atributo">
              <div className='mobileAdministracion-add-atributo-parte1'>
                <InputLabel name="AtributoNombre" placeholder="Wifi" label='Nombre' disabled={false}>
                </InputLabel>
                <InputLabel name="AtributoIcono" placeholder="fa-wifi" label='Ícono' disabled={false}>
                </InputLabel>
              </div>
              <div className='mobileAdministracion-add-atributo-parte2'>
                <Button label="+" onClick={addAtribute} />
              </div>
            </div>
          </div>
          <div className="mobileAdministracion-add-politicas">
            <Heading title="h1" variant={"primary"} type="md">
              Políticas del Producto
            </Heading>
            <div className="mobileAdministracion-politicas">
              <div className="mobile-add-politicas-normas">
                <Heading title='h3' variant='primary' type='md' >
                  Normas de la Casa
                </Heading>
                <Label label='Descripción'></Label>
                <textarea placeholder='Escriba aquí' name="" id="norma-info" cols="30" rows="10" />
              </div>
              <div className="mobile-add-politicas-saludyseguridad">
                <Heading title='h3' variant='primary' type='md' >
                  Salud y Seguridad
                </Heading>
                <Label label='Descripción'></Label>
                <textarea placeholder='Escriba aquí' name="" id="saludyseguridad-info" cols="30" rows="10" />
              </div>
              <div className="mobile-add-politicas-cancelacion">
                <Heading title='h3' variant='primary' type='md' >
                  Políticas de Cancelación
                </Heading>
                <Label label='Descripción'></Label>
                <textarea placeholder='Escriba aquí' name="" id="cancelacion-info" cols="30" rows="10" />
              </div>
            </div>
          </div>
          <div className="mobileAdministracion-add-cargarImagen">
            <Heading title='h2'required={true} variant='primary' type='md' >
              Cargar imágenes
            </Heading>
            <div className="mobileAdministracion-add-imagen">
              <div className='mobileAdministracion-add-imagen-parte1'>
                <Input required={true} placeholder="Insertar https://">
                </Input>
              </div>
              <div className='mobileAdministracion-add-imagen-parte2'>
                <Button label="+" />
              </div>
            </div>
          </div>
          <div className="errorContainer" id="errorContainer">

          </div>
          <div className='mobileAdminsitracion-add-button'>
            <Button
              label={buttonValue.value}
              disabled={buttonValue.disabled}
              onClick={postData} />
          </div>
        </div>
      </div>
    </div >
  )
}
