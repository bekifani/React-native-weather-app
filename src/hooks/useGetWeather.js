import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

export const useGetWeather = () => {
  const [isLoading, setLoadingState] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLong] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${WEATHER_API_KEY}&units=metric`)
      const data = await res.json()
      setWeather(data)
      setLoadingState(false)
    }catch(error) {
      setError("Could not fetch weather")
    }finally {
      setLoadingState(false)
    }
    
  }
  useEffect(()=>{
    ;(async ()=> {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted'){
        setError('permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
      setLat(location.coords.latitude)
      setLong(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [lat, lon])
   
  return [isLoading, error, weather]

}