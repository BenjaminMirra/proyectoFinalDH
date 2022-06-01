import React from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import './Paragraph.css'

export const Paragraph = ({size, children, variant}) => {

  const ParagraphClassNames = classNames('paragraph',{
    [`paragraph-colors-${variant}`]:variant,
    [`paragraph-size-${size}`]:size
})
return (
    <>
  <p  className={ParagraphClassNames} >{children}</p>
  </>
)
}

Paragraph.propTypes = {
    text: PropTypes.string.isRequired,
    size:PropTypes.oneOf(['sm','md','lg']),
    variant: PropTypes.oneOf(['primary', 'secondary','error','tertiary','base']),
    
};

Paragraph.defaultProps={
    size:'md',
    text: 'String',
    variant: 'primary',
}