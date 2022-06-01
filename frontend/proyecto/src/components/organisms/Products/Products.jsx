import React,{useState,useEffect} from "react";
import "./Products.css";
import products_data from "./products_data.json";
import { Heading } from "../../atoms/Heading/Heading";
import { CardProduct } from "../../molecules/CardProduct/CardProduct";
import { Link } from 'react-router-dom';
import { MockUp } from "../../molecules/MockUpCard/MockUp";
export const Products = ({}) => {
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
        <MockUp/><MockUp/><MockUp/><MockUp/><MockUp/><MockUp/>
      </div>: <div className="product-cards-container">
     
      {products_data.map((product, idx) => (
          <div key={idx}>
            
            <CardProduct
              titulo={product.Title}
              url={product.Crimg}
              descripcion={product.Description}
              location={product.Location}
              category={product.Category}
              id={idx}
             />
            
          </div>
       
        ))}
   </div>}

     

    </section>
    </div>
  );
};
