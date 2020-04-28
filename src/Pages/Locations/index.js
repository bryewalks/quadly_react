import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useLocation } from 'hooks'

import { PageContainer } from 'Components/Globals'
import GoogleMap from 'Components/GoogleMap'

export const Locations = (props) => {
  const [locations, setLocations] = useState([])
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

  return (
    <PageContainer>
      <GoogleMap locations={ locations } history={ props.history } center={ (latitude && longitude) ? [latitude, longitude] : undefined} />
    </PageContainer>
  )
}


export default Locations