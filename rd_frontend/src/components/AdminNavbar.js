import React from 'react'
import { Link } from 'react-router-dom'

function AdminHeader() {
  return (
    <>
      <div className="container-fluid fixed-top">
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <Link to="/" className="navbar-brand"><h1 className="text-primary display-6">RD Store</h1></Link>
            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"            >
              <span className="fa fa-bars text-primary" />
            </button>
            <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
              <div className="navbar-nav mx-auto">
                <Link to="/admin/category" className="nav-item nav-link"> Category </Link>
                <Link to="/admin/subcategory" className="nav-item nav-link"> SubCategory </Link>
                <Link to="/admin/product" className="nav-item nav-link active"> Product </Link>
                <Link to="/login" className="nav-item nav-link"> Logout </Link>
              </div> 
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default AdminHeader
