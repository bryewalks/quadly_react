import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useLocation } from 'hooks'

import { LocationCards } from 'Components/LocationCards'
import { PageContainer } from 'Components/Globals'
import GoogleMap from 'Components/GoogleMap'

export const Locations = (props) => {
  const [locations, setLocations] = useState([])
  const [center, setCenter] = useState([])
  const {latitude, longitude} = useLocation()

  useEffect(() => {
    axios
    .get("/api/locations")
    .then(response => {
      setLocations(response.data)
    })
    .catch((error) => {
      console.error(error);
  });
  }, [])

  useEffect(() => {
    setCenter([latitude, longitude])
  }, [latitude, longitude])
  
  return (
    <PageContainer>
      <GoogleMap locations={ locations } center={ center } />
      <LocationCards locations={ locations } />
    </PageContainer>
  )
}


export default Locations