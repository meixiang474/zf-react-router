import React, {useState} from 'react'

export default function UserDetail(props){
  let username = props.location.state
  if(!username){
    let usersStr = localStorage.getItem('users')
    let users = usersStr ? JSON.parse(usersStr) : []
    username = users.find(user => user.id === props.match.params.id).username 
  }
  const user = {
    id: props.match.params.id,
    username
  }
  return (
    <div>
      <p>ID: {user.id}</p>
      <p>用户名: {user.username}</p>
    </div>
  )
}