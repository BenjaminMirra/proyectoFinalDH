import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import { Heading } from "../../atoms/Heading/Heading";
import { Paragraph } from "../../atoms/paragraph/Paragraph";
import { Picture } from '../../atoms/Picture/Picture';
import { Inicio } from "./Inicio";
export const Cripto = (props) => {
    const navigate = useNavigate();
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
      <Heading variant={"secondary"} type="lg" title={"h2"}>
        Cripto
      </Heading>
      <div className="cbu-content">
        <Paragraph variant={"secondary"} size="xmd">
          Para para realizar el pago escaneá siguiente código de bitcoin
        </Paragraph>
        <div className="qr">
          <Picture image={"qr_cripto"} width="lg" height={"lg"}></Picture>
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
