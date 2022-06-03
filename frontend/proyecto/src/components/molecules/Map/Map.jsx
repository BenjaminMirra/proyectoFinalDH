import React,{useMemo,useEffect,useState} from 'react'
import {GoogleMap,useLoadScript,Marker,useGoogleMap} from '@react-google-maps/api'

import credentials from '../../../credentials'
import './Map.css'
import { Heading } from '../../atoms/Heading/Heading'
export const Map = ({lat,lng,location}) => {
    const {isLoaded}=useLoadScript({googleMapsApiKey:credentials.mapsKey})

    if(!isLoaded)return <div>Loading...</div>;
    return <LoadedMap lat={lat} lng={lng} location={location}/>

}
function LoadedMap({lat,lng,location}){
    
    
    
    const[random,setRandom]=useState('1')
    
    const MockUp={lat:-37.335028,lng:-59.136085,location:'Buenos Aires, Argentina'}
    useEffect(() => {
        setTimeout(()=> setRandom('2'),1)
    
    
    }, []);
    const center={lat:MockUp.lat,lng:MockUp.lng}
    const myLatLng = { lat:MockUp.lat,lng:MockUp.lng }
    
    var createMapOptions={
        panControl:false,
        mapTypeControl: false,
        scrollwheel: false,
        fullscreenControl: false,
        zoomControl:true,
        streetViewControl:false,
        
        
    }
    
    return (
        <div className='map-loaded'>
            <div className='map-loaded-container'>
            <Heading title='h3' variant='primary' type='lg' >¿Dónde vas a estar?</Heading>
            </div>
            <hr />
            <div className='map-loaded-container'>
                <Heading title='h4' variant='secondary' type='sm' >{MockUp.location}</Heading>
            <GoogleMap zoom={15}
        center={center}
        mapContainerClassName='map-container' options={createMapOptions} >
        <Marker position={myLatLng} key={random} />

    </GoogleMap>
    </div>
        </div>)
}