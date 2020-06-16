import React, {useState, useEffect} from 'react'
import {Link} from '../react-router-dom'

export default function UserList(props){
  let [users, setUsers] = useState([])

  useEffect(() => {
    let usersStr = localStorage.getItem('users')
    let users = usersStr ? JSON.parse(usersStr) : []
    setUsers(users)
  }, [])

  return (
    <ul className="list-group">
      {
        users.map(user => (
          <li key={user.id} className="list-group-item">
            <Link to={{pathname: `/user/detail/${user.id}`, state: user.username}}>{user.username}</Link>
          </li>
        ))
      }
    </ul>
  )
}