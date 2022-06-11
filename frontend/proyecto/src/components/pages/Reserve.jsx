import React from 'react'
import { Header } from '../organisms/Header/Header'
import { Footer } from '../organisms/Footer/Footer'
import { ProductHeader } from '../molecules/ProductHeader/ProductHeader'
import { UserData } from '../molecules/UserData/UserData'
import { ReserveDetail } from '../molecules/ReserveDetail/ReserveDetail'
import { CheckInReserve } from '../molecules/CheckInReserve/CheckInReserve'
import { ProductInfo } from '../molecules/ProductInformation/ProductInfo'
import { ReserveCalendar } from '../molecules/ReserveCalendar/ReserveCalendar'
import './Reserve.css'

export const Reserve = () => {
  return (

     <div className='wrapper'>
      <Header />
      <div className='contenedor-pagina' >

        <ProductHeader category={'Hotel'} title={'Hotel epico'} />
        <div className='reserve-general-container'>
        <div className='reserve-content'>
            <div className='reserve-content-userData'>
                <UserData/>
            </div>
            <div className='reserve-content-reserveDetail' >
                <ReserveDetail/>
            </div>
            <div className='reserve-content-calendar' >
                <ReserveCalendar/>
            </div>
            <div className='reserve-content-checkInReserve' >
                <CheckInReserve/>
            </div>
        </div>
        </div>
        <ProductInfo/>
        <div className="product-footer">
          
        </div>
            <Footer />
      </div>
        
    </div>
  )
}
