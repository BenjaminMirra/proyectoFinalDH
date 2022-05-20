import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '../organisms/Header/Header'
import { Footer } from '../organisms/Footer/Footer'
import { RegisterForm } from '../organisms/Register/RegisterForm'
const Login = ({}) => {
  return (
    <>
        <Header firstname={undefined} lastname={undefined}/>
        <RegisterForm/>
        <Footer/>
    </>
  )
}

Login.propTypes = {}

export default Login