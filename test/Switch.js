import React, { useContext } from 'react'
import RouterContext from './context'
import {pathToRegexp} from 'path-to-regexp'

export default function (props) {
  let {children} = props
  let routerContext = useContext(RouterContext)
  children = Array.isArray(children) ? children : [children]
  let pathname = routerContext.location.pathname
  for(let i = 0; i < children.length; i++){
    let {path = '/', exact = false} = children[i].props
    let regexp = pathToRegexp(path, [], {end: exact})
    let matched = pathname.match(regexp)
    if(matched){
      return children[i]
    }
  }
  return null
}