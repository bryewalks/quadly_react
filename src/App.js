import React from 'react'
import { useSelector } from 'react-redux'

import NavBar from 'Components/NavBar'
import NavFooter from 'Components/NavFooter'
import Routes from 'Routes'

export const App = () => {
  const currentUser = useSelector(state => state.currentUser)

  return (
    <>
      <NavBar />
      <Routes />
      <NavFooter />
    </>
  )
}

export default App