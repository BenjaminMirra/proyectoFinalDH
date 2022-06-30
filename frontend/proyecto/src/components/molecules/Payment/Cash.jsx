import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import { Heading } from '../../atoms/Heading/Heading'
import { Paragraph } from '../../atoms/paragraph/Paragraph'
import { Inicio } from './Inicio'

import './Cash.css'
export const Cash = (props) => {
    
    const handleNavigation=(direction)=>{
        console.log(direction);
          direction === "back"
            ? props.setCardDisplayed(
                <>
                  <Inicio
                    handleCardDisplayed={props.handleCardDisplayed}
                  ></Inicio>
                </>
              )
            : props.handleFinish();
    }
    
  return (
    <div className="cash">
      <Heading variant={"secondary"} type="lg" title={"h2"}>
        Efectivo
      </Heading>
      <div className="cash-content">
        <Paragraph size={"xmd"} variant={"secondary"}>
          Haz seleccionado el pago en efectivo, por lo que realizaras el pago una vez llegues
          al alojamiento <span>{props.placeName}</span>. <br /><br />
          Recuerde que el precio total de su estadía es de:{" "}
          <strong>ARG ${props.price}</strong>
        </Paragraph>
      </div>
      <div className="cash-nav">
        <Button
          onClick={() => handleNavigation("back")}
          variant={false}
          label="Volver"
        ></Button>
        <Button
          onClick={() => handleNavigation("finish")}
          label="Finalizar Reserva"
        ></Button>
      </div>
    </div>
  );
}
