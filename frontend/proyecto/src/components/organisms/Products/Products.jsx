import React from "react";
import "./Products.css";
import products_data from "./products_data.json";
import { Heading } from "../../atoms/Heading/Heading";
import { CardProduct } from "../../molecules/CardProduct/CardProduct";
// import { Link } from 'react-router-dom';

export const Products = ({}) => {
  return (
    <section className="products">
    <div className="product-container">
      <Heading type="lg" title="h2" variant="primary">
        Recomendaciones
      </Heading>
      
      <div className="product-cards-container">
     
      {products_data.map((product, idx) => (
          <div key={idx}>
            {/* <a href="#">  */}
            {/* <Link to="#"> */}
            <CardProduct
              titulo={product.Title}
              url={product.Crimg}
              descripcion={product.Description}
              location={product.Location}
              category={product.Category}
            />
            {/* </a> */}
            {/* </Link> */}
          </div>
       
        ))}
   </div>
      </div>
    </section>
  );
};
