import { DateRangePicker } from 'rsuite';
import React, { useState, useEffect } from 'react'
import 'rsuite/dist/rsuite.min.css';
import './CalendarDrop.css'
import { CustomProvider } from 'rsuite';
import { Icon } from '../../atoms/Icon/Icon'
import esAR from 'rsuite/locales/es_AR';
import format from 'date-fns/format';
import axios from 'axios'
import { urlAPI } from '../../../global.js';


export const CalendarDrop = () => {

    const { beforeToday } = DateRangePicker;

    const [startDate, setStartDate] = useState({})
    const [endDate, setEndtDate] = useState({})
    const [productos, setProductos] = useState({})

    useEffect(() => {
        setTimeout(() => {
            axios.get(`${urlAPI}productos/1`).then(data => setProductos(data.data));
            console.log(productos)
            console.log("hola")
        }, 100)
    }, []);

    const formatYmd = date => date.toISOString().slice(0, 10);



    const [userInfo, setUserInfo] = useState({})
    const resetUserInfo = () => setUserInfo({});

    const [calendarDisplayed, serCalendarDisplayed] = useState(
        <>
            <DateRangePicker className="primerCalendario" size="md" placeholder="Check in - Check out" showOneCalendar={false} />
        </>
    )
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    useEffect(() => {
        if (windowWidth <= 768) {
            serCalendarDisplayed(<DateRangePicker disabledDate={beforeToday()} className="primerCalendario" size="md" placeholder="Check in - Check out" showOneCalendar={true} format={"d MMMM yyyy"} locale={{
                sunday: 'D',
                monday: 'L',
                tuesday: 'M',
                wednesday: 'X',
                thursday: 'J',
                friday: 'V',
                saturday: 'S',
                ok: 'Aplicar',
                today: 'Today',
            }} renderValue={(value) => {
                return format(value[0], "dd") + " de " + format(value[0], 'MMM').toLowerCase() + ". - " + format(value[1], "dd") + " de " + format(value[1], 'MMM').toLowerCase() + "."
            }} />)
        }
        else if (windowWidth > 768 && windowWidth < 1366) {
            serCalendarDisplayed(<>
                <DateRangePicker disabledDate={beforeToday()} placement='auto' className="primerCalendario" size="md" placeholder="Check in - Check out" showOneCalendar={false} format={"d MMMM yyyy"} locale={{
                    sunday: 'D',
                    monday: 'L',
                    tuesday: 'M',
                    wednesday: 'X',
                    thursday: 'J',
                    friday: 'V',
                    saturday: 'S',
                    ok: 'Aplicar',
                    today: 'Today',
                }} onOk={
                    (value) => {
                        setStartDate(formatYmd(value[0]).toString())
                        setEndtDate(formatYmd(value[1]).toString())
                        console.log(formatYmd(value[0]) + " " + formatYmd(value[1]));
                        console.log(startDate)
                        console.log(endDate)
                        console.log(productos);
                    }
                }

                    renderValue={(value) => {
                        return format(value[0], "dd") + " de " + format(value[0], 'MMM').toLowerCase() + ". - " + format(value[1], "dd") + " de " + format(value[1], 'MMM').toLowerCase() + "."
                    }} />
            </>)
        } else if (windowWidth => 1366) {
            serCalendarDisplayed(<>
                <DateRangePicker disabledDate={beforeToday()} className="primerCalendario" size="md" placeholder="Check in - Check out" showOneCalendar={false} format={"dd MMMM y"} locale={{
                    sunday: 'D',
                    monday: 'L',
                    tuesday: 'M',
                    wednesday: 'X',
                    thursday: 'J',
                    friday: 'V',
                    saturday: 'S',
                    ok: 'Aplicar',
                    today: 'Today',
                }}
                    renderValue={(value) => {
                        return format(value[0], "dd") + " de " + format(value[0], 'MMM').toLowerCase() + ". - " + format(value[1], "dd") + " de " + format(value[1], 'MMM').toLowerCase() + "."
                    }}
                />
            </>)
        }

    }, [windowWidth, userInfo]);

    return (

        <div className="calendarioDiv">
            <CustomProvider locale={esAR}>
                <Icon className="iconoDiv" icon="calendar" width="lg" />
                {calendarDisplayed}
            </CustomProvider>
        </div>

    )
}