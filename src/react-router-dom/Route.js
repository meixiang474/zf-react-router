import React from 'react'
import RouterContext from './context'
import {pathToRegexp} from 'path-to-regexp'
/**
 * route代表一条路由规则
 */
export default class Route extends React.Component {
  static contextType = RouterContext
  render(){ 
    let {path = '/', component: RouteComponent, exact = false, render, children} = this.props
    path = typeof path === 'string' ? path : path.pathname
    let pathname = this.context.location.pathname
    let paramNames = []
    let regexp = pathToRegexp(path, paramNames, {end: exact})
    paramNames = paramNames.map(item => item.name)
    let matched = pathname.match(regexp)
    let routeProps = {
      location: this.context.location,
      history: this.context.history
    }
    if(matched){
      let [url, ...values] = matched
      let params = values.reduce((memo, value, index) => {
        memo[paramNames[index]] = value
        return memo
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
      }else {
        return null
      }
    }else {
      if(children){
        return children(routeProps)
      }else {
        return null
      }
    }
  }
} 