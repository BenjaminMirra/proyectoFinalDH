import React from 'react'
import { Header } from '../organisms/Header/Header'
import { Footer } from '../organisms/Footer/Footer'
import { RegisterForm } from '../organisms/Register/RegisterForm'
import './SignUp.css'
export const SignUp = () => {
  return (
    <>
        <div className='login-page'>
        <Header firstname={undefined} lastname={undefined}/>
        <RegisterForm/>
        <Footer/>
        </div>
    </>
  )
}

