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
  box-shadow: 2px 2px 2px 3px #282F37;
`

export const Button = styled.button`
  padding: 15px;
  margin: 20px;
  font-size: 16px;
  /* min-width: 250px; */
  border: 2px solid #282F37;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  padding: 16px 30px;
  border-radius: 60px;
  color: #282F37;
  display: inline-block;
  transition: all 0.2s;
  background-color: white;
  cursor: pointer;
  :hover {
    background-color: #282F37;
    color: white;
  }
`