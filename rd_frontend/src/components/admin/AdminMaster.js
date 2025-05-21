import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar' 

function AdminMaster() {
  return (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  )
}

export default AdminMaster