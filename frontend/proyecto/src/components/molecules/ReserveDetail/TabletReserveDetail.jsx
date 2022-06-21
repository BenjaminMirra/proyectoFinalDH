import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { urlAPI } from '../../../global'
import { Button } from '../../atoms/Button/Button'
import { Heading } from '../../atoms/Heading/Heading'
import { Icon } from '../../atoms/Icon/Icon'
import { Paragraph } from '../../atoms/paragraph/Paragraph'
import { SpacerHorizontal } from '../../atoms/Spacer/SpacerHorizontal'
import axios from 'axios'
import './TabletReserveDetail.css'
export const TabletReserveDetail = ({ product, category, location, setFailReserve, reservedDays, setSubmitData, submitData }) => {
  const navigate = useNavigate()
  // const [submitData,setSubmitData]=useState({fechaInicioReserva:'',fechaFinReserva:'',horaEstimadaDeLlegada:'',mensajeUsuario:'',vacunadoCovid:true,usuarioId:'',productoId:''})

  let { id } = useParams()
  useEffect(() => {
    id = 0
    if (setSubmitData) {



      if (reservedDays.startDate.year !== '1969' && reservedDays.startDate && reservedDays.endDate.year !== '1969' && reservedDays.endDate) {
        setSubmitData(prevData => ({ ...prevData, fechaInicioReserva: `${reservedDays.startDate.year}-${reservedDays.startDate.month}-${reservedDays.startDate.day}`, fechaFinReserva: `${reservedDays.endDate.year}-${reservedDays.endDate.month}-${reservedDays.endDate.day}` }))
      }
    }

  }, [reservedDays]);

  //         header:'Authorization':Bearer jwt
  //         body:{
  //   "fechaInicioReserva": "2022-08-10",
  //   "fechaFinReserva": "2022-08-20",
  //   "horaEstimadaDeLlegada": "15:00",
  //    "mensajeUsuario": "1234h",
  //    "vacunadoCovid": true,
  //    "usuario_id": 4,
  //    "producto_id": 2
  const handleSubmit = async () => {

    // console.log(JSON.stringify(submitData));
    if (JSON.parse(localStorage.getItem('jwt')) == null) {
      setFailReserve(true)
      navigate('/login')
    }
    else {

      // console.log(JSON.stringify(submitData));
      // console.log(JSON.parse(localStorage.getItem('jwt')));
      if (
        reservedDays.startDate.year !== "1969" &&
        reservedDays.startDate.year &&
        reservedDays.endDate.year !== "1969" &&
        reservedDays.endDate.year
      ) {
        axios({
          method: "POST",
          url: `${urlAPI}reservas/agregar`,
          data: {
            fechaInicioReserva: `${submitData.fechaInicioReserva}`,
            fechaFinReserva: `${submitData.fechaFinReserva}`,
            horaEstimadaDeLlegada: `${submitData.horaEstimadaDeLlegada}`,
            mensajeUsuario: `${submitData.mensajeUsuario}`,
            vacunadoCovid: submitData.vacunadoCovid,
            usuario_id: JSON.parse(localStorage.getItem("userData"))
              .id,
            producto_id: id,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("jwt")),
          },
        })
          .then((res) => {
            localStorage.removeItem("lastProduct");
            localStorage.removeItem("dates");
            return navigate("/reserva-exitosa");
          })
          .catch((err) => console.log(err));
      }

      //  console.log(response);



      // navigate('/reserva-exitosa')
    }
  }
  return (
    <div className='reserveDetail'>
      <SpacerHorizontal height={'md'} />
      <div className='tablet-reserveDetail-container' >
        <Heading title='h3' variant={'primary'} type='lg' >Detalle de la reserva</Heading>
      </div>
      <SpacerHorizontal height={'xs'} />
      <div className='tablet-reserveDetail-general-container'>
        {/* <SpacerHorizontal height={'md'} /> */}
        <div className='reserveDetail-image-product'>
          <img style={{ width: '100%', height: '100%' }} src={product.imagenDTOList ? product.imagenDTOList[0].url_img_producto : ''} alt="" />
        </div>

        <div className='reserveDetail-container' >
          <div className='reserveDetail-product-info'>
            <Paragraph size={'md'} >{category}</Paragraph>
            {/* <SpacerHorizontal height={'xxs'} /> */}
            <Heading title={'h4'} variant='primary' type={'md'} >{product.titulo}</Heading>

            <div className='reserveDetail-stars'>
              <Icon icon={'star'} /><Icon icon={'star'} /><Icon icon={'star'} /><Icon icon={'star'} /><Icon icon={'star'} />
            </div>
            <SpacerHorizontal height={'xs'} />
            <div className='reserveDetail-location'>
              <Icon icon='location' width={'xs'} />
              <Paragraph> {location} </Paragraph>
            </div>

            <hr />

            <div className='check-date' >
              <Paragraph>Check In  </Paragraph>
              <div>
                <span>{reservedDays.startDate.year !== '1969' && reservedDays.startDate.year ? reservedDays.startDate.day : <span className='date-skeleton'>nad</span>}</span> / <span>{reservedDays.startDate.year !== '1969' && reservedDays.startDate.year ? reservedDays.startDate.month : <span className='date-skeleton'>nad</span>}</span> / <span>{reservedDays.startDate.year !== '1969' && reservedDays.startDate.year ? reservedDays.startDate.year : <span className='date-skeleton'>nad</span>}</span>
              </div>
            </div>

            <hr />
            <div className='check-date' >
              <Paragraph>Check Out  </Paragraph>
              <div>
                <span>{reservedDays.endDate.year !== '1969' && reservedDays.endDate.year ? reservedDays.endDate.day : <span className='date-skeleton'>nad</span>}</span> / <span>{reservedDays.endDate.year !== '1969' && reservedDays.endDate.year ? reservedDays.endDate.month : <span className='date-skeleton'>nad</span>}</span> / <span>{reservedDays.endDate.year !== '1969' && reservedDays.endDate.year ? reservedDays.endDate.year : <span className='date-skeleton'>nad</span>}</span>
              </div>
            </div>
            <hr />


            <Button onClick={handleSubmit} label='Confirmar reserva' variant={true} ></Button>

          </div>

        </div>

      </div>
      <SpacerHorizontal height={'md'} />
    </div>
  )
}
