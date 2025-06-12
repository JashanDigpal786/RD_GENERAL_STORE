import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function UserViewBooking() {
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
      {/* Header with reddish background and overlay */}
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
          <h1 className="display-4 fw-bold text-white mb-3">Booking</h1>
        </div>
      </div>

      {/* Table container */}
      <div className="container mb-5 px-3 px-md-5">
        <div
          className="card shadow-sm p-4"
          style={{ backgroundColor: "#f8d7da", borderRadius: "15px" }}
        >
          <h2 className="text-center mb-4 text-danger fw-bold">View Bookings</h2>
          <div className="table-responsive">
            <table className="table table-hover align-middle text-center">
              <thead
                className="text-white"
                style={{ backgroundColor: "#dc3545", fontWeight: "700" }}
              >
                <tr>
                  <th scope="col">S no</th>
                  <th scope="col">Item Price</th>
                  <th scope="col">Account Holder Name</th>
                  <th scope="col">Account Number</th>
                  <th scope="col">Payment Mode</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody style={{ fontWeight: "700" }}>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center text-muted fw-bold">
                      No bookings found.
                    </td>
                  </tr>
                ) : (
                  data.map((el, index) => (
                    <tr key={el._id}>
                      <td>{index + 1}</td>
                      <td>₹{el.itemPrice}</td>
                      <td>{el.accountHolderName}</td>
                      <td>{el.accountNumber}</td>
                      <td className="text-capitalize">{el.paymentMode}</td>
                      <td className="fw-bold text-capitalize">{el.status}</td>
                      <td>
                        {el.status.toLowerCase() === "pending" ? (
                          <>
                            <button
                              onClick={() => changeStatus(el._id, "approved")}
                              className="btn btn-success btn-sm me-2"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => changeStatus(el._id, "rejected")}
                              className="btn btn-danger btn-sm"
                            >
                              Reject
                            </button>
                          </>
                        ) : (
                          <span className="text-muted">No actions</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        /* Table hover effect with smooth transition */
        table.table-hover tbody tr:hover {
          background-color: #f5c2c7;
          transition: background-color 0.3s ease-in-out;
          cursor: pointer;
        }
        /* Buttons hover color */
        .btn-success:hover {
          background-color: #198754cc;
          border-color: #198754cc;
        }
        .btn-danger:hover {
          background-color: #c82333cc;
          border-color: #bd2130cc;
        }
      `}</style>
    </>
  );
}

export default UserViewBooking;
