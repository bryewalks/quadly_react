import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import HomePage from 'Pages/HomePage'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ HomePage } />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes