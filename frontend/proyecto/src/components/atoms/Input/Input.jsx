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
<<<<<<< HEAD
        <input name={name} id={name} value={value} onChange={onChange} className={InputClassNames} type={type} placeholder={placeholder} />
=======
        <input className={InputClassNames} type={type} placeholder={placeholder} size={size} />
>>>>>>> 73003869dbdc050acddc0a6cede84eb71a7f20a1
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

