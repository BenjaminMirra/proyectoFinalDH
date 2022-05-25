import React from 'react'
import { Header } from '../organisms/Header/Header'
import { Footer } from '../organisms/Footer/Footer'
import { CategoriesDesktop } from '../organisms/Categories/CategoriesDesktop'
import { Products } from '../organisms/Products/Products'
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div style={{width  : "100%"}}>
        <Header firstname={undefined} lastname={undefined}/>
        <CategoriesDesktop></CategoriesDesktop>
        <Products></Products>
        <Footer/>
        </div>
    )
}