import React, { useState, useEffect } from 'react'
import './Administration.css'
import { DesktopAdministration } from './Versiones/DesktopAdministration'
import { MobileAdministration } from './Versiones/MobileAdministration'
import axios from 'axios';
import { urlAPI } from '../../../global.js'
import { useParams } from 'react-router-dom'

export const Administration = () => {

    const { id } = useParams()

    const [reserveDisplayed, setReserveDisplayed] = useState(<DesktopAdministration />)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [atributosBD, setAtributosBD] = useState([])

    //Atributos render
    const [atributosRender, setAtributosRender] = useState([]);

    //Imágenes render
    const [imagenesRender, setImagenesRender] = useState([])

    useEffect(() => {
        if (atributosBD) {
            console.log(atributosBD)
        }
    }, [atributosBD])

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
            setReserveDisplayed(<MobileAdministration imagenesRender={imagenesRender} setImagenesRender={setImagenesRender} atributosRender={atributosRender} setAtributosRender={setAtributosRender} atributosBD={atributosBD} />)
        } else {
            setReserveDisplayed(<DesktopAdministration imagenesRender={imagenesRender} setImagenesRender={setImagenesRender} atributosRender={atributosRender} setAtributosRender={setAtributosRender} atributosBD={atributosBD} />)
        }
    }, [windowWidth, atributosBD, atributosRender, imagenesRender]);
    return (
        <>
            {reserveDisplayed}
        </>
    )
}

