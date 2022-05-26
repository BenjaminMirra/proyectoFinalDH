import React from 'react'
import { Header } from '../organisms/Header/Header'
import { Footer } from '../organisms/Footer/Footer'
import { CategoriesDesktop } from '../organisms/Categories/CategoriesDesktop'
import { DesktopHeader } from '../organisms/Header/Versions/DesktopHeader'
import { Products } from '../organisms/Products/Products'
import { Filter } from '../organisms/Filter/Filter'
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className='contenedor-pagina' style={{width  : "100%"}}>
            
        <Header firstname={undefined} lastname={undefined}/>
        <Filter/>
        <CategoriesDesktop></CategoriesDesktop>
        <Products></Products>
        <Footer/>
        </div>
    )
}