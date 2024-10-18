import React from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as userState from '../utils/userState'

const RouteValidator = ({
  isAuth, component: Component, path,
}) => {
  if (path === '/login' && userState.isLoggedIn()) return <Redirect to='/home' />
  if (isAuth) {
    if (userState.isLoggedIn()) {
      return (
        <Component />
      )
    }
  } else {
    return (
      <Component />
    )
  }
  return (
    <Redirect to='/login' />
  )
}

RouteValidator.propTypes = {
  component: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
}

export default RouteValidator
