import React from 'react'
import './Administracion.css'
import { Header } from '../organisms/Header/Header'
import { Footer } from '../organisms/Footer/Footer'
import { Administration } from '../organisms/Administration/Administration'

export const Administracion = () => {
  return (
    < div className="administrationPage">
    <Header/>
    <Administration/>
    <Footer/>
    </div>
  )
}
