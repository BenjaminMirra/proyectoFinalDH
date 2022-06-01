import React,{useState} from "react";
import Slider from "react-slick";
import product1 from '../../../utils/images/productImg1.png'
import product2 from '../../../utils/images/productImg2.jpg'
import product3 from '../../../utils/images/productImg3.jpg'
import product4 from '../../../utils/images/productImg4.png'
import product5 from '../../../utils/images/productImg5.png'
import { Icon } from "../../../atoms/Icon/Icon";
import { Paragraph } from "../../../atoms/paragraph/Paragraph";
import './TabletCarousel.css'
export function TabletCarousel({images}) {

  const imagesLocal=[product1,product2,product3,product4,product5]
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3500,
    lazyLoad:'ondemand',
    slideCount:true,
    
  };
  const [favorite,setFavorite]=useState('emptyHeart')
  const toggleFavorite=()=>setFavorite(favorite==='emptyHeart'?'favorite':'emptyHeart')
  return (<> 
           <div className="contenedor-tablet-carousel" >

             <div className="tablet-slider-container">
            <Slider  {...settings}>
               {imagesLocal.map((image,id)=><div className="tablet-imagenes" key={id}>
                     <img src={image} alt="" />
                     <div className="counter-carousel">
                     <Paragraph variant="base" >{id+1}/{imagesLocal.length}</Paragraph>
                     </div>
                     </div>)}

                
                
              
             </Slider>
             </div>
             <div className="tablet-carousel-icons" >
                 <Icon width="lg" icon="share" />
                 <Icon width="lg" icon={favorite} onClick={toggleFavorite}/>
             </div>
            </div>

             
            
         
  </>
    
  );
}
