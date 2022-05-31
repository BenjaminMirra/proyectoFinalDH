import React,{useState,useEffect} from 'react'
import { DesktopBloqueCalendar } from './Versiones/DesktopBloqueCalendar'
import { TabletBloqueCalendar } from './Versiones/TabletBloqueCalendar.jsx'
import { MobileBloqueCalendar } from './Versiones/MobileBloqueCalendar.jsx'

export const BloqueCalendar = () => {

    const [bloqueCalendarDisplayed,setBloqueCalendarDisplayed]=useState(<><DesktopBloqueCalendar /></>)
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    useEffect(() => {
    function handleResize() {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    useEffect(() => {
        if(windowWidth < 768){
            setBloqueCalendarDisplayed(<DesktopBloqueCalendar/>)
        }
        else if(windowWidth<1365){
            setBloqueCalendarDisplayed(<DesktopBloqueCalendar/>)
        }
        else if(windowWidth>1366){
            setBloqueCalendarDisplayed(<DesktopBloqueCalendar/>)
        }
        
    },[windowWidth]);



    return (
        <>
        {bloqueCalendarDisplayed}
        </>
    )
}

