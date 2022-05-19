import React from "react";
import PropTypes from "prop-types"
import classNames from "classnames"
import "./Heading.css"
export const Heading=({children,title,type,variant})=>

{
    const HeadingClassNames=classNames('heading',
    {
        [`size-${type}`]:type,
        [`color-${variant}`]:variant
    })
    return( title==="h1"?<h1 className={HeadingClassNames} >{children}</h1>:title==="h2" ?
    <h2 className={HeadingClassNames} >{children}</h2>:title==="h3"?
    <h3 className={HeadingClassNames} >{children}</h3>:<h1 className={HeadingClassNames} >{children}</h1>)
}


Heading.propTypes={
    children: PropTypes.node.isRequired,
    title:PropTypes.oneOf(["h1","h2","h3"]),
    type:PropTypes.oneOf(['xs',"lg","sm","md"]),
    variant:PropTypes.oneOf(['base',"primary","secondary"])
}

Heading.defaultProps={
    title:"h1",
    type:"md",
}
