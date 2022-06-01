import React,{useState,useEffect} from 'react'
import { DesktopCalendar } from './Versiones/DesktopCalendar'
import { TabletCalendar } from './Versiones/TabletCalendar'
import { MobileCalendar } from './Versiones/MobileCalendar'


export const Calendar = () => {
    
    const [calendarDisplayed,setCalendarDisplayed]=useState(<DesktopCalendar/>)
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
            setCalendarDisplayed(<DesktopCalendar/>)
        }
        else if(windowWidth<=1365){
            setCalendarDisplayed(<DesktopCalendar/>)
        }
        else if(windowWidth>=1366){
            setCalendarDisplayed(<DesktopCalendar/>)

        }
        
    },[windowWidth]);
    return (
        // 
        <>
            {calendarDisplayed}
        </>
    )
}
