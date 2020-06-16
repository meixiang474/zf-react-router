import React, {useContext} from 'react'
import RouterContext from './context'
import {pathToRegexp} from 'path-to-regexp'

export default function (props) {
  const routerContext = useContext(RouterContext)
  let {location, history} = routerContext
  const pathname = location.pathname
  let {path = '/', exact = false, component: RouteComponent, children, render} = props
  path = typeof path === 'string' ? path : path.pathname
  let paramNames = []
  let regexp = pathToRegexp(path, paramNames, {end: exact})
  paramNames = paramNames.map(item => item.name)
  let matched = pathname.match(regexp)
  let routeProps = {
    location,
    history
  }
  if(matched){
    let [url, ...values] = matched
    let params = values.reduce((memo, current, index) => {
      memo[paramNames[index]] = current
    }, {})
    let match = {
      url,
      path,
      isExact: pathname === url,
      params
    }
    routeProps.match = match
    if(RouteComponent){
      return <RouteComponent {...routeProps}/>
    }else if(render){
      return render(routeProps)
    }else if(children){
      return children(routeProps)
    }else{
      return null
    }
  }else{
    if(children){
      return children(routeProps)
    }else{
      return null
    }
  }
 
}