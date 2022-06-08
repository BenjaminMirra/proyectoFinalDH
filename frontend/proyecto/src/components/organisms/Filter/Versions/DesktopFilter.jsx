import React, { useEffect, useState } from 'react'
import './DesktopFilter.css'
import { DropPlaces } from '../../../molecules/DropPlaces/DropPlaces'
import { Heading } from '../../../atoms/Heading/Heading'
import { Button } from '../../../atoms/Button/Button'
import { SpacerHorizontal } from '../../../atoms/Spacer/SpacerHorizontal'
import { CalendarDrop } from '../../../molecules/DropCalendar/CalendarDrop'
import axios from 'axios'
import { urlAPI } from '../../../../global.js';
export const DesktopFilter = (props) => {

  const scroll = () => {
    
    window.scrollTo({top:485,behavior: 'smooth'})
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props) {
      let ciudadId = undefined;
      if (props.lugarInput == 'San Carlos de Bariloche') {
        ciudadId = 1
        
        axios.get(`${urlAPI}productos/porCiudad/${ciudadId}`).then(data => props.setFilterProducts(data.data))
        scroll()
      }
      else if (props.lugarInput == 'Buenos Aires') {
        ciudadId = 2;
        
        axios.get(`${urlAPI}productos/porCiudad/${ciudadId}`).then(data => props.setFilterProducts(data.data))
        scroll()
      }
      else if (props.lugarInput == 'Mendoza') {
        ciudadId = 3;
        
        axios.get(`${urlAPI}productos/porCiudad/${ciudadId}`).then(data => props.setFilterProducts(data.data))
        scroll()
      }
      else if (props.lugarInput == 'Córdoba') {
        ciudadId = 4;
        
        axios.get(`${urlAPI}productos/porCiudad/${ciudadId}`).then(data => props.setFilterProducts(data.data))
        scroll()
      }
      else {
        console.log('entro');
        
        props.setFilterProducts([])
      }
    }
    
  }





  return (
    <div className='desktop-filter-container'>

      <div className='desktop-filter-container-content'>
        <Heading variant='base' type='xl'  >Busca ofertas en hoteles, casas y mucho más</Heading>
        <SpacerHorizontal height='sm' />
        <form onSubmit={handleSubmit}>
          <div className='desktop-filters-button'>
            <DropPlaces lugarInput={props.lugarInput} setLugarInput={props.setLugarInput} placeholder='¿A donde vamos?' icon='location' />
            <div style={{ width: '40%' }} >
              <CalendarDrop />
            </div>
            <Button type='submit' size='base' label='Buscar'></Button>
          </div>
        </form>
      </div>
    </div>
  )
}

