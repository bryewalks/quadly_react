import React, { useState } from 'react';
import axios from 'axios'

import { PageContainer } from 'Components/Globals'
import { useLocation } from 'hooks'

import { ButtonContainer, DroneBackground, WeatherButton } from './style'

const Home = (props) => {
  const [weather, setWeather] = useState(null)
  const {latitude, longitude} = useLocation()
  
  const handleCheckWeather = () => {
    let params = {
      latitude: latitude,
      longitude: longitude
    }

    axios
      .get("/api/weather", {params})
      .then(response => {
        setWeather(response.data)
      })
      .catch((error) => {
        console.error(error)
    });
  }
  
  return (
    <DroneBackground>
      { weather && <>
        <h2>Precipitation { weather.chance_of_precipitation }%</h2>
        <h2>Cloud Coverage { weather.cloud_cover }%</h2>
        <h2>Max Gust Speed { weather.max_gust_speed } MPH</h2>
        <h2>Temperature { weather.temperature }</h2>
        <h2>visabile miles { weather.visibility_miles }</h2>
        <h2>wind speed { weather.wind_speed } MPH</h2>
        <h2>{ weather.good_to_fly ? "It's a good day to go flying!" : "Weather is not ideal for flying."}</h2>
      </>}
      <ButtonContainer>
        <WeatherButton onClick={ handleCheckWeather }>Check Weather</WeatherButton>
        <WeatherButton onClick={ handleCheckWeather }>Check Weather</WeatherButton>
        <WeatherButton onClick={ handleCheckWeather }>Check Weather</WeatherButton>
      </ButtonContainer>
    </DroneBackground>
  );
}

export default Home;