import { DateRangePicker } from 'rsuite';
import React, { useState, useEffect } from 'react'
import 'rsuite/dist/rsuite.min.css';
import './CalendarDrop.css'
import { CustomProvider } from 'rsuite';
import { Icon } from '../../atoms/Icon/Icon'
import esAR from 'rsuite/locales/es_AR';
import format from 'date-fns/format';



export const CalendarDrop = () => {

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
            serCalendarDisplayed(<DateRangePicker className="primerCalendario" size="md" placeholder="Check in - Check out" showOneCalendar={true} format={"d MMMM yyyy"} locale={{
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
                return format(value[0],"dd") + " de " + format(value[0],'MMM').toLowerCase() + ". - " + format(value[1],"dd") + " de " + format(value[1],'MMM').toLowerCase() + "."
            }}/>)
        }
        else if (windowWidth > 768 && windowWidth < 1366) {
            serCalendarDisplayed(<>
                <DateRangePicker placement='auto' className="primerCalendario" size="md" placeholder="Check in - Check out" showOneCalendar={false} format={"d MMMM yyyy"} locale={{
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
                    return format(value[0],"dd") + " de " + format(value[0],'MMM').toLowerCase() + ". - " + format(value[1],"dd") + " de " + format(value[1],'MMM').toLowerCase() + "."
                }}/>
            </>)
        } else if (windowWidth => 1366) {
            serCalendarDisplayed(<>
                <DateRangePicker className="primerCalendario" size="md" placeholder="Check in - Check out" showOneCalendar={false} format={"dd MMMM y"} locale={{
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
                        return format(value[0],"dd") + " de " + format(value[0],'MMM').toLowerCase() + ". - " + format(value[1],"dd") + " de " + format(value[1],'MMM').toLowerCase() + "."
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