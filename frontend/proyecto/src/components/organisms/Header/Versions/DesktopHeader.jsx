import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import { Picture } from '../../../atoms/Picture/Picture'
import { Heading } from '../../../atoms/Heading/Heading'
import {Button} from '../../../atoms/Button/Button'
import { Avatar } from '../../../atoms/Avatar/Avatar'
import { Icon } from '../../../atoms/Icon/Icon'
import { Outlet, Link } from "react-router-dom";
import './DesktopHeader.css'

export const DesktopHeader = ({firstname,lastname,handleUserInfo}) => {
   
    return (
        <header className='header-desktop'>
            <div className='header-desktop-content'>
                <Link style={{color:'inherit',textDecoration:'none'}} to={'/'} >
            <div className='logo'>
                <Picture height='xs' image='logo'/>
                <Heading title='h2' type='md' variant='primary' >Sentite como en tu hogar</Heading>
            </div>
            </Link>
            
                 {firstname!==undefined && lastname!==undefined?<>
                <div className='tablet-user-info'>
                <div className='avatar-name'>
                <Avatar firstname={firstname} lastname={lastname} variant='primary' />
                <Heading title='h3' type='sm' variant='primary'><span style={{color:'#383B58'}}>Hola, </span> <br /> {`${firstname.charAt(0).toUpperCase()+firstname.slice(1)} ${lastname.charAt(0).toUpperCase()+lastname.slice(1)}`}</Heading>
                </div>               
                 <Icon onClick={handleUserInfo} icon='logout' width='sm'/>
            </div>
            </>:<>
                <div className='desktop-botones-header'>
                <Link to={'/sign-up'} >
                 {window.location.href!=='http://localhost:3000/sign-up'&&<Button size='xs' variant={false} label='Crear cuenta' ></Button>}
                </Link>
                <Link to={'/login'} >
                    {window.location.href!=='http://localhost:3000/login'&&<Button size='xs' variant={false} label='Iniciar sesión' ></Button>}
                </Link>
                
            </div>
            </>}


            </div>
        </header>
    )
}


