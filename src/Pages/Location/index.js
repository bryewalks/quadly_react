import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { PageContainer } from 'Components/Globals'

export const Location = (props) => {
  const { match: { params } } = props;
  const [location, setLocation] = useState({})

  useEffect(() => {
    axios
    .get(`/api/locations/${ params.id }`)
    .then(response => {
      setLocation(response.data)
    })
    .catch((error) => {
      console.error(error);
  });
  }, [params])

  return (
    <PageContainer>
      Location Page
      <div>{ location.id }</div>
    </PageContainer>
  )
}

export default Location