import React from 'react'
import { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import { Button } from '../../../../atoms/Button/Button';
import { Heading } from '../../../../atoms/Heading/Heading';
import './MobileReactCalendar.css'
import { Link } from 'react-router-dom';
export const MobileReactCalendar = () => {
    registerLocale('es', es)
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [arrayDaysReserve, setArrayDaysReserve] = useState([]);
    const onChange = (dates) => {

        setDateRange(dates);

    }
    function editNamesDaysWeek() {
        const namesDaysWeek = document.querySelectorAll(".react-datepicker__day-name");
        namesDaysWeek.forEach(name => {
            name.innerHTML = name.textContent.substring(0, 1).toUpperCase();
        })
    }
    function createArrayDaysReserve(arrayReserves) {
        let aux = [];
        arrayReserves.forEach(reserve => {
            let start = new Date(reserve.dateIn.split("-")[0], reserve.dateIn.split("-")[1] - 1, reserve.dateIn.split("-")[2]);
            let end = new Date(reserve.dateOut.split("-")[0], reserve.dateOut.split("-")[1] - 1, reserve.dateOut.split("-")[2]);
            for (let i = start; i <= end; i.setDate(i.getDate() + 1)) {
                aux.push(new Date(i));
            }
        })
        setArrayDaysReserve(aux);
    }
    useEffect(() => {
        editNamesDaysWeek();
        let dateStart = new Date(startDate);
        let dateEnd = new Date(endDate);

    }, [startDate, endDate])
        const holidays=[new Date(2022,5,10),new Date(2022,5,11),new Date(2022,5,12),new Date(2022,5,13),new Date(2022,5,24),new Date(2022,5,25),new Date(2022,5,26),,new Date(2022,6,14),new Date(2022,6,15),new Date(2022,6,16),new Date(2022,6,17),,new Date(2022,7,4),new Date(2022,7,5),new Date(2022,7,6)]

    setTimeout(() => {
        const calendarMobile = document.getElementsByClassName("react-datepicker")[0];
        calendarMobile.classList.add("mobile-calendarReact");
        const calendarMobileDivButton = document.getElementsByClassName("start-booking")[0];
        calendarMobileDivButton.classList.add("mobile-start-booking");
        const calendarMobileNextButton = document.getElementsByClassName("react-datepicker__navigation--next")[0];
        calendarMobileNextButton.classList.add("mobile-nextButton");
        const calendarPadre = document.getElementsByClassName("react-datepicker")[0].parentNode;
        calendarPadre.classList.add("mobile-calendarReact-padre");
    }, 500)
    return (
        <div className="mobileCalendar-Container">
            <div className="mobile-calendar-heading">
            <Heading variant='primary' type='lg' title='h3' >
                Fechas disponibles
            </Heading>
            </div>
            <div className="mobile-calendarReserve">

                <DatePicker className='mobile-calendarReact'
                    inline
                    locale="es"
                    excludeDates={holidays}
                    minDate={new Date()}
                    dateFormat="dd MMM."
                    renderCustomHeader={({
                        monthDate,
                        customHeaderCount,
                        decreaseMonth,
                        increaseMonth,
                    }) => (
                        <div>
                            <button
                                aria-label="Previous Month"
                                className={
                                    "react-datepicker__navigation react-datepicker__navigation--previous"
                                }
                                style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
                                onClick={decreaseMonth}
                            >
                                <span
                                    className={
                                        "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                                    }
                                >
                                    {"<"}
                                </span>
                            </button>
                            <span className="react-datepicker__current-month">
                                {monthDate.toLocaleString("es-ES", {
                                    month: "long",
                                }).substring(0, 1).toUpperCase() + monthDate.toLocaleString("es-ES", { month: "long" }).slice(1)}
                            </span>
                            <button
                                aria-label="Next Month"
                                className={
                                    "react-datepicker__navigation react-datepicker__navigation--next"
                                }
                                style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                                onClick={increaseMonth}
                            >
                                <span
                                    className={
                                        "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                                    }
                                >
                                    {">"}
                                </span>
                            </button>
                        </div>
                    )}
                    startDate={startDate}
                    endDate={endDate}
                    selected={startDate}
                    selectsRange={true}
                    onChange={onChange}
                    monthsShown={1}
                />
                <div className='start-booking' >
                    <div className='start-booking-container' >
                        <Heading title='h4' variant='primary' type='sm' >Agrega tus fechas de viaje para obtener precios exactos </Heading>
                        <Link to={'reserva'} ><Button label='Iniciar reserva' > </Button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
