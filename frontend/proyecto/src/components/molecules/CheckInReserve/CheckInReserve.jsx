import React from 'react'
import { Paragraph } from '../../atoms/paragraph/Paragraph'
import { Icon } from '../../atoms/Icon/Icon'
import { InputLabel } from '../InputLabel/InputLabel'
import { Heading } from '../../atoms/Heading/Heading'
import './CheckInReserve.css'
import { SpacerHorizontal } from '../../atoms/Spacer/SpacerHorizontal'
export const CheckInReserve = () => {
  return (
    <div className='checkIn' >
        
        <Heading variant={'primary'} type='lg' title='h2' >Tu horario de llegada</Heading>
        <SpacerHorizontal height={'md'} />
        <div className='checkIn-container'>
            <SpacerHorizontal height={'md'} />
            <div className='checkIn-content' >
            <div className='checkIn-info' >
                <Icon icon='seguridad' width={'sm'} />
                <Paragraph>Tu habitación va a estar lista para el check-in entre las <span>10:00 AM</span> y las <span>11:00 PM</span></Paragraph>
            </div>
            <SpacerHorizontal height={'sm'} />
            <InputLabel size={'2xl'} label={'Indicá tu horario estimado de llegada'} placeholder='Seleccionar hora de llegada' ></InputLabel>
        </div>
        <SpacerHorizontal height={'md'} />
        </div>
    </div>
  )
}
