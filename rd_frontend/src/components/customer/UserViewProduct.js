import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function UserViewProduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:4000/api/item/getall").then((res) => {
      setData(res.data.data);
    });
  }, []);

  return (
    <>
      {/* Reddish Header with Background Image */}
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
          <h1 className="display-4 fw-bold text-white mb-3">Products</h1>
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
              >
                Products
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Cards */}
      <div className="container mb-5 px-3 px-md-5">
        <div className="row g-4 justify-content-center">
          {data.map((el, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card shadow-sm"
                style={{ backgroundColor: "#f8d7da", height: "100%" }}
              >
                <img
                  src={`http://localhost:4000/${el.thumbnail}`}
                  className="card-img-top"
                  alt={el.itemName}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-danger">
                    {el.itemName}
                  </h5>
                  <p className="card-text mb-1">
                    <strong>Description:</strong> {el.itemDes}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Price:</strong> ₹{el.itemPrice}
                  </p>
                  <p className="card-text mb-3">
                    <strong>Shipping:</strong> ₹{el.itemshippingCharge}
                  </p>
                  <Link
                    to={`/user/booking/${el._id}`}
                    className="btn btn-danger mt-auto"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {data.length === 0 && (
            <div className="col-12 text-center text-muted">
              No products available.
            </div>
          )}
        </div>
      </div>

      {/* Custom Styles */}
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
        .btn-danger:hover {
          background-color: #c82333;
          border-color: #bd2130;
        }
      `}</style>
    </>
  );
}

export default UserViewProduct;
