import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { PageContainer } from 'Components/Globals'
import GoogleMap from 'Components/GoogleMap'

export const Location = (props) => {
  const { match: { params } } = props;
  const [location, setLocation] = useState({})
  const [center, setCenter] = useState([])

  useEffect(() => {
    axios
    .get(`/api/locations/${ params.id }`)
    .then(response => {
      setLocation(response.data)
      setCenter([parseFloat(response.data.latitude), parseFloat(response.data.longitude)])
    })
    .catch((error) => {
      console.error(error);
  });
  }, [params])
  
  return (
    <PageContainer>
      <GoogleMap center={ center } location={ location } />
    </PageContainer>
  )
}

export default Location