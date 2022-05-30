import { React, useState } from 'react';
import { Icon } from '../../atoms/Icon/Icon'
import './DropPlaces.css'


export const DropPlaces = ({ placeholder, icon }) => {

    const lugares = [
        {
            info: {
                ciudad: "San Carlos de Bariloche",
                pais: "Argentina",
                icon: "locationEmpty"
            }
            , value: "Buenos Aires"
        },
        {

            info: {
                ciudad: "Buenos Aires",
                pais: "Argentina",
                icon: "locationEmpty"
            }
            , value: "Buenos Aires"
        },
        {
            info: {
                ciudad: "Mendoza",
                pais: "Argentina",
                icon: "locationEmpty"
            }
            , value: "Buenos Aires"
        },
        {
            info: {
                ciudad: "Córdoba",
                pais: "Argentina",
                icon: "locationEmpty"
            }
            , value: "Buenos Aires"
        }
    ]

    const [lugarFiltrado, setLugarFiltrado] = useState([]);

    const handleFilter = (event) => {
        const letraBuscada = event.target.value;
        const nuevoFiltro = lugares.filter((lugar) => {
            return lugar.info.ciudad.toLowerCase().includes(letraBuscada.toLowerCase())
        });

        if (letraBuscada === "") {
            setLugarFiltrado([])
        } else {
            setLugarFiltrado(nuevoFiltro);
        }
    }

    const inputLugar = document.getElementById("inputLugar");
    
    const handlePlace = (lugar)=>{
        setLugarFiltrado([]);
        return inputLugar.value = lugar;
    }

    return (
        <div className="search">
           
            <div className="searchInputIcon">
                <Icon className="icon" icon={icon} width={icon.width} />
                <input autoComplete='off' type="text" id="inputLugar" placeholder={placeholder} onChange={handleFilter}></input>
            </div>
            {lugarFiltrado.length !== 0 && (
                <div className="searchResult">
                    {lugarFiltrado.map((lugar, key) => {
                        return (
                            <>
                            <div key={key++} className="lugar" onClick={()=>handlePlace(lugar.info.ciudad + ", " + lugar.info.pais)}>
                                <div className="lugarIcon">
                                    <Icon className="" icon={lugar.info.icon} width="lg" />
                                </div>
                                <div className="ciudad-pais">
                                    <p className="ciudad">{lugar.info.ciudad}</p>
                                    <p className="pais">{lugar.info.pais}</p>
                                </div>
                                
                            </div>
                            <div className="linea"></div>
                            </>
                        );
                    })}
                </div>
            )}
        </div>
    )
}
