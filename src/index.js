import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import { Routes } from 'Routes'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  html {
    font-weight: 100;
  }
`

ReactDOM.render(<BrowserRouter>
                  <Routes />
                  <GlobalStyle />
                </BrowserRouter>,
  document.getElementById('root')
);