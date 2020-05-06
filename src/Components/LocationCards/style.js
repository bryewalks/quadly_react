import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto, 100px);
  grid-gap: 15px; 
`