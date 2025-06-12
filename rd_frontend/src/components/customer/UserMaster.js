import React from 'react'
import UserNavbar from './UserNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../layout/Footer'

function UserMaster() {
  return (
    <>
      <UserNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default UserMaster