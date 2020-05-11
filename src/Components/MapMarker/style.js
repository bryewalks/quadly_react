import styled from 'styled-components'

export const Marker = styled.img`
  height: auto;
  position: absolute;
  src: ${ props => props.src};
  transform: translate(-50%,-100%);
  width: 35px;
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
`