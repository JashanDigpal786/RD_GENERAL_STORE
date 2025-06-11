import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:4000/api/dashboard")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* Breadcrumb Section */}
      <section
        className="breadcrumb-section set-bg"
        style={{
          backgroundImage: "url(/assets/img/breadcrumb-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // paddingTop: "100px",
        }}
      >
        <div className="container mb-5 ">
          <div className="row mb-5 ">
            {/* <div className="col-lg-12 my-5 text-center">
              <div className="breadcrumb-text">
                <h2 style={{ color: "#fff" }}>Admin Dashboard</h2>
                <div className="bt-option">
                  <Link to="/" style={{ color: "#f8d7da", fontWeight: "500" }}>
                    Home
                  </Link>
                  <span style={{ color: "#fff", marginLeft: "8px" }}>
                    / Dashboard
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Dashboard Cards Section */}
      <div
        className="container-fluid"
        style={{ backgroundColor: "#f8f9fa", minHeight: "60vh" }}
      >
        <div className="container py-5">
          <div className="row pb-5">
            <div className="col-md-12 py-5 text-center mb-5">
              <h1 className="fw-bold" style={{ color: "#212529" }}>
                Welcome to Admin Dashboard
              </h1>
            </div>

            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card dashboard-card shadow-sm text-center red-card">
                <div className="card-body py-5">
                  <Link
                    to="/admin/viewcategory"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontWeight: "700",
                      fontSize: "1.5rem",
                    }}
                  >
                    Total Category: {data.totalservice}
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card dashboard-card shadow-sm text-center red-card">
                <div className="card-body py-5">
                  <Link
                    to="/admin/viewsubcategory"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontWeight: "700",
                      fontSize: "1.5rem",
                    }}
                  >
                    Total Subcategory: {data.totalsubservice}
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card dashboard-card shadow-sm text-center red-card">
                <div className="card-body py-5">
                  <Link
                    to="/admin/viewpackage"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontWeight: "700",
                      fontSize: "1.5rem",
                    }}
                  >
                    Total Customers: {data.totalCustomer}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover and Custom Styles */}
      <style>{`
        .dashboard-card.red-card {
          background: linear-gradient(135deg, #f44336, #dc3545);
          color: #fff;
          border: none;
          border-radius: 1rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }

        .dashboard-card.red-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(220, 53, 69, 0.4);
          background: linear-gradient(135deg, #c82333, #a71d2a);
        }
      `}</style>
    </>
  );
}

export default Dashboard;
