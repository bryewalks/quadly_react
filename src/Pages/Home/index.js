import React, { useState } from 'react';
import axios from 'axios'

import FlightStatus from 'Components/FlightStatus'
import Modal from 'Components/Modal'
import { useLocation } from 'hooks'

import { ButtonContainer, DroneBackground, Button } from './style'

const Home = (props) => {
  const [weather, setWeather] = useState(null)
  const [flightZone, setFlightZone] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
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
        toggleModal()
      })
      .catch((error) => {
        console.error(error)
    });
  }

  const handleCheckFlightZone = () => {
    let params = {
      latitude: latitude,
      longitude: longitude
    }

    axios
      .get("/api/airports/status", {params})
      .then(response => {
        setFlightZone(response.data)
      })
      .catch((error) => {
        console.error(error)
    });
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const clearFlightZone = () => {
    setFlightZone('')
  }

  return (
    <DroneBackground>
      { flightZone && <FlightStatus 
                        status={flightZone.status} 
                        clearStatus={ clearFlightZone } />}
      { isModalOpen && <Modal title='Current Weather' closeModal={ toggleModal }>
        <h2>Precipitation { weather.chance_of_precipitation }%</h2>
        <h2>Cloud Coverage { weather.cloud_cover }%</h2>
        <h2>Max Gust Speed { weather.max_gust_speed } MPH</h2>
        <h2>Temperature { weather.temperature }</h2>
        <h2>visabile miles { weather.visibility_miles }</h2>
        <h2>wind speed { weather.wind_speed } MPH</h2>
        <h2>{ weather.good_to_fly ? "It's a good day to go flying!" : "Weather is not ideal for flying."}</h2>
      </Modal>}
      <ButtonContainer>
        <Button onClick={ handleCheckWeather }>Check Weather</Button>
        <Button onClick={ () => props.history.push('/locations') }>Locations</Button>
        <Button onClick={ handleCheckFlightZone }>Flight Zone Status</Button>
      </ButtonContainer>
    </DroneBackground>
  );
}

export default Home;