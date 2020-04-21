import React, { useEffect, useState } from 'react'

import GoogleMapReact from 'google-map-react';
import { useLocation } from 'hooks'

import { MapContainer, mapStyle } from './style'

export const GoogleMap = () => {
  const [center, setCenter] = useState({})
  const {latitude, longitude} = useLocation()

  const mapOptions = {
    styles: mapStyle
  }

  useEffect(() => {
    if (latitude && longitude) {
      setCenter({lat: latitude, lng: longitude})
    } else {
      setCenter({lat: 40.712, lng: -74.006})
    }
  }, [latitude, longitude])

  return (
    <MapContainer>
      <GoogleMapReact 
        center={ center }
        defaultZoom={ 11 }
        options={ mapOptions }
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_KEY }}>
      </GoogleMapReact>
    </MapContainer>
  )
}

export default GoogleMap