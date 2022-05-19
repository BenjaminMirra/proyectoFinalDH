import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './Dropdown.css'
import { Icon } from '../../../atoms/Icon/Icon'
export const Dropdown = ({options}) => {
    const [isActive,setIsActive]=useState(false)
    const handleActive=()=>setIsActive(!isActive)
    const [selected,setSelected]=useState('Choose One')
    const handleSelected=(item)=>setSelected(item)
  return (
    <div className='dropdown'>
        <div className='drop-down-btn' onClick={handleActive} >{selected}</div>
        {isActive &&(<div className='dropdown-content' >
            {options.map(item=><div className='dropdown-item' onClick={()=>handleSelected(item)} ><Icon icon={item.icon} width={item.width} />{item.content}</div>)}
        </div>)}
        
    </div>
  )
}

Dropdown.propTypes = {}

