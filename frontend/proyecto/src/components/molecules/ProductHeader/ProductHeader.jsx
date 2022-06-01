import React from 'react'
import { Link } from "react-router-dom";
import { Heading } from '../../atoms/Heading/Heading'
import { Icon } from '../../atoms/Icon/Icon'
import product1 from '../../utils/images/productImg1.png'
import product2 from '../../utils/images/productImg2.png'
import product3 from '../../utils/images/productImg3.png'
import product4 from '../../utils/images/productImg4.png'
import product5 from '../../utils/images/productImg5.png'
import './ProductHeader.css'
export const ProductHeader = ({category,title}) => {
    const MockData={
        product:{
            category:'Hotel',
            title:'Hermitage Hotel',
            location:'Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina',
            rating:8,
            images:[product1,product2,product3,product4,product5],
            subtitle:'Alójate en el corazón de Buenos Aires',
            description:"Está situado a solo unas calles de la avenida Alvear, de la avenida Quintana, del parque San Martín y del distrito de Recoleta. En las inmediaciones también hay varios lugares de interés, como la calle Florida, el centro comercial Galerías Pacífico, la zona de Puerto Madero, la plaza de Mayo y el palacio Municipal.Nuestros clientes dicen que esta parte de Buenos Aires es su favorita, según los comentarios independientes.El Hotel es un hotel sofisticado de 4 estrellas que goza de una ubicación tranquila, a poca distancia de prestigiosas galerías de arte, teatros, museos y zonas comerciales. Además, hay WiFi gratuita.El establecimiento sirve un desayuno variado de 07:00 a 10:30.",
            specifications:['cocina','aire acondicionado','estacionamiento gratuito','wifi','televisor','apto mascotas','pileta'],
            availableDates:[],
            location:[],
            homeRules:['Check-out: 10:00 am','No se permiten fiestas','No fumar'],
            safetyAndSecurity:['Se aplican pautas de distanciamiento social y otras normas relacionadas con el coronavirus','Detector de humo','Depósito de seguridad']

        
        }
            

        
    }
  return (
    <div className='product-header'>
        <div className='product-header-container'>
        <div className='product-title'>
        <Heading title='h4' variant='base' type='xs' >{category}</Heading>
        <Heading title='h2' variant='base' type='lg' >{title}</Heading>
        </div>
            <Link to={'/'}>
                <Icon icon='back' />
            </Link>
            
            
        
            
       
        </div>
    </div>
  )
}
