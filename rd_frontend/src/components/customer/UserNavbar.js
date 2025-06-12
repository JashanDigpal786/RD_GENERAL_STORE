import React from "react";
import { Link, useLocation } from "react-router-dom";

function UserNavbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div
        className="container-fluid fixed-top shadow-sm"
        style={{ backgroundColor: "#121212", zIndex: 1030 }}
      >
        <div className="container px-0">
          <nav className="navbar navbar-expand-xl navbar-dark py-3">
            {/* Logo */}
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center"
              style={{ color: "#dc3545" }}
            >
              <h1
                className="m-0 fw-bold"
                style={{
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  color: "#dc3545",
                }}
              >
                  🛒 RD General Store
              </h1>
            </Link>

            {/* Toggler */}
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars fs-4" style={{ color: "#dc3545" }} />
            </button>

            {/* Nav Items */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto text-center" style={{ fontWeight: "600" }}>
                {[
                  { to: "/user/viewcategory", label: "Category" },
                  { to: "/user/viewsubcategory", label: "SubCategory" },
                  { to: "/user/viewproduct", label: "Product" },
                  { to: "/user/viewbooking", label: "Booking" },
                ].map(({ to, label }) => (
                  <Link
                    key={label}
                    to={to}
                    className="nav-item nav-link"
                    style={{
                      color: isActive(to) ? "#dc3545" : "#f5f5f5",
                      padding: "0.5rem 1rem",
                    }}
                  >
                    {label}
                  </Link>
                ))}

                <div className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      cursor: "pointer",
                      color:
                        isActive("/user/feedback") || isActive("/user/viewfeedback")
                          ? "#dc3545"
                          : "#f5f5f5",
                      padding: "0.5rem 1rem",
                    }}
                  >
                    Feedback
                  </span>
                  <div
                    className="dropdown-menu rounded-0 border-0 shadow-sm animate__animated animate__fadeIn"
                    style={{
                      backgroundColor: "#dc3545",
                      minWidth: "8rem",
                    }}
                  >
                    <Link
                      to="/user/feedback"
                      className="dropdown-item"
                      style={{
                        color: "#121212",
                        backgroundColor:
                          isActive("/user/feedback") ? "#ffc8c8" : "transparent",
                        fontWeight: isActive("/user/feedback") ? "700" : "500",
                      }}
                    >
                      Add
                    </Link>
                    <Link
                      to="/user/viewfeedback"
                      className="dropdown-item"
                      style={{
                        color: "#121212",
                        backgroundColor:
                          isActive("/user/viewfeedback") ? "#ffc8c8" : "transparent",
                        fontWeight: isActive("/user/viewfeedback") ? "700" : "500",
                      }}
                    >
                      View
                    </Link>
                  </div>
                </div>

                <Link
                  to="/login"
                  className="nav-item nav-link"
                  style={{
                    color: isActive("/login") ? "#dc3545" : "#f5f5f5",
                    padding: "0.5rem 1rem",
                  }}
                >
                  Logout
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default UserNavbar;
