import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function AdminViewBooking() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .post("http://localhost:4000/api/book/getall")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to fetch bookings");
      });
  };

  const changeStatus = (id, newStatus) => {
    axios
      .post("http://localhost:4000/api/book/status", {
        _id: id,
        status: newStatus,
      })
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          fetchData();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to update status");
      });
  };

  return (
    <>
      {/* Header with reddish background overlay */}
      <div
        className="container-fluid mb-5 pt-5"
        style={{
          position: "relative",
          backgroundColor: "rgba(220, 53, 69, 0.6)",
          padding: "60px",
          marginTop: "100px",
          color: "#fff",
          borderRadius: "0 0 20px 20px",
          overflow: "hidden",
        }}
      >
        {/* background image overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('/assets/img/category-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.7)",
            zIndex: 1,
          }}
        ></div>

        <div
          className="container text-center"
          style={{
            position: "relative",
            zIndex: 2,
            padding: "40px 40px",
            borderRadius: "12px",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        >
          <h1
            className="display-4 fw-bold text-white mb-3"
            style={{ color: "#b02a37" }}
          >
            View Booking
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item text-white">Pages</li>
              <li
                className="breadcrumb-item active text-white fw-bold"
                aria-current="page"
                style={{ color: "#b02a37" }}
              >
                View Booking
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Table Section with subtle red background */}
      <div className="container mb-5 px-3 px-md-5">
        <div
          className="shadow-sm rounded p-4"
          style={{ backgroundColor: "#f8d7da" }}
        >
          <h2
            className="text-center mb-4"
            style={{ color: "#b02a37", fontWeight: "700" }}
          >
            View Booking
          </h2>

          <table className="table table-striped table-bordered">
            <thead style={{ backgroundColor: "#b02a37", color: "white" }}>
              <tr>
                <th>S no</th>
                <th>Item Price</th>
                <th>Account Holder Name</th>
                <th>Account Number</th>
                <th>Payment Mode</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el, index) => (
                <tr key={el._id} className="table-row">
                  <td>{index + 1}</td>
                  <td>{el.itemPrice}</td>
                  <td>{el.accountHolderName}</td>
                  <td>{el.accountNumber}</td>
                  <td>{el.paymentMode}</td>
                  <td>{el.status}</td>
                  <td>
                    {el.status === "pending" && (
                      <>
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => changeStatus(el._id, "packed")}
                        >
                          Packed
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => changeStatus(el._id, "cancelled")}
                        >
                          Cancel
                        </button>
                      </>
                    )}
                    {el.status === "packed" && (
                      <>
                        <button
                          className="btn btn-info btn-sm me-2"
                          onClick={() => changeStatus(el._id, "dispatched")}
                        >
                          Dispatch
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => changeStatus(el._id, "cancelled")}
                        >
                          Cancel
                        </button>
                      </>
                    )}
                    {el.status === "dispatched" && (
                      <>
                        <button
                          className="btn btn-success btn-sm me-2"
                          onClick={() => changeStatus(el._id, "delivered")}
                        >
                          Deliver
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => changeStatus(el._id, "cancelled")}
                        >
                          Cancel
                        </button>
                      </>
                    )}
                    {(el.status === "delivered" || el.status === "cancelled") && (
                      <span className="text-muted">No actions</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        .breadcrumb-item + .breadcrumb-item::before {
          color: white;
        }
        table.table {
          font-size: 1rem;
        }
        table.table thead th {
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .table-row:hover {
          background-color: #f5c2c7 !important;
          cursor: pointer;
          color: #6b0b14;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        a.text-white:hover {
          color: #f5c2c7 !important;
          text-decoration: underline;
        }
        button.btn-warning:hover {
          background-color: #d39e00;
          border-color: #d39e00;
        }
        button.btn-info:hover {
          background-color: #0c5460;
          border-color: #0c5460;
        }
        button.btn-success:hover {
          background-color: #19692c;
          border-color: #19692c;
        }
        button.btn-danger:hover {
          background-color: #b02a37;
          border-color: #b02a37;
        }
      `}</style>
    </>
  );
}

export default AdminViewBooking;
