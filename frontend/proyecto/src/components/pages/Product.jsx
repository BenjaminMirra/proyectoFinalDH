import React,{useState,useEffect,createContext} from 'react'
import {useParams} from "react-router-dom";
import { Header } from '../organisms/Header/Header'
import { ProductHeader } from '../molecules/ProductHeader/ProductHeader'
import { LocationInfo } from '../molecules/LocationInfo/LocationInfo'
import { Footer } from '../organisms/Footer/Footer'
import { Carousel } from '../molecules/Carousel/Carousel'
import { ProductDescription } from '../molecules/ProductDescription/ProductDescription'
import { ProductServices } from '../molecules/ProductServices/ProductServices'
import { Calendar } from '../molecules/Calendar/Calendar'
import { Map } from '../molecules/Map/Map'
import axios from 'axios';
import './Product.css'

export const Product = () => {
  
  

  const {id}=useParams()
  const [productData,setProductData]=useState({})
  const [categoria,setCategoria]=useState('cargando')
  // const images=["https://images.unsplash.com/photo-1629794226066-349748040fb7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770", "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740", "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740",  "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771", "https://images.unsplash.com/photo-1629794226066-349748040fb7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770"];
  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`http://localhost:8080/productos/${id}`).then(data=>
    {
      setCategoria(data.data.categoria_id==2?'Hoteles':'Otro')
      setProductData(data.data)})
  }, [id]);

  
  return (
    <div className='wrapper'>
      <Header />
      
      
      
      <div className='contenedor-pagina' >
        
          <ProductHeader category={categoria} title={productData.titulo} />
          <LocationInfo location={productData.direccion} rating={productData.puntaje} />
          <Carousel product={productData} />
          <ProductDescription subtitle={productData.titulo_descripcion} description={productData.descripcion} />
          <ProductServices services={productData.caracteristicasDTOList} />
          <Calendar />
          <Map lat={productData.latitud} lng={productData.longitud} location={productData.direccion} />
        
          
        
        
        
       
        <div className="product-footer">
          <Footer />
        </div>
        
      </div>

    </div>
  )
}
