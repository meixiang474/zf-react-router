import React from 'react'
import RouterContext from './context'

export default function Link(props) {
  return (
    <RouterContext.Consumer>
      {
        routerValue => (
          <a {...props} href="#/" onClick={(e) => {
            e.preventDefault()
            routerValue.history.push(props.to)
          }}>
            {props.children}
          </a>
        )
      }
    </RouterContext.Consumer>
    
  )
}