import React from 'react'
import { Heading } from '../../atoms/Heading/Heading'
import { SpacerHorizontal } from '../../atoms/Spacer/SpacerHorizontal'
import { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import './ReserveCalendar.css'
export const ReserveCalendar = (props) => {
    
    const [reservedDatesL,setReservedDatesL]=useState([])
    useEffect(() => {
        // setReservedDatesL([])
        if(props.reservedDates){
            props.reservedDates.forEach(element => {
                setReservedDatesL(prevDates=>[...prevDates,{fechaInicio: parseDates(element.fechaInicioReserva) ,fechaFin: parseDates(element.fechaFinReserva) }])
            });
        }
    }, [props.reservedDates]);
    function parseDates(date){
        let newDate;
        let month;
        let day;
        
        newDate=date.split(/[.\-=/_]/)
        if (newDate[1][0]==='0') {
            month=newDate[1][1]
        }
        else{
            month=newDate[1]
        }
        if (newDate[2][0]==='0' && newDate[2][1]==='1' ) {
            day=newDate[2][1]
        }
        else if(newDate[2][0]==='0'){
            day=newDate[2][1]-1
        }
        else{
            day=newDate[2]-1
        }
        
        newDate=newDate[0]+","+month+","+day
        // console.log(newDate);
        return newDate
    }
    const TabletAndDesktopCalendar=(props)=>{
    registerLocale('es', es)
    const [dateRange, setDateRange] = useState([null,null]);
    const [startDate, endDate] = dateRange;
    const [arrayDaysReserve, setArrayDaysReserve] = useState([]);
    const [reservedDatesArray,setReservedDatesArray]=useState([])
    const onChange = (dates) => {
        
            setDateRange(dates);
        
    }
    useEffect(() => {
        
        if (props.reservedDates) {
            props.reservedDates.forEach(element => {
            createReservedDaysArray(element.fechaInicio,element.fechaFin)
        });
        }
        
        
    }, [props.reservedDates]);
    function createReservedDaysArray(startDate,endDate){
        let aux=[]
        let loop= new Date(startDate)
        let end=new Date(endDate)
        while(loop <= end){
            aux.push(loop)         
            var newDate = loop.setDate(loop.getDate() + 1);
            loop = new Date(newDate);
}
    
    return setReservedDatesArray(prevDates=>[...prevDates.concat(aux)])
    }
    
    // function editNamesDaysWeek() {
    //     const namesDaysWeek = document.querySelectorAll(".react-datepicker__day-name");
    //     namesDaysWeek.forEach(name => {
    //         name.innerHTML = name.textContent.substring(0, 1).toUpperCase();
    //     })
    // }
    
    
    
    useEffect(() => {
        if(dateRange[0]!==null){
            let startDate=formatDate(dateRange[0]);
        let endDate=formatDate(dateRange[1]);
        props.setReservedDays({startDate:{year:startDate.slice(0,4),month:startDate.slice(5,7),day:startDate.slice(8,10)},endDate:{year:endDate.slice(0,4),month:endDate.slice(5,7),day:endDate.slice(8,10)}})
    
        }
        
    },[dateRange])

    function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
 
    return(
      <>
     
        <DatePicker
                inline
                locale="es"
                excludeDates={reservedDatesArray}
                minDate={new Date()}
                dateFormat="dd MMM."
                renderCustomHeader={({
                    monthDate,
                    customHeaderCount,
                    decreaseMonth,
                    increaseMonth,
                }) => (
                    <div>
                        <button
                            aria-label="Previous Month"
                            className={
                                "react-datepicker__navigation react-datepicker__navigation--previous"
                            }
                            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
                            onClick={decreaseMonth}
                        >
                            <span
                                className={
                                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                                }
                            >
                                {"<"}
                            </span>
                        </button>
                        <span className="react-datepicker__current-month">
                            {monthDate.toLocaleString("es-ES", {
                                month: "long",
                            }).substring(0, 1).toUpperCase() + monthDate.toLocaleString("es-ES", { month: "long" }).slice(1)}
                        </span>
                        <button
                            aria-label="Next Month"
                            className={
                                "react-datepicker__navigation react-datepicker__navigation--next"
                            }
                            style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                            onClick={increaseMonth}
                        >
                            <span
                                className={
                                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                                }
                            >
                                {">"}
                            </span>
                        </button>
                    </div>
                )}
                
                startDate={startDate}
                endDate={endDate}
                selected={startDate}
                selectsRange={true}
                onChange={onChange}
                monthsShown={2}
            />
      </>
      )
  }
  const MobileCalendar=(props)=>{
     registerLocale('es', es)
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [arrayDaysReserve, setArrayDaysReserve] = useState([]);
    const [reservedDatesArray,setReservedDatesArray]=useState([])
    const onChange = (dates) => {
        
            setDateRange(dates);
        
    }
    useEffect(() => {
        
        if (props.reservedDates) {
            props.reservedDates.forEach(element => {
            createReservedDaysArray(element.fechaInicio,element.fechaFin)
        });
        }
        
        
    }, [props.reservedDates]);
    function createReservedDaysArray(startDate,endDate){
        let aux=[]
        let loop= new Date(startDate)
        let end=new Date(endDate)
        while(loop <= end){
            aux.push(loop)         
            var newDate = loop.setDate(loop.getDate() + 1);
            loop = new Date(newDate);
}
    
    return setReservedDatesArray(prevDates=>[...prevDates.concat(aux)])
    }
    
    function editNamesDaysWeek() {
        const namesDaysWeek = document.querySelectorAll(".react-datepicker__day-name");
        namesDaysWeek.forEach(name => {
            name.innerHTML = name.textContent.substring(0, 1).toUpperCase();
        })
    }
    
    
    return(<>
    
            <DatePicker
                inline
                locale="es"
                excludeDates={reservedDatesArray}
                minDate={new Date()}
                dateFormat="dd MMM."
                renderCustomHeader={({
                    monthDate,
                    customHeaderCount,
                    decreaseMonth,
                    increaseMonth,
                }) => (
                    <div>
                        <button
                            aria-label="Previous Month"
                            className={
                                "react-datepicker__navigation react-datepicker__navigation--previous"
                            }
                            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
                            onClick={decreaseMonth}
                        >
                            <span
                                className={
                                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                                }
                            >
                                {"<"}
                            </span>
                        </button>
                        <span className="react-datepicker__current-month">
                            {monthDate.toLocaleString("es-ES", {
                                month: "long",
                            }).substring(0, 1).toUpperCase() + monthDate.toLocaleString("es-ES", { month: "long" }).slice(1)}
                        </span>
                        <button
                            aria-label="Next Month"
                            className={
                                "react-datepicker__navigation react-datepicker__navigation--next"
                            }
                            // style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                            onClick={increaseMonth}
                        >
                            <span
                                className={
                                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                                }
                            >
                                {">"}
                            </span>
                        </button>
                    </div>
                )}
                
                selectsRange={true}
                onChange={onChange}
                monthsShown={1}
                
            />
    </>)
  }
    const [calendarDisplayed,setCalendarDisplayed]=useState(<><TabletAndDesktopCalendar setReservedDays={props.setReservedDays} reservedDates={reservedDatesL} /></>)
    
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    useEffect(() => {
    function handleResize() {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    useEffect(() => {
        if(windowWidth <= 768){
            
            setCalendarDisplayed(prevCalendar=>prevCalendar==<><MobileCalendar setReservedDays={props.setReservedDays} reservedDates={reservedDatesL} /></>?prevCalendar:<><MobileCalendar reservedDates={reservedDatesL} /></>)
        }
        else{ setCalendarDisplayed(prevCalendar=>prevCalendar==<><TabletAndDesktopCalendar setReservedDays={props.setReservedDays} reservedDates={reservedDatesL}/></>?prevCalendar:<><TabletAndDesktopCalendar setReservedDays={props.setReservedDays} reservedDates={reservedDatesL}   /></>)}
        
    },[windowWidth,reservedDatesL]);
  return (
    <div className='reserveCalendar' >
            
        <Heading title='h2' variant={'primary'} type='lg' >Seleccioná tu fecha de reserva</Heading>
        <SpacerHorizontal height={'md'} />
        <div className='reserveCalendar-container'>
          <div className='reserveCalendar-calendar' >
            {calendarDisplayed}
           </div>
                
        </div>
    </div>
  )
}
