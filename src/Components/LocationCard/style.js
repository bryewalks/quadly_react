import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 150px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  padding: 15px;
  box-shadow: 5px 10px #888888;
  :hover {
    box-shadow: 10px 15px #888888;
    cursor: pointer;
  }
`

export const CardTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardLocation = styled.div`
  font-size: 12px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`