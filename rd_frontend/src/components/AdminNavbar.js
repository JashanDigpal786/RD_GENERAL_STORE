import React from 'react'
import { Link } from 'react-router-dom'

function AdminHeader() {
  return (
    <>
      <div className="container-fluid fixed-top">
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">

            <Link to="/" className="navbar-brand">
              <h1 className="text-primary display-6">RD Store</h1>
            </Link>

            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"            >
              <span className="fa fa-bars text-primary" />
            </button>

            <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
              <div className="navbar-nav mx-auto">
                <Link to="/" className="nav-item nav-link active"> Home </Link>
                <Link to="/shop" className="nav-item nav-link"> Category </Link>
                <Link to="/shopdetail" className="nav-item nav-link"> Products </Link>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"> Pages </a>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <Link to="/cart" className="dropdown-item"> Cart </Link>
                    <Link to="/checkout" className="dropdown-item"> Chackout </Link>
                    <Link to="/testimonial" className="dropdown-item"> Testimonial </Link>
                    <Link to="/page404" className="dropdown-item"> 404 Page </Link>
                  </div>
                </div>
                <Link to="/contact" className="nav-item nav-link"> Contact </Link>
                <Link to="/login" className="nav-item nav-link"> Logout </Link>
              </div>

              {/* <div className="d-flex m-3 me-0">
                <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"                >
                  <i className="fas fa-search text-primary" />
                </button>
                <a to="#" className="position-relative me-4 my-auto">
                  <i className="fa fa-shopping-bag fa-2x" />
                  <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{ top: "-5px", left: 15, height: 20, minWidth: 20 }}                  >                    3                  </span>
                </a>
                <a to="#" className="my-auto"><i className="fas fa-user fa-2x" /></a>
              </div> */}
            </div>
          </nav>
        </div>


      </div>
    </>
  )
}

export default AdminHeader
