import React from 'react'
import { Link } from 'react-router-dom'

function UserNavbar() {
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

                <div className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Category </span>
                  <div className="dropdown-menu rounded-0 border-0 shadow-sm animate__animated animate__fadeIn">
                   
                    <Link to="/user/viewcategory" className="dropdown-item">View</Link>
                  </div>
                </div>

                <div className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> SubCategory </span>
                  <div className="dropdown-menu rounded-0 border-0 shadow-sm animate__animated animate__fadeIn">
                  
                    <Link to="/user/viewsubcategory" className="dropdown-item">View</Link>
                  </div>
                </div>

                <div className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Product </span>
                  <div className="dropdown-menu rounded-0 border-0 shadow-sm animate__animated animate__fadeIn">
                    {/* <Link to="/admin/product" className="dropdown-item">Add</Link> */}
                    <Link to="/user/viewproduct" className="dropdown-item">View</Link>
                  </div>

                </div>
                  <Link to="/user/viewbooking" className="nav-item nav-link">Booking</Link>
                
                  <Link to="/login" className="nav-item nav-link"> Logout </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default UserNavbar
