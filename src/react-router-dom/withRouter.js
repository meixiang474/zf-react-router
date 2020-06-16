import React from 'react'
import {Route} from '../react-router-dom'
export default function withRouter(OldComponent){
  return props => (
    <Route render={
      routerProps => <OldComponent {...routerProps} {...props} />
    }/>
  )
}