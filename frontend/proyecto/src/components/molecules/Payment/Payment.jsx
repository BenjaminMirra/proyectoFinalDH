
import React from 'react'
import { Button } from '../../atoms/Button/Button';
import { Heading } from '../../atoms/Heading/Heading';
import { Icon } from '../../atoms/Icon/Icon';
import { Paragraph } from '../../atoms/paragraph/Paragraph';
import './Payment.css'
export const Payment = () => {
  return (
    <div className="payment">
      <div className="payment-container">
        <div className="payment-content">
          <Heading title={"h2"} variant="secondary" type={"lg"}>
            ¿Como querés pagar?
          </Heading>
          <div className="payment-methods">
            <div className="payment-method">
              <div className="payment-method-content">
                <input name="payment-method" type="radio"></input>
                <div className="payment-method-icon">
                  <Icon icon={"cash"} width="lg"></Icon>
                </div>
                <Paragraph size={"lg"} variant={"secondary"}>
                  Efectivo
                </Paragraph>{" "}
              </div>
            </div>
            <div className="payment-method">
              <div className="payment-method-content">
                <input name="payment-method" type="radio"></input>
                <div className="payment-method-icon">
                  <Icon icon={"mercadopago"} width="lg"></Icon>
                </div>
                <Paragraph size={"lg"} variant={"secondary"}>
                  Mercado Pago
                </Paragraph>{" "}
              </div>
            </div>
            <div className="payment-method">
              <div className="payment-method-content">
                <input name="payment-method" type="radio"></input>
                <div className="payment-method-icon">
                  <Icon icon={"cripto"} width="lg"></Icon>
                </div>
                <Paragraph size={"lg"} variant={"secondary"}>
                  Cripto
                </Paragraph>{" "}
              </div>
            </div>
          </div>
          <div className="confirm-payment">
            <Button label="Confirmar metodo de pago"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
