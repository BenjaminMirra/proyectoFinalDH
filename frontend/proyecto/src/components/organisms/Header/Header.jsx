import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import { DesktopHeader } from './Versions/DesktopHeader'
import { TabletHeader } from './Versions/TabletHeader'
import { MobileHeader } from './Versions/MobileHeader'
export const Header = ({firstname,lastname}) => {
    const [userInfo,setUserInfo]=useState({firstname:firstname,lastname:lastname})
    const resetUserInfo=()=>setUserInfo({});
        
    const [headerDisplayed,setHeaderDisplayed]=useState(<><DesktopHeader firstname={firstname} lastname={lastname}/></>)
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
            setHeaderDisplayed(<MobileHeader handleUserInfo={resetUserInfo} firstname={userInfo.firstname} lastname={userInfo.lastname}/>)
        }
        else if(windowWidth<1366){
            setHeaderDisplayed(<TabletHeader handleUserInfo={resetUserInfo} firstname={userInfo.firstname} lastname={userInfo.lastname}/>)
        }
        else if(windowWidth>=1366){
            setHeaderDisplayed(<DesktopHeader handleUserInfo={resetUserInfo} firstname={userInfo.firstname} lastname={userInfo.lastname}/>)

        }
        
    },[windowWidth,userInfo]);
    return (
        // 
        <>
            {headerDisplayed}
        </>
    )
}

Header.propTypes = {}

