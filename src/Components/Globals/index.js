import styled from 'styled-components'

export const Container = styled.div`
  height: ${props => props.height ? props.height : 'default'};
  background-color: ${props => props.color ? props.color : 'none'};
`

export const PageContainer = styled.div`
  padding: 25px;
  min-height: calc(100vh - 335px);
`