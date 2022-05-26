import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import { Picture } from '../../../atoms/Picture/Picture'
import { Heading } from '../../../atoms/Heading/Heading'
import {Button} from '../../../atoms/Button/Button'
import { Icon } from '../../../atoms/Icon/Icon'
import { Outlet, Link } from "react-router-dom";


import './TabletHeader.css'
import { Avatar } from '../../../atoms/Avatar/Avatar'

export const TabletHeader = ({firstname,lastname,handleUserInfo}) => {
   
    return (
        <header className='header-tablet'>
            <div className="header-tablet-content">
                <Link to={'/'} ><Picture height='xs' image='logo'/></Link>
                


            {firstname!==undefined && lastname!==undefined?<>
                <div className='tablet-user-info'>
                <Avatar firstname={firstname} lastname={lastname} variant='secondary' />
                <Heading title='h3' type='sm' variant='primary'><span style={{color:'#383B58'}}>Hola, </span> <br /> {`${firstname.charAt(0).toUpperCase()+firstname.slice(1)} ${lastname.charAt(0).toUpperCase()+lastname.slice(1)}`}</Heading>
                <Icon onClick={handleUserInfo} icon='closeBlack' width='xs'/>
            </div>
            </>:<>
                <div className='botones-header'>
                    <Link to={'/sign-up'} >
                     {window.location.href!=='http://localhost:3000/sign-up'&&<Button size='base' variant={false} label='Crear cuenta' ></Button>}
                </Link>
                <Link to={'/login'} >
                    {window.location.href!=='http://localhost:3000/login'&&<Button size='base' variant={false} label='Iniciar sesión' ></Button>} 
                </Link>
                
                
            </div>
            </>}
            </div>
            
        </header>
    )
}


