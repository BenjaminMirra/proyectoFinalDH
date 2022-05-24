import React from 'react'
import PropTypes from 'prop-types'
import { getHeight, getIcon,getWidth } from './helpers'
import './Icon.css'
export const Icon = ({icon,width,onClick, height}) => {
    
    return (
        <div onClick={onClick}>
            <img className='background' src={getIcon(icon)} style={{width:getWidth(width),height: height===undefined ? getWidth(width) : getHeight(height)}} alt={icon} />
        </div>
        
    )
}

Icon.propTypes = {
    icon:PropTypes.oneOf(['user','calendar','search','location','disabled','wifi','swim','star','menu','close','twitter','facebook','linkedin','favorite','instagram','closeBlack']),
    width:PropTypes.oneOf(['xs','sm','md','lg'])
}
Icon.defaultProps={
    onClick:()=>{}
}
