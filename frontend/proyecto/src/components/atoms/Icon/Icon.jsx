import React from 'react'
import PropTypes from 'prop-types'
import { getIcon,getWidth } from './helpers'
import './Icon.css'
export const Icon = ({icon,width,onClick}) => {
    
    return (
        <div onClick={onClick} className='icon' style={{display:'flex'}} >
            <img className='background' src={getIcon(icon)} style={{width:getWidth(width),height:getWidth(width)}} alt={icon} />
        </div>
        
    )
}

Icon.propTypes = {
    icon:PropTypes.oneOf(['user','calendar','search','location','disabled','wifi','swim','star','menu','close','twitter','facebook','linkedin','favorite','instagram','closeBlack','visibility','wtwitter','wfacebook','wlinkedin','winstagram','locationEmpty','back','emptyStar','emptyHeart','share','pets','parking','kitchen','clock','smoke','card','airConditioner','noSmoke','noParty','tv','bWifi','bEmptyHeart','bShare','bFavorite',"forward",'rightArrow',]),
    width:PropTypes.oneOf(['xs','sm','md','lg'])
}
Icon.defaultProps={
    onClick:()=>{}
}
