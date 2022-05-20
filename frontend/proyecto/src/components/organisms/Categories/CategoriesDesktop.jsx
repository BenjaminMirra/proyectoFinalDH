import React from "react";
import "./CategoriesDesktop.css";
import { Heading } from "../../atoms/Heading/Heading";
import { CardCategory } from "../../molecules/CardCategory/CardCategory";
import categories_data from "./categories_data.json";

export const CategoriesDesktop = ({}) => {
  return (
    <div className="categories">
      <Heading type="lg" title="h2" variant="primary">
        Buscar por tipo de alojamiento
      </Heading>
      <ul>
        {categories_data.map((category, idx) => (
          <a href="#">
            <li key={idx}>
              {
                <CardCategory
                  titulo={category.titulo}
                  url={category.URL_imagen}
                  descripcion={category.descripcion}
                />
              }
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};
