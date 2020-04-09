import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from 'Pages/Home'
import Login from 'Pages/Login'
import Signup from 'Pages/Signup'
import NavBar from 'Components/NavBar'
import NavFooter from 'Components/NavFooter'

export const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/signup" component={ Signup } />
      </Switch>
      <NavFooter />
    </BrowserRouter>
  )
}