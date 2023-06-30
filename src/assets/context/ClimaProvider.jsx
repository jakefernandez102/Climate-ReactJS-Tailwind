/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useState } from 'react';

const ClimaContext = createContext();

const ClimaProvider = ({children})=>{

    const [search,setBusqueda] = useState({
        city:'',
        country:''
    })

    const searchData = (e)=>{
        setBusqueda({
            ...search,
            [e.target.name]: e.target.value 
        })
    }
    const [resultado, setResultado] =useState({
        name:''
    });
    const [cargando, setCargando] =useState(false);
    const [noResultado, setNoResultado] =useState(false);


    const askWeather = async (dataSearch)=>{
        setCargando(true);
        setNoResultado(false)
        try {
            const {city, country} = dataSearch;
            const appId = import.meta.env.VITE_API_KEY;
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`

            const {data} = await axios(url);
            const {lat,lon}=data[0];

            const urlWwather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
            const {data: weather} = await axios(urlWwather)
            setResultado(weather)
            
        } catch (error) {
            setNoResultado(true)
        }finally{
            setCargando(false)
        }
    }

    return (
        <ClimaContext.Provider
            value={{
                search,
                searchData,
                askWeather,
                resultado,
                cargando,
                noResultado,
                setResultado
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}
export {
    ClimaProvider
}
export default ClimaContext;