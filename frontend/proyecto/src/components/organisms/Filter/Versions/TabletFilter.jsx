import React from 'react'
import './TabletFilter.css'
import axios from 'axios'
import { DropPlaces } from '../../../molecules/DropPlaces/DropPlaces'
import { Heading } from '../../../atoms/Heading/Heading'
import { Button } from '../../../atoms/Button/Button'
import { SpacerHorizontal } from '../../../atoms/Spacer/SpacerHorizontal'
import { CalendarDrop } from '../../../molecules/DropCalendar/CalendarDrop'

export const TabletFilter = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props) {
      console.log(props.lugarInput);
      let ciudadId = undefined;
      if (props.lugarInput == 'San Carlos de Bariloche') {
        ciudadId = 1
        props.setLugarInput('')
        axios.get(`http://localhost:8080/productos/porCiudad/${ciudadId}`).then(data => props.setFilterProducts(data.data))
      }
      else if (props.lugarInput == 'Buenos Aires') {
        ciudadId = 2;
        props.setLugarInput('')
        axios.get(`http://localhost:8080/productos/porCiudad/${ciudadId}`).then(data => props.setFilterProducts(data.data))
      }
      else if (props.lugarInput == 'Mendoza') {
        ciudadId = 3;
        props.setLugarInput('')
        axios.get(`http://localhost:8080/productos/porCiudad/${ciudadId}`).then(data => props.setFilterProducts(data.data))
      }
      else if (props.lugarInput == 'Córdoba') {
        ciudadId = 4;
        props.setLugarInput('')
        axios.get(`http://localhost:8080/productos/porCiudad/${ciudadId}`).then(data => props.setFilterProducts(data.data))
      }
      else {
        console.log('entro');
        props.setLugarInput('')
        props.setFilterProducts([])
      }

    }
  }

  return (
    <div className='tablet-filter-container'>

      <div className='tablet-filter-container-content'>
        <Heading variant='base' type='xl'  >Busca ofertas en hoteles, casas y mucho más</Heading>
        <SpacerHorizontal height='sm' />
        <form onSubmit={handleSubmit}>
          <div className='tablet-filters-button'>
            <DropPlaces lugarInput={props.lugarInput} setLugarInput={props.setLugarInput} placeholder='¿A donde vamos?' icon='location' />
            <div className='tablet-calendar-input'>
              <CalendarDrop />
            </div>
            <Button size='base' type='submit' label='Buscar'></Button>
          </div>
        </form>
      </div>

    </div>
  )
}

