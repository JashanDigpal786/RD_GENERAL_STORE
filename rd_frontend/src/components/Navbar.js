import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="container-fluid fixed-top shadow-sm" style={{ background: 'linear-gradient(to right, #ffffff, #f8f9fa)' }}>
        <div className="container px-0">
          <nav className="navbar navbar-expand-xl navbar-light">
            <Link to="/" className="navbar-brand">
              <h1 className="text-primary display-6 fw-bold m-0">🛒 RD Store</h1>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars text-primary" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/shop" className="nav-item nav-link">Shop</Link>
                <Link to="/shopdetail" className="nav-item nav-link">Shop Detail</Link>

                <div className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </span>
                  <div className="dropdown-menu rounded-0 border-0 shadow-sm animate__animated animate__fadeIn">
                    <Link to="/cart" className="dropdown-item">Cart</Link>
                    <Link to="/checkout" className="dropdown-item">Checkout</Link>
                    <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                    <Link to="/page404" className="dropdown-item">404 Page</Link>
                  </div>
                </div>

                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                <Link to="/login" className="nav-item nav-link">Login</Link>
              </div>

              <div className="d-flex align-items-center gap-3">
                <button
                  className="btn btn-outline-primary rounded-circle"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                  title="Search"
                >
                  <i className="fas fa-search" />
                </button>

                <Link to="/cart" className="btn position-relative" title="View Cart">
                  <i className="fa fa-shopping-bag fa-lg" />
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    3
                  </span>
                </Link>

                <Link to="/profile" className="btn" title="Profile">
                  <i className="fas fa-user fa-lg" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;

// import React from 'react'
// import { Link } from 'react-router-dom'

// function Navbar() {
//   return (
//     <>
//       <div className="container-fluid fixed-top">
//         <div className="container px-0">
//           {/* <nav className="navbar navbar-light bg-white navbar-expand-xl"> */}
//       <nav className="navbar navbar-light bg-white navbar-expand-xl" >  {/* v navbar-expand-lg fixed-top"> */}
//             <Link to="/" className="navbar-brand"><h1 className="text-primary display-6">RD Store</h1></Link>
//             <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"            >
//               <span className="fa fa-bars text-primary" />
//             </button>
//             <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
//               <div className="navbar-nav mx-auto">
//                 <Link to="/" className="nav-item nav-link active"> Home </Link>
//                 <Link to="/shop" className="nav-item nav-link"> Shop </Link>
//                 <Link to="/shopdetail" className="nav-item nav-link"> Shop Detail </Link>
//                 <div className="nav-item dropdown">
//                   <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"> Pages </a>
//                   <div className="dropdown-menu m-0 bg-secondary rounded-0">
//                     <Link to="/cart" className="dropdown-item"> Cart </Link>
//                     <Link to="/checkout" className="dropdown-item"> Chackout </Link>
//                     <Link to="/testimonial" className="dropdown-item"> Testimonial </Link>
//                     <Link to="/page404" className="dropdown-item"> 404 Page </Link>
//                   </div>
//                 </div>
//                 <Link to="/contact" className="nav-item nav-link"> Contact </Link>
//                 <Link to="/login" className="nav-item nav-link"> Login </Link>
//               </div>
//               {/* <div className="d-flex m-3 me-0">
//                 <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"                >
//                   <i className="fas fa-search text-primary" />
//                 </button>
//                 <a to="#" className="position-relative me-4 my-auto">
//                   <i className="fa fa-shopping-bag fa-2x" />
//                   <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{ top: "-5px", left: 15, height: 20, minWidth: 20 }}                  >                    3                  </span>
//                 </a>
//                 <a to="#" className="my-auto">
//                   <i className="fas fa-user fa-2x" />
//                 </a>
//               </div> */}
//             </div>
//           </nav>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Navbar
