import React from 'react'
import marker from './images/marker.svg'

import { Marker } from './style'

export const MapMarker = () => {
  return (
    <Marker src={ marker } />
  )
}

export default MapMarker