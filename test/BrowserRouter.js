import React, {useState, useEffect} from 'react'
import RouterContext from './context'
export default function BrowserRouter (props) {
  let [state, setState] = useState({location: {pathname: '/'}})
  useEffect(() => {
    window.onpushstate = (currentState, pathname) => {
      setState({
        location: {
          ...state.location,
          pathname,
          state: currentState
        }
      })
    }
    window.onpopstate = event => {
      setState({
        location: {
          ...state.location,
          pathname: window.location.pathname,
          state: event.state
        }
      })
    }
  }, [state.location])
  let history = {
    location: state.location,
    push(to){
      if(history.prompt){
        let loc = typeof to === 'string' ? {pathname: to} : to
        let yes = window.confirm(history.prompt(loc))
        if(!yes) return
      }
      if(typeof to === 'object'){
        let {state, pathname} = to
        window.history.pushState(state, null, pathname)
      }else{
        window.history.pushState(null, null, to)
      }
    },
    block(prompt){
      history.prompt = prompt
    },
    unblock(){
      history.prompt = null
    }
  }
  let routerValue = {
    history,
    location: state.location
  }
  return (
    <RouterContext.Provider value={routerValue}>
      {props.children}
    </RouterContext.Provider>
  )
}
