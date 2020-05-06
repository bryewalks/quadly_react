import React from 'react'
import { useHistory } from 'react-router-dom'

import marker from './images/marker.svg'
import { Marker } from './style'

export const MapMarker = ({ location }) => {
  let history = useHistory()
  
  const handleMarkerClick = () => {
   if (location) history.push(`locations/${ location.id }`)
  }

  return (
    <Marker src={ marker } onClick={ handleMarkerClick } />
  )
}

export default MapMarker