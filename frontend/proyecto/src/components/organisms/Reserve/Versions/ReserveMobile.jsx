import React,{useState,useEffect} from 'react'
import {Header} from '../../Header/Header'
import { Footer } from '../../Footer/Footer'
import {ProductHeader} from '../../../molecules/ProductHeader/ProductHeader'
import { UserData } from '../../../molecules/UserData/UserData'
import { ReserveDetail } from '../../../molecules/ReserveDetail/ReserveDetail'
import { CheckInReserve } from '../../../molecules/CheckInReserve/CheckInReserve'
import { ProductInfo } from '../../../molecules/ProductInformation/ProductInfo'
import { ReserveCalendar } from '../../../molecules/ReserveCalendar/ReserveCalendar'
import { MobileReserveDetail } from '../../../molecules/ReserveDetail/MobileReserveDetail'
import { useParams } from 'react-router-dom'
import {urlAPI} from '../../../../global'
import axios from 'axios'
import './ReserveDesktop.css'
import './ReserveMobile.css'
import { SpacerHorizontal } from '../../../atoms/Spacer/SpacerHorizontal'
export const ReserveMobile = ({productData,categoria,locationData}) => {
    
  return (

     <div className='wrapper'>
      <Header />
      <div className='contenedor-pagina' >
        <SpacerHorizontal height={'2md'} />
        <ProductHeader category={categoria?categoria:'cargando'} title={productData?productData.titulo:'cargando'} />
        <div className='reserve-general-container'>
        <div className='mobile-reserve-content'>
            <SpacerHorizontal height={'2md'} />
            <div className='reserve-content-userData'>
                <UserData/>
            </div>
            <SpacerHorizontal height={'2md'} />
            <div className='reserve-content-calendar' >
                <ReserveCalendar reservedDates={productData.reservaDTOList}/>
            </div>
            <SpacerHorizontal height={'2md'} />
            <div className='reserve-content-checkInReserve' >
                <CheckInReserve />
            </div>
            {/* <SpacerHorizontal height={'2md'} /> */}
            <div className='reserve-content-reserveDetail' >
                <MobileReserveDetail location={locationData?locationData:'cargando'} category={categoria?categoria:'cargando'} product={productData?productData:[]} image={productData?productData.imagenDTOList?productData.imagenDTOList[0].url_img_producto:[]:[]} />
            </div>
            <SpacerHorizontal height={'2md'} />
        </div>
        </div>
        <ProductInfo info={productData?productData.politicaListDTO:[]}/>
        <div className="product-footer">
          
        </div>
            <Footer />
      </div>
        
    </div>
  )
}
