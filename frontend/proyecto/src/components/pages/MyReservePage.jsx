import React, { useEffect, useState } from 'react'
import './MyReservePage.css'
import { Header } from '../organisms/Header/Header'
import { Footer } from '../organisms/Footer/Footer'
import { MisReservas } from '../organisms/MisReservas/MisReservas'


export const MyReservePage = () => {

  

  return (
    <div className="reservePage">
      <Header />
      <MisReservas/>
      <Footer />
    </div>
  )
}
