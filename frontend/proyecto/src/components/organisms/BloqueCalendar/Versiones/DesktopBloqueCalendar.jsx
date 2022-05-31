import React, { useState } from 'react'
import { Heading } from '../../../atoms/Heading/Heading'
import { Button } from '../../../atoms/Button/Button'
// import { DateRangePicker } from 'rsuite';
// import { CustomProvider } from 'rsuite';
// import esAR from 'rsuite/locales/es_AR';
// import format from 'date-fns/format';

import Calendar from 'react-calendar';

import './DesktopBloqueCalendar.css'


export const DesktopBloqueCalendar = () => {

    const [value, onChange] = useState(new Date());

    return (
        <div className="desktop-bloqueCalendar">
            <div className='desktop-bloqueCalendar-heading'>
                <Heading title="h1" type="lg" variant="primary">
                    Fechas Disponibles
                </Heading>
            </div>
            <div className='desktop-calendar-reserva'>
                <div className='desktop-calendario'>
                    <Calendar view="month" activeStartDate={false} defaultActiveStartDate={false} selectRange="true" className="bloqueCalendario" showDoubleView="true"
                        showNeighboringMonth="true" onChange={onChange} value={value} />
                    {/* <CustomProvider locale={esAR}>
                    <DateRangePicker open="true" size="md" placeholder="Check in - Check out" showOneCalendar={false} format={"dd MMMM y"} locale={{
                        sunday: 'D',
                        monday: 'L',
                        tuesday: 'M',
                        wednesday: 'X',
                        thursday: 'J',
                        friday: 'V',
                        saturday: 'S',
                        ok: 'Aplicar',
                        today: 'Today',
                    }} renderValue={(value) => {
                        return format(value[0], "dd") + " de " + format(value[0], 'MMM').toLowerCase() + ". - " + format(value[1], "dd") + " de " + format(value[1], 'MMM').toLowerCase() + "."
                    }}
                    />
                    </CustomProvider> */}
                </div>
                <div className='desktop-reserva'>
                    <div className='desktop-reserva-heading'>
                        <Heading title="h4" type="sm" variant="primary">
                            Agrega tus fechas de viaje para obtener precios exactos
                        </Heading>
                    </div>
                    <div className='desktop-reserva-button'>
                        <Button size='base' label='Iniciar Reserva'></Button>
                    </div>
                </div>

            </div>
        </div>
    )
}