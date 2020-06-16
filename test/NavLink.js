import React from 'react'
import {Route, Link} from '../test'
export default function NavLink(props){
  let {exact, to, children} = props
  return <Route exact={exact} path={to} children={routerProps => <Link classnames={routerProps.match ? 'active' : ''} to={to}>{children}</Link>}/>
}