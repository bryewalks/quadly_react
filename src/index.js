import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import axios from 'axios'

import App from './App.js'
import { GlobalStyle } from 'Components/Globals'
import rootReducer from './store/reducers'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

ReactDOM.render(
                <Provider store={ store }>
                  <BrowserRouter>
                    <App />
                    <GlobalStyle />
                  </BrowserRouter>
                </Provider>,
  document.getElementById('root')
);