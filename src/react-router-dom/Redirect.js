import React, {useContext} from 'react'
import RouterContext from './context'

export default function Redirect(props) {
  const routerContext = useContext(RouterContext)
  if(!props.from || props.from === routerContext.location.pathname){
    routerContext.history.push(props.to)
  }
  return null
}