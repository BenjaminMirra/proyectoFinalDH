import React,{useState,useEffect} from 'react'
import product1 from '../../utils/images/productImg1.png'
import product2 from '../../utils/images/productImg2.jpg'
import product3 from '../../utils/images/productImg3.jpg'
import product4 from '../../utils/images/productImg4.png'
import product5 from '../../utils/images/productImg5.png'
import { MobileCarousel } from './Versions/MobileCarousel'
import { TabletCarousel } from './Versions/TabletCarousel'
import { DesktopCarousel } from './Versions/DesktopCarousel'
export const Carousel = () => {
    const [carouselDisplayed,setCarouselDisplayed]=useState(<><DesktopCarousel /></>)
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    useEffect(() => {
    function handleResize() {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    useEffect(() => {
        if(windowWidth <= 768){
            setCarouselDisplayed(<MobileCarousel  />)
        }
        else if(windowWidth<=1000){
            setCarouselDisplayed(<TabletCarousel  />)
        }
        else if(windowWidth>=1001){
            setCarouselDisplayed(<DesktopCarousel  />)
        }
        
        
        
        
        
        
        
    },[windowWidth]);

  return (
    <>{carouselDisplayed}</>
  )
}
