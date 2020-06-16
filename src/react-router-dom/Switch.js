import React, {useContext} from 'react'
import RouterContext from './context'
import { pathToRegexp } from 'path-to-regexp'

export default function Switch(props) {
  let routerContext = useContext(RouterContext)
  let children = props.children
  children = Array.isArray(children) ? children : [children]
  let pathname = routerContext.location.pathname
  for(let i = 0; i < children.length; i++){
    let child = children[i]
    let {path = '/', exact = false} = child.props
    let regexp = pathToRegexp(path, [], {end: exact})
    let matched = pathname.match(regexp)
    if(matched){
      return child
    }
  }
  return (
    null
  )
}