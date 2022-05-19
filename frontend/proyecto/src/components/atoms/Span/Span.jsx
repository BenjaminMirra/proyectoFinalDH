import React from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './Span.css'

export const Span = ({variant, children, size}) => {

  const SpanClassNames = classNames('span',{
    [`span-colors-${variant}`]:variant,
    [`span-size-${size}`]:size
    
})
return (
    <>
  <span  className={SpanClassNames} >{children}</span>
  </>
)
}

Span.propTypes = {
    text: PropTypes.string.isRequired,
    size:PropTypes.oneOf(['sm','md']),
    variant: PropTypes.oneOf(['blue', 'grey', 'white']),
    
};

Span.defaultProps={
    variant: 'blue',
    size:'md',
    text: 'String',
}