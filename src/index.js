import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import { GlobalStyle } from 'Components/Globals'
import rootReducer from './store/reducers'
import { Routes } from 'Routes'

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