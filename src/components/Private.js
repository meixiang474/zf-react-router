import React from 'react'
import {Route, Redirect} from '../react-router-dom'
export default function (props) {
  let {path, component: Component} = props
  return (
    <Route path={path} render={routerProps => {
      return localStorage.getItem('login') ? <Component {...routerProps}/> : <Redirect to={{pathname: '/login', state: {from: routerProps.location.pathname}}}/>
    }}/>
  )
}