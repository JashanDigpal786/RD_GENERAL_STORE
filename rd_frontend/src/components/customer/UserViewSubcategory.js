import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function UserViewSubcategory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:4000/api/subcategory/getall").then((res) => {
      setData(res.data.data);
    });
  }, []);

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
          <h1 className="display-4 fw-bold text-white mb-3">Subcategories</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item text-white">Pages</li>
              <li className="breadcrumb-item active text-white fw-bold" aria-current="page">
                Subcategories
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Card Section */}
      <div className="container mb-5 px-3 px-md-5">
        <div className="row g-4 justify-content-center">
          {data.map((el, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm" style={{ backgroundColor: "#f8d7da" }}>
                <img
                  src={`http://localhost:4000/${el.thumbnail}`}
                  className="card-img-top"
                  alt="Subcategory"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-danger">Category: {el.categoryId?.categoryName}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Subcategory: {el.subcategoryName}</h6>
                  <p className="card-text text-dark">{el.description}</p>
                </div>
              </div>
            </div>
          ))}
          {data.length === 0 && (
            <div className="col-12 text-center text-muted">
              No subcategories found.
            </div>
          )}
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        .breadcrumb-item + .breadcrumb-item::before {
          color: white;
        }
        .card:hover {
          transform: scale(1.02);
          transition: transform 0.3s ease-in-out;
        }
        a.text-white:hover {
          color: #f5c2c7 !important;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

export default UserViewSubcategory;
