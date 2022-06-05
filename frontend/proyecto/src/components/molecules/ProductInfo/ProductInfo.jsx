import React,{useState,useEffect} from 'react'
import { Heading } from '../../atoms/Heading/Heading'
import { Paragraph } from '../../atoms/paragraph/Paragraph'
import { SpacerHorizontal } from '../../atoms/Spacer/SpacerHorizontal'
import './ProductInfo.css'
export const ProductInfo = (props) => {

    const [rules,setRules]=useState(['check out a las 11'])
    const [healthAndSafety,setHealthAndSafety]=useState([])
    const [cancelationPolicy,setCancelationPolicy]=useState([])
    useEffect(() => {
       const {info}=props;
        if (info!==undefined) {
            info.forEach(element => {
                if (element.tipo_politica_id==1) {
                    setRules((prevValue)=>{
                        return [...prevValue,element.descripcion]
                    });
                }
                else if (element.tipo_politica_id==3) {
                    setHealthAndSafety((prevValue)=>{
                        return [...prevValue,element.descripcion]
                    });
                }
                else{
                    setCancelationPolicy((prevValue)=>{
                        return [...prevValue,element.descripcion]
                    });
                }
                
                
            });
        }
        
    }, [props.info]);

  return (
    <div className='product-info' >
        {props.info&&console.log(props.info)}
        {props.info&&console.log(`rules: ${rules}; healthAndSafety: ${healthAndSafety} ; cancelationPolicy: ${cancelationPolicy} `)}
        <div className='product-info-container' >
            <Heading type='lg' variant='primary' >Qué tenés que saber</Heading>
           
        </div>
        <hr />
        <div className='product-info-container' >
            <div className='normas-container' >
            <Heading type='md' variant='secondary' >Normas de la casa</Heading>
            <SpacerHorizontal height='sm' />
             {rules.length>0&&rules.map(item=><><Paragraph>{item}</Paragraph><SpacerHorizontal height='xs' /></>)}
            </div>
            <div className='salud-seguridad-container' >
                <SpacerHorizontal height='md' />
                 <Heading type='md' variant='secondary' >Salud y Seguridad</Heading>
                 <SpacerHorizontal height='sm' />
                 {healthAndSafety.length>0&&healthAndSafety.map(item=><><Paragraph>{item}</Paragraph><SpacerHorizontal height='xs' /></>)}
            </div>
            <div className='politica-cancelacion-container' >
                <SpacerHorizontal height='md' />
                 <Heading type='md' variant='secondary' >Política de cancelación</Heading>
                 <SpacerHorizontal height='sm' />
                 {cancelationPolicy.length>0&&cancelationPolicy.map(item=><><Paragraph>{item}</Paragraph><SpacerHorizontal height='xs' /></>)}
            </div>
        </div>
    </div>
  )
}
