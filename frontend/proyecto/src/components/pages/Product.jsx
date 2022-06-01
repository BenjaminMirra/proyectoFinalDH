import React from 'react'
import { Header } from '../organisms/Header/Header'
import { ProductHeader } from '../molecules/ProductHeader/ProductHeader'
import { LocationInfo } from '../molecules/LocationInfo/LocationInfo'
import { Footer } from '../organisms/Footer/Footer'
import { MobileCarousel } from '../molecules/Carousel/Versions/MobileCarousel'
import { ProductDescription } from '../molecules/ProductDescription/ProductDescription'
import { ProductServices } from '../molecules/ProductServices/ProductServices'
export const Product = () => {
  return (
     <div className='wrapper'>
            <Header firstname={undefined} lastname={undefined}/>
        <div className='contenedor-pagina' >
            
        <ProductHeader category='Hotel' title='Hermitage Hotel'/>
        <LocationInfo location='Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina' rating={8}/>
        <MobileCarousel/>
        <ProductDescription/>
        <ProductServices/>
        
        <Footer/>
        </div>
        
        </div>
  )
}
