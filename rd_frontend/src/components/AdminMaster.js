import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar' 
import Footer from './Footer'

function AdminMaster() {
  return (
    <>
      <AdminNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default AdminMaster