import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Auth = props => {
  const { user, signIn } = useContext(UserContext)

  const authenticate = () => {
    fetch('https://randomuser.me/api/?nat=us')
      .then(response => response.json())
      .then(data => signIn(data.results[0]))
  }

  if (user) return props.children
  return (
    <main>
      <h1>Welcome to FakeBook</h1>
      <button onClick={authenticate}>
        Sign In
      </button>
    </main>
  )
}

export default Auth
