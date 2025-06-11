import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const dropdownPages = ["/cart", "/checkout", "/testimonial", "/page404"];
  const isDropdownActive = dropdownPages.includes(location.pathname);

  return (
    <div
      className="container-fluid fixed-top shadow-sm"
      style={{ backgroundColor: "#121212" }}
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
                fontFamily:
                  "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
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
            <div className="navbar-nav ms-auto text-center">
              {/* Main Links */}
              {[
                { to: "/", label: "Home" },
                // { to: "/shop", label: "Shop" },
                // { to: "/shopdetail", label: "Shop Detail" },
                { to: "/contact", label: "Contact" },
                { to: "/login", label: "Login" },
                { to: "/register", label: "Register" },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="nav-item nav-link"
                  style={{
                    color: isActive(to) ? "#dc3545" : "#f5f5f5",
                    fontWeight: "600",
                    padding: "0.5rem 1rem",
                  }}
                >
                  {label}
                </Link>
              ))}

              {/* Pages Dropdown */}
              {/* <div className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    cursor: "pointer",
                    color: isDropdownActive ? "#dc3545" : "#f5f5f5",
                    fontWeight: "600",
                    padding: "0.5rem 1rem",
                  }}
                >
                  Pages
                </span>
                <div
                  className="dropdown-menu border-0 shadow-sm rounded-3"
                  style={{ backgroundColor: "#dc3545" }}
                >
                  {dropdownPages.map((path) => {
                    const label = {
                      // "/cart": "Cart",
                      "/checkout": "Checkout",
                      // "/testimonial": "Testimonial",
                      "/page404": "404 Page",
                    }[path];

                    return (
                      <Link
                        key={path}
                        to={path}
                        className="dropdown-item"
                        style={{
                          color: "#121212", // dark text
                          backgroundColor: isActive(path)
                            ? "#ffc8c8"
                            : "transparent",
                          fontWeight: isActive(path) ? "700" : "500",
                        }}
                      >
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
