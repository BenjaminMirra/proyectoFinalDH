import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '../../atoms/Input/Input'
import { Icon } from '../../atoms/Icon/Icon'
import { getSize } from './helpers'
import classNames from 'classnames'
import './InputIcon.css'
export const InputIcon = ({input,icon,variant,onClick}) => {
    const InputIconClassNames=classNames('input-icon',{
        [`type-${variant}`]:variant,
    })
    return (
        <>
        {console.log(input)}
        <div className={InputIconClassNames} style={{width:getSize(input.size,icon.width)}}>
            <Input size={input.size} variant={input.variant} placeholder={input.placeholder}></Input>
            <Icon onClick={onClick} icon={icon.icon} width={icon.width}/>
            
        </div>
        </>
    )
}
InputIcon.propTypes={
    variant:PropTypes.oneOf(['left','right']),
    
}
InputIcon.defaultProps={
    onClick:()=>{},
    variant:'left',
}
