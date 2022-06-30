
import React,{useState,useEffect} from 'react'
import { Button } from '../../atoms/Button/Button';
import { Heading } from '../../atoms/Heading/Heading';
import { Icon } from '../../atoms/Icon/Icon';
import { Paragraph } from '../../atoms/paragraph/Paragraph';
import { Cash } from './Cash';
import { CBU } from './CBU';
import { MercadoPago } from './MercadoPago';
import { Inicio } from './Inicio';
import { Cripto } from './Cripto';
import axios from "axios";
import { urlAPI } from "../../../global";
import './Payment.css'
import { useNavigate,useParams } from 'react-router-dom';
export const Payment = ({ setShowPayment, submitData,price,placeName }) => {
  const { id } = useParams();
  const navigate=useNavigate();

  const [cardDisplayed, setCardDisplayed] = useState();
  useEffect(() => {
    console.log(cardDisplayed);
  }, [cardDisplayed]);

  
  const handleFinish = () => {
    axios({
      method: "POST",
      url: `${urlAPI}reservas/agregar`,
      data: {
        fechaInicioReserva: `${submitData.fechaInicioReserva}`,
        fechaFinReserva: `${submitData.fechaFinReserva}`,
        // horaEstimadaDeLlegada: `${submitData.horaEstimadaDeLlegada.target.value.slice(
        //   0,
        //   5
        // )}`,
        horaEstimadaDeLlegada: "13:00",
        mensajeUsuario: `${submitData.mensajeUsuario}`,
        vacunadoCovid: submitData.vacunadoCovid,
        usuario_id: JSON.parse(localStorage.getItem("userData")).id,
        producto_id: id,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("jwt")),
      },
    }).then((res) => navigate("/reserva-exitosa"));
  };


  const handleCardDisplayed = (method) => {
    if (method === "efectivo") {
      setCardDisplayed(
        <Cash
          placeName={placeName}
          price={price}
          handleFinish={handleFinish}
          submitData={submitData}
          handleCardDisplayed={handleCardDisplayed}
          setCardDisplayed={setCardDisplayed}
        ></Cash>
      );
    } else if (method === "mercadopago") {
      setCardDisplayed(
        <MercadoPago
          price={price}
          handleFinish={handleFinish}
          handleCardDisplayed={handleCardDisplayed}
          setCardDisplayed={setCardDisplayed}
        ></MercadoPago>
      );
    } else if (method === "cbu") {
      setCardDisplayed(
        <CBU
          price={price}
          handleFinish={handleFinish}
          handleCardDisplayed={handleCardDisplayed}
          setCardDisplayed={setCardDisplayed}
        ></CBU>
      );
    } else {
      setCardDisplayed(
        <Cripto
          price={price}
          handleFinish={handleFinish}
          handleCardDisplayed={handleCardDisplayed}
          setCardDisplayed={setCardDisplayed}
        ></Cripto>
      );
    }
  };

  useEffect(() => {
    setCardDisplayed(
      <>
        <Inicio handleCardDisplayed={handleCardDisplayed}></Inicio>
      </>
    );
  }, []);

  return (
    <>
      <div className="payment">
        <div className="payment-container">
          {cardDisplayed}
          <span className="payment-close">
            <Icon
              onClick={() => setShowPayment(false)}
              icon="closeBlack"
              width="lg"
            />
          </span>
        </div>
      </div>
    </>
  );
};
