import React from 'react'
import './TabletFilter.css'
import axios from 'axios'
import { DropPlaces } from '../../../molecules/DropPlaces/DropPlaces'
import { Heading } from '../../../atoms/Heading/Heading'
import { Button } from '../../../atoms/Button/Button'
import { SpacerHorizontal } from '../../../atoms/Spacer/SpacerHorizontal'
import { urlAPI } from '../../../../global';
import { CalendarDrop } from '../../../molecules/DropCalendar/CalendarDrop'

export const TabletFilter = (props) => {

  const scroll = () => {

    window.scrollTo({ top: 580, behavior: 'smooth' })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props) {

      const spanValueFecha = document.getElementsByClassName("rs-picker-toggle-value")[0];

      let ciudadId = undefined;
      let raw = JSON.stringify({
        "fechaInicioReserva": "props.startDate",
        "fechaFinReserva": "props.endDate"
      });

      var axios = require('axios');

      var config = {
        method: 'get',
        url: `${urlAPI}productos/disponibles/porFecha`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*/*'
        },
        data: raw,
        redirect: 'follow'
      };

      if (props.lugarInput == 'San Carlos de Bariloche') {
        ciudadId = 1
        props.setLugarInput('')
        axios.get(`${urlAPI}productos/porCiudad/${ciudadId}`).then(data => props.setFilterProducts(data.data))
        scroll()
      }
      else if (props.lugarInput == 'Buenos Aires') {
        ciudadId = 2;
        props.setLugarInput('')
        axios.get(`${urlAPI}productos/porCiudad/${ciudadId}`).then(data => props.setFilterProducts(data.data))
        scroll()
      }
      else if (props.lugarInput == 'Mendoza') {
        ciudadId = 3;
        props.setLugarInput('')
        axios.get(`${urlAPI}productos/porCiudad/${ciudadId}`).then(data => props.setFilterProducts(data.data))
        scroll()
      }
      else if (props.lugarInput == 'Córdoba') {
        ciudadId = 4;
        props.setLugarInput('')
        axios.get(`${urlAPI}productos/porCiudad/${ciudadId}`).then(data => props.setFilterProducts(data.data))
        scroll()
      } else if (spanValueFecha != "") {
        // fetch(`${urlAPI}productos/disponibles/porFecha`, requestOptions)
        // .then(response => props.setFilterProducts(response.data))
        // .catch(error => console.log('error', error));
        console.log("hola")
        // axios.get(`${urlAPI}productos/disponibles/porFecha`, raw).then(resp => {
        //   console.log(resp.data)
        //   props.setFilterProducts(resp.data)
        // }).catch(e => {
        //   console.log(e);
        // })

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            scroll()
          })
          .catch(function (error) {
            console.log(error);
          });
        
      }
    }
    else {
      props.setLugarInput('')
      props.setFilterProducts([])
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
              <CalendarDrop startDate={props.startDate} setStartDate={props.setStartDate} endDate={props.endDate} setEndDate={props.setEndDate} />
            </div>
            <Button size='base' type='submit' label='Buscar'></Button>
          </div>
        </form>
      </div>

    </div>
  )
}

