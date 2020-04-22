import React, { useEffect, useState } from 'react'

import GoogleMapReact from 'google-map-react';
import { useLocation } from 'hooks'
import { MapMarker } from 'Components/MapMarker'


import { MapContainer, mapStyle } from './style'

export const GoogleMap = ({ locations }) => {
  const [center, setCenter] = useState(null)
  const {latitude, longitude} = useLocation()

  const mapOptions = {
    styles: mapStyle
  }

  useEffect(() => {
    if (latitude && longitude) {
      setCenter({lat: latitude, lng: longitude})
    }
  }, [latitude, longitude])

  return (
    <MapContainer>
      <GoogleMapReact 
        defaultCenter={{lat: 40.712, lng: -74.006}}
        center={ center }
        defaultZoom={ 11 }
        options={ mapOptions }
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_KEY }}>
        { locations && locations.map((location, index) => <MapMarker key={ index } lat={ location.latitude } lng={ location.longitude } />)}
      </GoogleMapReact>
    </MapContainer>
  )
}

export default GoogleMap