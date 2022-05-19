import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Button.css'


    
export const Button = ({size,label,onClick,variant}) => {
    const ButtonClassNames=classNames('button',{
        'variant-primary':variant,
        'variant-secondary':!variant,
        [`button-size-${size}`]:size
    })
  return (
      <>
      <button onClick={onClick} className={ButtonClassNames} >{label}</button>
    </>
  )
}

Button.propTypes = {
    variant:PropTypes.bool,
    size:PropTypes.oneOf(['base','xs','sm','md','lg','xl']),
    label:PropTypes.node,
    onClick:PropTypes.func,
}
Button.defaultProps={
    size:'md',
    label:'Button',
    variant:true,
    onClick:()=>{}
}


