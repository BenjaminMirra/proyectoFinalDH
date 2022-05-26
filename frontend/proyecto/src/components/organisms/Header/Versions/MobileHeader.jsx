import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Picture } from '../../../atoms/Picture/Picture'
import { Heading } from '../../../atoms/Heading/Heading'
import { Avatar } from '../../../atoms/Avatar/Avatar'
import { Icon } from '../../../atoms/Icon/Icon'
import { Paragraph } from '../../../atoms/paragraph/Paragraph'
import { Span } from '../../../atoms/Span/Span'
import { Link } from "react-router-dom";
import classNames from 'classnames'
import './MobileHeader.css'
export const MobileHeader = ({firstname,lastname,handleUserInfo}) => {

  

  const [isOn,setIsOn]=useState(false)
    const toggleIsOn=()=>setIsOn(!isOn)
    
    const MobileHeaderClassNames=classNames('nav-container',{
        'hide':!isOn,
        'active':isOn
    })
  return (<>
    <header className='mobile-header'>
      <div className='header-container'>
        <Link to={'/'} >
          <Picture height='xs' image='logo'/>
          </Link>
          <Icon icon='menu' width='lg' onClick={toggleIsOn}/>
          
        </div>
        <nav className={MobileHeaderClassNames}>

        
          {firstname!==undefined && lastname!==undefined?(<>
           { /* -------------------------------- User nav -------------------------------- */}
            <div className="nav-header">
              {console.log(firstname + " "+ lastname)}
                <Icon id='close' icon='close' width='lg' onClick={toggleIsOn}/>
                <div className='user-content'>
                <Avatar firstname={firstname} lastname={lastname} variant='secondary'/>
                <Heading title='h3' type='sm' variant='secondary' > <span style={{color:'white'}} >Hola,</span> <br/> {`${firstname.charAt(0).toUpperCase()+firstname.slice(1)} ${lastname.charAt(0).toUpperCase()+lastname.slice(1)}`} </Heading>
                </div>
              </div>

              <div className="nav-content-user">
                <Paragraph size= 'sm' >  ¿ Deseas <Span onClick={handleUserInfo}>cerrar sesión</Span> ? </Paragraph>
                <hr style={{width:'90%'}}/>
            </div>
            </>):
            <>
            {/* ------------------------------ Unlogged user ----------------------------- */}
            <div className="nav-header">
                <Icon icon='close' width='lg' onClick={toggleIsOn}/>
                <div id='menu-title' >
                  <Heading title='h2' variant='base' type='md'>MENÚ</Heading>
                </div>
            </div>
            <div className="nav-content">
              {window.location.href!=='http://localhost:3000/sign-up'&& <Link to={'/sign-up'}><Heading title='h3' variant='secondary' type='sm'>Crear cuenta</Heading></Link>}
              {window.location.href!=='http://localhost:3000/sign-up' && window.location.href!=='http://localhost:3000/login' && <hr style={{width:'90%'}}/>}
              {window.location.href!=='http://localhost:3000/login' &&
              <Link to={'/login'}>
                  <Heading title='h3' variant='secondary' type='sm'> Iniciar sesión</Heading>
                </Link> }
                

                
            </div></>}
            

            
            

            {/* ------------------------------- Both Users ------------------------------- */}
            <div className="header-icons">
                <Icon onClick={()=>{}} icon='facebook' size='md' /><Icon onClick={()=>{}} icon='linkedin' size='md' /><Icon onClick={()=>{}} icon='twitter' size='md'/><Icon onClick={()=>{}} icon='instagram' size='md'  />
            </div>
            
        </nav>
    </header>
    </>
  )
}

MobileHeader.propTypes = {}

