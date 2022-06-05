import React from "react";
import "./CardProduct.css";
import { Heading } from "../../atoms/Heading/Heading";
import { Paragraph } from "../../atoms/paragraph/Paragraph";
import { Button } from "../../atoms/Button/Button";
import { Icon } from "../../atoms/Icon/Icon";
import { Span } from "../../atoms/Span/Span";
import { Link } from "react-router-dom";

export const CardProduct = ({
  url,
  titulo,
  descripcion,
  location,
  category,
  id
}) => {
  return (
    <div className="card-product">
      
      <div className="card-product-img">
        <Link to={`/productos/${id}`}>
        <img className="product-img" src={url} alt={titulo} />
        <div className="fav">
          <Icon icon="favorite" width="md" height="sm" onClick={() => {}}></Icon>
        </div>
        </Link>
      </div>
      
      <div className="card-product-text">
        <div className="cat-cat">
          <Heading type="xs" title="h4" variant="tertiary">
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
        <Heading type="md" title="h3" variant="secondary">
          {titulo}
        </Heading>
        <div className="product-rating">
          <div className="product-rating-score">
            <Paragraph size="md" variant="secondary">
              8
            </Paragraph>
          </div>
          <div className="product-rating-score-text">
            <Paragraph size="md" variant="secondary">Muy Bueno</Paragraph>
          </div>
        </div>
        <div className="product-location">
          <Icon icon="location" width="xs" onClick={() => {}}></Icon>
          <Paragraph size="md" variant="secondary">
            {location}
            <Span size="md" variant="primary">
              MOSTRAR EN EL MAPA
            </Span>
          </Paragraph>
        </div>
        <div className="icons">
          <Icon icon="bWifi" width="sm" onClick={() => {}}></Icon>
          <Icon icon="swim" width="md" onClick={() => {}}></Icon>
        </div>
        <div className="product-description">
          <Paragraph size="md" variant="secondary">
            {descripcion}
            <Link style={{textDecoration:'none'}} to={`productos/${id}`}>
              
              <Span size="md" variant="primary">
                Más...
            </Span>
            </Link>
            
          </Paragraph>
          <Link style={{width:'100%'}} to={`productos/${id}`}>
          <Button
            size="sm"
            label="Ver Detalle"
            variant={true}
            onClick={() => {}}
          ></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
