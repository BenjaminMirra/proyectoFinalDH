import React from 'react'
import './DesktopFilter.css'
import { DropPlaces } from '../../../molecules/DropPlaces/DropPlaces'
import { Heading } from '../../../atoms/Heading/Heading'
import { Button } from '../../../atoms/Button/Button'
import { SpacerHorizontal } from '../../../atoms/Spacer/SpacerHorizontal'
import { CalendarDrop } from '../../../molecules/DropCalendar/CalendarDrop'
import { urlAPI } from '../../../../global.js';

export const DesktopFilter = ({ lugarInput, setLugarInput, startDate, endDate, setFilterProducts, setStartDate, setEndDate }) => {

  const scroll = () => {
    window.scrollTo({ top: 480, behavior: 'smooth' })
  };


  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      let ciudadId = undefined;

      var axios = require('axios');


      if (startDate.startsWith("20") === true && endDate.startsWith("20") === true && lugarInput === "San Carlos de Bariloche") {
        ciudadId = 1;
        setLugarInput('')
        setFilterProducts([])
        axios({
          method: "POST",
          url: `${urlAPI}productos/disponibles/porCiudadYFecha`,
          data: ({
            "fechaInicioReserva": `${startDate}`,
            "fechaFinReserva": `${endDate}`,
            "id_ciudad": ciudadId,
          })
        })
          .then((response) => {
            setFilterProducts(response.data)
          })
          .catch(function (error) {
            console.log(error)
          });
        scroll()

      } else if (startDate.startsWith("20") === true && endDate.startsWith("20") === true && lugarInput === 'Buenos Aires') {
        ciudadId = 2;
        setLugarInput('')
        setFilterProducts([])
        axios({
          method: "POST",
          url: `${urlAPI}productos/disponibles/porCiudadYFecha`,
          data: ({
            "fechaInicioReserva": `${startDate}`,
            "fechaFinReserva": `${endDate}`,
            "id_ciudad": ciudadId,
          })
        })
          .then((response) => {
            setFilterProducts(response.data)
          })
          .catch(function (error) {
            console.log(error)
          });

        scroll()

      } else if (startDate.startsWith("20") === true && endDate.startsWith("20") === true && lugarInput === 'Mendoza') {
        ciudadId = 3;
        setLugarInput('')
        setFilterProducts([])
        axios({
          method: "POST",
          url: `${urlAPI}productos/disponibles/porCiudadYFecha`,
          data: ({
            "fechaInicioReserva": `${startDate}`,
            "fechaFinReserva": `${endDate}`,
            "id_ciudad": ciudadId,
          })
        })
          .then((response) => {
            setFilterProducts(response.data)
          })
          .catch(function (error) {
            console.log(error)
          });
        scroll()

      } else if (startDate.startsWith("20") === true && endDate.startsWith("20") === true && lugarInput === 'Córdoba') {
        ciudadId = 4;
        setLugarInput('')
        setFilterProducts([])
        axios({
          method: "POST",
          url: `${urlAPI}productos/disponibles/porCiudadYFecha`,
          data: ({
            "fechaInicioReserva": `${startDate}`,
            "fechaFinReserva": `${endDate}`,
            "id_ciudad": ciudadId,
          })
        })
          .then((response) => {
            setFilterProducts(response.data)
          })
          .catch(function (error) {
            console.log(error)
          });
        scroll()

      } else if (lugarInput === 'San Carlos de Bariloche') {
        ciudadId = 1
        setLugarInput('')
        setFilterProducts([])
        axios.get(`${urlAPI}productos/porCiudad/${ciudadId}`).then(data => setFilterProducts(data.data))
        scroll()
      }
      else if (lugarInput === 'Buenos Aires') {
        ciudadId = 2;
        setLugarInput('')
        setFilterProducts([])
        axios.get(`${urlAPI}productos/porCiudad/${ciudadId}`).then(data => setFilterProducts(data.data))
        scroll()
      }
      else if (lugarInput === 'Mendoza') {
        ciudadId = 3;
        setLugarInput('')
        setFilterProducts([])
        axios.get(`${urlAPI}productos/porCiudad/${ciudadId}`).then(data => setFilterProducts(data.data))
        scroll()
      }
      else if (lugarInput === 'Córdoba') {
        ciudadId = 4;
        setLugarInput('')
        setFilterProducts([])
        axios.get(`${urlAPI}productos/porCiudad/${ciudadId}`).then(data => setFilterProducts(data.data))
        scroll()
      }
      else if (startDate.startsWith("20") === true && endDate.startsWith("20") === true ){
        axios({
          method: "POST",
          url: `${urlAPI}productos/disponibles/porFecha/`,
          data: ({
            "fechaInicioReserva": `${startDate}`,
            "fechaFinReserva": `${endDate}`
          })
        })
          .then((response) => {
            setFilterProducts(response.data)
          })
        scroll()
      }
    } catch (e) {
      setLugarInput('')
      setEndDate('')
      setStartDate('')
      setFilterProducts([])
    }

  }

  return (
    <div className='desktop-filter-container'>

      <div className='desktop-filter-container-content'>
        <Heading variant='base' type='xl'  >Busca ofertas en hoteles, casas y mucho más</Heading>
        <SpacerHorizontal height='sm' />
        <form onSubmit={handleSubmit}>
          <div className='desktop-filters-button'>
            <DropPlaces lugarInput={lugarInput} setLugarInput={setLugarInput} placeholder='¿A donde vamos?' icon='location' />
            <div style={{ width: '40%' }} >
              <CalendarDrop startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
            </div>
            <Button type='submit' size='base' label='Buscar'></Button>
          </div>
        </form>
      </div>
    </div>
  )
}

