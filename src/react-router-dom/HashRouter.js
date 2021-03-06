import React, {useState} from 'react'
import RouterContext from './context'

/**
 * HashRouter只是一个容器, 并没有dom结构, 它就是为了向下层传递location
 */
export default class HashRouter extends React.Component {
 constructor(props){
   super(props)
   this.state = {
      location: {
        pathname: window.location.hash.slice(1),
        state: window.history.state
      }
    }
    this.locationState = null
 }
  componentDidMount(){
    window.addEventListener('hashchange', event => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/',
          state: this.locationState
        }
      })
    })
    window.location.hash = window.location.hash || '/'
  }
  render(){
    let that = this
    let history = {
      location: this.state.location,
      push(to){
        if(history.prompt){
          let loc = typeof to === 'string' ? {pathname: to} : to
          let yes = window.confirm(history.prompt(loc))
          if(!yes) return 
        }
        if(typeof to === 'object'){
          let {pathname, state} = to
          that.locationState = state
          window.location.hash = pathname
        }else{
          window.location.hash = to
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
      location: this.state.location,
      history
    }
    return (
      <RouterContext.Provider value={routerValue}>
        {this.props.children}
      </RouterContext.Provider>
    )
  }
}