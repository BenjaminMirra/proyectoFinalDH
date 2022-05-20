import React from 'react'
import PropTypes from 'prop-types'
import Label from '../../atoms/Label/Label'
import { Input } from '../../atoms/Input/Input'
import classNames from 'classnames'
import './InputLabel.css'
export const InputLabel = ({size, placeholder, type,label,isInline}) => {
    const InputLabelClassNames=classNames('input-label',{
        'isInline':isInline,
    })
    return (
        <>
        <div className={InputLabelClassNames}>
            <Label label= {label} />
            <Input size={size} type= {type} placeholder= {placeholder}/>
        </div>
        
    </>
    )
}

InputLabel.propTypes = {
    isInline:PropTypes.bool
}
InputLabel.defaultProps={
    isInline:false,
}


