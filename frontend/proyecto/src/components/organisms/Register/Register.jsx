import React,{useState,useEffect} from 'react'
import { InputLabel } from '../../molecules/InputLabel/InputLabel'
import { Heading } from '../../atoms/Heading/Heading'
import { Button } from '../../atoms/Button/Button'
import { SpacerHorizontal } from '../../atoms/Spacer/SpacerHorizontal'
import './Register.css'

export const Register = () => {
    const [medidas,setMedidas]=useState({inputSize:'base',spacerHeight:'xs'})
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    useEffect(() => {
    function handleResize() {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    useEffect(() => {
        if(windowWidth < 768){
            setMedidas({inputSize:'sm',spacerHeight:'xs'})
        }
        else if(windowWidth<1366){
            setMedidas({inputSize:'md',spacerHeight:'md'})
        }
        else if(windowWidth>=1366){
            setMedidas({inputSize:'2xl',spacerHeight:'xs'})

        }
        
    },[windowWidth]);
    
    return (
        <div className="register">
            <div>
                <Heading title='h2' type='md' variant='secondary' >Crear Cuenta</Heading>
            </div>
            <div className="name-surname">
                <div className="name">
                    <InputLabel label={"Nombre"} size={"base"} type={"text"} placeholder={""}></InputLabel>
                </div>
                <SpacerHorizontal height={medidas.spacerHeight} />
                <div className="surname">
                    <InputLabel label={"Apellido"} size={"base"} type={"text"} placeholder={""}></InputLabel>
                </div>
            </div>
            <SpacerHorizontal height={medidas.spacerHeight} />
            <div>
                <InputLabel label={"Correo electrónico"} size={medidas.inputSize} type={"email"} placeholder={""}></InputLabel>
            </div>
            <SpacerHorizontal height={medidas.spacerHeight} />
            <div>
                <InputLabel label={"Contraseña"} size={medidas.inputSize} type={"text"} placeholder={""}></InputLabel>
            </div>
            <SpacerHorizontal height={medidas.spacerHeight} />
            <div>
                <InputLabel label={"Confirmar Contraseña"} size={medidas.inputSize} type={"text"} placeholder={""} isError={true}></InputLabel>
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


