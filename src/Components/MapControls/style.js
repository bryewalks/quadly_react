import styled from 'styled-components'

export const ControlsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  background-color: gray;
  border-radius: 0 0 5px 5px;
  margin: 15px;
  z-index: 4;
  transform: scaleY(0);
  transition: transform 0.5s ease;
  transform-origin: top;
  ${props => props.showing && `
    transform: scaleY(1);
  `}
`