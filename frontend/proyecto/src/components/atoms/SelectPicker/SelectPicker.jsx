import React from 'react'
import Label from '../Label/Label'
import { SpacerHorizontal } from '../Spacer/SpacerHorizontal'
import './SelectPicker.css'
export const SelectPicker = ({setSelectValue}) => {

  const handleChange=(value)=>{
    setSelectValue(value)
  }
  return (
    <div className='selectPicker'>
        <Label required={true} label='Indica tu horario estimado de llegada' />
        <SpacerHorizontal height={'xxs'} />
        <select onChange={handleChange} name="" id="selectTime">
            <option disabled selected>Seleccionar hora de llegada</option>
            <option className='options' >01:00 AM</option>
            <option className='options' >02:00 AM</option>
            <option className='options' >03:00 AM</option>
            <option className='options' >04:00 AM</option>
            <option className='options' >05:00 AM</option>
            <option className='options' >06:00 AM</option>
            <option className='options' >07:00 AM</option>
            <option className='options' >08:00 AM</option>
            <option className='options' >09:00 AM</option>
            <option className='options' >10:00 AM</option>
            <option className='options' >11:00 AM</option>


        </select>
    </div>
  )
}
