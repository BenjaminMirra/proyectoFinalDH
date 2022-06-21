import React,{useState,useEffect} from 'react'
import product1 from '../../../utils/images/productImg1.png'
import product2 from '../../../utils/images/productImg2.jpg'
import product3 from '../../../utils/images/productImg3.jpg'
import product4 from '../../../utils/images/productImg4.jpg'
import product5 from '../../../utils/images/productImg5.jpg'
import {FacebookShareButton,TwitterShareButton, WhatsappIcon, WhatsappShareButton,LinkedinIcon,LinkedinShareButton, TwitterIcon} from 'react-share'
import { FacebookIcon } from 'react-share'
import {WatchMore} from './WatchMore'
import { Icon } from "../../../atoms/Icon/Icon";
import { Paragraph } from "../../../atoms/paragraph/Paragraph";
import './DesktopCarousel.css'
import { MockUp } from '../../MockUpCard/MockUp'
import { useParams } from 'react-router-dom'

export function DesktopCarousel(props){
    // const imagesLocal=[product1,product2,product3,product4,product5]

    const images=props.images
    const {id}=useParams()
    
    const toggleFavorite=(id)=>{
      props.handleFavorite(id);
    }
    const [show,setShow]=useState(false)
    const [load,setLoad]=useState(true)
    const [share,setShare]=useState(false)
    useEffect(() => {
        setTimeout(()=>{
          if (props.images) {
            setLoad(false)
          }
          },1500)
    }, [props.images]);
    const Share=()=>{
      return( <div className='desktop-share-icons'>
        <FacebookShareButton style={{display:'block'}} url='https://www.digitalhouse.com/ar?utm_source=Google&utm_medium=paidsearch&utm_campaign=Lead&utm_term=Institucional&utm_content=institucional-institucional-curso-home-adresponsive-conversiones-kwcategory-institucional-exactas-none-all-otro-adtext-institucional-none-all-all-ar-search' quote='Mira este producto!!!' hashtag='#booking'>
            <FacebookIcon  size={30} logoFillIcon='white' round={true} ></FacebookIcon>
        </FacebookShareButton>
        <WhatsappShareButton style={{display:'block'}} className='icono'  url='https://www.digitalhouse.com/ar?utm_source=Google&utm_medium=paidsearch&utm_campaign=Lead&utm_term=Institucional&utm_content=institucional-institucional-curso-home-adresponsive-conversiones-kwcategory-institucional-exactas-none-all-otro-adtext-institucional-none-all-all-ar-search' >
            <WhatsappIcon   size={30} logoFillIcon='white' round={true}  >
            </WhatsappIcon>
        </WhatsappShareButton>
        <TwitterShareButton style={{display:'block'}} className='icono' url='https://www.digitalhouse.com/ar?utm_source=Google&utm_medium=paidsearch&utm_campaign=Lead&utm_term=Institucional&utm_content=institucional-institucional-curso-home-adresponsive-conversiones-kwcategory-institucional-exactas-none-all-otro-adtext-institucional-none-all-all-ar-search'>
            <TwitterIcon  size={30} logoFillIcon='white' round={true}></TwitterIcon>
        </TwitterShareButton>
        <LinkedinShareButton style={{display:'block'}} className='icono' url='https://www.digitalhouse.com/ar?utm_source=Google&utm_medium=paidsearch&utm_campaign=Lead&utm_term=Institucional&utm_content=institucional-institucional-curso-home-adresponsive-conversiones-kwcategory-institucional-exactas-none-all-otro-adtext-institucional-none-all-all-ar-search'>
            <LinkedinIcon  size={30} logoFillIcon='white' round={true}></LinkedinIcon>
        </LinkedinShareButton>
    </div>)
    }
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
  return (
    <>
      {load ? (
        <DesktopCarouselMockUp />
      ) : (
        <div className="desktopCarousel">
          <WatchMore images={images} setShow={setShow} show={show} />
          <div className="desktop-icons">
            <div className="desktop-icons-container">
              <div className="desktop-icons-content">
                <Icon
                  width="lg"
                  icon="bShare"
                  onClick={() => setShare(!share)}
                />
                <Icon
                  width="lg"
                  icon={"bEmptyHeart"}
                  onClick={toggleFavorite(id)}
                />
              </div>
            </div>
          </div>
          <div className="desktopCarousel-container">
            {share && <Share />}
            {images.map((image, id) => (
              <div
                className={`desktopCarousel-image desktopCarousel-image-${
                  id + 1
                } `}
              >
                {" "}
                <img src={image} alt="" />{" "}
              </div>
            ))}
            <div className="watch-more">
              <Paragraph onClick={() => setShow(true)} variant="base" size="lg">
                Ver más
              </Paragraph>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function DesktopCarouselMockUp(){
  
}