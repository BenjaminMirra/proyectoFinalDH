import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { urlAPI } from "../../../global";
import { Button } from "../../atoms/Button/Button";
import { Heading } from "../../atoms/Heading/Heading";
import { Icon } from "../../atoms/Icon/Icon";
import { Paragraph } from "../../atoms/paragraph/Paragraph";
import { SpacerHorizontal } from "../../atoms/Spacer/SpacerHorizontal";
import axios from "axios";
import "./ReserveDetail.css";
export const ReserveDetail = ({
  product,
  category,
  location,
  reservedDays,
  setFailReserve,
  setSubmitData,
  submitData,
}) => {
  const navigate = useNavigate();
  // const [submitData,setSubmitData]=useState({fechaInicioReserva:'',fechaFinReserva:'',horaEstimadaDeLlegada:'',mensajeUsuario:'',vacunadoCovid:true,usuarioId:'',productoId:''})

  const { id } = useParams();
  useEffect(() => {
    if (setSubmitData) {
      if (
        reservedDays.startDate.year !== "1969" &&
        reservedDays.startDate &&
        reservedDays.endDate.year !== "1969" &&
        reservedDays.endDate
      ) {
        setSubmitData((prevData) => ({
          ...prevData,
          fechaInicioReserva: `${reservedDays.startDate.year}-${reservedDays.startDate.month}-${reservedDays.startDate.day}`,
          fechaFinReserva: `${reservedDays.endDate.year}-${reservedDays.endDate.month}-${reservedDays.endDate.day}`,
        }));
      }
    }
  }, [reservedDays]);

  const [warnings, setWarnings] = useState({ server: false, data: false,range:false });

  const handleSubmit = async () => {
    // console.log(JSON.stringify(submitData));
    if (JSON.parse(localStorage.getItem("jwt")) == null) {
      setFailReserve(true);
      navigate("/login");
    } else {
      // console.log(JSON.stringify(submitData));
      // console.log(JSON.parse(localStorage.getItem('jwt')));
      if (
        reservedDays.startDate.year !== "1969" &&
        reservedDays.startDate &&
        reservedDays.endDate.year !== "1969" &&
        reservedDays.endDate &&
        submitData.horaEstimadaDeLlegada
      ) {
        try {
          axios({
            method: "POST",
            url: `${urlAPI}reservas/agregar`,
            data: {
              fechaInicioReserva: `${submitData.fechaInicioReserva}`,
              fechaFinReserva: `${submitData.fechaFinReserva}`,
              horaEstimadaDeLlegada: `${submitData.horaEstimadaDeLlegada}`,
              mensajeUsuario: `${submitData.mensajeUsuario}`,
              vacunadoCovid: submitData.vacunadoCovid,
              usuario_id: JSON.parse(localStorage.getItem("userData")).id,
              producto_id: id,
            },
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("jwt")),
            },
          }).then((res) => {
            console.log(res);
            if (res.status != 200) {
              setWarnings({ server: true, data: false, range: false });
              setTimeout(
                () => setWarnings({ server: false, data: false, range: false }),
                5000
              );
            } else {
              localStorage.removeItem("lastProduct");
              localStorage.removeItem("dates");
              navigate("/reserva-exitosa");
            }
            
          }).catch(error=>{
             setWarnings(prevValue=>{
                if (!prevValue.data) {
                    return { server: false, data: false, range: true };
                }
             });
             setTimeout(
               () => setWarnings({ server: false, data: false, range: false }),
               5000
             );
          });
          //  console.log(response);
        } catch (error) {
          setWarnings({ server: false, data: false,range:true });
          setTimeout(() => setWarnings({ server: false, data: false,range:false }), 5000);
        }
      }
      else{
        setWarnings((prevValue) => {
            console.log(prevValue);
          if (!prevValue.range) {
            return { server: false, data: true, range: false };
          }
        });
        setTimeout(
          () => setWarnings({ server: false, data: false, range: false }),
          5000
        );
      }
      // navigate('/reserva-exitosa')
    }
  };
  return (
    <div className="reserveDetail">
      <SpacerHorizontal height={"md"} />
      <div className="reserveDetail-container">
        <Heading title="h3" variant={"primary"} type="lg">
          Detalle de la reserva
        </Heading>
      </div>
      <SpacerHorizontal height={"md"} />
      <div className="reserveDetail-image-product">
        <img
          style={{ width: "100%", height: "100%" }}
          src={
            product.imagenDTOList
              ? product.imagenDTOList[0].url_img_producto
              : ""
          }
          alt=""
        />
      </div>
      <SpacerHorizontal height={"md"} />
      <div className="reserveDetail-container">
        <div className="reserveDetail-product-info">
          <Paragraph size={"md"}>{category}</Paragraph>
          <SpacerHorizontal height={"xxs"} />
          <Heading title={"h4"} variant="primary" type={"md"}>
            {product.titulo}
          </Heading>

          <div className="reserveDetail-stars">
            <Icon icon={"star"} />
            <Icon icon={"star"} />
            <Icon icon={"star"} />
            <Icon icon={"star"} />
            <Icon icon={"star"} />
          </div>
          <SpacerHorizontal height={"xs"} />
          <div className="reserveDetail-location">
            <Icon icon="location" width={"sm"} />
            <Paragraph> {location} </Paragraph>
          </div>

          <hr />

          <div className="check-date">
            <Paragraph>Check In </Paragraph>
            <div>
              <span>
                {reservedDays.startDate.year !== "1969" &&
                reservedDays.startDate.year ? (
                  reservedDays.startDate.day
                ) : (
                  <span className="date-skeleton">nad</span>
                )}
              </span>{" "}
              /{" "}
              <span>
                {reservedDays.startDate.year !== "1969" &&
                reservedDays.startDate.year ? (
                  reservedDays.startDate.month
                ) : (
                  <span className="date-skeleton">nad</span>
                )}
              </span>{" "}
              /{" "}
              <span>
                {reservedDays.startDate.year !== "1969" &&
                reservedDays.startDate.year ? (
                  reservedDays.startDate.year
                ) : (
                  <span className="date-skeleton">nad</span>
                )}
              </span>
            </div>
          </div>

          <hr />
          <div className="check-date">
            <Paragraph>Check Out </Paragraph>
            <div>
              <span>
                {reservedDays.endDate.year !== "1969" &&
                reservedDays.endDate.year ? (
                  reservedDays.endDate.day
                ) : (
                  <span className="date-skeleton">nad</span>
                )}
              </span>{" "}
              /{" "}
              <span>
                {reservedDays.endDate.year !== "1969" &&
                reservedDays.endDate.year ? (
                  reservedDays.endDate.month
                ) : (
                  <span className="date-skeleton">nad</span>
                )}
              </span>{" "}
              /{" "}
              <span>
                {reservedDays.endDate.year !== "1969" &&
                reservedDays.endDate.year ? (
                  reservedDays.endDate.year
                ) : (
                  <span className="date-skeleton">nad</span>
                )}
              </span>{" "}
            </div>
          </div>
          <hr />
          <div style={{ height: "27px" }}></div>
          <SpacerHorizontal height={"lg"} />

          <SpacerHorizontal height={"md"} />
        </div>
      </div>
      {warnings.data && (
        <div className="warning-unfilled-data" style={{ textAlign: "center" }}>
          <Paragraph variant={"error"}>
            Debes completar todos los datos que tienen un "
            <span className="required"> * "</span>
          </Paragraph>
        </div>
      )}
      {warnings.server && (
        <div className="warning-server-failed">
          <Paragraph variant={"error"}>
            Lamentablemente no se ha podido realizar la reserva, inténtelo más
            tarde
          </Paragraph>
        </div>
      )}
      {warnings.range && (
        <div className="warning-dateRange">
          <Paragraph variant={"error"}>
            Asegúrate de estar ingresando un rango de fechas valido
          </Paragraph>
        </div>
      )}

      <div className="desktop-reserve-submit-button">
        <Button
          onClick={handleSubmit}
          label="Confirmar reserva"
          variant={true}
        ></Button>
      </div>
    </div>
  );
};
