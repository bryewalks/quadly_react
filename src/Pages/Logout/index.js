import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import axios from 'axios'

import actions from 'store/actions'

export const Logout = (props) => {
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(actions.userActions.logOut())
    delete axios.defaults.headers.common["Authorization"]
    localStorage.removeItem("jwt")
    props.history.push('/')
  }, [props.history, dispatch])

  return (
    <></>
  )
}


export default Logout