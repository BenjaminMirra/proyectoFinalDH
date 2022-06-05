import React,{useState,useEffect} from "react";
import "./Products.css";
import products_data from "./products_data.json";
import { Heading } from "../../atoms/Heading/Heading";
import { CardProduct } from "../../molecules/CardProduct/CardProduct";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { MockUp } from "../../molecules/MockUpCard/MockUp";
export const Products = ({data}) => {



  const [mockUp,setMockUp]=useState(true)
  useEffect(() => {
    setTimeout(()=>setMockUp(false),2000)
  }, []);
  return (
    <div className="products-container">
    <section className="products-content">
    
    <div className="product-title">
      <Heading type="lg" title="h2" variant="primary">
        Recomendaciones
      </Heading>
      </div>

      {mockUp?
      <div className="product-cards-container">
        <MockUp noContent={true}/><MockUp noContent={true}/><MockUp noContent={true}/><MockUp noContent={true}/><MockUp noContent={true}/><MockUp noContent={true}/>
      </div>: <div className="product-cards-container">
     
      {data.map((product, idx) => {
        
        let descriptionPreview=product.descripcion.slice(0,130)
        
        return(
          <div key={idx}>
            
            <CardProduct
              titulo={product.titulo}
              url={product.imagenDTOList[0].url_img_producto}
              descripcion={descriptionPreview}
              location={'Buenos Aires'}
              category={'Hoteles'}
              id={product.id}
             />
            
          </div>
        )
          
       
      })}
   </div>}

     

    </section>
    </div>
  );
};
