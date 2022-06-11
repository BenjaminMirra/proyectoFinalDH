import React,{useState,useEffect} from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { ProductHeader } from '../../molecules/ProductHeader/ProductHeader'
import { UserData } from '../../molecules/UserData/UserData'
import { ReserveDetail } from '../../molecules/ReserveDetail/ReserveDetail'
import { CheckInReserve } from '../../molecules/CheckInReserve/CheckInReserve'
import { ProductInfo } from '../../molecules/ProductInformation/ProductInfo'
import { ReserveCalendar } from '../../molecules/ReserveCalendar/ReserveCalendar'
import { useParams } from 'react-router-dom'
import { urlAPI } from '../../../global'
import axios from 'axios'
import './ReserveDesktop.css'

export const ReserveDesktop = () => {
    const {id}=useParams()
    const [productData,setProductData]=useState([])
    const [categoria, setCategoria] = useState('cargando');
     const [locationData, setLocationData] = useState('cargando');
     useEffect(() => {
            window.scrollTo(0, 0);
            axios.get(`${urlAPI}productos/${id}`).then(data => {
            setCategoria(data.data.categoria_id == 1 ? 'Hoteles' : data.data.categoria_id == 2 ? 'Hosteles' : data.data.categoria_id == 3 ? 'Departamentos' : 'Bed & Breakfast')
            setProductData(data.data)
            setLocationData(data.data.ciudad_id==1?'San Carlos de Bariloche, Río Negro, Argentina':data.data.ciudad_id==2?'Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina':data.data.ciudad_id==3?'Mendoza, Mendoza, Argentina':'Córdoba, Córdoba, Argentina')
        })
  }, [id]);
  return (

     <div className='wrapper'>
      <Header />
      <div className='contenedor-pagina' >

        <ProductHeader category={categoria} title={productData.titulo} />
        <div className='reserve-general-container'>
        <div className='reserve-content'>
            <div className='reserve-content-userData'>
                <UserData/>
            </div>
            {productData.imagenDTOList&&console.log(productData)}
            <div className='reserve-content-reserveDetail' >
                <ReserveDetail location={locationData} category={categoria.slice(0,-1)} product={productData} image={productData.imagenDTOList?productData.imagenDTOList[0].url_img_producto:[]} />
            </div>
            <div className='reserve-content-calendar' >
                <ReserveCalendar/>
            </div>
            <div className='reserve-content-checkInReserve' >
                <CheckInReserve/>
            </div>
        </div>
        </div>
        <ProductInfo info={productData.politicaListDTO}/>
        <div className="product-footer">
          
        </div>
            <Footer />
      </div>
        
    </div>
  )
}
