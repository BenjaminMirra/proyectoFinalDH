import React from "react";
import "./Products.css";
import products_data from "./products_data.json";
import { Heading } from "../../atoms/Heading/Heading";
import { CardProduct } from "../../molecules/CardProduct/CardProduct";
// import { Link } from 'react-router-dom';

export const Products = ({}) => {
  return (
    <div className="products-container">
    <section className="products-content">
   
    <div className="product-title">
      <Heading type="lg" title="h2" variant="primary">
        Recomendaciones
      </Heading>
      </div>
      <div className="product-cards-container">
     
      {products_data.map((product, idx) => (
          <div key={idx}>
            {/* <Link to="#"> */}
            <CardProduct
              titulo={product.Title}
              url={product.Crimg}
              descripcion={product.Description}
              location={product.Location}
              category={product.Category}
             />
            {/* </Link> */}
          </div>
       
        ))}
   </div>

    </section>
    </div>
  );
};
