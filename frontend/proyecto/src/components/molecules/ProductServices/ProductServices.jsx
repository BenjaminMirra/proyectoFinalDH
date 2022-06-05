import React from 'react'
import { Heading } from '../../atoms/Heading/Heading'
import { Icon } from '../../atoms/Icon/Icon'
import { Paragraph } from '../../atoms/paragraph/Paragraph'
import './ProductServices.css'
export const ProductServices = ({services}) => {
    const MockUp={
        services:{
            services:['kitchen','airConditioner','parking','wifi','television','pets']
        }
    }
  return (
    <div className='productServices'>
        {console.log(services)}
        <div className='productServices-container'>
        <Heading title='h2' variant='primary'  >¿Qué ofrece este lugar?</Heading>
        </div>
        <hr/>
        <div className="productServices-container">
            <div className='productServices-services'>

            {services&&services.map((service)=><div className='service-description'><Icon width='sm' icon={'wifi'} /><Paragraph>{service.titulo}</Paragraph></div>)}
        </div>
        
        
        </div>
    </div>
  )
}
