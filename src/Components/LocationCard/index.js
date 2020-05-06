import React from 'react'
import { useHistory } from "react-router-dom"

import { CardContainer, CardLocation, CardTitle } from './style'
export const LocationCard = ({ location }) => {
  let history = useHistory()

  const handleClick = () => {
    history.push(`/locations/${ location.id }`)
  }

  return (
    <CardContainer onClick={ handleClick }>
      <CardTitle>
        { location.name }
      </CardTitle>
      <CardLocation>
        { location.address }
      </CardLocation>
    </CardContainer>
  )
}

export default LocationCard