import React from 'react'
import { CloseButton, StatusBar, StatusText } from './style'

export const FlightStatus = ({clearStatus, status}) => {
  let statusColor = '#3FB63F80'
  if (status === 'requires authorization') {
    statusColor = '#FFD30080'
  } else if (status === 'no flight zone') {
    statusColor = '#FF4C4C80'
  }

  return(
    <StatusBar backgroundColor={ statusColor }>
      <StatusText>{ status }</StatusText>
      <CloseButton onClick={ clearStatus }>X</CloseButton>
    </StatusBar>
  )
}

export default FlightStatus