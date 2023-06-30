import useClima from '../hooks/userClima';

const Resultado = () => {
  
  const {resultado} =useClima();
  console.log(resultado)

  const {name, sys: {country}, main:{temp,temp_max,temp_min,humidity,feels_like}, weather:[{icon,main}] } = resultado;
  // console.log(weather)
  // console.log(icon)
  const kelvin = 273.15;
  
  return (
    <div className='contenedor weather-container'>
       <h2 className='text-4xl font-extrabold mb-3 underline text-center'>{name}, {country} weather:</h2>

      <h3>Weather condition:</h3>
      <div className='weather flex justify-evenly items-center'>
      <p>{main}</p>
      <img className='w-14' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={`${main} image`} />
      </div>

      <p className='current text-center text-4xl font-bold'>
         {parseInt(temp - kelvin)}<span className='text-2xl'>&#x2103;</span> 
      </p>
      <div className="temp_min_max">
        <p>
          Min: {parseInt(temp_min - kelvin)} <span>&#x2103;</span> 
        </p>
        <p>
          Max: {parseInt(temp_max - kelvin)} <span>&#x2103;</span> 
        </p>
      </div>
      <p className='mt-5'>
        Feels like: {parseInt(feels_like - kelvin)} <span>&#x2103;</span> 
      </p>
      <p>
        Humidity: {humidity} <span>%</span> 
      </p> 
    </div>
  )
}

export default Resultado