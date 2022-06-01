import React,{useState} from 'react'
import product1 from '../../../utils/images/productImg1.png'
import product2 from '../../../utils/images/productImg2.jpg'
import product3 from '../../../utils/images/productImg3.jpg'
import product4 from '../../../utils/images/productImg4.png'
import product5 from '../../../utils/images/productImg5.png'
import { Icon } from "../../../atoms/Icon/Icon";
import { Paragraph } from "../../../atoms/paragraph/Paragraph";
import './DesktopCarousel.css'
export const DesktopCarousel = ({images}) => {
    const imagesLocal=[product1,product2,product3,product4,product5]
    const [favorite,setFavorite]=useState('bEmptyHeart')
    const toggleFavorite=()=>setFavorite((prevValue)=>prevValue==='bEmptyHeart'?'bFavorite':'bEmptyHeart')
  return (
    <div className='desktopCarousel'>
        <div className='desktop-icons'>
            <div className='desktop-icons-container'>
                <Icon width='lg' icon='bShare' />
                <Icon width='lg' icon={favorite} onClick={toggleFavorite} />
            </div>
        </div>
        <div className='desktopCarousel-container' >
            {imagesLocal.map((image,id)=><div className={`desktopCarousel-image desktopCarousel-image-${id+1} `}> <img src={image} alt="" /> </div>)}
        </div>
    </div>
  )
}
