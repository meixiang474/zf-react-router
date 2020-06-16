import React from 'react'
import {Route, Link} from './index'
import './NavLink.css'

export default function (props) {
  let {to, children, exact = false} = props
  return (
    <Route
      path={to}
      exact={exact} 
      children={routerProps => <Link to={to} className={routerProps.match ? 'active' : ''}>{children}</Link>}
      />
  )
} 