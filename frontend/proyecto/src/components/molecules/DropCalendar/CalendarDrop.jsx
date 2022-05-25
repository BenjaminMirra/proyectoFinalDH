import { DateRangePicker } from 'rsuite';
import React, { useState, useEffect } from 'react'
import 'rsuite/dist/rsuite.min.css';
import './CalendarDrop.css'
import { CustomProvider } from 'rsuite';
import esAR from 'rsuite/locales/es_AR';



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
            }} />)
        }
        else if (windowWidth > 768) {
            serCalendarDisplayed(<>
                <DateRangePicker className="primerCalendario" size="md" placeholder="Check in - Check out" showOneCalendar={false} format={"d MMMM yyyy"} locale={{
                    sunday: 'D',
                    monday: 'L',
                    tuesday: 'M',
                    wednesday: 'X',
                    thursday: 'J',
                    friday: 'V',
                    saturday: 'S',
                    ok: 'Aplicar',
                    today: 'Today',
                }} />
            </>)
        }

    }, [windowWidth, userInfo]);

    return (



        <>
            <CustomProvider locale={esAR}>
                {calendarDisplayed}
            </CustomProvider>
        </>
    )
}