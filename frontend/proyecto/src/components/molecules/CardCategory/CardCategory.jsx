import React from "react";
import { Heading } from "../../atoms/Heading/Heading";
import { Paragraph } from "../../atoms/paragraph/Paragraph";
import "./CardCategory.css";

export const CardCategory = ({ titulo, descripcion, url }) => {
  return (
    <div className="card-category">
      <img src={url} alt={titulo}></img>
      <div className="card-category-text">
        <Heading type="md" title="h3" variant="primary">
          {titulo}
        </Heading>
        <Paragraph size="md" variant="secondary">
          {descripcion}
        </Paragraph>
      </div>
    </div>
  );
};
