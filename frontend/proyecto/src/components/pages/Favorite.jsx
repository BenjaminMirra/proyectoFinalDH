import React, { useState, useEffect } from "react";
import { Header } from "../organisms/Header/Header";
import { Footer } from "../organisms/Footer/Footer";
import { Picture } from "../atoms/Picture/Picture";
import { Heading } from "../atoms/Heading/Heading";
import { Paragraph } from "../atoms/paragraph/Paragraph";
import { Button } from "../atoms/Button/Button";
import { MockUp } from "../molecules/MockUpCard/MockUp";
import { Products } from "../organisms/Products/Products";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { urlAPI } from "../../global";
import { Mapa } from "./Mapa";
import "./Favorite.css";
import { Icon } from "../atoms/Icon/Icon";

export const Favorite = () => {

  

  const [favoriteProducts, setFavoriteProducts] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [favoriteLocations, setFavoriteLocations] = useState([]);
  useEffect(() => {
    setFavoriteProducts('');
    const userId=JSON.parse(localStorage.getItem('userData')).id;
    axios.get(`${urlAPI}reacciones/porUsuario/${userId}`).then((data) => {
      console.log(data);
      setFavoriteProducts('');
      
      data.data.forEach((element) => {
        // console.log(element);

        axios.get(`${urlAPI}productos/${element.producto_id}`).then((data) => {
          // console.log(data.data.id);
               setFavoriteLocations((prevData) => {
                 return [
                   ...prevData,
                   {
                     id: data.data.id,
                     lat: data.data.latitud,
                     lng: data.data.longitud,
                   },
                 ];
               });
                setFavoriteProducts(prevData=>{
                    // console.log(prevData);
                    // if (prevData.length()>0) {
                    //      prevData.forEach((element) => {
                    //        if (element.id == data.data.id) {
                    //          return prevData;
                    //        } else {
                    //          return [
                    //            ...prevData,
                    //            { id: data.data.id, product: data.data },
                    //          ];
                    //        }
                    //      });
                    // }
                     
                     if(!prevData){
                       
                        
                        return [{ id: data.data.id, product: data.data },
                        ];
                     }
                     else{
                        let bandera=false
                        prevData.forEach(element => {
                            if (element.id == data.data.id) {
                                return bandera=true;
                            }
                            
                        });
                        if(!bandera){
                            
                            return [
                                ...prevData,
                                { id: data.data.id, product: data.data },
                            ];
                        }
                        else{
                            return prevData;
                        }
                     }
                })
          
        });

        //
      });
    });
  }, []);
  useEffect(() => {
    setSelectedProducts([]);
    if (favoriteProducts) {
        favoriteProducts.forEach((element) => {
            return setSelectedProducts(prevData=>[...prevData,element.product])
        });
         
    }
   
  }, [favoriteProducts]);


  
    






  return (
    <>
      <div className="wrapper">
        <Header firstname={undefined} lastname={undefined} />

        <div className="favorite-products">
          <div className="favorite-back">
            <Link to={"/"}>
              <Icon icon={"backBlack"} width="lg" />
            </Link>
          </div>
          {selectedProducts.length > 0 ? (
            <>
              {" "}
              <Products
                data={
                  selectedProducts && selectedProducts.length > 0
                    ? selectedProducts
                    : []
                }
              ></Products>
            </>
          ) : (
            <>
              
              <div>
                {" "}
                <Heading>No tienes alojamientos guardados</Heading>{" "}
              </div>
            </>
          )}
        </div>
        {favoriteLocations.length > 0 && (
          <div className="favorite-mapa">
            <Mapa favoriteLocations={favoriteLocations} favorite={true} />
          </div>
        )}
      </div>
    </>
  );
};
