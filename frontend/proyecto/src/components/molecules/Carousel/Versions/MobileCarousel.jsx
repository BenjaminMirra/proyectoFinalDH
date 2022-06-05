import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import product1 from '../../../utils/images/productImg1.png'
import product2 from '../../../utils/images/productImg2.png'
import product3 from '../../../utils/images/productImg3.jpg'
import product4 from '../../../utils/images/productImg4.jpg'
import product5 from '../../../utils/images/productImg5.jpg'
import { Icon } from "../../../atoms/Icon/Icon";
import { Paragraph } from "../../../atoms/paragraph/Paragraph";
import './MobileCarousel.css'
import { MockUp } from "../../MockUpCard/MockUp";
export function MobileCarousel(props) {
   const images=props.images
  
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
    
  };
  const [favorite,setFavorite]=useState('emptyHeart')
  const toggleFavorite=()=>setFavorite(favorite==='emptyHeart'?'favorite':'emptyHeart')
  const [load,setLoad]=useState(true)
    useEffect(() => {
        setTimeout(()=>{
          if (props.images) {
            setLoad(false)
          }
          },2000)
    }, [props.images]);
  return (<>
  {load?<MockUp width='100%' height='380px'/>:<div className="mobileCarousel">
           <div className="mobileCarousel-container">
            <Slider {...settings}>
                 {images.map((image,id)=><div className="mobileCarousel-container" key={id}>
                     <img style={{width:'100%',height:'380px'}} src={image} alt="" />
                     <div className="counter-carousel">
                     <Paragraph variant="base" >{id+1}/{images.length}</Paragraph>
                     </div>
                     </div>)}
             </Slider>
             <div className="carousel-icons" >
                 <Icon width="md" icon="share" />
                 <Icon width="md" icon={favorite} onClick={toggleFavorite}/>
             </div>
            </div>
      
     </div>}
   
  </>
    
  );
}
