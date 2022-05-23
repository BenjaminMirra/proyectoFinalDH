import React from 'react'
import { Header } from '../organisms/Header/Header'
import { Footer } from '../organisms/Footer/Footer'
import { RegisterForm } from '../organisms/Register/RegisterForm'
const Login = () => {
  return (
    <>
        <Header firstname={undefined} lastname={undefined}/>
        <RegisterForm/>
        <br /><br /><br />
        <Footer/>
    </>
  )
}

export default Login