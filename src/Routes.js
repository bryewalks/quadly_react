import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from 'Pages/Home'
import Location from 'Pages/Location'
import Locations from 'Pages/Locations'
import Login from 'Pages/Login'
import Logout from 'Pages/Logout'
import Signup from 'Pages/Signup'

export const Routes = () => {
  return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/locations/:id" component={ Location } />
        <Route path="/locations" component={ Locations } />
        <Route path="/login" component={ Login } />
        <Route path="/logout" component={ Logout } />
        <Route path="/signup" component={ Signup } />
      </Switch>
  )
}

export default Routes