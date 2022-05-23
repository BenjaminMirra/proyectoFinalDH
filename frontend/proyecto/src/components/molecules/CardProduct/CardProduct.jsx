import React, { useState } from "react";
import "./CardProduct.css";
import { Heading } from "../../atoms/Heading/Heading";
import { Paragraph } from "../../atoms/paragraph/Paragraph";
import { Button } from "../../atoms/Button/Button";
import { Icon } from "../../atoms/Icon/Icon";
import { Span } from "../../atoms/Span/Span";

export const CardProduct = ({
  url,
  titulo,
  descripcion,
  location,
  category,
}) => {
  // const [readMore, setReadMore] = useState(false);
  // const extraContent = <div>
  //   <p className="extra-content">
  //     {/* <Paragraph size="md" variant="secondary"> */}
  //     {descripcion}
  //     {/* </Paragraph> */}
  //   </p>
  // </div>
  // const linkName = readMore ? '' : 'Read More';
  return (
    <div className="card-product">
      <div className="card-product-img">
        <img src={url} alt={titulo} />
        <div className="fav">
          <Icon icon="favorite" width="md" onClick={() => {}}></Icon>
        </div>
      </div>
      <div className="card-product-text">
        <div className="cat-cat">
          <Heading type="xs" title="h4" variant="terciary">
            {category.toUpperCase()}
          </Heading>
          <div className="product-cat-cat">
            <Icon icon="star" width="xs" onClick={() => {}}></Icon>
            <Icon icon="star" width="xs" onClick={() => {}}></Icon>
            <Icon icon="star" width="xs" onClick={() => {}}></Icon>
            <Icon icon="star" width="xs" onClick={() => {}}></Icon>
            <Icon icon="star" width="xs" onClick={() => {}}></Icon>
          </div>
        </div>
        <Heading type="md" title="h3" variant="primary">
          {titulo}
        </Heading>
        <div className="product-location">
          <Icon icon="location" width="xs" onClick={() => {}}></Icon>
          <Paragraph size="md" variant="secondary">
            {location}
            <Span size="md" variant="aqua">
              MOSTRAR EN EL MAPA
            </Span>
          </Paragraph>
        </div>
        {/* <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      {readMore && extraContent} */}
        <div className="product-description">
          <Paragraph size="md" variant="secondary">
            {descripcion} 
            <Span size="md" variant="aqua">
              ver más
            </Span>
          </Paragraph>

          {/* <Button size="sm" label="ver detalle" variant="primary" onClick={() => { setReadMore(!readMore) }}></Button> */}
          <Button
            size="sm"
            label="ver detalle"
            variant="primary"
            onClick={() => {}}
          ></Button>
        </div>
      </div>
    </div>
  );
};
