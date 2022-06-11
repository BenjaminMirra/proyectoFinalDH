import React from 'react'
import { Button } from '../../atoms/Button/Button'
import { Heading } from '../../atoms/Heading/Heading'
import { Icon } from '../../atoms/Icon/Icon'
import { Paragraph } from '../../atoms/paragraph/Paragraph'
import { SpacerHorizontal } from '../../atoms/Spacer/SpacerHorizontal'
import './ReserveDetail.css'
export const ReserveDetail = () => {
  return (
    <div className='reserveDetail'>
        <SpacerHorizontal height={'md'} />
        <div className='reserveDetail-container' >
            <Heading title='h3' variant={'primary'} type='md' >Detalle de la reserva</Heading>
        </div>
        <SpacerHorizontal height={'md'} />
        <div className='reserveDetail-image-product'>
            <img src='' alt="" />
        </div>
        <SpacerHorizontal height={'md'} />
        <div className='reserveDetail-container' >
            <div className='reserveDetail-product-info'>
                <Paragraph size={'md'} >HOTEL</Paragraph>
                <SpacerHorizontal height={'xxxs'} />
                <Heading title={'h4'} variant='primary' type={'md'} >Hermitage Hotel</Heading>
                <SpacerHorizontal height={'xxxs'} />
                <div className='reserveDetail-stars'>   
                    <Icon icon={'star'} /><Icon icon={'star'} /><Icon icon={'star'} /><Icon icon={'star'} /><Icon icon={'star'} />
                </div>
                <SpacerHorizontal height={'xxs'} />
                <div className='reserveDetail-location'>
                    <Icon icon='location' width={'sm'} />
                    <Paragraph>  Av. Colon 1643, Buenos Aires, Ciudad Autonoma de Buenos Aires, Argentina </Paragraph>
                </div>
                
                <hr />
                <SpacerHorizontal height={'md'} />
                <Paragraph>Check In <span>_</span>/ <span>_</span>/ <span>_</span> </Paragraph>
                <hr />
                <Paragraph>Check Out <span>_</span>/ <span>_</span>/ <span>_</span> </Paragraph>
                <hr />
                <div style={{height:'17px'}}></div>
                <SpacerHorizontal height={'lg'} />
                <Button label='Confirmar reserva' variant={true} ></Button>
                 <SpacerHorizontal height={'md'} />
            </div>
        </div>
    </div>
  )
}
