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

export const Home = () => {

    const [productsData,setProductsData]=useState()
    useEffect(() => {
       axios.get('http://localhost:8080/productos/todos').then(data=>setProductsData(data.data))    
    }, []);
    
    
    return (
        
    <div className='wrapper'>
            <Header firstname={undefined} lastname={undefined}/>
        <div className='contenedor-pagina' >
            
        
        <Filter/>
        <CategoriesDesktop></CategoriesDesktop>
        <Products data={productsData}></Products>
        
        
        <Footer/>
        </div>
        
        </div>
        
    )
}