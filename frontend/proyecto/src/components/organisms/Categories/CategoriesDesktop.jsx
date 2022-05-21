import React from "react";
import "./CategoriesDesktop.css";
import { Heading } from "../../atoms/Heading/Heading";
import { CardCategory } from "../../molecules/CardCategory/CardCategory";
import categories_data from "./categories_data.json";
// import { Link } from 'react-router-dom';

export const CategoriesDesktop = ({}) => {
  return (
    <section className="categories">
      <Heading type="lg" title="h2" variant="primary">
        Buscar por tipo de alojamiento
      </Heading>
      <div className="category-cards-container">
        {categories_data.map((category, idx) => (
          <div key={idx}>
            {/* <a href="#">  */}
            {/* <Link to="#"> */}
            <CardCategory
              titulo={category.titulo}
              url={category.URL_imagen}
              descripcion={category.descripcion}
            />
            {/* </a> */}
            {/* </Link> */}
          </div>
        ))}
      </div>
    </section>
  );
};
