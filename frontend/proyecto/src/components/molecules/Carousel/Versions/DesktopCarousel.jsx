import React,{useState,useEffect} from 'react'
import product1 from '../../../utils/images/productImg1.png'
import product2 from '../../../utils/images/productImg2.jpg'
import product3 from '../../../utils/images/productImg3.jpg'
import product4 from '../../../utils/images/productImg4.jpg'
import product5 from '../../../utils/images/productImg5.jpg'
import {WatchMore} from './WatchMore'
import { Icon } from "../../../atoms/Icon/Icon";
import { Paragraph } from "../../../atoms/paragraph/Paragraph";
import './DesktopCarousel.css'
import { MockUp } from '../../MockUpCard/MockUp'

export function DesktopCarousel(props){
    // const imagesLocal=[product1,product2,product3,product4,product5]

    const images=props.images
    const [favorite,setFavorite]=useState('bEmptyHeart')
    
    const toggleFavorite=()=>setFavorite((prevValue)=>prevValue==='bEmptyHeart'?'bFavorite':'bEmptyHeart')
    const [show,setShow]=useState(false)
    const [load,setLoad]=useState(true)
    useEffect(() => {
        setTimeout(()=>{
          if (props.images) {
            setLoad(false)
          }
          },1500)
    }, [props.images]);
    const DesktopCarouselMockUp=()=>{
      return(<>
         <div className='desktop-icons-mockUp'>
            <div className='desktop-icons-container-mockUp'>
              <div style={{width:'40px', height:'40px'}} >
                <MockUp  width='100%' height='100%' />
              </div>
              
              <div style={{width:'40px',height:'40px'}} >
                <MockUp width='100%' height='100%' />
              </div>
            </div>
         </div>

        <div className='desktopCarousel-container-mockUp'>
    
      <div className="desktopCarousel-image-mockUp desktopCarousel-image-mockUp-1">     <MockUp width='100%' height='100%'/></div>
      <div className="desktopCarousel-image-mockUp desktopCarousel-image-mockUp-others"><MockUp width='100%' height='100%'/></div>
      <div className="desktopCarousel-image-mockUp desktopCarousel-image-mockUp-others"><MockUp width='100%' height='100%'/></div>
      <div className="desktopCarousel-image-mockUp desktopCarousel-image-mockUp-others"><MockUp width='100%' height='100%'/></div>
      <div className="desktopCarousel-image-mockUp desktopCarousel-image-mockUp-others"><MockUp width='100%' height='100%'/></div>
    
  </div>
  </>)
    }
  return (<>
    {load?<DesktopCarouselMockUp/>: <div className='desktopCarousel'>
      <WatchMore images={images} setShow={setShow} show={show}/>
        <div className='desktop-icons'>
            <div className='desktop-icons-container'>
                <Icon width='lg' icon='bShare' />
                <Icon width='lg' icon={favorite} onClick={toggleFavorite} />
            </div>
        </div>
        <div className='desktopCarousel-container' >
            {images.map((image,id)=><div className={`desktopCarousel-image desktopCarousel-image-${id+1} `}> <img src={image} alt="" /> </div>)}
            <div className="watch-more">
            <Paragraph onClick={()=>setShow(true)} variant='base' size='lg' >Ver más</Paragraph>
            </div>
        </div>
        
    </div>}
 
  </>
    
  )
}

function DesktopCarouselMockUp(){
  
}