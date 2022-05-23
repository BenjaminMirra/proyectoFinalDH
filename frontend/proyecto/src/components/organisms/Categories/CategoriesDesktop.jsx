import React from "react";
import "./CategoriesDesktop.css";
import { Heading } from "../../atoms/Heading/Heading";
import { CardCategory } from "../../molecules/CardCategory/CardCategory";
import categories_data from "./categories_data.json";
// import { Link } from 'react-router-dom';

export const CategoriesDesktop = ({}) => {
  return (
    <section className="categories">
      <div className="category-container">
     <div> <Heading type="lg" title="h2" variant="primary">
        Buscar por tipo de alojamiento
      </Heading>
      </div>
      <div className="category-cards-container">
        {categories_data.map((category, idx) => (
          <div> 
            
            <CardCategory
              titulo={category.titulo}
              url={category.URL_imagen}
              descripcion={category.descripcion}
              key={idx} > 
              {/* link={} */}
            
              </CardCategory>

          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
