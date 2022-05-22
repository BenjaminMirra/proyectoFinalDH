import React, { useState } from "react";
import "./CardProduct.css";
import { Heading } from "../../atoms/Heading/Heading";
import { Paragraph } from "../../atoms/paragraph/Paragraph";
import { Button } from "../../atoms/Button/Button";
import { Icon } from "../../atoms/Icon/Icon";

export const CardProduct = ({
  url,
  titulo,
  descripcion,
  location,
  category,
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="card-product">
      <div className="card-product-img">
        <img src={url} alt={titulo} />
        <div className="fav">
        <Icon icon="favorite" width="md" onClick={()=>{}}></Icon>
        </div>
      </div>
      <div className="card-product-text">
        <div className="cat-cat">
        <Heading type="xs" title="h4" variant="terciary">
          {category.toUpperCase()}
        </Heading>
        <div className="product-cat-cat">
        <Icon icon="star" width="xs" onClick={()=>{}}></Icon>
        <Icon icon="star" width="xs" onClick={()=>{}}></Icon>
        <Icon icon="star" width="xs" onClick={()=>{}}></Icon>
        <Icon icon="star" width="xs" onClick={()=>{}}></Icon>
        <Icon icon="star" width="xs" onClick={()=>{}}></Icon>
        </div>
        </div>
        <Heading type="md" title="h3" variant="primary">
          {titulo}
        </Heading>
        <Paragraph size="md" variant="secondary">
          {descripcion}
        </Paragraph>
        <Button size="sm" label="ver detalle" variant="primary"></Button>
      </div>
    </div>
  );
};
