import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Picture } from '../../atoms/Picture/Picture'
import { Heading } from '../../atoms/Heading/Heading'
import {Button} from '../../atoms/Button/Button'
import { Avatar } from '../../atoms/Avatar/Avatar'
import { Icon } from '../../atoms/Icon/Icon'
import './DesktopHeader.css'

export const DesktopHeader = ({firstname,lastname}) => {
    const [userInfo,setUserInfo]=useState({firstname:firstname,lastname:lastname})
    const resetUserInfo=()=>setUserInfo({});
    
    return (
        <header className='header-desktop'>
            <div className='logo'>
                <Picture width='xs' height='xs' image='logo'/>
                <Heading title='h2' type='md' variant='primary' >Sentite como en tu hogar</Heading>
            </div>
            
                 {userInfo.firstname!==undefined && userInfo.lastname!==undefined?<>
                <div className='tablet-user-info'>
                <Avatar firstname={userInfo.firstname} lastname={userInfo.lastname} variant='secondary' />
                <Heading title='h3' type='sm' variant='secondary'><span style={{color:'#383B58'}}>Hola, </span> <br /> {`${userInfo.firstname.charAt(0).toUpperCase()+userInfo.firstname.slice(1)} ${userInfo.lastname.charAt(0).toUpperCase()+userInfo.lastname.slice(1)}`}</Heading>
                <Icon onClick={resetUserInfo} icon='closeBlack' width='xs'/>
            </div>
            </>:<>
                <div className='botones-header'>
                <Button size='xs' variant={false} label='Crear cuenta' ></Button>
                <Button size='xs' variant={false} label='Iniciar sesión' ></Button>
            </div>
            </>}


           
        </header>
    )
}


