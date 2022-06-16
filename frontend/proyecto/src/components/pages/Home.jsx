import React,{useState,useEffect,createContext} from 'react'
import { Header } from '../organisms/Header/Header'
import { Footer } from '../organisms/Footer/Footer'
import { CategoriesDesktop } from '../organisms/Categories/CategoriesDesktop'
import { DesktopHeader } from '../organisms/Header/Versions/DesktopHeader'
import { Products } from '../organisms/Products/Products'
import { Filter } from '../organisms/Filter/Filter'
import { Link } from "react-router-dom";
import { MapHome } from '../molecules/Map/MapHome/MapHome'
import products_data from '../organisms/Products/products_data.json'
import './Home.css'
import axios from 'axios'
import { urlAPI } from '../../global.js';
import { Paragraph } from '../atoms/paragraph/Paragraph'
import { Icon } from '../atoms/Icon/Icon'

export const Home = () => {

    const [productsData,setProductsData]=useState([])
    const [filterProducts,setFilterProducts]=useState([])
    const [mapHomeData,setMapHomeData]=useState({})
    const [showMap,setShowMap]=useState(false)
    useEffect(() => {
        
            axios.get(`${urlAPI}productos/todos`).then(data=>setProductsData(data.data)) 
        
           
    }, [filterProducts]);
    
    
    
    return (
        
    <div className='wrapper'>
            <Header firstname={undefined} lastname={undefined}/>
        <div className='contenedor-pagina' >
        {showMap?<MapHome setShowMap={setShowMap} lat={mapHomeData.lat} lng={mapHomeData.lng} />:<></>}
        <Filter setFilterProducts={setFilterProducts} />
        <CategoriesDesktop products={productsData} setFilterProducts={setFilterProducts} ></CategoriesDesktop>
        <Products setShowMap={setShowMap} setMapHomeData={setMapHomeData} data={filterProducts&&filterProducts.length>0?filterProducts:productsData}></Products>
        <Link to={'/mapa'}>
        <div className='show-mapa'>
            <Paragraph variant='base' >Mostrar Mapa</Paragraph>
            <Icon icon='mapa' />
        </div>
        </Link>
        
        <Footer/>
        </div>
        
        </div>
        
    )
}