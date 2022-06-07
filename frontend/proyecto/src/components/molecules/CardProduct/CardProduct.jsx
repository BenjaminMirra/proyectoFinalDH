import React,{useState,useEffect} from "react";
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
  id,
  rating,
  services,
  setMapHomeData,
  lat,
  lng,
  setShowMap
}) => {
  
  const [serviceList,setServiceList]=useState([])
    useEffect(() => {
        if (services) {
            setServiceList([])
            services.forEach(element => {
                setServiceList((prevValue)=>{         
                        
                        return [...prevValue,{icon:element.nombre_icono.toLowerCase(),service:element.titulo}]
                    })
            });
        }
    }, [services]);

  const [stars,setStars]=useState('')
    useEffect(() => {
        if (rating) {
          setStars(rating/2)
        }
    }, [rating]);
    const handleHomeMap=(latitud,longitud)=>{  
      setMapHomeData({lat:latitud,lng:longitud})
      return setShowMap(true)
    }
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
            {category}
          </Heading>
          <div className="product-cat-cat">
            {rating<2?<><Icon icon='star'/><Icon icon='emptyStar'/><Icon icon='emptyStar'/><Icon icon='emptyStar'/><Icon icon='emptyStar'/></>
            :rating<=4? <><Icon icon='star'/><Icon icon='star'/><Icon icon='emptyStar'/><Icon icon='emptyStar'/><Icon icon='emptyStar'/></>
            :rating<=6?<><Icon icon='star'/><Icon icon='star'/><Icon icon='star'/><Icon icon='emptyStar'/><Icon icon='emptyStar'/></>
            :rating<8?<><Icon icon='star'/><Icon icon='star'/><Icon icon='star'/><Icon icon='star'/><Icon icon='emptyStar'/></>
            :rating<9?<><Icon icon='star'/><Icon icon='star'/><Icon icon='star'/><Icon icon='star'/><Icon icon='emptyStar'/></>
            :<><Icon icon='star'/><Icon icon='star'/><Icon icon='star'/><Icon icon='star'/><Icon icon='star'/></>}
          </div>
        </div>
        <Heading type="md" title="h3" variant="secondary">
          {titulo}
        </Heading>
        <div className="product-rating">
          <div className="product-rating-score">
            <Paragraph size="md" variant="secondary">
              {rating}
            </Paragraph>
          </div>
          <div className="product-rating-score-text">
            <Paragraph size="md" variant="secondary">{rating<2?'Muy Malo':rating<4? 'Malo':rating<6?'Regular':rating<=7?'Bueno':rating<=9?'Muy Bueno':'Excelente'}</Paragraph>
          </div>
        </div>
        <div className="product-location">
          <Icon icon="location" width="xs" onClick={() => {}}></Icon>
          <Paragraph size="md" variant="secondary">
            {location}
            <Span onClick={()=>handleHomeMap(lat,lng)} size="md" variant="primary">
              MOSTRAR EN EL MAPA
            </Span>
          </Paragraph>
        </div>
        <div className="icons">
          {serviceList&&serviceList.map((service)=><Icon width='sm' icon={service.icon} />)}
          
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
