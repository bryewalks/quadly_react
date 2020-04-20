import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  height: ${props => props.height ? props.height : 'default'};
  background-color: ${props => props.color ? props.color : 'none'};
`

export const PageContainer = styled.div`
  min-height: calc(100vh - 285px);
`

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color: lightgray;
  }
`