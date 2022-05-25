import React from 'react'
import { Header } from '../organisms/Header/Header'
import { Footer } from '../organisms/Footer/Footer'
import { LoginForm } from '../organisms/Login/LoginForm'
import './Login.css'
export const Login = () => {
  return (
    <>
        <div className='contenedor-pagina'>
        <Header firstname={undefined} lastname={undefined}/>
        <LoginForm/>
        <Footer/>
        </div>
    </>
  )
}

