import React, { useEffect, useState } from 'react'
import './MisReservas.css'
import { Link, useNavigate } from "react-router-dom";
import { Heading } from '../../atoms/Heading/Heading'
import { Icon } from '../../atoms/Icon/Icon'
import { urlAPI } from "../../../global.js";
import axios from 'axios';

import { ProductsReserve } from '../ProductsReserve/ProductsReserve';

export const MisReservas = () => {

    const [userId, setUserId] = useState(undefined)
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("userData"))) {
            setUserId(JSON.parse(localStorage.getItem("userData")).id);
        }
    }, []);


    const [productsData, setProductsData] = useState([]);
    const [render, setRender] = useState('')

    const [reservasPorId, setReservasPorId] = useState([])
    const [reserveDate, setReserveDate] = useState([])

    useEffect(() => {
        if (reservasPorId) {
            console.log("ReservasPorId ")
            console.log(reservasPorId);
        }if(reserveDate){
            console.log("reserveDate")
            console.log(reserveDate)
            reservasPorId.map((reserva) => {
                
                if(reserva.usuario_id === userId){
                    setReserveDate((prevData) => {
                        if (!prevData) {
                            return {
                                id : reserva.producto_id,
                                fechaInicioReserva : reserva.fechaInicioReserva,
                                fechaFinReserva : reserva.fechaFinReserva
                            }
                        }
                        else {
                            let bandera = false
                            prevData.map((element) => {
                                if (element.id === reserva.producto_id) {
                                    return bandera = true;
                                }
                            });
                            if (!bandera) {
                                return [
                                    ...prevData,
                                    {
                                        id : reserva.producto_id,
                                        fechaInicioReserva : reserva.fechaInicioReserva,
                                        fechaFinReserva : reserva.fechaFinReserva
                                    }
                                ];
                            }
                            else {
                                return prevData;
                            }
                        }
                    })
                }
            })
        }
    }, [reservasPorId,reserveDate])

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('userData')).id;
        axios.get(`${urlAPI}reservas/porUsuarioId/${userId}`).then(response => {
            setProductsData([])
            response.data.map((reserva) => {
                axios.get(`${urlAPI}productos/${reserva.producto_id}`).then((data) => {
                    return setProductsData((prevData) => {
                        if (!prevData) {
                            return data.data
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
            }
            )
        })


    }, [])

    useEffect(() => {
        if (productsData.length > 0) {

            return (

                setRender(
                    <>
                        <ProductsReserve
                            data={productsData} reserveDate={reserveDate} setReservasPorId={setReservasPorId}
                        ></ProductsReserve>
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
