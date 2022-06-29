import React, { useState, useEffect } from 'react'
import './Administration.css'
import { DesktopAdministration } from './Versiones/DesktopAdministration'
import { MobileAdministration } from './Versiones/MobileAdministration'
import axios from 'axios';
import { urlAPI } from '../../../global.js'
import { useParams } from 'react-router-dom'

export const Administration = () => {

    const { id } = useParams() 

    const [politicas, setPoliticas] = useState([])

    //estado para todas las politicas
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
        imagenDTOList: [],
        caracteristicasDTOList: [],
        politicaListDTO: []
    })

    const [reserveDisplayed, setReserveDisplayed] = useState(<DesktopAdministration />)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [atributosBD, setAtributosBD] = useState([]);
    const [saludSeguridad, setSaludSeguridad] = useState([]);
    const [politicasCancelacion, setPoliticasCancelacion] = useState([]);
    const [normasDeCasa, setNormasDeCasa] = useState([]);

    //Atributos render
    const [atributosRender, setAtributosRender] = useState([]);

    //Imágenes render
    const [imagenesRender, setImagenesRender] = useState([])

    useEffect(() => {
        axios.get(`${urlAPI}caracteristicas/todas`).then(response =>
            setAtributosBD(response.data)
        ).catch(err => console.log(err))
    }, [setAtributosBD])



    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    useEffect(() => {
        if (windowWidth < 768) {
            setReserveDisplayed(<MobileAdministration dataForm={dataForm} setDataForm={setDataForm} normasDeCasa={normasDeCasa} setNormasDeCasa={setNormasDeCasa} saludSeguridad={saludSeguridad} setSaludSeguridad={setSaludSeguridad} politicasCancelacion={politicasCancelacion} setPoliticasCancelacion={setPoliticasCancelacion} imagenesRender={imagenesRender} setImagenesRender={setImagenesRender} atributosRender={atributosRender} setAtributosRender={setAtributosRender} atributosBD={atributosBD} />)
        } else {
            setReserveDisplayed(<DesktopAdministration politicas={politicas} setPoliticas={setPoliticas} dataForm={dataForm} setDataForm={setDataForm} normasDeCasa={normasDeCasa} setNormasDeCasa={setNormasDeCasa} saludSeguridad={saludSeguridad} setSaludSeguridad={setSaludSeguridad} politicasCancelacion={politicasCancelacion} setPoliticasCancelacion={setPoliticasCancelacion} imagenesRender={imagenesRender} setImagenesRender={setImagenesRender} atributosRender={atributosRender} setAtributosRender={setAtributosRender} atributosBD={atributosBD} />)
        }
    }, [windowWidth, atributosBD, atributosRender, imagenesRender, politicasCancelacion, saludSeguridad, normasDeCasa,dataForm,politicas]);
    return (
        <>
            {reserveDisplayed}
        </>
    )
}

