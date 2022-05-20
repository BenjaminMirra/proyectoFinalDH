import React from 'react'
import { InputLabel } from '../../molecules/InputLabel/InputLabel'
import { Heading } from '../../atoms/Heading/Heading'
import { Button } from '../../atoms/Button/Button'
import './Register.css'

export const Register = () => {


    return (
        <div className="register">
            <div>
                <Heading title='h2' type='md' variant='secondary' >Crear Cuenta</Heading>
            </div>
            <div className="name-surname">
                <div className="name">
                    <InputLabel label={"Nombre"} size={"base"} type={"text"} placeholder={""}></InputLabel>
                </div>
                <div className="surname">
                    <InputLabel label={"Apellido"} size={"base"} type={"text"} placeholder={""}></InputLabel>
                </div>
            </div>
            <div>
                <InputLabel label={"Correo electrónico"} size={"2xl"} type={"email"} placeholder={""}></InputLabel>
            </div>
            <div>
                <InputLabel label={"Contraseña"} size={"2xl"} type={"text"} placeholder={""}></InputLabel>
            </div>
            <div>
                <InputLabel label={"Confirmar Contraseña"} size={"2xl"} type={"text"} placeholder={""} isError={true}></InputLabel>
            </div>
            <div className='boton-register'>
                <Button size='xs' variant={false} label='Crear cuenta' ></Button>

                <p>
                    ¿Ya tienes cuenta?
                    <a href="null"> Crear Cuenta</a >
                </p>
            </div>

        </div>
    )
}


