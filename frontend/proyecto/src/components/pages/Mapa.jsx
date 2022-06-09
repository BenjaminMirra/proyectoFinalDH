import React,{useMemo,useEffect,useState} from 'react'
import {GoogleMap,useLoadScript,Marker,useGoogleMap} from '@react-google-maps/api'
import credentials from '../../credentials'
import { Header} from '../organisms/Header/Header'
import { Footer } from '../organisms/Footer/Footer'
import { Icon } from '../atoms/Icon/Icon'
import { Paragraph } from '../atoms/paragraph/Paragraph'
import { Link } from 'react-router-dom'
import './Mapa.css'
import axios from 'axios'
import { urlAPI } from '../../global'
export const Mapa = () => {
    const {isLoaded}=useLoadScript({googleMapsApiKey:credentials.mapsKey})
    const [allLocations,setAllLocations]=useState([])
    useEffect(() => {
        setAllLocations([])
        axios.get(`${urlAPI}productos/todos`).then(data=>data.data.forEach(element => {
            setAllLocations(prevData=>{
                return [...prevData,{lat:element.latitud,lng:element.longitud}]
            })
        }))
    }, []);
    if(!isLoaded)return <div>Loading...</div>;
    return<>
    {console.log(allLocations)}
        
            <Header firstname={undefined} lastname={undefined}/>
            <Link to={'/'}>
        <div className='show-mapa'>
            <Paragraph variant='base' >Mostrar Home</Paragraph>
            <Icon icon='home' />
        </div>
        </Link>
        <LoadedMap locations={allLocations} />
        
        
        <Footer></Footer>
        
    
    
    </> 
  
}
function LoadedMap({locations}){
    
    
    
    const[random,setRandom]=useState('1')
    
    // const MockUp={lat:-37.335028,lng:-59.136085,location:'Buenos Aires, Argentina'}
    useEffect(() => {
        setTimeout(()=> setRandom('2'),1)
    
    
    }, []);
    const center={lat:-34.342905,lng:-65.467429}
    
    
    var createMapOptions={
        panControl:false,
        mapTypeControl: false,
        scrollwheel: true,
        fullscreenControl: false,
        zoomControl:true,
        streetViewControl:false,
        
        
    }
    
    return (
        <div className='full-map-loaded'>
            <div className='full-map-loaded-container'>
                
            <GoogleMap zoom={4}
        center={center}
        mapContainerClassName='full-map-container' options={createMapOptions} >
        {locations.map(location=><Marker position={location} key={random} />)}
          

    </GoogleMap>
    </div>
        </div>)
}