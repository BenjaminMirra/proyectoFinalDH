import React,{useState,useEffect} from 'react'
import { DesktopFilter } from './Versions/DesktopFilter'
import { TabletFilter } from './Versions/TabletFilter'
import { MobileFilter } from './Versions/MobileFilter'

export const Filter = ({setFilterProducts}) => {
    const [lugarInput,setLugarInput]=useState('')
    const [filterDisplayed,setFilterDisplayed]=useState(<><DesktopFilter /></>)
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    useEffect(() => {
        if (lugarInput) {
            console.log(lugarInput);
        }
    }, [lugarInput]);
    useEffect(() => {
    function handleResize() {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    useEffect(() => {
        if(windowWidth < 768){
            setFilterDisplayed(<MobileFilter setFilterProducts={setFilterProducts} lugarInput={lugarInput} setLugarInput={setLugarInput} />)
        }
        else if(windowWidth<1365){
            setFilterDisplayed(<TabletFilter setFilterProducts={setFilterProducts} lugarInput={lugarInput} setLugarInput={setLugarInput} />)
        }
        else if(windowWidth>1366){
            setFilterDisplayed(<DesktopFilter setFilterProducts={setFilterProducts} lugarInput={lugarInput} setLugarInput={setLugarInput}   />)
        }
        
        
        
        
        
        
        
    },[windowWidth,lugarInput]);



    return (
        <>
        {filterDisplayed}
        </>
    )
}

