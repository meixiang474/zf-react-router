import React, {useRef, useState, useEffect} from 'react'
import {Prompt} from '../react-router-dom'
export default function UserAdd(props){
  const [isBlocking, setIsBlocking] = useState(false)
  const [submit, setSubmit] = useState(false)
  const usernameRef = useRef()

  function handleSubmit(event){
    event.preventDefault()
    setSubmit(true)
    let username = usernameRef.current.value
    let usersStr = localStorage.getItem('users')
    let users = usersStr ? JSON.parse(usersStr) : []
    users.push({
      id: Date.now() + '',
      username
    })
    usernameRef.current.value = ''
    localStorage.setItem('users', JSON.stringify(users))
    
  }
  useEffect(() => {
    if(submit){
      props.history.push('/user/list')
    }
  }, [submit])

  return (
    // when是否要阻止跳转
    <>
    <Prompt
      when={isBlocking && !submit}
      message={location => `请问你是否要跳转到${location.pathname}`}
    />
    <form onSubmit={handleSubmit}>
      用户名<input onChange={event => setIsBlocking(event.target.value.length > 0)} type="text" className="form-control" ref={usernameRef}/>
      <button type="submit" className="btn btn-primary">提交</button>
    </form>
    </>
  )
}

  
    
  
