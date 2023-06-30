import { useState } from 'react';

import useClima from '../hooks/userClima';

const Formulario = () => {

    const [alerta,setAlerta]=useState('')
    const {search, searchData,askWeather,setResultado} = useClima();
    const {city, country}=search;

    const handleSubmit =(e)=>{
        e.preventDefault();

        if(Object.values(search).includes('')){
            setAlerta('All fields are mandatory!')
            return;
        }

        askWeather(search)
        setAlerta('')
        setResultado({name:''})
    }
  return (
    <div className='contenedor'>
        {alerta && <p className='text-center text-red-600 bg-red-300 block p-1 mb-5 rounded shadow-lg font-extrabold uppercase text-xl'>{alerta}</p>}
        <form 
            onSubmit={handleSubmit}
        >
            <div className="campo">
                <label htmlFor="city">City</label>
                <input 
                    type="text" 
                    id='city'
                    name='city'
                    onChange={searchData}
                    value={city}
                />
            </div>
            <div className="campo">
                <label htmlFor="country">Country</label>
                <select
                    id='country'
                    name='country'
                    onChange={searchData}
                    value={country}
                >
                    <option value="">-- Select a Country --</option>
                    <option value="AR">Argentina</option>
                    <option value="AR">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="MX">Mexico</option>
                    <option value="PE">Peru</option>
                    <option value="US">United States</option>
                </select>
            </div>
            <input type="submit" value='See Weather' />
        </form>
    </div>
  )
}

export default Formulario