import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useLocation } from 'hooks'

import { LocationCards } from 'Components/LocationCards'
import { PageContainer } from 'Components/Globals'
import GoogleMap from 'Components/GoogleMap'

export const Locations = (props) => {
  const [locations, setLocations] = useState([])
  const [center, setCenter] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchType, setSearchType] = useState('name')
  const {latitude, longitude} = useLocation()

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

  const filteredLocations = locations.filter(location => location[searchType].toLowerCase().indexOf(searchTerm) > -1)

  return (
    <PageContainer>
      <GoogleMap locations={ filteredLocations } center={ center } />
      <input placeholder='search' onChange={ e => setSearchTerm(e.target.value) } />
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
      <LocationCards locations={ filteredLocations } />
    </PageContainer>
  )
}


export default Locations