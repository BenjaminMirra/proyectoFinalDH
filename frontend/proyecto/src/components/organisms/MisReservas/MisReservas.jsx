import React, { useEffect, useState } from 'react'
import './MisReservas.css'
import { Link, useNavigate } from "react-router-dom";
import { Heading } from '../../atoms/Heading/Heading'
import { Icon } from '../../atoms/Icon/Icon'
import { Products } from '../Products/Products';
import { urlAPI } from "../../../global.js";
import axios from 'axios';
import { useParams } from "react-router-dom";

export const MisReservas = () => {

    const [reservaProduct, setReservaProduct] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [render, setRender] = useState('')

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('userData')).id;
        axios.get(`${urlAPI}reservas/porUsuarioId/${userId}`).then(response => {
            setProductsData([])
            response.data.map((reserva) =>
                axios.get(`${urlAPI}productos/${reserva.producto_id}`).then((data) => {
                    return setProductsData((prevData) => {
                        // if (prevData) {
                        //     console.log(prevData + " prevdata")
                        //     return [...prevData, data.data]
                        // } else {
                        //     return [data.data]
                        // }
                        if (!prevData) {

                            return  data.data
                        }
                        else {
                            let bandera = false
                            prevData.forEach(element => {
                                if (element.id === data.data.id) {
                                    return bandera = true;
                                }

                            });
                            if (!bandera) {

                                return [
                                    ...prevData,
                                     data.data
                                ];
                            }
                            else {
                                return prevData;
                            }
                        }
                    })
                })
            )
        })


    }, [])

    useEffect(() => {
        if (productsData.length > 0) {

            return (

                setRender(
                    <>
                        <Products
                            data={productsData}
                        ></Products>
                    </>
                )
            )

        } else {
            return (
                setRender(
                    <>
                        <div className="misReservas-vacia">
                            <div className="misReservas-vacia-box">

                                <Icon icon={"prohibido"} />
                                <Heading title="h2" variant="secondary" type='lg'>
                                    Aún no haz efectuado ninguna reserva
                                </Heading>{" "}
                                <Link to={"/"}>
                            <h5>Ir a la página principal</h5>
                        </Link>
                            </div>
                        </div>
                    </>
                )

            )
        }
    }, [productsData])



    return (
        <>
            <div className='misReservas-header'>
                <div className='misReservas-header-container'>
                    <div className='misReservas-header-title'>
                        <Heading title='h2' variant='base' type='md'>Mis Reservas
                        </Heading>
                    </div>
                    <Icon onClick={handleBack} icon='back' />
                </div>
            </div>
            <div className="misReservas-products">
                {render}
            </div>
        </>
    )
}
