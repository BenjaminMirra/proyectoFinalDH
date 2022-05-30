import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Input.css'
export const  Input = ({type,placeholder,variant,size,isError,value,onChange,name}) => {

    const InputClassNames=classNames('input',{
        [`type-${variant}`] :variant,
        [`input-size-${size}`]:size,
        'is-error':isError
    })

    return (
        <input autoComplete='off' name={name} id={name} value={value} onChange={onChange} className={InputClassNames} type={type} placeholder={placeholder} />
    )
}

Input.propTypes = {
    type:PropTypes.oneOf(['text','password','email']),
    variant:PropTypes.oneOf(['primary','secondary','base']),
    size:PropTypes.oneOf(['base','xs','sm','md','lg','xl','2xl']),
    placeholder:PropTypes.string,
    isError:PropTypes.bool

}
Input.defaultProps={
    variant:'primary',
    type:'text',
    isError:false
}

