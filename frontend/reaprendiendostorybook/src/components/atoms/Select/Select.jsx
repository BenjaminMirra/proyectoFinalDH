import React from 'react'
import PropTypes from 'prop-types'
import './Select.css'
const Select = ({options}) => {
  return (
      <div className='dr'>
        <select className='select' >
            {options.map((item,index)=><option value={index}>{item}</option>)}
        </select>
    </div>
  )
}

Select.propTypes = {}

export default Select