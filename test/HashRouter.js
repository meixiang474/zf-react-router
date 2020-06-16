import React from 'react'
import RouterContext from './context'

export default class HashRouter extends React.Component{
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
    window.addEventListener('hashchange', () => {
      this.setState({
        location: window.location.hash.slice(1) || '/',
        state: this.locationState
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
      unblock(prompt){
        history.prompt = null
      }
    }
    let routerValue = {
      location: this.state.location,
      history
    }
    return  (
      <RouterContext.Provider value={routerValue}>
        {this.props.children}
      </RouterContext.Provider>
    )
  }
}