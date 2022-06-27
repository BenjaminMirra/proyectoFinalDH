import React, { useState, useEffect } from 'react';
import { Button } from '../../../atoms/Button/Button';
import { Heading } from '../../../atoms/Heading/Heading';
import { Input } from '../../../atoms/Input/Input';
import Label from '../../../atoms/Label/Label';
import axios from 'axios';
import { urlAPI } from '../../../../global.js'
import { SelectPickerCategories } from '../../../atoms/SelectPickerCategories/SelectPickerCategories';
import { SelectPickerPlaces } from '../../../atoms/SelectPickerPlaces/SelectPickerPlaces';
import { AtributeCard } from '../../../molecules/AtributesCard/AtributeCard';
import { InputLabel } from '../../../molecules/InputLabel/InputLabel';
import './DesktopAdministration.css';

export const DesktopAdministration = () => {

    //Mensajes de error
    const [errors, setErrors] = useState({ server: false, data: false });

    //le envío al select Place
    const [places, setPlaces] = useState([]);

    //le envío al select Category
    const [categories, setCategories] = useState([]);

    //Atributos render
    const [atributosRender, setAtributosRender] = useState([]);

    //Imágenes render
    const [imagenesRender, setImagenesRender] = useState([])

    //Guardo toda la info del form aquí
    const [dataForm, setDataForm] = useState({
        descripcion: " ",
        tituloDescripcion: " ",
        precio: " ",
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
        if (dataForm.descripcion === " " || dataForm.latitud === " " || dataForm.longitud === " " || dataForm.nombre === " " || dataForm.ciudad === " " || dataForm.categoria === " " || dataForm.direccion === " " || dataForm.precio === " " || dataForm.tituloDescripcion === " ") {
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

    const atributeContainer = document.getElementById("atributeContainer");
    const atributoNombre = document.getElementById("AtributoNombre");
    const atributoIcono = document.getElementById("AtributoIcono");
    const selectPlaceInfo = document.getElementById("selectPlace");
    const selectCategoryInfo = document.getElementById("selectCategory");
    const errorContainer = document.getElementById("errorContainer");
    const imagenURL = document.getElementById("imagenURL")
    const errorContainerAtributo = document.getElementById("errorContainerAtributo")

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
                descripcion: dataForm.descripcion,
                titulo_descripcion: dataForm.tituloDescripcion,
                direccion: dataForm.direccion,
                latitud: dataForm.latitud,
                longitud: dataForm.longitud,
                ciudad_id: dataForm.ciudad,
                categoria_id: dataForm.categoria,
                precio: dataForm.precio,

            }
            axios({
                method: 'POST',
                url: `${urlAPI}productos/agregar`,
                data: data,
                headers: { 'Access-Control-Allow-Origin': '*/*' }
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
        if (atributoNombre.value != "" && atributoIcono.value != "") {
            const nombre = atributoNombre.value;
            const icono = atributoIcono.value
            setAtributosRender((prevData) => [...prevData, { iconoAtributo: icono, nombreAtributo: nombre }])
            atributoNombre.value = "";
            atributoIcono.value = "";
            errorContainerAtributo.innerHTML = ""
            console.log("agregado atributo")
        } else if (atributoNombre.value != "") {
            errorContainerAtributo.innerHTML = ` <p>
            El ícono no pueden estar vacío
            </p>`
        } else if (atributoIcono.value != "") {
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

        if (imagenURL.value != "") {
            const urlImagen = imagenURL.value;
            setImagenesRender((prevData) => [...prevData, { url: urlImagen }])
            imagenURL.value = ""
            errorContainer.innerHTML = ``
            console.log("agregado imagen")
        } else {
            errorContainer.innerHTML = `<p>
            La url no puede estar vacía
            </p>`
        }
    }

    const deleteAtribute = (indexABorrar) => {
        console.log("borrado atributo")
    }

    const deleteImage = (indexABorrar) => {
        console.log("borrado imagen")

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
        <div className="desktopAdministration-container">
            <div className="desktopAdministration">
                <Heading title='h4' variant='primary' type='lg' >
                    Crear Alojamiento
                </Heading>
                <div className="desktopAdministracion-add">
                    <div className="desktopAdministracion-add-name-category">
                        <div className="desktopAdministracion-add-name">
                            <InputLabel onChange={handleChangeNombre} required={true} placeholder="Hotel Hermitage " label='Nombre' disabled={false}>
                            </InputLabel>
                        </div>
                        <div className="desktopAdministracion-add-category">
                            <SelectPickerCategories categories={categories} setCategories={setCategories} />
                        </div>
                    </div>
                    <div className="desktopAdministracion-add-direccion-ciudad">
                        <div className="desktopAdministracion-add-direccion">
                            <InputLabel required={true} onChange={handleChangeDireccion} placeholder="Av. Colón 1242" label='Dirección' disabled={false}>
                            </InputLabel>
                        </div>
                        <div className="desktopAdministracion-add-ciudad">
                            <SelectPickerPlaces places={places} setPlaces={setPlaces} />
                        </div>
                    </div>
                    <div className="desktopAdministracion-add-tituloDescripcion-precio">
                        <div className="desktopAdministracion-add-tituloDescripcion">
                            <InputLabel required={true} onChange={handleChangeTituloDescripcion} placeholder="El Hotel Hermitage se encuentra a 400 metros de..." label='Título de la Descripción' disabled={false}>
                            </InputLabel>
                        </div>
                        <div className="desktopAdministracion-add-precio">
                            <InputLabel required={true} onChange={handleChangePrecio} placeholder="15.981" label='Precio por noche' disabled={false}>
                            </InputLabel>
                        </div>
                    </div>
                    <div className="desktopAdministracion-add-descripcion">
                        <div className="desktopAdministracion-add-descripcion-info">
                            <Label required={true} label='Descripción'></Label>
                            <textarea onChange={handleChangeDescription} placeholder='Escriba aquí' name="" id="descripcion-info" cols="30" rows="10" />
                        </div>
                    </div>
                    <div className="desktopAdministracion-add-latitud-longitud">
                        <div className="desktopAdministracion-add-latitud">
                            <InputLabel onChange={handleChangeLatitud} required={true} placeholder="Latitud" label='Latitud' disabled={false}>
                            </InputLabel>
                        </div>
                        <div className="desktopAdministracion-add-longitud">
                            <InputLabel onChange={handleChangeLongitud} required={true} placeholder="Longitud" label='Longitud' disabled={false}>
                            </InputLabel>
                        </div>
                    </div>


                    <div className="desktopAdministracion-add-agregarAtributo">
                        <Heading title='h4' variant='primary' type='md' >
                            Agregar atributos
                        </Heading>
                        {atributosRender.map((atributo, index) => {
                            return (
                                <div key={index++} className="desktopAdministracion-add-atributo-guardado">
                                    <div className='desktopAdministracion-add-atributo-parte1-guardado'>
                                        <InputLabel disabled={true} name={`AtributoNombreGuardado_${index}`} placeholder={atributo.nombreAtributo} label='Nombre'>
                                        </InputLabel>
                                    </div>
                                    <div className='desktopAdministracion-add-atributo-parte2-guardado'>
                                        <InputLabel disabled={true} name={`AtributoIconoGuardado_${index}`} placeholder={atributo.iconoAtributo} label='Ícono'>
                                        </InputLabel>
                                    </div>
                                    <div className='desktopAdministracion-add-atributo-parte3-guardado'>
                                        <Button disabled={true} label="X" onClick={deleteAtribute} />
                                    </div>
                                </div>
                            )
                        })}
                        <div className="desktopAdministracion-add-atributo">
                            <div className='desktopAdministracion-add-atributo-parte1'>
                                <InputLabel
                                    name="AtributoNombre" placeholder="Wifi" label='Nombre' disabled={false}>
                                </InputLabel>
                            </div>
                            <div className='desktopAdministracion-add-atributo-parte2'>
                                <InputLabel
                                    name="AtributoIcono" placeholder="fa-wifi" label='Ícono' disabled={false}>
                                </InputLabel>
                            </div>
                            <div className='desktopAdministracion-add-atributo-parte3'>
                                <Button label="+"
                                    onClick={addAtribute} />
                            </div>
                        </div>
                        <div className="desktop-errorContainerAtributo" id="errorContainerAtributo">

                        </div>
                    </div>
                    <div className="desktopAdministracion-add-politicas">
                        <Heading title="h1" variant={"primary"} type="md">
                            Políticas del Producto
                        </Heading>
                        <div className="desktopAdministracion-politicas">
                            <div className="add-politicas-normas">
                                <Heading title='h4' variant='primary' type='md' >
                                    Normas de la Casa
                                </Heading>
                                <Label label='Descripción'></Label>
                                <textarea placeholder='Escriba aquí' name="" id="norma-info" cols="30" rows="10" />
                            </div>
                            <div className="add-politicas-saludyseguridad">
                                <Heading title='h4' variant='primary' type='md' >
                                    Salud y Seguridad
                                </Heading>
                                <Label label='Descripción'></Label>
                                <textarea placeholder='Escriba aquí' name="" id="saludyseguridad-info" cols="30" rows="10" />
                            </div>
                            <div className="add-politicas-cancelacion">
                                <Heading title='h4' variant='primary' type='md' >
                                    Políticas de Cancelación
                                </Heading>
                                <Label label='Descripción'></Label>
                                <textarea placeholder='Escriba aquí' name="" id="cancelacion-info" cols="30" rows="10" />
                            </div>
                        </div>
                    </div>
                    <div className="desktopAdministracion-add-cargarImagen">
                        <Heading required={true} title='h4' variant='primary' type='md' >
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
                                        <Button id={`deleteImage_${index}`} label="X" onClick={deleteImage(index)} />
                                    </div>
                                </div>
                            )
                        })}
                        <div className="desktopAdministracion-add-imagen">
                            <div className='desktopAdministracion-add-imagen-parte1'>
                                <Input required={true} name="imagenURL" placeholder="Insertar https://">
                                </Input>
                            </div>
                            <div className='desktopAdministracion-add-imagen-parte2'>
                                <Button label="+" onClick={addImage} />
                            </div>
                        </div>
                    </div>

                    <div className="errorContainer" id="errorContainer">

                    </div>
                    <div className='desktopAdminsitracion-add-button'>
                        <Button label={buttonValue.value}
                            disabled={buttonValue.disabled}
                            onClick={postData} />
                    </div>
                </div>
            </div>


        </div>
    )
}
