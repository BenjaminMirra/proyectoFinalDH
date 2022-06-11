import React from 'react'
import { Heading } from '../../atoms/Heading/Heading'
import { SpacerHorizontal } from '../../atoms/Spacer/SpacerHorizontal'
import './ReserveCalendar.css'
export const ReserveCalendar = () => {
  return (
    <div className='reserveCalendar' >
        <Heading title='h2' variant={'primary'} type='lg' >Seleccioná tu fecha de reserva</Heading>
        <SpacerHorizontal height={'md'} />
        <div className='reserveCalendar-container'>

        </div>
    </div>
  )
}
