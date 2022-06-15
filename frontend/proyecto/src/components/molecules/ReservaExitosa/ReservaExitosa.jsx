import React from 'react'
import { Heading } from '../../atoms/Heading/Heading'
import { Button } from '../../atoms/Button/Button'
import { Icon } from '../../atoms/Icon/Icon'
import { Paragraph } from '../../atoms/paragraph/Paragraph'
import './ReservaExitosa.css'
import { Link } from 'react-router-dom'
export const ReservaExitosa = () => {

    return (
        <div className="reservaExitosa-contenedor">
            <div className='reservaExitosa'>
                <Icon width='xl' icon="reservaExitosa" />
                <Heading title='h2' type='lg' variant='primary'>!Muchas Gracias!</Heading>
                <Paragraph>Su reserva se ha realizado con éxito</Paragraph>
                <Link to={{
                    pathname: "/"
                }}>
                    <Button label='Ok' />
                </Link >
            </div>
        </div>
    )
}
