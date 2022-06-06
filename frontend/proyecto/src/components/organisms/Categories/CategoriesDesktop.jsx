import React,{useState,useEffect} from "react";
import "./CategoriesDesktop.css";
import { Heading } from "../../atoms/Heading/Heading";
import { CardCategory } from "../../molecules/CardCategory/CardCategory";
// import categories_data from "./categories_data.json";
import { MockUp } from "../../molecules/MockUpCard/MockUp";
import axios from 'axios'
export const CategoriesDesktop = ({setFilterProducts}) => {
  const [categoriesData,setCategoriesData]=useState({})
  const [mockUpFixed,setMockUpFixed]=useState(true)
  const [mockUpDinamic,setMockUpDinamic]=useState(true)
  useEffect(() => {
    
    axios.get('http://localhost:8080/categorias/todas').then(res=>{
  
  setCategoriesData(res.data)
  setMockUpDinamic(false)
  
})
    setTimeout(()=>setMockUpFixed(false),1500)
  }, []);

  const handleCategoryProducts=(id)=>{
    axios.get(`http://localhost:8080/productos/porCategoria/${id}`).then(data=>setFilterProducts(data.data))
  }
  return (
    <div className="categories-container">
      <section className="categories-content">
      <div className="category-title">
      <Heading title="h2" type="lg" variant="primary" > Busca por tipo de alojamiento</Heading>
      </div>
        {mockUpFixed || mockUpDinamic ?<div className="cards-container">
          <MockUp noContent={true}/><MockUp noContent={true}/><MockUp noContent={true}/><MockUp noContent={true}/>
      </div>:<div className="cards-container">
          {categoriesData.map((card,index)=>{
            return <div onClick={()=>handleCategoryProducts(card.id)}><CardCategory id={card.id} titulo={card.titulo} url={card.url_imagen} descripcion={`800 ${card.titulo}`} /></div>
          })}
      </div>}
        
    </section>
    </div>
  );
};
