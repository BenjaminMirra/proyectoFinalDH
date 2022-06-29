import React, { useEffect, useState } from 'react';
import { Input } from '../../../atoms/Input/Input';
import { Button } from '../../../atoms/Button/Button';
import { Heading } from '../../../atoms/Heading/Heading';
import Label from '../../../atoms/Label/Label';
import { InputLabel } from '../../../molecules/InputLabel/InputLabel';
import './MobileAdministration.css';
import { SelectPickerPlaces } from '../../../atoms/SelectPickerPlaces/SelectPickerPlaces';
import { SelectPickerCategories } from '../../../atoms/SelectPickerCategories/SelectPickerCategories';
import axios from 'axios';
import { urlAPI } from '../../../../global.js'
import { Icon } from '../../../atoms/Icon/Icon';

export const MobileAdministration = ({ dataForm, setDataForm,normasDeCasa, setNormasDeCasa, saludSeguridad, setSaludSeguridad, politicasCancelacion, setPoliticasCancelacion, atributosBD, imagenesRender, setImagenesRender, atributosRender, setAtributosRender }) => {


  //le envío al select Place
  const [places, setPlaces] = useState([]);

  //le envío al select Category
  const [categories, setCategories] = useState([]);



  //Atributos de la base de datos

  //Guardo toda la info del form aquí

  // useEffect(() => {
  //   if (atributosBD.length > 0) {
  //     setAtributeRender(
  //       <>
  //         <CheckBoxIconLabel data={atributosBD} />
  //       </>
  //     )
  //   } else {
  //     setAtributeRender(
  //       <>
  //         <h2>Cargando</h2>
  //       </>
  //     )
  //   }
  // }, [atributosBD])



  const firstValidation = () => {
    if (dataForm.descripcion === " " || dataForm.latitud === " " || dataForm.longitud === " " || dataForm.nombre === " " || dataForm.tituloDescripcion === " " || dataForm.precio === " ") {
      console.log("descripcion" + dataForm.descripcion)
      console.log("latitud" + dataForm.latitud)
      console.log("longitud" + dataForm.longitud)
      console.log("nombre" + dataForm.nombre)
      console.log("tituloDescripcion" + dataForm.tituloDescripcion)
      console.log("precio" + dataForm.precio)
      console.log("ciudad" + dataForm.ciudad)
      console.log("categoria" + dataForm.categoria)

      return false
    } else {
      return true
    }
  }


  const cityValidation = () => {
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

  const atributoNombre = document.getElementById("AtributoNombre");
  const atributoIcono = document.getElementById("AtributoIcono");
  const selectPlaceInfo = document.getElementById("selectPlace");
  const selectCategoryInfo = document.getElementById("selectCategory");
  const errorContainer = document.getElementById("errorContainer");
  const imagenURL = document.getElementById("imagenURL")
  const errorContainerAtributo = document.getElementById("errorContainerAtributo")
  const politicaCancelacion = document.getElementById("cancelacion-info")
  const errorContainerPoliticaCancelacion = document.getElementById("errorContainerPoliticaCancelacion")
  const politicaSaludSeguridad = document.getElementById("saludSeguridad-info")
  const errorContainerSaludSeguridad = document.getElementById("errorContainerSaludSeguridad")
  const politicaNormaDeCasa = document.getElementById("normaDeCasa-info")
  const errorContainerNormaDeCasa = document.getElementById("errorContainerNormasDeCasa")

  const [buttonValue, setButtonValue] = useState({ disabled: false, value: 'Crear' })

  const postData = () => {
    setButtonValue({ value: "Creando reserva...", disabled: true })
    setDataForm((prevData) => ({ ...prevData, ciudad: selectPlaceInfo.value }))
    setDataForm((prevData) => ({ ...prevData, categoria: selectCategoryInfo.value }))
    if (firstValidation()) {
      cityValidation()
      categoryValidation()
      const data = {
        titulo: dataForm.nombre,
        titulo_descripcion: dataForm.tituloDescripcion,
        precio: dataForm.precio,
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
        data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("jwt")),
        },
      }).then(res => {
        console.log(res.data)
      })
      errorContainer.innerHTML = `Creado`
      setButtonValue({ value: "Creado", disabled: false })
    } else if (!firstValidation()) {
      errorContainer.innerHTML = ` <p>
      Debes completar todos los datos que tienen un " * "
    </p>`
      setButtonValue({ value: "Crear", disabled: false })
    }
  }

  const addAtribute = () => {
    if (atributoNombre.value !== "" && atributoIcono.value !== "") {
      const nombre = atributoNombre.value;
      const icono = atributoIcono.value
      setAtributosRender((prevData) => [...prevData, { iconoAtributo: icono, nombreAtributo: nombre }])
      atributoNombre.value = "";
      atributoIcono.value = "";
      errorContainerAtributo.innerHTML = ""
    } else if (atributoNombre.value !== "") {
      errorContainerAtributo.innerHTML = ` <p>
      El ícono no pueden estar vacío
    </p>`
    } else if (atributoIcono.value !== "") {
      errorContainerAtributo.innerHTML = ` <p>
      El nombre no pueden estar vacío
    </p>`
    } else {
      errorContainerAtributo.innerHTML = ` <p>
      El nombre y el ícono no pueden estar vacíos
    </p>`
    }
  }

  const addImage = () => {

    if (imagenURL.value !== "") {
      if (imagenesRender.length > 4) {
        errorContainer.innerHTML = `<p>
        Solo puede agregar hasta 5 imágenes
        </p>`
      } else {
        const urlImagen = imagenURL.value;
        setImagenesRender((prevData) => [...prevData, { url: urlImagen }])
        imagenURL.value = ""
        errorContainer.innerHTML = ``
      }
    } else {
      errorContainer.innerHTML = `<p>
      La url no puede estar vacía
    </p>`
    }
  }

  const addPoliticaCancelacion = () => {

    if (politicaCancelacion.value !== "") {
      if (politicasCancelacion.length > 2) {
        errorContainerPoliticaCancelacion.innerHTML = `<p>
        Solo puedes agregar un máximo de 3 políticas.
        </p>`
      } else {
        const politicaInput = politicaCancelacion.value;
        setPoliticasCancelacion((prevData) => [...prevData, { input: politicaInput }])
        politicaCancelacion.value = ""
        errorContainerPoliticaCancelacion.innerHTML = ''
      }

    } else {
      errorContainerPoliticaCancelacion.innerHTML = `<p>
      La política no puede estar vacía
    </p>`
    }
  }

  const addSaludSeguridad = () => {
    if (politicaSaludSeguridad.value !== "") {
      if (saludSeguridad.length > 2) {
        errorContainerSaludSeguridad.innerHTML = `<p>
        Solo puedes agregar un máximo de 3 políticas.
        </p>`
      } else {
        const politicaInput = politicaSaludSeguridad.value;
        setSaludSeguridad((prevData) => [...prevData, { input: politicaInput }])
        politicaSaludSeguridad.value = ""
        errorContainerSaludSeguridad.innerHTML = ''
      }
    } else {
      errorContainerSaludSeguridad.innerHTML = `<p>
      La política no puede estar vacía
    </p>`
    }
  }

  const addNormasDeCasa = () => {
    if (politicaNormaDeCasa.value !== "") {
      if (normasDeCasa.length > 2) {
        errorContainerNormaDeCasa.innerHTML = `<p>
        Solo puedes agregar un máximo de 3 políticas.
        </p>`
      } else {
        const politicaInput = politicaNormaDeCasa.value;
        setNormasDeCasa((prevData) => [...prevData, { input: politicaInput }])
        politicaNormaDeCasa.value = ""
        errorContainerNormaDeCasa.innerHTML = ''
      }
    } else {
      errorContainerNormaDeCasa.innerHTML = `<p>
      La política no puede estar vacía
    </p>`
    }
  }

  const deleteAtribute = (nombre) => {
    setAtributosRender((prevValue) => (prevValue.filter(item => item.nombreAtributo !== nombre)))
  }

  const deleteImage = (url) => {
    setImagenesRender((prevValue) => (prevValue.filter(item => item.url !== url)))
  }

  const deletePoliticaCancelacion = (input) => {
    setPoliticasCancelacion((prevValue) => (prevValue.filter(item => item.input !== input)))
  }

  const deleteSaludSeguridad = (input) => {
    setSaludSeguridad((prevValue) => (prevValue.filter(item => item.input !== input)))
  }

  const deleteNormaDeCasa = (input) => {
    setNormasDeCasa((prevValue) => (prevValue.filter(item => item.input !== input)))
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
  const handleChangeTituloDescripcion = (e) => {
    setDataForm(prevData => ({ ...prevData, tituloDescripcion: e.target.value }))
  }
  const handleChangePrecio = (e) => {
    setDataForm(prevData => ({ ...prevData, precio: e.target.value }))
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
          <div className="mobileAdministracion-add-precio">
            <InputLabel required={true} onChange={handleChangePrecio} placeholder="15.878" label='Precio por Noche' disabled={false}>
            </InputLabel>
          </div>
          <div className="mobileAdministracion-add-descripcion">
            <div className="mobileAdministracion-add-descripcion-info">
              <InputLabel required={true} onChange={handleChangeTituloDescripcion} placeholder="El Hotel Hermitage se encuentra a 400 metros de..." label='Título de la Descripción' disabled={false}>
              </InputLabel>
            </div>
            <div className="mobileAdministracion-add-descripcion-info">
              <Label required={true} label='Descripción'></Label>
              <textarea onChange={handleChangeDescription} placeholder='El Hotel Hermitage está ubicado en Tandil, Buenos Aires, a 200 metros de la Plaza San Martín. Este hotel de 3 estrellas cuenta...' name="" id="descripcion-info" cols="30" rows="10" />
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
            <div className='mobileAdministracion-add-atributo-checkbox-container'>
              <div className="mobileAdministracion-add-atributo-checkbox">
                {atributosBD && atributosBD.map((atributo) => {
                  return (
                    <div className="desktopAdministracion-atributos-checkboxs">
                      <Input type="checkbox"></Input>
                      <Icon width='xs' icon={atributo.nombre_icono} />
                      <Label label={atributo.titulo}></Label>
                    </div>
                  )
                })}
              </div>
            </div>
            {atributosRender && atributosRender.map((atributo, index) => {
              return (
                <div key={index++} className="mobileAdministracion-add-atributo-guardado">
                  <div className='mobileAdministracion-add-atributo-parte1-guardado'>
                    <InputLabel disabled={true} name={`AtributoNombreGuardado_${index}`} placeholder={atributo.nombreAtributo} label='Nombre'>
                    </InputLabel>
                    <InputLabel disabled={true} name={`AtributoIconoGuardado_${index}`} placeholder={atributo.iconoAtributo} label='Ícono'>
                    </InputLabel>
                  </div>
                  <div className='mobileAdministracion-add-atributo-parte2-guardado'>
                    <Button label="X" onClick={() => deleteAtribute(atributo.nombreAtributo)} />
                  </div>
                </div>
              )
            })}
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
            <div className="errorContainerAtributo" id="errorContainerAtributo">

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
                {normasDeCasa && normasDeCasa.map((politica, index) => {
                  return (
                    <div key={index++} className="mobile-add-politicas-guardado">
                      <div className='mobile-add-politica-parte1-guardado'>
                        <InputLabel disabled={true} name={`normaDeCasa_${index}`} placeholder={politica.input}>
                        </InputLabel>
                      </div>
                      <div className='mobile-add-politica-parte2-guardado'>
                        <Button label="X" onClick={() => deleteNormaDeCasa(politica.input)} />
                      </div>
                    </div>
                  )
                })}
                <div className="mobile-add-normaDeCasa">
                  <div className='mobileAdministracion-add-normaDeCasa-parte1'>
                    <Label label='Descripción'></Label>
                    <textarea placeholder='Escriba aquí' name="" id="normaDeCasa-info" cols="30" rows="2" />
                  </div>
                  <div className='mobileAdministracion-add-normaDeCasa-parte2'>
                    <Button id="buttonAdd" label="+" onClick={addNormasDeCasa} />
                  </div>
                </div>
                <div className="errorContainer" id="errorContainerNormasDeCasa">
                </div>
              </div>
              <div className="mobile-add-politicas-saludyseguridad">
                <Heading title='h3' variant='primary' type='md' >
                  Salud y Seguridad
                </Heading>
                {saludSeguridad && saludSeguridad.map((politica, index) => {
                  return (
                    <div key={index++} className="mobile-add-politicas-guardado">
                      <div className='mobile-add-politica-parte1-guardado'>
                        <InputLabel disabled={true} name={`saludSeguridad_${index}`} placeholder={politica.input}>
                        </InputLabel>
                      </div>
                      <div className='mobile-add-politica-parte2-guardado'>
                        <Button label="X" onClick={() => deleteSaludSeguridad(politica.input)} />
                      </div>
                    </div>
                  )
                })}
                <div className="mobile-add-saludSeguridad">
                  <div className='mobileAdministracion-add-saludSeguridad-parte1'>
                    <Label label='Descripción'></Label>
                    <textarea placeholder='Escriba aquí' name="" id="saludSeguridad-info" cols="30" rows="2" />
                  </div>
                  <div className='mobileAdministracion-add-saludSeguridad-parte2'>
                    <Button id="buttonAdd" label="+" onClick={addSaludSeguridad} />
                  </div>
                </div>
                <div className="errorContainer" id="errorContainerSaludSeguridad">
                </div>
              </div>
              <div className="mobile-add-politicas-cancelacion">
                <Heading title='h3' variant='primary' type='md' >
                  Políticas de Cancelación
                </Heading>
                {politicasCancelacion && politicasCancelacion.map((politica, index) => {
                  return (
                    <div key={index++} className="mobile-add-politicas-guardado">
                      <div className='mobile-add-politica-parte1-guardado'>
                        <InputLabel disabled={true} name={`politica_${index}`} placeholder={politica.input}>
                        </InputLabel>
                      </div>
                      <div className='mobile-add-politica-parte2-guardado'>
                        <Button label="X" onClick={() => deletePoliticaCancelacion(politica.input)} />
                      </div>
                    </div>
                  )
                })}
                <div className="mobile-add-politicasCancelacion">
                  <div className='mobileAdministracion-add-politicaCancelacion-parte1'>
                    <Label label='Descripción'></Label>
                    <textarea placeholder='Escriba aquí' name="" id="cancelacion-info" cols="30" rows="2" />
                  </div>
                  <div className='mobileAdministracion-add-politicaCancelacion-parte2'>
                    <Button id="buttonAdd" label="+" onClick={addPoliticaCancelacion} />
                  </div>
                </div>
                <div className="errorContainer" id="errorContainerPoliticaCancelacion">

                </div>
              </div>

            </div>
          </div>
          <div className="mobileAdministracion-add-cargarImagen">
            <Heading title='h2' required={true} variant='primary' type='md' >
              Cargar imágenes
            </Heading>
            {imagenesRender.map((imagen, index) => {
              return (
                <div key={index++} className="mobileAdministracion-add-imagen-cargada">
                  <div className='mobileAdministracion-add-imagen-parte1-cargada'>
                    <Input disabled={true} required={true} name={`imagenURLGuardada_${index}`} placeholder={imagen.url}>
                    </Input>
                  </div>
                  <div className='mobileAdministracion-add-imagen-parte2-cargada'>
                    <Button id={`deleteImage_${index}`} label="X" onClick={() => deleteImage(imagen.url)} />
                  </div>
                </div>
              )
            })}
            <div className="mobileAdministracion-add-imagen">
              <div className='mobileAdministracion-add-imagen-parte1'>
                <Input required={true} name="imagenURL" placeholder="Insertar https://">
                </Input>
              </div>
              <div className='mobileAdministracion-add-imagen-parte2'>
                <Button id="buttonAdd" label="+" onClick={addImage} />
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
