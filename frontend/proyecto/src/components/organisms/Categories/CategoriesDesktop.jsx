import React,{useState,useEffect} from "react";
import "./CategoriesDesktop.css";
import { Heading } from "../../atoms/Heading/Heading";
import { CardCategory } from "../../molecules/CardCategory/CardCategory";
// import categories_data from "./categories_data.json";
import { MockUp } from "../../molecules/MockUpCard/MockUp";
import axios from 'axios'
export const CategoriesDesktop = ({}) => {
  const [CategoriesData,setCategoriesData]=useState({})
  const [mockUpFixed,setMockUpFixed]=useState(true)
  const [mockUpDinamic,setMockUpDinamic]=useState(true)
  useEffect(() => {
    
    axios.get('http://localhost:8080/categorias/todas').then(res=>{
  console.log(res.data);
  setCategoriesData(res.data)
  setMockUpDinamic(false)
  
})
    setTimeout(()=>setMockUpFixed(false),1500)
  }, []);
  return (
    <div className="categories-container">
      <section className="categories-content">
      <div className="category-title">
      <Heading title="h2" type="lg" variant="primary" > Busca por tipo de alojamiento</Heading>
      </div>
        {mockUpFixed || mockUpDinamic ?<div className="cards-container">
          <MockUp/><MockUp/><MockUp/><MockUp/>
      </div>:<div className="cards-container">
          {CategoriesData.map((card,index)=>{
            return <CardCategory key={index} titulo={card.titulo} url={card.url_imagen} descripcion={`800 ${card.titulo}`} />
          })}
      </div>}
        
    </section>
    </div>
  );
};
