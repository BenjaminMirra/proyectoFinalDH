import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import { Heading } from '../../atoms/Heading/Heading'
import { Icon } from '../../atoms/Icon/Icon'
import { Paragraph } from '../../atoms/paragraph/Paragraph'
import { SpacerHorizontal } from '../../atoms/Spacer/SpacerHorizontal'
import './ReserveDetail.css'
export const ReserveDetail = ({product,category,location,reservedDays,setFailReserve}) => {
    const navigate=useNavigate()
    const handleSubmit=()=>{
        console.log(reservedDays.startDate.year);
        
        if (reservedDays.endDate.year=='1969'|| !reservedDays.endDate.year) {
            setFailReserve(true)
            navigate('/login')
        }
        else{
             console.log(reservedDays.startDate.year);
            navigate('/reserva-exitosa')
        }
    }
  return (
    <div className='reserveDetail'>
        <SpacerHorizontal height={'md'} />
        <div className='reserveDetail-container' >
            <Heading title='h3' variant={'primary'} type='lg' >Detalle de la reserva</Heading>
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
                    <span>{reservedDays.startDate.year!=='1969'&&reservedDays.startDate.year?reservedDays.startDate.day: <span className='date-skeleton'>nad</span>}</span> / <span>{reservedDays.startDate.year!=='1969'&&reservedDays.startDate.year?reservedDays.startDate.month:<span className='date-skeleton'>nad</span>}</span> / <span>{reservedDays.startDate.year!=='1969'&&reservedDays.startDate.year?reservedDays.startDate.year:<span className='date-skeleton'>nad</span>}</span>
                </div>
                </div>
                   
                <hr />
                <div className='check-date' >
                     <Paragraph>Check Out  </Paragraph>
                <div>
                   <span>{reservedDays.endDate.year!=='1969'&&reservedDays.endDate.year?reservedDays.endDate.day:<span className='date-skeleton'>nad</span>}</span> / <span>{reservedDays.endDate.year!=='1969'&&reservedDays.endDate.year?reservedDays.endDate.month:<span className='date-skeleton'>nad</span>}</span> / <span>{reservedDays.endDate.year!=='1969'&&reservedDays.endDate.year?reservedDays.endDate.year:<span className='date-skeleton'>nad</span>}</span>          </div>
                </div>
                <hr />
                <div style={{height:'27px'}}></div>
                <SpacerHorizontal height={'lg'} />
               <Button onClick={handleSubmit} label='Confirmar reserva' variant={true} ></Button>
                
                 <SpacerHorizontal height={'md'} />
            </div>
        </div>
    </div>
  )
}
