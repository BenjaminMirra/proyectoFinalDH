import React from 'react';
import Select from 'react-select';
//import Select from '../../atoms/Select/Select';
import PropTypes from 'prop-types'
import { Icon } from '../../atoms/Icon/Icon'
import { getSize } from './helpers'
import classNames from 'classnames'
import './DropPlaces.css'

const lugares = [
    {label: "Buenos Aires", value: "Buenos Aires"},
    {label: "Salta", value: "Salta"},
    {label: "Tucumán", value: "Tucumán"},
    {label: "Mendoza", value: "Mendoza"},
]

export const DropPlaces = ({select,icon,variant,onClick}) => {
    const DropPlacesClassNames=classNames('select-icon',{
        [`type-${variant}`]:variant,
    })
    return(
        <div className={DropPlacesClassNames} style={{width:getSize(select.size,icon.width)}}>
            <Select className="select" inputValue={select.placeholder}
            options = {lugares}
            />
            <Icon className="select-icon" onClick={onClick} icon={icon.icon} width={icon.width}/>
        </div>
    )
}

DropPlaces.propTypes={
    variant:PropTypes.oneOf(['left','right']),
    placeholder:PropTypes.string
    
}
DropPlaces.defaultProps={
    onClick:()=>{},
    variant:'left',
}
