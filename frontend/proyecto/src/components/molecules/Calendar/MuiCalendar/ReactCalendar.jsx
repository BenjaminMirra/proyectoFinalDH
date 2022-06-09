import React,{useState,useEffect} from 'react'
import { DesktopReactCalendar } from './Versiones/DesktopReactCalendar'
import { TabletReactCalendar } from './Versiones/TabletReactCalendar'
import { MobileReactCalendar } from './Versiones/MobileReactCalendar'


export const ReactCalendar = () => {
    
    const [calendarDisplayed,setCalendarDisplayed]=useState(<DesktopReactCalendar/>)
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    useEffect(() => {
    function handleResize() {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    useEffect(() => {
        if(windowWidth <= 768){
            setCalendarDisplayed(<MobileReactCalendar/>)
        }
        else if(windowWidth<1366){
            setCalendarDisplayed(<TabletReactCalendar/>)
        }
        else if(windowWidth>=1366){
            setCalendarDisplayed(<DesktopReactCalendar/>)

        }
        
    },[windowWidth]);
    return (
        // 
        <>
            {calendarDisplayed}
        </>
    )
}
