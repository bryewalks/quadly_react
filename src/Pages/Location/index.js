import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { PageContainer } from 'Components/Globals'
import GoogleMap from 'Components/GoogleMap'

export const Location = (props) => {
  const [location, setLocation] = useState({})
  const [center, setCenter] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios
    .get(`/api/locations/${ id }`)
    .then(response => {
      setLocation(response.data)
      setCenter([parseFloat(response.data.latitude), parseFloat(response.data.longitude)])
    })
    .catch((error) => {
      console.error(error);
  });
  }, [id])
  
  const mapOptions = {
    gestureHandling: 'none',
    zoomControl: false,
    draggableCursor: 'default'
  }

  return (
    <PageContainer>
      <GoogleMap 
        center={ center } 
        location={ location } 
        mapOptions={ mapOptions }
        zoom={ 13 } />
    </PageContainer>
  )
}

export default Location