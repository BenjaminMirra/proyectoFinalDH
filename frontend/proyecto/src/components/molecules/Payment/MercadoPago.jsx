import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import { Heading } from "../../atoms/Heading/Heading";
import { Paragraph } from "../../atoms/paragraph/Paragraph";
import { Inicio } from "./Inicio";
import { Picture } from '../../atoms/Picture/Picture';
import { Icon } from '../../atoms/Icon/Icon';

export const MercadoPago = (props) => {
    const navigate=useNavigate()
    const handleNavigation = (direction) => {
      console.log(direction);
      direction === "back"
        ? props.setCardDisplayed(
            <>
              <Inicio handleCardDisplayed={props.handleCardDisplayed}></Inicio>
            </>
          )
        : props.handleFinish();
    };
  return (
    <div className="cbu">
      <div className="method-title">
        <Icon icon={"mercadopago"} width="lg" />
        <Heading variant={"secondary"} type="lg" title={"h2"}>
          Mercado Pago
        </Heading>
      </div>

      <div className="cbu-content">
        <Paragraph variant={"secondary"} size="xmd">
          Para realizar el pago escaneá el siguiente código de mercado pago
        </Paragraph>
        <div className="qr">
          <Picture image={"qr_mp"} width="lg" height={"lg"}></Picture>
        </div>
      </div>
      <div className="cbu-nav">
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
