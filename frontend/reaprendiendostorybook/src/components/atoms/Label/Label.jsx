import React from 'react'
import PropTypes from 'prop-types'
import './Label.css'
const Label = ({id,label}) => {
  return (
    <label className='label' htmlFor={id}>{label}</label>
  )
}

Label.propTypes = {
    id:PropTypes.string,
    label:PropTypes.string.isRequired
}

export default Label