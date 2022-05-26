import React from 'react'
import './TabletFilter.css'
import { DropPlaces } from '../../../molecules/DropPlaces/DropPlaces'
import { Heading } from '../../../atoms/Heading/Heading'
import { Button } from '../../../atoms/Button/Button'
import { SpacerHorizontal } from '../../../atoms/Spacer/SpacerHorizontal'
import { CalendarDrop } from '../../../molecules/DropCalendar/CalendarDrop'

export const TabletFilter = () => {
  return (
    <div className='tablet-filter-container'>
        
            <div className='tablet-filter-container-content'>
            <Heading variant='base' type='xl'  >Busca ofertas en hoteles, casas y mucho más</Heading>
            <SpacerHorizontal height='sm' />
            <div className='tablet-filters-button'>
                <DropPlaces placeholder='¿A donde vamos?' icon='location'/>
                <div style={{width:'35%'}}>
                <CalendarDrop/>
                </div>
                <Button size='base' label='Buscar'></Button>
            </div>
            </div>
        </div>
  )
}

