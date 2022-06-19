import React, { useState, useEffect } from "react";
import "./Products.css";
import products_data from "./products_data.json";
import { Heading } from "../../atoms/Heading/Heading";
import { CardProduct } from "../../molecules/CardProduct/CardProduct";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { MockUp } from "../../molecules/MockUpCard/MockUp";
import { urlAPI } from "../../../global";
export const Products = ({ data,setMapHomeData ,setShowMap,filterTitle}) => {


  
  const [mockUp, setMockUp] = useState(true)
  const [mockUpDinamic,setMockUpDinamic]=useState(true)
  const [likedProducts, setLikedProducts] = useState([]);
  useEffect(() => {
    
    
    setTimeout(() => {
      setMockUp(false)}, 2000)
      console.log(data);
      if (data.length>0) {
        setMockUpDinamic(false);
      }
      setLikedProducts([]);
      if (localStorage.getItem("userData")) {
        const id = JSON.parse(localStorage.getItem("userData")).id;
        axios.get(`${urlAPI}reacciones/porUsuario/${id}`).then((res) =>
          res.data.forEach((element) => {
            setLikedProducts((prevData) => {
              if (prevData.includes(element.producto_id)) {
                return prevData;
              } else {
                return [...prevData, element.producto_id];
              }
            });
            setMockUpDinamic(false);
          })
        );
      }

    }, [data]);

   
  return (
    <div className="products-container">
      <section className="products-content">
        <div className="product-title">
          <Heading type="lg" title="h2" variant="primary">
            {filterTitle}
          </Heading>
        </div>
        

        {mockUpDinamic ||mockUp ?
          <div className="product-cards-container">
            
            <MockUp noContent={true} /><MockUp noContent={true} /><MockUp noContent={true} /><MockUp noContent={true} /><MockUp noContent={true} /><MockUp noContent={true} />
          </div> : <div className="product-cards-container">
            
            {data.map((product, idx) => {
               
              let descriptionPreview = product.descripcion.slice(0, 130)

              return (
                <div key={idx}>

                  <CardProduct
                    setMapHomeData={setMapHomeData}
                    titulo={product.titulo}
                    url={product.imagenDTOList[0].url_img_producto}
                    descripcion={descriptionPreview}
                    location={product.ciudad_id==1?'San Carlos de Bariloche':product.ciudad_id==2?'Buenos Aires':product.ciudad_id==3?'Mendoza':'Córdoba'}
                    category={product.categoria_id==1?'Hoteles':product.categoria_id==2?'Hosteles':product.categoria_id==3?'Departamentos':'Bed & Breakfast'}
                    id={product.id}
                    rating={product.puntaje}
                    services={product.caracteristicasDTOList}
                    lat={product.latitud}
                    lng={product.longitud}
                    setShowMap={setShowMap}
                    likedProducts={likedProducts}
                    setLikedProducts={setLikedProducts}
                  />

                </div>
              )
            })}
          </div>}



      </section>
    </div>
  );
};
