import React from 'react'
import PropTypes from 'prop-types'
import { DropPlaces } from '../../../molecules/DropPlaces/DropPlaces'
import axios from 'axios'
import './MobileFilter.css'
import { Heading } from '../../../atoms/Heading/Heading'
import { Button } from '../../../atoms/Button/Button'
import { SpacerHorizontal } from '../../../atoms/Spacer/SpacerHorizontal'
import { CalendarDrop } from '../../../molecules/DropCalendar/CalendarDrop'
import { urlAPI } from '../../../../global.js';

export const MobileFilter = ( props ) => {

    const scroll = () => {
    
        window.scrollTo(0,1505)
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (props) {
            let ciudadId = undefined;
            if (props.lugarInput == 'San Carlos de Bariloche') {
                ciudadId = 1
                props.setLugarInput('')
                axios.get(`${urlAPI}productos/porCiudad/${ciudadId}`).then(data => props.setFilterProducts(data.data))
                scroll()
            }
            else if (props.lugarInput == 'Buenos Aires') {
                ciudadId = 2;
                props.setLugarInput('')
                axios.get(`${urlAPI}productos/porCiudad/${ciudadId}`).then(data => props.setFilterProducts(data.data))
                scroll()
            }
            else if (props.lugarInput == 'Mendoza') {
                ciudadId = 3;
                props.setLugarInput('')
                axios.get(`${urlAPI}productos/porCiudad/${ciudadId}`).then(data => props.setFilterProducts(data.data))
                scroll()
            }
            else if (props.lugarInput == 'Córdoba') {
                ciudadId = 4;
                props.setLugarInput('')
                axios.get(`${urlAPI}productos/porCiudad/${ciudadId}`).then(data => props.setFilterProducts(data.data))
                scroll()
            }
            else {
                props.setLugarInput('')
                props.setFilterProducts([])
            }

        }
    }


    return (
        <div className='mobile-filter-container'>
            <div className='mobile-filter-container-content'>
                <Heading variant='base' type='xl'  >Busca ofertas en hoteles, <br /> casas y mucho más</Heading>
                <SpacerHorizontal height='sm' />
                <form onSubmit={handleSubmit}>
                    <div className="mobile-filters-button">
                        <DropPlaces lugarInput={props.lugarInput} setLugarInput={props.setLugarInput} placeholder='¿A donde vamos?' icon='location' />
                        <SpacerHorizontal height='xxs' />
                        <div style={{ width: '100%' }}>
                            <CalendarDrop />
                        </div>
                        <SpacerHorizontal height='xxs' />
                        <Button type='submit' size='xl' label='Buscar'></Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

MobileFilter.propTypes = {}

