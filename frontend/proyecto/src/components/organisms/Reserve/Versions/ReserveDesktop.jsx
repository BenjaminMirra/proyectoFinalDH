import React,{useState,useEffect} from 'react'
import {Header} from '../../Header/Header'
import { Footer } from '../../Footer/Footer'
import {ProductHeader} from '../../../molecules/ProductHeader/ProductHeader'
import { UserData } from '../../../molecules/UserData/UserData'
import { ReserveDetail } from '../../../molecules/ReserveDetail/ReserveDetail'
import { CheckInReserve } from '../../../molecules/CheckInReserve/CheckInReserve'
import { ProductInfo } from '../../../molecules/ProductInformation/ProductInfo'
import { ReserveCalendar } from '../../../molecules/ReserveCalendar/ReserveCalendar'
import { useParams } from 'react-router-dom'
import {urlAPI} from '../../../../global'
import axios from 'axios'
import './ReserveDesktop.css'

export const ReserveDesktop = ({productData,categoria,locationData,reservedDays,setReservedDays,setFailReserve}) => {
    
  return (

     <div className='wrapper'>
      <Header />
      <div className='contenedor-pagina' >

        <ProductHeader category={categoria?categoria:'cargando'} title={productData?productData.titulo:'cargando'} />
        <div className='reserve-general-container'>
        <div className='reserve-content'>
            <div className='reserve-content-userData'>
                <UserData/>
            </div>
            
            <div className='reserve-content-reserveDetail' >
                <ReserveDetail setFailReserve={setFailReserve} reservedDays={reservedDays} location={locationData?locationData:'cargando'} category={categoria?categoria:'cargando'} product={productData?productData:[]} image={productData?productData.imagenDTOList?productData.imagenDTOList[0].url_img_producto:[]:[]} />
            </div>
            <div className='reserve-content-calendar' >
                <ReserveCalendar setReservedDays={setReservedDays} reservedDates={productData.reservaDTOList} />
            </div>
            <div className='reserve-content-checkInReserve' >
                <CheckInReserve/>
            </div>
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
