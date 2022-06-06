import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  const [position, setPosition] = useState({})
  const [weather, setWeather] = useState( )
  const [unit, setUnit] = useState('metric')

  useEffect(() => {
    const success = pos =>{
      const latitude = pos.coords.latitude
      const longitude = pos.coords.longitude
      setPosition({ latitude, longitude})
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if(position.latitude !== undefined){
      const API_KEY = '913c9252e9195bb3715caec9f34cfd5f'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${API_KEY}&units=${unit}`

      axios.get(URL)
        .then(res => setWeather(res.data))
        .catch(err => console.log(err))
    }
  }, [position, unit])
  console.log(weather)
  const changeUnits = () => unit === 'metric' ? setUnit('imperial'):setUnit('metric')
  
  return (
    <div className="App">
      <Card 
      weather={weather}
      changeUnits={changeUnits}
      unit={unit}
      />
    </div>
  )
}

export default App
