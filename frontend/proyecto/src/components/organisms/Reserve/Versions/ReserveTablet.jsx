import React,{useState,useEffect} from 'react'
import {Header} from '../../Header/Header'
import { Footer } from '../../Footer/Footer'
import {ProductHeader} from '../../../molecules/ProductHeader/ProductHeader'
import { UserData } from '../../../molecules/UserData/UserData'
import { ReserveDetail } from '../../../molecules/ReserveDetail/ReserveDetail'
import { CheckInReserve } from '../../../molecules/CheckInReserve/CheckInReserve'
import { ProductInfo } from '../../../molecules/ProductInformation/ProductInfo'
import { ReserveCalendar } from '../../../molecules/ReserveCalendar/ReserveCalendar'
import { TabletReserveDetail } from '../../../molecules/ReserveDetail/TabletReserveDetail'
import './ReserveTablet.css'
import { SpacerHorizontal } from '../../../atoms/Spacer/SpacerHorizontal'

export const ReserveTablet = ({productData,categoria,locationData,reservedDays,setReservedDays}) => {
    
  return (

     <div className='wrapper'>
      <Header />
      <div className='contenedor-pagina' >

        <ProductHeader category={categoria?categoria:'cargando'} title={productData?productData.titulo:'cargando'} />
        <div className='tablet-reserve-general-container'>
        <div className='tablet-reserve-content'>
            <SpacerHorizontal height={'2md'} />
            <div className='tablet-reserve-content-userData'>
                <UserData/>
            </div>
            <SpacerHorizontal height={'2md'} />
            <div className='tablet-reserve-content-calendar' >
                <ReserveCalendar setReservedDays={setReservedDays} reservedDates={productData.reservaDTOList} />
            </div>
            <SpacerHorizontal height={'2md'} />
            <div className='tablet-reserve-content-checkInReserve' >
                <CheckInReserve/>
            </div>
            <SpacerHorizontal height={'2md'} />
            <div className='tablet-reserve-content-reserveDetail' >
                <TabletReserveDetail reservedDays={reservedDays} location={locationData?locationData:'cargando'} category={categoria?categoria:'cargando'} product={productData?productData:[]} image={productData?productData.imagenDTOList?productData.imagenDTOList[0].url_img_producto:[]:[]} />
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
