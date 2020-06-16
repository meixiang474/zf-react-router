import React from 'react'
import {Route, Link} from '../react-router-dom'
import UserAdd from './UserAdd'
import UserList from './UserList'
import UserDetail from './UserDetail'

export default function User (props) {
  console.log(props.location.state)
  return (
    <div className="row">
      <div className="col-md-2">
        <ul className="nav nav-stack">
          <li><Link to="/user/list">用户列表</Link></li>
          <li><Link to="/user/add">新增用户</Link></li>
        </ul>
      </div>
      <div className="col-md-10">
        <Route path="/user/list" component={UserList}/>
        <Route path="/user/add" component={UserAdd}/>
        <Route path="/user/detail/:id" component={UserDetail}/>
      </div>
    </div>
  )
}