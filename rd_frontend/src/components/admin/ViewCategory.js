import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function ViewCategory() {
  const [data, setData] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post("http://localhost:4000/api/category/getall")
      .then((res) => {
        setData(res.data.data);
        setIsDelete(false);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load categories.");
        setLoading(false);
      });
  }, [isDelete]);

  const deleteData = (id) => {
    axios
      .post("http://localhost:4000/api/category/delete", { _id: id })
      .then((res) => {
        res.data.success
          ? toast.success(res.data.message)
          : toast.error(res.data.message);
        setIsDelete(true);
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
          <h1 className="display-4 fw-bold text-white mb-3">Categories</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white">Home</Link>
              </li>
              <li className="breadcrumb-item text-white">Pages</li>
              <li className="breadcrumb-item active text-white" aria-current="page">
                Category
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Table Section with matching red theme */}
      <div className="container mb-5 px-3 px-md-5">
        <div className="shadow-sm rounded p-4" style={{ backgroundColor: "#f8d7da" }}>
          <h2 className="text-center mb-4" style={{ color: "#842029" }}>
            View All Categories
          </h2>

          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <thead
                className="text-center"
                style={{ backgroundColor: "#b02a37", color: "#fff" }}
              >
                <tr>
                  <th className="py-3">Category Name</th>
                  <th className="py-3">Image</th>
                  <th className="py-3">Description</th>
                  <th className="py-3">Action</th>
                </tr>
              </thead>
              <tbody className="text-center align-middle">
                {loading ? (
                  <tr>
                    <td colSpan="4" className="py-4">
                      <div
                        className="spinner-border"
                        style={{ color: "#b02a37" }}
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </td>
                  </tr>
                ) : data.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-muted py-4">
                      No categories available.
                    </td>
                  </tr>
                ) : (
                  data.map((el, index) => (
                    <tr key={index}>
                      <td>{el.categoryName}</td>
                      <td>
                        <img
                          src={`http://localhost:4000/${el.thumbnail}`}
                          alt="thumbnail"
                          width="100"
                          style={{ borderRadius: "8px" }}
                        />
                      </td>
                      <td>{el.description}</td>
                      <td>
                        <button
                          className="btn btn-outline-danger me-2"
                          onClick={() => deleteData(el._id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                        <Link
                          to={`/admin/updatecategory/${el._id}`}
                          className="btn btn-outline-success"
                        >
                          <i className="bi bi-pencil"></i>
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .btn-outline-danger:hover {
          background-color: #b02a37;
          color: white;
          border-color: #b02a37;
        }
        .btn-outline-success:hover {
          background-color: #198754;
          color: white;
          border-color: #198754;
        }
        .breadcrumb-item + .breadcrumb-item::before {
          color: white;
        }
        tbody tr:hover {
          background-color: #f8d7da;
        }
      `}</style>
    </>
  );
}

export default ViewCategory;
