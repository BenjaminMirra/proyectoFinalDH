import React,{useState,useEffect,createContext} from 'react'
import PropTypes from 'prop-types'
import { DesktopHeader } from './Versions/DesktopHeader'
import { TabletHeader } from './Versions/TabletHeader'
import { MobileHeader } from './Versions/MobileHeader'
export const Header = ({}) => {

    const UserDataLocalStorage=JSON.parse(localStorage.getItem('userData'))
    
    const [userInfo,setUserInfo]=useState({firstname:UserDataLocalStorage!==null?UserDataLocalStorage.firstname:undefined,lastname:UserDataLocalStorage!==null?UserDataLocalStorage.lastname:undefined})
    const resetUserInfo=()=>{
        localStorage.removeItem('userData')
        return setUserInfo({})};
        
    
    
    const [headerDisplayed,setHeaderDisplayed]=useState(<><DesktopHeader firstname={userInfo.firstname} lastname={userInfo.lastname}/></>)
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
            setHeaderDisplayed(<MobileHeader handleUserInfo={resetUserInfo} firstname={userInfo.firstname} lastname={userInfo.lastname} />)
        }
        else if(windowWidth<=1365){
            setHeaderDisplayed(<TabletHeader handleUserInfo={resetUserInfo} firstname={userInfo.firstname} lastname={userInfo.lastname} />)
        }
        else if(windowWidth>=1366){
            setHeaderDisplayed(<DesktopHeader handleUserInfo={resetUserInfo} firstname={userInfo.firstname} lastname={userInfo.lastname} />)

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

