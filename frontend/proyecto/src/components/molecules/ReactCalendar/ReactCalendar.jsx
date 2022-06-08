// import React, { useState } from 'react';
// import DateRangePicker from '@wojtekmaj/react-daterange-picker';
// import { CustomProvider } from 'rsuite';
// import esAR from 'rsuite/locales/es_AR';
// import './ReactCalendar.css';
// import format from 'date-fns/format';
// import { Icon } from '../../atoms/Icon/Icon';


// export const ReactCalendar = () => {
//     const [value, onChange] = useState([new Date(), new Date()]);
//     const icon = <Icon icon="calendar" width="md"></Icon>


//     return (
//         <div className="div-react-calendar">
//             {icon}
//             <div className="react-calendar-home">
//                 <CustomProvider locale={esAR}>
//                     <DateRangePicker calendarIcon={""} rangeDivider=" de " dayAriaLabel={null} placeholder={"Check in - Check out"} onChange={onChange} value={value} returnValue={(value) => {
//                         return format(value[0], "dd") + " de " + format(value[0], 'MMM').toLowerCase() + ". - " + format(value[1], "dd") + " de " + format(value[1], 'MMM').toLowerCase() + "."
//                     }} />
//                 </CustomProvider>
//             </div>
//         </div>
//     );
// }

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './ReactCalendar.css';
import format from 'date-fns/format';
import { Icon } from '../../atoms/Icon/Icon';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const ReactCalendar = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start) 
        setEndDate(end)
    }

    return (
        <>
            <div className="div-react-calendar">
                <div className="react-icon">
                    <Icon icon="calendar" width="md"></Icon>
                </div>

                <div className="react-calendar">
                    <DatePicker monthsShown={2} placeholderText="Check in - Check out" onChange={onChange} dateFormat="MMM d" locale="es"
                        startDate={startDate} selectsRange={true}
                        isClearable={true}
                        endDate={endDate}
                    />
                </div>
            </div>


        </>
    );
};