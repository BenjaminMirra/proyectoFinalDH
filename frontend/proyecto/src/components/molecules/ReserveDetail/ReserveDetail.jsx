import React from 'react'
import { Button } from '../../atoms/Button/Button'
import { Heading } from '../../atoms/Heading/Heading'
import { Icon } from '../../atoms/Icon/Icon'
import { Paragraph } from '../../atoms/paragraph/Paragraph'
import { SpacerHorizontal } from '../../atoms/Spacer/SpacerHorizontal'
import './ReserveDetail.css'
export const ReserveDetail = ({product,category,location}) => {

  return (
    <div className='reserveDetail'>
        <SpacerHorizontal height={'md'} />
        <div className='reserveDetail-container' >
            <Heading title='h3' variant={'primary'} type='md' >Detalle de la reserva</Heading>
        </div>
        <SpacerHorizontal height={'md'} />
        <div className='reserveDetail-image-product'>
            <img style={{width:'100%',height:'100%'}} src={product.imagenDTOList?product.imagenDTOList[0].url_img_producto:''} alt="" />
        </div>
        <SpacerHorizontal height={'md'} />
        <div className='reserveDetail-container' >
            <div className='reserveDetail-product-info'>
                <Paragraph size={'md'} >{category}</Paragraph>
                <SpacerHorizontal height={'xxs'} />
                <Heading title={'h4'} variant='primary' type={'md'} >{product.titulo}</Heading>
                
                <div className='reserveDetail-stars'>   
                    <Icon icon={'star'} /><Icon icon={'star'} /><Icon icon={'star'} /><Icon icon={'star'} /><Icon icon={'star'} />
                </div>
                <SpacerHorizontal height={'xs'} />
                <div className='reserveDetail-location'>
                    <Icon icon='location' width={'sm'} />
                    <Paragraph> {location} </Paragraph>
                </div>
                
                <hr />
                
                <div className='check-date' >
                     <Paragraph>Check In  </Paragraph>
                <div>
                    <span>11</span> / <span>06</span> / <span>2022</span>
                </div>
                </div>
                   
                <hr />
                <div className='check-date' >
                     <Paragraph>Check Out  </Paragraph>
                <div>
                   <span>20</span> / <span>06</span> / <span>2022</span>
                </div>
                </div>
                <hr />
                <div style={{height:'27px'}}></div>
                <SpacerHorizontal height={'lg'} />
                <Button label='Confirmar reserva' variant={true} ></Button>
                 <SpacerHorizontal height={'md'} />
            </div>
        </div>
    </div>
  )
}
