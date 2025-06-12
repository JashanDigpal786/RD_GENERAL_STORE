import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function ViewFeedback() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:4000/api/feedback/getall")
      .then((res) => {
        setData(res.data.data);
      })
      .catch(() => toast.error("Failed to fetch feedbacks"));
  }, []);

  const deleteData = (id) => {
    axios
      .post("http://localhost:4000/api/feedback/delete", { _id: id })
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          // Refresh feedback list
          axios
            .post("http://localhost:4000/api/feedback/getall")
            .then((res) => setData(res.data.data));
        } else {
          toast.error(res.data.message);
        }
      })
      .catch(() => toast.error("Delete failed"));
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
          <h1 className="display-4 fw-bold text-white mb-3" style={{ color: "#b02a37" }}>
            Feedbacks
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
                Feedbacks
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Table Section with subtle red background */}
      <div className="container mb-5 px-3 px-md-5">
        <div className="shadow-sm rounded p-4" style={{ backgroundColor: "#f8d7da" }}>
          <h2 className="text-center mb-4" style={{ color: "#b02a37", fontWeight: "700" }}>
            Feedback List
          </h2>
          <table className="table table-striped table-bordered">
            <thead style={{ backgroundColor: "#b02a37", color: "white" }}>
              <tr>
                <th>S No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Review</th>
                <th>Suggestion</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((el, index) => (
                  <tr key={el._id} className="justify-content-centertable-row">
                    <td>{index + 1}</td>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.review}</td>
                    <td>{el.suggestion}</td>
                    <td>
                      <button
                        className=" btn  btn-danger btn-sm"
                        title="Delete Feedback"
                        onClick={() => deleteData(el._id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-muted">
                    No feedbacks found.
                  </td>
                </tr>
              )}
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
      `}</style>
    </>
  );
}

export default ViewFeedback;
