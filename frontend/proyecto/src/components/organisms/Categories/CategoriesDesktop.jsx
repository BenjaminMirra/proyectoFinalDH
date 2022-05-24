import React from "react";
import "./CategoriesDesktop.css";
import { Heading } from "../../atoms/Heading/Heading";
import { CardCategory } from "../../molecules/CardCategory/CardCategory";
import categories_data from "./categories_data.json";

export const CategoriesDesktop = ({}) => {
  return (
    <div className="categories-container">
      <section className="categories-content">
      <div className="category-title">
      <Heading title="h2" type="lg" variant="primary" > Busca por tipo de alojamiento</Heading>
      </div>
        <div className="cards-container">
          {categories_data.map((card,index)=>{
            return <CardCategory key={index} titulo={card.titulo} url={card.URL_imagen} descripcion={card.descripcion} />
          })}
      </div>
    </section>
    </div>
  );
};
