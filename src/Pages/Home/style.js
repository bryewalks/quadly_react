import styled from 'styled-components'
import droneHome from './images/drone-home.jpg'
import { PageContainer } from 'Components/Globals'

export const DroneBackground = styled(PageContainer)`
  background-image: url(${ droneHome });
  background-position: 50% 30%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: white;
  position: absolute;
  left: 50%;
  bottom: 25%;
  transform: translate(-50%, -50%);
  padding: 0 20px;
`

export const WeatherButton = styled.button`
  padding: 15px;
  margin: 20px;
`