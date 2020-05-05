import styled from 'styled-components'

export const StatusBar = styled.div`
  height: 40px;
  width: 100%;
  background-color: ${ props => props.backgroundColor };
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`

export const StatusText = styled.div`
  margin: 0 auto;
`

export const CloseButton = styled.div`
  padding-right: 25px;
  :hover {
    cursor: pointer;
  }
`