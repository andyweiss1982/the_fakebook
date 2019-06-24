import React from 'react'
import { UserProvider } from './contexts/UserContext'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Profile from './components/Profile'

const App = () => (
  <UserProvider>
    <Navbar />
    <Auth>
      <Profile />
    </Auth>
  </UserProvider>
)

export default App
