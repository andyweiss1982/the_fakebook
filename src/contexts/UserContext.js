import React, { createContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = props => {
  const storedUser = JSON.parse(localStorage.getItem("user"))
  const [user, setUser] = useState(storedUser)

  const signIn = user => {
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return(
    <UserContext.Provider value={{user, signIn, signOut}}>
      { props.children }
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
