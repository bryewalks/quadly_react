import React, { useEffect, useState } from 'react'

import GoogleMapReact from 'google-map-react';
import { useLocation } from 'hooks'

import { MapContainer } from './style'

export const GoogleMap = () => {
  const [center, setCenter] = useState({lat: 40.712, lng: -74.006})
  const [zoom, setZoom] = useState(11);
  const {latitude, longitude} = useLocation()

  useEffect(() => {
    if (latitude && longitude) {
      setCenter({lat: latitude, lng: longitude})
    }
  }, [latitude, longitude])

  return (
    <MapContainer>
      <GoogleMapReact 
        center={center}
        defaultZoom={zoom}>
      </GoogleMapReact>
    </MapContainer>
  )
}

export default GoogleMap