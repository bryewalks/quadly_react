import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import axios from 'axios'

import NavBar from 'Components/NavBar'
import NavFooter from 'Components/NavFooter'
import Routes from 'Routes'

import actions from 'store/actions'

export const App = (props) => {
  const dispatch = useDispatch()
  let jwt = localStorage.getItem("jwt");
  
  /**
   * if jwt exists makes GET request to user for current user object and dispatches it to user store
   * if jwt is expired it is removed from local storage
   */
  useEffect(() => {
    if (jwt) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
      axios
      .get("/auth/user")
      .then(response => {
        dispatch(actions.userActions.setUser({
                                              email: response.data.email,
                                              userId: response.data.user_id
                                            }))
      })
      .catch((error) => {
        delete axios.defaults.headers.common["Authorization"]
        localStorage.removeItem("jwt")
      });
    }
  },[jwt, dispatch])

  return (
    <>
      <NavBar />
      <Routes />
      <NavFooter />
    </>
  )
}

export default App