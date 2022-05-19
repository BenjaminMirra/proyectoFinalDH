import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Picture } from '../../atoms/Picture/Picture'
import { Icon } from '../../atoms/Icon/Icon'
import {Heading} from '../../atoms/Heading/Heading'
import { Avatar } from '../../atoms/Avatar/Avatar'
import classNames from 'classnames'
import './MobileHeader.css'
export const MobileHeader = ({firstname,lastname}) => {
  const [isOn,setIsOn]=useState(false)
    const toggleIsOn=()=>setIsOn(!isOn)
    
    const MobileHeaderClassNames=classNames('nav-container',{
        'hide':!isOn,
        'active':isOn
    })
  return (<>
    <header id='mobile-header'>
      <div className='header-container'>
          <Picture width='xs' height='xs' image='logo'/>
          <Icon icon='menu' width='lg' onClick={toggleIsOn}/>
        </div>
        <nav className={MobileHeaderClassNames}>

        
          {firstname!==undefined && lastname!==undefined?(<>
           { /* -------------------------------- User nav -------------------------------- */}
            <div className="nav-header">
                <Icon id='close' icon='close' width='lg' onClick={toggleIsOn}/>
                <div className='user-content'>
                <Avatar firstname={firstname} lastname={lastname} variant='secondary'/>
                <Heading title='h3' type='sm' variant='primary' > <span style={{color:'white'}} >Hola,</span> <br/> {`${firstname.charAt(0).toUpperCase()+firstname.slice(1)} ${lastname.charAt(0).toUpperCase()+lastname.slice(1)}`} </Heading>
                </div>
              </div>

              <div className="nav-content-user">
                <p style={{fontSize:'12px'}} >¿ Deseas <span style={{color:'blue'}} >cerrar sesión </span>?</p>
                <hr style={{width:'90%'}}/>
            </div>)
            </>):
            <>
            {/* ------------------------------ Unlogged user ----------------------------- */}
            <div className="nav-header">
                <Icon icon='close' width='lg' onClick={toggleIsOn}/>
                <div id='menu-title' >
                  <Heading title='h2' type='md'>MENÚ</Heading>
                </div>
            </div>
            <div className="nav-content">
              <Heading title='h3' variant='primary' type='sm'> <a href="#">Crear cuenta</a> </Heading>
                <hr style={{width:'90%'}}/>
                <Heading title='h3' variant='primary' type='sm'> <a href="#">Iniciar sesión</a> </Heading>
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

