import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Switch, Redirect, NavLink} from './react-router-dom'
import Home from './components/Home'
import NavHeader from './components/NavHeader'
import User from './components/User'
import Profile from './components/Profile'
import Login from './components/Login'
import Private from './components/Private'
import 'bootstrap/dist/css/bootstrap.css'
/**
 * Router是路由容器
 * Route是路由规则
 */
ReactDOM.render(
  <Router>
    <>
      <div className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-heading">
            <NavHeader/>
            <ul className="nav navbar-nav">
              <li>
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li><NavLink to="/user">User</NavLink></li>
              <li><NavLink to="/profile">Profile</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/">{localStorage.getItem('login')}</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/user" component={User}/>
              <Private path="/profile" component={Profile}/>
              <Route path="/login" component={Login}/>
              <Redirect from="/home" to="/"/>
            </Switch>
          </div>
        </div>
      </div>
    </>
  </Router>,
  document.getElementById('root')
)