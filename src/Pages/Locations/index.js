import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useLocation } from 'hooks'

import { LocationCards } from 'Components/LocationCards'
import { PageContainer } from 'Components/Globals'
import GoogleMap from 'Components/GoogleMap'
import MapControls from 'Components/MapControls'

import { MapButton, MapButtons } from './style'

export const Locations = (props) => {
  const [locations, setLocations] = useState([])
  const [center, setCenter] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchType, setSearchType] = useState('name')
  const [pageNumber, setPageNumber] = useState(0)
  const [allMapMarkers, setAllMapMarkers] = useState(false)
  const [showMapControls, setShowMapControls] = useState(false)
  const {latitude, longitude} = useLocation()
  const maxPerPage = 12
  
  useEffect(() => {
    axios
    .get("/api/locations")
    .then(response => {
      setLocations(response.data)
    })
    .catch((error) => {
      console.error(error);
  });
  }, [])

  useEffect(() => {
    setCenter([latitude, longitude])
  }, [latitude, longitude])

  const filteredLocations = (locations) => {
    return locations.filter(location => location[searchType].toLowerCase().indexOf(searchTerm) > -1)
  }

  const paginatedLocations = (array, page) => {
    let indexMin = page * maxPerPage
    let indexMax = indexMin + maxPerPage
    return array.filter(
      (x, index) => index >= indexMin && index < indexMax
    );
  }
  
  const handleSearch = (e) => {
    setPageNumber(0)
    setSearchTerm(e.target.value)
  }

  const formattedLocations = paginatedLocations(filteredLocations(locations), pageNumber)

  const mapMarkersOption = allMapMarkers ? locations : formattedLocations

  const disabledUp = pageNumber >= Math.floor(filteredLocations(locations).length / maxPerPage)

  return (
    <PageContainer>
      <GoogleMap locations={ mapMarkersOption } center={ center }>
        <MapButtons>
          <MapButton onClick={ () => setAllMapMarkers(!allMapMarkers)}>
            { allMapMarkers ? 'Show Filtered' : 'Show All'}
          </MapButton>
          <MapButton onClick={ () => setShowMapControls(!showMapControls)}>Show Options</MapButton>
        </MapButtons>
        <MapControls showing={ showMapControls } />
      </GoogleMap>
      <input placeholder='search' onChange={ e => handleSearch(e) } />
      <input 
        type='radio' 
        name='searchType'
        id='name' 
        checked={ searchType === 'name' }
        onChange={ () => setSearchType('name')} />
      <label htmlFor="name">name</label>
      <input 
        type='radio' 
        name='searchType'
        id='address' 
        checked={ searchType === 'address' }
        onChange={ () => setSearchType('address')} />
      <label htmlFor="address">address</label>
      <LocationCards locations={ formattedLocations } />
      <button 
        disabled={ pageNumber === 0 } 
        onClick={ () => setPageNumber(pageNumber - 1)}>page down
      </button>
      <p>{ pageNumber + 1 }</p>
      <button 
        disabled={ disabledUp } 
        onClick={ () => setPageNumber(pageNumber + 1)}>page up
      </button>
    </PageContainer>
  )
}


export default Locations