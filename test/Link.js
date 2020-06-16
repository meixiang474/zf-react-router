import React, {useContext} from 'react'
import RouterContext from './context'

export default function (props) {
  let routerContext = useContext(RouterContext)
  let {history} = routerContext
  let {to, children} = props
  return (
    <a href="#/" onClick={(e) => {
      e.preventDefault()
      history.push(to)
    }}>{children}</a>
  )
}