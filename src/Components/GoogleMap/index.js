import React from 'react'
import GoogleMapReact from 'google-map-react';

import { MapMarker } from 'Components/MapMarker'

import { MapContainer, mapStyle } from './style'

export const GoogleMap = ({ children, location, locations, mapOptions, center, zoom = 11 }) => {

  const options = {
    styles: mapStyle,
    fullscreenControl: true,
    ...mapOptions
  }

  return (
    <MapContainer>
      { children }
      <GoogleMapReact 
        defaultCenter={{lat: 40.712, lng: -74.006}}
        center={ center }
        defaultZoom={ zoom }
        options={ options }
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_KEY }}>
        { locations && locations.map((location, index) => 
          <MapMarker 
            key={ index }
            lat={ location.latitude }
            lng={ location.longitude }
            location={ location }/>
        )}
        { location &&
          <MapMarker 
            lat={ location.latitude }
            lng={ location.longitude }/>
        }
      </GoogleMapReact>
    </MapContainer>
  )
}

export default GoogleMap