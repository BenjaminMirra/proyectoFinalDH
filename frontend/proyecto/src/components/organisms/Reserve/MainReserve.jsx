import React,{useState,useEffect} from 'react'
import { ReserveDesktop } from './Versions/ReserveDesktop'
import {ReserveTablet} from './Versions/ReserveTablet'
import { ReserveMobile } from './Versions/ReserveMobile'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { urlAPI } from '../../../global'

export const MainReserve = () => {
    const {id}=useParams()
    const [productData,setProductData]=useState([])
    const [categoria, setCategoria] = useState('cargando');
     const [locationData, setLocationData] = useState();
     useEffect(() => {
            window.scrollTo(0, 0);
            axios.get(`${urlAPI}productos/${id}`).then(data => {
            setCategoria(data.data.categoria_id == 1 ? 'Hoteles' : data.data.categoria_id == 2 ? 'Hosteles' : data.data.categoria_id == 3 ? 'Departamentos' : 'Bed & Breakfast')
            setProductData(data.data)
            setLocationData(data.data.ciudad_id==1?'San Carlos de Bariloche, Río Negro, Argentina':data.data.ciudad_id==2?'Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina':data.data.ciudad_id==3?'Mendoza, Mendoza, Argentina':'Córdoba, Córdoba, Argentina')
        })
  }, [id]);
  

    const [reserveDisplayed,setReserveDisplayed]=useState(<><ReserveDesktop productData={productData} categoria={categoria} locationData={locationData} /></>)
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    useEffect(() => {
    function handleResize() {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    useEffect(() => {
        if(windowWidth < 768){
            setReserveDisplayed(<><ReserveMobile productData={productData} categoria={categoria} locationData={locationData} /></>)
        }
        else if(windowWidth<=1365){
            setReserveDisplayed(<ReserveTablet productData={productData} categoria={categoria} locationData={locationData} />)
        }
        else if(windowWidth>=1366){
            setReserveDisplayed(<ReserveDesktop productData={productData} categoria={categoria} locationData={locationData} />)

        }
        
    },[windowWidth,productData]);
  return (
    <>{reserveDisplayed}</>
  )
}
