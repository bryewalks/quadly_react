import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { createGlobalStyle } from 'styled-components'

import rootReducer from './store/reducers'
import { Routes } from 'Routes'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)

ReactDOM.render(
                <Provider store={ store }>
                  <BrowserRouter>
                    <Routes />
                    <GlobalStyle />
                  </BrowserRouter>
                </Provider>,
  document.getElementById('root')
);