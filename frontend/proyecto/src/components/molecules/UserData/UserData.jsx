import React from 'react'
import { Heading } from '../../atoms/Heading/Heading'
import { Input } from '../../atoms/Input/Input'
import { SpacerHorizontal } from '../../atoms/Spacer/SpacerHorizontal'
import { InputLabel } from '../InputLabel/InputLabel'
import './UserData.css'
export const UserData = () => {
  return (
    <div className='userData' >
        <Heading title='h2' type='lg' variant='primary' >Completá tus datos</Heading>
        <SpacerHorizontal height={'md'} />
        <div className='userData-container'>
            <div className='userData-content' >
                <InputLabel label='Nombre' disabled={true}></InputLabel>
                <InputLabel label={'Apellido'} disabled={true} ></InputLabel>
                <InputLabel label={'Correo electronico'} disabled={true} ></InputLabel>
                <InputLabel label={'Ciudad'} placeholder='Ciudad' ></InputLabel>
                
            </div>
            
        </div>
    </div>
  )
}
