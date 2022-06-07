import React,{useState,useEffect,createContext} from 'react'
import { Header } from '../organisms/Header/Header'
import { Footer } from '../organisms/Footer/Footer'
import { CategoriesDesktop } from '../organisms/Categories/CategoriesDesktop'
import { DesktopHeader } from '../organisms/Header/Versions/DesktopHeader'
import { Products } from '../organisms/Products/Products'
import { Filter } from '../organisms/Filter/Filter'
import { Link } from "react-router-dom";
import products_data from '../organisms/Products/products_data.json'
import './Home.css'
import axios from 'axios'
import { urlAPI } from '../../global.js';

export const Home = () => {

    const [productsData,setProductsData]=useState([])
    const [filterProducts,setFilterProducts]=useState([])
    useEffect(() => {
        
            axios.get(`${urlAPI}productos/todos`).then(data=>setProductsData(data.data)) 
        
           
    }, [filterProducts]);
    
    
    
    return (
        
    <div className='wrapper'>
            <Header firstname={undefined} lastname={undefined}/>
        <div className='contenedor-pagina' >
            
        
        <Filter setFilterProducts={setFilterProducts} />
        <CategoriesDesktop products={productsData} setFilterProducts={setFilterProducts} ></CategoriesDesktop>
        <Products data={filterProducts&&filterProducts.length>0?filterProducts:productsData}></Products>
        
        
        <Footer/>
        </div>
        
        </div>
        
    )
}