import React from 'react'
import {Route} from '../test'
export default function withRouter(OldComponent) {
  return props => {
    return <Route children={routerProps => <OldComponent {...props} {...routerProps}/>}/>
  }
}