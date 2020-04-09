import styled from 'styled-components'

export const Container = styled.div`
  height: ${props => props.height ? props.height : 'default'};
  background-color: ${props => props.color ? props.color : 'none'};
`