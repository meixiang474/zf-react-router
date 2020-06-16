import React, {useContext} from 'react'
import RouterContext from './context'
export default function Prompt (props) {
  let {when, message} = props
  let routerContext = useContext(RouterContext)
  if(when){
    routerContext.history.block(message)
  }else{
    routerContext.history.unblock()
  }
  return null
}