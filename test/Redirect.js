import React, {useContext} from 'react'
import RouterContext from './context'

export default function (props) {
  let {from, to} = props
  let routerContext = useContext(RouterContext)
  let {location,history} = routerContext
  if(!from || from === location.pathname){
    history.push(to)
  }
  return null
}