import React,{useState,useEffect} from "react";
import "./CardProduct.css";
import { Heading } from "../../atoms/Heading/Heading";
import { Paragraph } from "../../atoms/paragraph/Paragraph";
import { Button } from "../../atoms/Button/Button";
import { Icon } from "../../atoms/Icon/Icon";
import { Span } from "../../atoms/Span/Span";
import { Link } from "react-router-dom";
import axios from "axios";
import { urlAPI } from "../../../global";
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
  setShowMap,
  likedProducts,
  setLikedProducts
}) => {
  useEffect(() => {
    setLiked(false)
  }, [likedProducts]);
  const [serviceList,setServiceList]=useState([])
  
  

    useEffect(() => {
      setLiked(false);
        if (services) {
            setServiceList([])
            services.forEach(element => {
                setServiceList((prevValue)=>{         
                        
                        return [...prevValue,{icon:element.nombre_icono.toLowerCase(),service:element.titulo}]
                    })
            });
        }
    }, [services]);
    const [liked, setLiked] = useState(false);
  const handleFavorite = (productId) => {
    if (!liked) {
      axios({
        url: `${urlAPI}reacciones/agregar`,
        method: "POST",
        data: {
          usuario_id: JSON.parse(localStorage.getItem("userData")).id,
          producto_id: productId,
          favorito: true,
        },
      })
        .then((res) => setLiked(true))
        .catch((err) => console.log(err));
    }
    else{

    }
      
  } 
   
  const [stars,setStars]=useState('')
     useEffect(() => {

        axios({
          url:`${urlAPI}puntuaciones/porProducto/${id}`,
          method:'GET',
          headers:{'Content-Type':'application/json'}
        }).then(data=>{
          
          let scores=[]
          data.data.forEach(element => {
            scores.push(element.puntuacion)
          });
          let avgScore=scores.reduce((a,b)=>a+b,0)/scores.length
          // console.log(avgScore.toFixed(1));
          setStars(avgScore.toFixed(1)*2)

        }).catch(err=>console.log(err))
    }, []);
    const handleHomeMap=(latitud,longitud)=>{  
      setMapHomeData({lat:latitud,lng:longitud})
      return setShowMap(true)
    }
    useEffect(() => {
      setLiked(false);
        
        if(likedProducts.includes(id)){
          console.log('ESTE ID: '+id+ " ESTA EN LOS FAVORITOS: "+ likedProducts);
          setLiked(true)
        }
      
    }, [likedProducts,id]);
  return (
    <div className="card-product">
      <div className="card-product-img">
        <Link to={`/productos/${id}`}>
          <img className="product-img" src={url} alt={titulo} />
        </Link>
        <div className="fav">
          <Icon
            icon={liked?"favorite":'bEmptyHeart'}
            width="lg"
            height="sm"
            onClick={() => handleFavorite(id)}
          ></Icon>
        </div>
      </div>

      <div className="card-product-text">
        <div className="cat-cat">
          <Heading type="xs" title="h4" variant="tertiary">
            {category}
          </Heading>
          <div className="product-cat-cat">
            {stars < 2 ? (
              <>
                <Icon icon="star" />
                <Icon icon="emptyStar" />
                <Icon icon="emptyStar" />
                <Icon icon="emptyStar" />
                <Icon icon="emptyStar" />
              </>
            ) : stars <= 4 ? (
              <>
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="emptyStar" />
                <Icon icon="emptyStar" />
                <Icon icon="emptyStar" />
              </>
            ) : stars <= 6 ? (
              <>
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="emptyStar" />
                <Icon icon="emptyStar" />
              </>
            ) : stars < 9 ? (
              <>
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="emptyStar" />
              </>
            ) : stars <= 9.5 ? (
              <>
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="emptyStar" />
              </>
            ) : (
              <>
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="star" />
              </>
            )}
          </div>
        </div>
        <Heading type="md" title="h3" variant="secondary">
          {titulo}
        </Heading>
        <div className="product-rating">
          <div className="product-rating-score">
            <Paragraph size="md" variant="secondary">
              {stars}
            </Paragraph>
          </div>
          <div className="product-rating-score-text">
            <Paragraph size="md" variant="secondary">
              {stars < 2
                ? "Muy Malo"
                : stars < 4
                ? "Malo"
                : stars < 6
                ? "Regular"
                : stars < 9
                ? "Bueno"
                : stars <= 9.5
                ? "Muy Bueno"
                : "Excelente"}
            </Paragraph>
          </div>
        </div>
        <div className="product-location">
          <Icon icon="location" width="xs" onClick={() => {}}></Icon>
          <Paragraph size="md" variant="secondary">
            {location}
            <Span
              onClick={() => handleHomeMap(lat, lng)}
              size="md"
              variant="primary"
            >
              MOSTRAR EN EL MAPA
            </Span>
          </Paragraph>
        </div>
        <div className="icons">
          {serviceList &&
            serviceList.map((service) => (
              <Icon width="sm" icon={service.icon} />
            ))}
        </div>
        <div className="product-description">
          <Paragraph size="md" variant="secondary">
            {descripcion}
            <Link style={{ textDecoration: "none" }} to={`productos/${id}`}>
              <Span size="md" variant="primary">
                Más...
              </Span>
            </Link>
          </Paragraph>
          <Link style={{ width: "100%" }} to={`productos/${id}`}>
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
