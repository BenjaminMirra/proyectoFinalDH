import React,{useMemo,useEffect,useState} from 'react'
import {GoogleMap,useLoadScript,Marker,useGoogleMap} from '@react-google-maps/api'
import credentials from '../../credentials'
import { Header} from '../organisms/Header/Header'
import { Footer } from '../organisms/Footer/Footer'
import { Icon } from '../atoms/Icon/Icon'
import { Paragraph } from '../atoms/paragraph/Paragraph'
import { Link,Navigate, useNavigate } from 'react-router-dom'
import './Mapa.css'
import googleMarker from '../utils/icons/googleMarker.png'
import axios from 'axios'
import { urlAPI } from '../../global'
import {MockUp} from '../molecules/MockUpCard/MockUp'
export const Mapa = ({ favorite, favoriteLocations }) => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: credentials.mapsKey });
  const [allLocations, setAllLocations] = useState([]);
  const [mockUpStatic, setMockUpStatic] = useState(true);
  const [favoriteAllLocations, setFavoriteAllLocations] = useState([]);
  useEffect(() => {
    setTimeout(() => setMockUpStatic(false), 4000);
    setAllLocations([]);
    if (favoriteLocations) {
      setFavoriteAllLocations(favoriteLocations);
    } else {
      axios.get(`${urlAPI}productos/todos`).then((data) =>
        data.data.forEach((element) => {
          setAllLocations((prevData) => {
            return [
              ...prevData,
              { id: element.id, lat: element.latitud, lng: element.longitud },
            ];
          });
        })
      );
    }
  }, [favoriteLocations]);
  if (!isLoaded && mockUpStatic)
    return (
      <div>
        <MockUp height="100vh" width="100%" />
      </div>
    );
  return (
    <>
      {!favorite && (
        <>
          <Header firstname={undefined} lastname={undefined} />
          <Link to={"/"}>
            <div className="show-mapa">
              <div className="show-mapa-container">
                <Paragraph variant="base">Mostrar Home</Paragraph>
                <Icon icon="home" />
              </div>
            </div>
          </Link>
        </>
      )}

      <LoadedMap
        locations={
          favoriteAllLocations.length > 0 ? favoriteAllLocations : allLocations
        }
      />
    </>
  );
};
function LoadedMap({locations}){
    
    
    const navigate=useNavigate()
    const[random,setRandom]=useState(1)
    
    
    // const MockUp={lat:-37.335028,lng:-59.136085,location:'Buenos Aires, Argentina'}
    useEffect(() => {
        setTimeout(()=> setRandom(3),1)
    
    
    }, []);
    const center={lat:-34.342905,lng:-65.467429}
    
    const handleNavigate=(path)=>navigate(`/productos/${path}`)
    var createMapOptions = {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: true,
      fullscreenControl: false,
      zoomControl: true,
      streetViewControl: true,
      gestureHandling: "greedy",
    };
    
    return (
        <div className='full-map-loaded'>
            <div className='full-map-loaded-container'>
                
            <GoogleMap zoom={5}
        center={center}
        mapContainerClassName='full-map-container' options={createMapOptions} >
        {locations.map(location=> <Marker
        // icon={{url: googleMarker }}
        onClick={()=>handleNavigate(location.id)} position={location} randomProp={random} /> )}
          

    </GoogleMap>
    </div>
        </div>)
}