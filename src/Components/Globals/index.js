import styled from 'styled-components'

export const Container = styled.div`
  height: ${props => props.height ? props.height : 'default'};
  background-color: ${props => props.color ? props.color : 'none'};
`

export const PageContainer = styled.div`
  min-height: calc(100vh - 376.5px);
`