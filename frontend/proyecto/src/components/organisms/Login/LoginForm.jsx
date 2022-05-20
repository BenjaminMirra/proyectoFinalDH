import React from 'react'
import { InputLabel } from '../../molecules/InputLabel/InputLabel'
import { Heading } from '../../atoms/Heading/Heading'
import { Button } from '../../atoms/Button/Button'
import './LoginForm.css'

export const LoginForm = () => {


    return (
        <div className="login">
            <div>
                <Heading title='h2' type='md' variant='secondary' >Iniciar Sesión</Heading>
            </div>
            <div>
                <InputLabel label={"Correo electrónico"} size={"2xl"} type={"email"} placeholder={""}></InputLabel>
            </div>
            <div>
                <InputLabel label={"Confirmar Contraseña"} size={"2xl"} type={"text"} placeholder={""} isError={false}></InputLabel>
            </div>
            <div className='boton-login'>
                <Button size='xs' variant={false} label='Crear cuenta' ></Button>

                <p>
                    ¿Aún no tienes cuenta?
                    <a href="null"> Registrate</a >
                </p>
            </div>
            
        </div>
    )
}


