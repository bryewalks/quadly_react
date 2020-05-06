import React from 'react'

import LocationCard from 'Components/LocationCard'
import { CardContainer } from './style'

export const LocationCards = ({ locations }) => {
  return (
    <CardContainer>
      { locations && locations.map((location, index) => 
        <LocationCard 
          key={ index } 
          location={ location } />
      )}
    </CardContainer>
  )
}

export default LocationCards