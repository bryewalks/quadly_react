import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { PageContainer } from 'Components/Globals'
import GoogleMap from 'Components/GoogleMap'


export const Locations = (props) => {
  const [locations, setLocations] = useState([])

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
      <GoogleMap locations={ locations } />
    </PageContainer>
  )
}


export default Locations