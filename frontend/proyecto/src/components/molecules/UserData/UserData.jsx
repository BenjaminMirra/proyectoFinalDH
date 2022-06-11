import React,{useState} from 'react'
import { Heading } from '../../atoms/Heading/Heading'
import { Input } from '../../atoms/Input/Input'
import { SpacerHorizontal } from '../../atoms/Spacer/SpacerHorizontal'
import { InputLabel } from '../InputLabel/InputLabel'
import './UserData.css'
export const UserData = () => {
    const[user,setUser]=useState({nombre:'Martin',apellido:'Frei',email:'martinfrei@gmail.com'})
  return (
    <div className='userData' >
        <Heading title='h2' type='lg' variant='primary' >Completá tus datos</Heading>
        <SpacerHorizontal height={'md'} />
        <div className='userData-container'>
            <div className='userData-content' >
                <InputLabel value={user.nombre} label='Nombre' disabled={true}></InputLabel>
                <InputLabel value={user.apellido} label={'Apellido'} disabled={true} ></InputLabel>
                <InputLabel value={user.email} label={'Correo electronico'} disabled={true} ></InputLabel>
                <InputLabel label={'Ciudad'} placeholder='Ciudad' ></InputLabel>
                
            </div>
            
        </div>
    </div>
  )
}
