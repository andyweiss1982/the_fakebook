import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Profile = () => {
  const { user } = useContext(UserContext)
  return(
    <main id="profile">
      <h1>{user.name.first} {user.name.last}</h1>
      <img src={user.picture.large} alt="profile" className="profile-pic"/>
      <table>
        <tbody>
          <tr><td>{user.email}</td></tr>
          <tr><td>{user.gender}</td></tr>
          <tr><td>{user.dob.age}</td></tr>
          <tr><td>{user.location.city }, {user.location.state}</td></tr>
          <tr><td>{user.phone}</td></tr>
          <tr><td>Registered {user.registered.age} years ago</td></tr>
        </tbody>
      </table>
    </main>
  )
}

export default Profile
