import React from 'react'
import { Input } from '../../atoms/Input/Input'
import { Icon } from '../../atoms/Icon/Icon'
import { getSize } from './helpers'
import './InputIcon.css'
export const InputIcon = ({input,icon}) => {
    return (
        <div className='input-icon' style={{width:getSize(input.size,icon.width)}}>
            <Input size={input.size} variant={input.variant} placeholder={input.placeholder}></Input>
            <Icon icon={icon.icon} width={icon.width}/>
            
        </div>
    )
}

