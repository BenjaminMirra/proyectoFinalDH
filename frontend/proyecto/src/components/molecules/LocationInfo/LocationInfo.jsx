import React,{useState,useEffect} from 'react'
import { Icon } from '../../atoms/Icon/Icon'
import { Paragraph } from '../../atoms/paragraph/Paragraph'
import './LocationInfo.css'
export const LocationInfo = ({location,rating}) => {
    const [stars,setStars]=useState('')
    useEffect(() => {
        if (rating) {
          setStars(rating/2)
        }
    }, [rating]);
    
  return (
    <div className='location-info'>
        <div className='location-info-container'>
        <div className='location-info-location'>
        <Icon width='sm' icon='location' />
        <Paragraph  >{location}</Paragraph>
        </div>
        <div className='location-info-rating'>
          {console.log(stars)}
            {stars&&stars===1||stars===0.5&&<div className='rating-stars'><Paragraph>Malo</Paragraph> <div className='stars-container'><Icon icon='star'/><Icon icon='emptyStar'/><Icon icon='emptyStar'/><Icon icon='emptyStar'/><Icon icon='emptyStar'/></div> </div>}
            {stars&&stars===2||stars===2.5&& <div className='rating-stars'><Paragraph>Regular</Paragraph> <div className='stars-container'> <Icon icon='star'/><Icon icon='star'/><Icon icon='emptyStar'/><Icon icon='emptyStar'/><Icon icon='emptyStar'/> </div></div>}
            {stars&&stars===3||stars==3.5&& <div className='rating-stars'><Paragraph>Bueno</Paragraph> <div className='stars-container' > <Icon icon='star'/><Icon icon='star'/><Icon icon='star'/><Icon icon='emptyStar'/><Icon icon='emptyStar'/> </div></div>}
            {stars&&stars==4.5 ||stars===4 && <div className='rating-stars'><Paragraph>Muy Bueno</Paragraph> <div className='stars-container' > <Icon icon='star'/><Icon icon='star'/><Icon icon='star'/><Icon icon='star'/><Icon icon='emptyStar'/></div> </div>}
            {stars&&stars===5&& <div className='rating-stars'><Paragraph>Excelente</Paragraph> <div className='stars-container' > <Icon icon='star'/><Icon icon='star'/><Icon icon='star'/><Icon icon='star'/><Icon icon='star'/></div> </div> }
        <div className="product-rating-score">
            <Paragraph>{rating}</Paragraph>
        </div>
        
        </div>
        
        </div>
    </div>
  )
}
