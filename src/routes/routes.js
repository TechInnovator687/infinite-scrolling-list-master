import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routesList'
import RouteValidator from './routeValidator'

const CustomRoutes = () => (
  <Switch>
    {routes.map(({ path, ...props }) => (
      <Route
        path={ path }
        key={ path }
        exact
        render={ () => (<RouteValidator path={ path } { ...props } />) }
      />
    ))}
  </Switch>
)

export default CustomRoutes
