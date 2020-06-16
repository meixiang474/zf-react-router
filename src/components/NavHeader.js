import React from 'react';
import {withRouter} from '../react-router-dom'
function NavHeader(props){
  return (
    <div onClick={() => props.history.push('/')} className="navbar-brand">
      珠峰架构
    </div>
  )
}
export default withRouter(NavHeader)