import React,{useState} from 'react'
import { map } from 'rsuite/esm/utils/ReactChildren';
import { Paragraph } from '../../../atoms/paragraph/Paragraph';
import classNames from 'classnames';
import './WatchMore.css'
import { Icon } from '../../../atoms/Icon/Icon';
export const WatchMore = ({images,setShow,show}) => {
    const imagesArray=images;
    const WatchMoreClassNames=(idx)=>classNames('caja', 'caja-otras',{
        'selected':mainImage==imagesArray[idx]
    })
    const [mainImage,setMainImage]=useState(imagesArray[0])
    const handleMainImage=(key)=>setMainImage(imagesArray[key])
    const handleNextImage=()=>{
        let imagePosition=0;
        console.log(imagesArray.indexOf(mainImage));
        if(imagesArray.indexOf(mainImage)+1<imagesArray.length){
            imagePosition=imagesArray.indexOf(mainImage)+1
        }
        setMainImage(imagesArray[imagePosition])}
    
  return (<>
    {/* <section> */}
         {show&&<div className='watch-more-general'>
    
    
    <div className="watch-more-general-container">
        
        </div>
        <div className='watch-more-container'>
        <div className="caja caja-1">
             <img src={mainImage} alt="" />
                <span className='close-watch-more'><Icon onClick={()=>setShow(false)} icon='close' width='lg' /></span> 
                <span className='next-watch-more' > <Icon onClick={handleNextImage} icon='rightArrow' width='md' /> </span>
              </div>
         <div className="contador"><Paragraph variant='secondary' size='lg'>{imagesArray.indexOf(mainImage)+1}/{imagesArray.length}</Paragraph></div>
            {imagesArray.map((image,idx)=><div className={WatchMoreClassNames(idx)} onClick={()=>handleMainImage(idx)} > <img src={image} alt="" /> </div>)}
                
               
                {/* <div className="caja caja-otras" onClick={()=>handleMainImage(0)} > <img src={imagesArray[0].toString()} alt="" /> </div>
                <div className="caja caja-otras" onClick={()=>handleMainImage(1)} >{imagesArray[1]}</div>
                <div className="caja caja-otras" onClick={()=>handleMainImage(2)} >{imagesArray[2]}</div>
                <div className="caja caja-otras" onClick={()=>handleMainImage(3)} >{imagesArray[3]}</div> */}
                
        </div>
    </div>}
  
    {/* </section> */}
   
    
  </>
    
  )
}
