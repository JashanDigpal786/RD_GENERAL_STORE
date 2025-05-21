import React from 'react'
import { Outlet } from 'react-router-dom'

import UserNavbar from './UserNavbar'
import UserFooter from './UserFooter'

function UserMaster() {
  return (
    <>
      <UserNavbar/>
      <Outlet/>
      <UserFooter/>
    </>
  )
}

export default UserMaster