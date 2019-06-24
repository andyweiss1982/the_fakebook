import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Navbar = () => {
  const { user, signOut } = useContext(UserContext)

  return(
    <header>
      <nav>
        <h1>FakeBook</h1>
        {
          user &&
          <ul>
            <li>
              <img
                src={user.picture.thumbnail}
                alt="profile-pic"
                id="nav-profile-pic"
              />
            </li>
            <li>
              <span id="nav-email">{user.email}</span>
            </li>
            <li>
              <button id="sign-out" onClick={signOut}>
                Sign Out
              </button>
            </li>
          </ul>
        }
      </nav>
    </header>
  )
}

export default Navbar
