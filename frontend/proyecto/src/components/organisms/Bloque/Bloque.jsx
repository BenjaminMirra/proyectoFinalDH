import React,{useState,useEffect} from 'react'
import { DesktopBloque } from './Versiones/DesktopBloque'
import { TabletBloque } from './Versiones/TabletBloque'
import { MobileBloque } from './Versiones/MobileBloque'

export const Bloque = () => {

    const [bloqueDisplayed,setBloqueDisplayed]=useState(<><DesktopBloque /></>)
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
            setBloqueDisplayed(<MobileBloque/>)
        }
        else if(windowWidth<1365){
            setBloqueDisplayed(<TabletBloque/>)
        }
        else if(windowWidth>1366){
            setBloqueDisplayed(<DesktopBloque/>)
        }
        
    },[windowWidth]);



    return (
        <>
        {bloqueDisplayed}
        </>
    )
}

