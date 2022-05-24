import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Picture } from '../../../atoms/Picture/Picture'
import { Heading } from '../../../atoms/Heading/Heading'
import {Button} from '../../../atoms/Button/Button'
import { Avatar } from '../../../atoms/Avatar/Avatar'
import { Icon } from '../../../atoms/Icon/Icon'
import './DesktopHeader.css'

export const DesktopHeader = ({firstname,lastname,handleUserInfo}) => {
    
    
    return (
        <header className='header-desktop'>
            <div className='header-desktop-content'>
            <div className='logo'>
                <Picture width='xs' height='xs' image='logo'/>
                <Heading title='h2' type='md' variant='primary' >Sentite como en tu hogar</Heading>
            </div>
            
                 {firstname!==undefined && lastname!==undefined?<>
                <div className='tablet-user-info'>
                <Avatar firstname={firstname} lastname={lastname} variant='secondary' />
                <Heading title='h3' type='sm' variant='secondary'><span style={{color:'#383B58'}}>Hola, </span> <br /> {`${firstname.charAt(0).toUpperCase()+firstname.slice(1)} ${lastname.charAt(0).toUpperCase()+lastname.slice(1)}`}</Heading>
                <Icon onClick={handleUserInfo} icon='closeBlack' width='xs'/>
            </div>
            </>:<>
                <div className='botones-header'>
                <Button size='xs' variant={false} label='Crear cuenta'></Button>
                <Button size='xs' variant={false} label='Iniciar sesión' ></Button>
            </div>
            </>}


            </div>
        </header>
    )
}


