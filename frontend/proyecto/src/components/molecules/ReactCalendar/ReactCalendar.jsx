import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { CustomProvider } from 'rsuite';
import esAR from 'rsuite/locales/es_AR';
import './ReactCalendar.css';
import format from 'date-fns/format';
import { Icon } from '../../atoms/Icon/Icon';


export const ReactCalendar = () => {
    const [value, onChange] = useState([new Date(), new Date()]);
    const icon = <Icon icon="calendar" width="md"></Icon>


    return (
        <div className="div-react-calendar">
            {icon}
            <div className="react-calendar-home">
                <CustomProvider locale={esAR}>
                    <DateRangePicker calendarIcon={""} rangeDivider=" de " dayAriaLabel={null} placeholder={"Check in - Check out"} onChange={onChange} value={value} returnValue={(value) => {
                        return format(value[0], "dd") + " de " + format(value[0], 'MMM').toLowerCase() + ". - " + format(value[1], "dd") + " de " + format(value[1], 'MMM').toLowerCase() + "."
                    }} />
                </CustomProvider>
            </div>
        </div>
    );
}