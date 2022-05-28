import React from 'react'
import PropTypes from 'prop-types'
import { getIcon,getWidth } from './helpers'
import './Icon.css'
export const Icon = ({icon,width,onClick}) => {
    
    return (
        <div onClick={onClick} style={{display:'flex'}} >
            <img className='background' src={getIcon(icon)} style={{width:getWidth(width),height:getWidth(width)}} alt={icon} />
        </div>
        
    )
}

Icon.propTypes = {
    icon:PropTypes.oneOf(['user','calendar','search','location','disabled','wifi','swim','star','menu','close','twitter','facebook','linkedin','favorite','instagram','closeBlack','visibility']),
    width:PropTypes.oneOf(['xs','sm','md','lg'])
}
Icon.defaultProps={
    onClick:()=>{}
}
