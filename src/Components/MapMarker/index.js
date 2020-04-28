import React from 'react'
import marker from './images/marker.svg'

import { Marker } from './style'

export const MapMarker = ({history, location}) => {
  const handleMarkerClick = () => {
   if (location) history.push(`locations/${ location.id }`)
  }

  return (
    <Marker src={ marker } onClick={ handleMarkerClick } />
  )
}

export default MapMarker