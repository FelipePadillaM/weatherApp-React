import React from 'react'
import { useState, useEffect } from 'react'

const Card = ({weather, changeUnits, unit}) => {
  const [imageWather, setImageWather] = useState(<i className='bx bxs-cloud'></i>)

  useEffect(() => {
    switch(weather?.weather[0].description){
      case 'clear sky':
        setImageWather(<i class='bx bxs-sun' ></i>)
        break
      case 'few clouds':
        setImageWather(<i class="uil uil-cloud-sun"></i>  )
        break
      case 'scattered clouds':
        setImageWather(<i class="uil uil-cloud"></i>)
        break
      case 'broken clouds':
        setImageWather(<i class="uil uil-clouds"></i>)
        break
      case 'shower rain':
        setImageWather(<i class="uil uil-cloud-showers-heavy"></i>)
        break
      case 'rain':
        setImageWather(<i class="uil uil-cloud-rain-sun"></i>)
        break
      case 'thunderstorm':
        setImageWather(<i class="uil uil-thunderstorm"></i>)
        break
      case 'snow':
        setImageWather(<i class="uil uil-snowflake"></i>)
        break
      case 'mist':
        setImageWather(<i class="uil uil-tornado"></i>)
        break
      default:
        setImageWather(<i className='bx bxs-cloud'></i>)

    }
  }, [])
  
  return (
    <article className='card'>
      <div className='card__title'>
        <h2>Weather App</h2>
        {/* encadenamiento opcional, renderizado condicional */}
        <h3>
          {
            weather?.name !== undefined 
            && 
            weather?.name+", "+ weather?.sys.country
          }
        </h3>
      </div>
      <div className='card__content'>
        <div className='card__img'>
          {imageWather}
          <ul>
            <li>
              {weather?.main.temp}
              {unit==='metric' 
              ? <i className="uil uil-celsius"></i>
              : <i className="uil uil-fahrenheit"></i>
              }
            </li>
          </ul>
          
        </div>
        <div className="card__weather-info">
          <ul>
            <li>
              {weather?.weather[0].description}
            </li>
            <li>
              <i className='bx bx-wind' ></i>
              <span> Wind speed: </span>
              {weather?.wind.speed}
              {unit==='metric' ? 'm/s':'mi/h'} 
            </li>
            <li>
              <i className='bx bx-cloud' ></i>
              <span> Clouds: </span>
              {weather?.clouds.all} %
            </li>
            <li>
              <i className="uil uil-dashboard"></i>
              <span> Pressure: </span>
              {weather?.main.pressure} hPa
            </li>
            <li>
              <i className='bx bx-water'></i>
              <span> Humidity: </span>
              {weather?.main.humidity} %
            </li>
          </ul>
        </div>
      </div>
      <div className='card__button'>
        <button onClick={changeUnits} 
        style={unit==='metric' ? {backgroundColor: 'orangered'}:{backgroundColor: 'greenyellow'}}>
            <i className="uil uil-celsius"></i> / 
            <i className="uil uil-fahrenheit"></i>
        </button>
      </div>
      
    </article>
  )
}

export default Card