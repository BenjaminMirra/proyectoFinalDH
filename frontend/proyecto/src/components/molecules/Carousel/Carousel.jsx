import React,{useState,useEffect,useContext} from 'react'
import product1 from '../../utils/images/productImg1.png'
import product2 from '../../utils/images/productImg2.jpg'
import product3 from '../../utils/images/productImg3.jpg'
import product4 from '../../utils/images/productImg4.png'
import product5 from '../../utils/images/productImg5.png'
import { MobileCarousel } from './Versions/MobileCarousel'
import { TabletCarousel } from './Versions/TabletCarousel'
import { DesktopCarousel } from './Versions/DesktopCarousel'
import axios from 'axios'
import { urlAPI } from '../../../global'
import { useParams } from 'react-router-dom'
export const Carousel = (props) => {
    const [images,setImages]=useState([])
    const {id}=useParams()
    const [likedProducts, setLikedProducts] = useState([]);
      const imagesTesteo=['https://picsum.photos/200/300','https://picsum.photos/200/300','https://picsum.photos/200/300','https://picsum.photos/200/300',];
    useEffect(() => {
        // console.log(props.product)
        const {product}=props;
        if (product.imagenDTOList!==undefined) {
            product.imagenDTOList.forEach(element => {
                setImages((prevValue) => {
                  if (prevValue.indexOf(element.url_img_producto) == -1) {
                    return [...prevValue, element.url_img_producto];
                  } else {
                    return prevValue;
                  }
                });

                
            });
        }
       
        ;
    }, [props]);
    
    
    

   
    
        
    
    
    
    const [carouselDisplayed,setCarouselDisplayed]=useState(<></>)
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    // {console.log(images)}
    useEffect(() => {
    function handleResize() {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    useEffect(() => {
        if(windowWidth <= 768){
            setCarouselDisplayed(
              <MobileCarousel
               
                
                
                images={images ? images : imagesTesteo}
              />
            );
        }
        else if(windowWidth<=1000){
            setCarouselDisplayed(
              <TabletCarousel
                
               
               
                images={images ? images : imagesTesteo}
              />
            );
        }
        else if(windowWidth>=1001){
            setCarouselDisplayed(
              <DesktopCarousel
                
                
               
                images={images ? images : imagesTesteo}
              />
            );
            
        }
        
        
        
        
        
        
        
    },[windowWidth,images]);

  return (
    <>{carouselDisplayed}</>
  )
}
