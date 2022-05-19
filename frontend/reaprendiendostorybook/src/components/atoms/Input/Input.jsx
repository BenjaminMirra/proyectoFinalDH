import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Input.css'
export const  Input = ({type,placeholder,variant,size}) => {

    const InputClassNames=classNames('input',{
        [`type-${variant}`] :variant,
        [`input-size-${size}`]:size,
    })

    return (
        <input className={InputClassNames} type={type} placeholder={placeholder} />
    )
}

Input.propTypes = {
    type:PropTypes.oneOf(['text','password','email']),
    variant:PropTypes.oneOf(['primary','secondary','base']),
    size:PropTypes.oneOf(['base','xs','sm','md','lg','xl']),
    placeholder:PropTypes.string

}
Input.defaultProps={
    variant:'primary',
    type:'text',
}

