import React,{useState,useEffect} from 'react'
import { DesktopFilter } from './Versions/DesktopFilter'
import { TabletFilter } from './Versions/TabletFilter'
import { MobileFilter } from './Versions/MobileFilter'

export const Filter = () => {

    const [filterDisplayed,setFilterDisplayed]=useState(<><DesktopFilter /></>)
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
            setFilterDisplayed(<MobileFilter  />)
        }
        else if(windowWidth<1365){
            setFilterDisplayed(<TabletFilter  />)
        }
        else if(windowWidth>1366){
            setFilterDisplayed(<DesktopFilter  />)
        }
        
        
        
        
        
        
        
    },[windowWidth]);



    return (
        <>
        {filterDisplayed}
        </>
    )
}

