import React from 'react'
import PropTypes from 'prop-types'
import { DropPlaces } from '../../../molecules/DropPlaces/DropPlaces'

import './MobileFilter.css'
import { Heading } from '../../../atoms/Heading/Heading'
import { Button } from '../../../atoms/Button/Button'
import { SpacerHorizontal } from '../../../atoms/Spacer/SpacerHorizontal'
import { CalendarDrop } from '../../../molecules/DropCalendar/CalendarDrop'

export const MobileFilter = ({}) => {
    return (
        <div className='mobile-filter-container'>
            <div className='mobile-filter-container-content'>
            <Heading variant='base' type='xl'  >Busca ofertas en hoteles, <br /> casas y mucho más</Heading>
            <SpacerHorizontal height='sm' />
            
            <DropPlaces placeholder='¿A donde vamos?' icon='location'/>
            <SpacerHorizontal height='xxs' />
            <div style={{width:'100%'}}>
            <CalendarDrop/>
            </div>
            <SpacerHorizontal height='xxs' />
            <Button size='xl' label='Buscar'></Button>
            
            </div>
        </div>
    )
}

MobileFilter.propTypes = {}

