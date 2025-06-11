import React from "react";
import { Link } from "react-router-dom";

function AdminHeader() {
  return (
    <>
      <div
        className="container-fluid fixed-top shadow-sm"
        style={{ backgroundColor: "#121212", zIndex: 1030 }}
      >
        <div className="container px-0 ">
          <nav className="navbar navbar-expand-xl navbar-dark py-3">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <h1 className="m-0 fw-bold" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: "#dc3545", }}>
                🛒 RD General Store
              </h1>
            </Link>

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

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto text-center">
                <Link
                  to="/admin"
                  className="nav-item nav-link"
                  style={{
                    color: "#f5f5f5",
                    padding: "0.5rem 1rem",
                    fontWeight: "600",
                  }}
                >
                  Dashboard
                </Link>

                {[
                  {
                    title: "Category",
                    links: [
                      { to: "/admin/category", label: "Add" },
                      { to: "/admin/viewcategory", label: "View" },
                    ],
                  },
                  {
                    title: "SubCategory",
                    links: [
                      { to: "/admin/subcategory", label: "Add" },
                      { to: "/admin/viewsubcategory", label: "View" },
                    ],
                  },
                  {
                    title: "Product",
                    links: [
                      { to: "/admin/product", label: "Add" },
                      { to: "/admin/viewproduct", label: "View" },
                    ],
                  },
                ].map(({ title, links }) => (
                  <div key={title} className="nav-item dropdown">
                    <span
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        cursor: "pointer",
                        color: "#f5f5f5",
                        fontWeight: "600",
                        padding: "0.5rem 1rem",
                      }}
                    >
                      {title}
                    </span>
                    <div
                      className="dropdown-menu border-0 shadow-sm rounded-3"
                      style={{
                        backgroundColor: "#dc3545",
                      }}
                    >
                      {links.map(({ to, label }) => (
                        <Link
                          key={label}
                          to={to}
                          className="dropdown-item"
                          style={{
                            color: "#121212",
                            fontWeight: "500",
                            backgroundColor: "transparent",
                          }}
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {[
                  { to: "/admin/viewuser", label: "User" },
                  { to: "/admin/viewbooking", label: "Booking" },
                  { to: "/admin/viewfeedback", label: "Feedback" },
                  { to: "/login", label: "Logout" },
                ].map(({ to, label }) => (
                  <Link
                    key={label}
                    to={to}
                    className="nav-item nav-link"
                    style={{
                      color: "#f5f5f5",
                      padding: "0.5rem 1rem",
                      fontWeight: "600",
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default AdminHeader;
