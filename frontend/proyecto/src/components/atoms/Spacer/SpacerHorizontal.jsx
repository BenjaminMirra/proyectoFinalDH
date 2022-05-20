import React from 'react'
import PropTypes from 'prop-types'
import { getHeight } from './helpers'
export const SpacerHorizontal = ({height}) => {
  return (
    <div style={{height:getHeight(height)}} ></div>
  )
}

SpacerHorizontal.propTypes = {
    height:PropTypes.oneOf(['xs','sm','md'])
}

