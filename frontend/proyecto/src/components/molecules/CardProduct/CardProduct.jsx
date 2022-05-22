import React, {useState} from "react";
import "./CardProduct.css";
import { Heading } from "../../atoms/Heading/Heading";
import { Paragraph } from "../../atoms/paragraph/Paragraph";
import { Button } from "../../atoms/Button/Button";


export const CardProduct = ({url, titulo, descripcion, location, category}) => {
    const [readMore,setReadMore]=useState(false);
    return(
        <div className="card-product">
      <img src={url} alt={titulo} />
      <div className="card-product-text">
      <Heading type="xs" title="h4" variant="primary">
          {category}
        </Heading>
        <Heading type="md" title="h3" variant="primary">
          {titulo}
        </Heading>
        <Paragraph size="md" variant="secondary">
          {descripcion} {titulo}
        </Paragraph>
        <Button size="sm" label="ver detalle" variant="primary"></Button>
      </div>
        </div>
    );
}