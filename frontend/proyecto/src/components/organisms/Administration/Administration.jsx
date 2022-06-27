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

    useEffect(() => {
        axios.get(`${urlAPI}atributos/todos`).then(data => {
            setAtributosBD(data.data)
        })

    }, [])

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    useEffect(() => {
        if (windowWidth < 768) {
            setReserveDisplayed(<MobileAdministration />)
        }
        else if (windowWidth <= 1365) {
            setReserveDisplayed(<DesktopAdministration />)
        }
        else if (windowWidth >= 1366) {
            setReserveDisplayed(<DesktopAdministration />)
        }
    }, [windowWidth]);
    return (
        <>
            {reserveDisplayed}
        </>
    )
}

