import React,{useState} from "react";
import Slider from "react-slick";
import product1 from '../../../utils/images/productImg1.png'
import product2 from '../../../utils/images/productImg2.png'
import product3 from '../../../utils/images/productImg3.png'
import product4 from '../../../utils/images/productImg4.png'
import product5 from '../../../utils/images/productImg5.png'
import { Icon } from "../../../atoms/Icon/Icon";
import { Paragraph } from "../../../atoms/paragraph/Paragraph";
import './MobileCarousel.css'
export function MobileCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const imagesLocal=[product1,product2,product3,product4,product5]
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [favorite,setFavorite]=useState('emptyHeart')
  const toggleFavorite=()=>setFavorite(favorite==='emptyHeart'?'favorite':'emptyHeart')
  return (<>
   <div className="mobileCarousel">
           <div className="mobileCarousel-container">
            <Slider {...settings}>
                 {imagesLocal.map((image,id)=><div className="mobileCarousel-container" key={id}>
                     <img style={{width:'100%'}} src={image} alt="" />
                     <Paragraph variant="base" >{id+1}/{imagesLocal.length}</Paragraph>
                     </div>)}
             </Slider>
             <div className="carousel-icons" >
                 <Icon width="sm" icon="share" />
                 <Icon width="sm" icon={favorite} onClick={toggleFavorite}/>
             </div>
            </div>
      
     </div>
  </>
    
  );
}
