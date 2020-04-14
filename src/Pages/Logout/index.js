import React, { useEffect } from 'react'

export const Logout = (props) => {
  useEffect(() =>{
    props.history.push('/')
  }, [props.history])

  return (
    <></>
  )
}


export default Logout