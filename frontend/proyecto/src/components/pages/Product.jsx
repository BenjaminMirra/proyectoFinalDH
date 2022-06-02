import React from 'react'
import { Header } from '../organisms/Header/Header'
import { ProductHeader } from '../molecules/ProductHeader/ProductHeader'
import { LocationInfo } from '../molecules/LocationInfo/LocationInfo'
import { Footer } from '../organisms/Footer/Footer'
import { Carousel } from '../molecules/Carousel/Carousel'
import { ProductDescription } from '../molecules/ProductDescription/ProductDescription'
import { ProductServices } from '../molecules/ProductServices/ProductServices'
import { Calendar } from '../molecules/Calendar/Calendar'
import { Map } from '../molecules/Map/Map'
export const Product = () => {
  return (
    <div className='wrapper'>
      <Header firstname={undefined} lastname={undefined} />
      <div className='contenedor-pagina' >

        <ProductHeader category='Hotel' title='Hermitage Hotel' />
        <LocationInfo location='Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina' rating={8} />
        <Carousel />
        <ProductDescription />
        <ProductServices />
        <Calendar />
        <Map />
        <Footer />
      </div>

    </div>
  )
}
