import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function AdminCategory() {
  const [categoryName, setCategory] = useState("");
  const [description, setDes] = useState("");

  const [imageName, setImageName] = useState("");
  const [image, setImage] = useState({});

  const changeCategory = (event) => {
    setCategory(event.target.value);
  };

  const changeDes = (event) => {
    setDes(event.target.value);
  };

  const changeImage = (event) => {
    setImageName(event.target.value);
    setImage(event.target.files[0]);
  };

  const nav = useNavigate();

  const handleForm = (event) => {
    event.preventDefault();

    let data = new FormData();
    data.append("categoryName", categoryName);
    data.append("thumbnail", image);
    data.append("description", description);

    axios
      .post("http://localhost:4000/api/category/add", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          toast.success(res.data.message);
          // nav("/") // navigate if you want
        } else {
          toast.error(res.data.message);
        }
      })
      .catch(() => {
        toast.error("Category submission failed");
      });
  };

  return (
    <>
      {/* Header with reddish background overlay + bg image */}
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
          <h1 className="display-4 fw-bold text-white mb-3">Category</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item text-white">Pages</li>
              <li
                className="breadcrumb-item active text-primary fw-bold"
                aria-current="page"
              >
                Category
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Form container with light red background */}
      <div className="container mb-5 px-3 px-md-5">
        <div
          style={{
            backgroundColor: "#f8d7da", // light red background
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(220, 53, 69, 0.3)",
          }}
        >
          <h1 className="text-center mb-4 fw-bold text-danger text-uppercase">
            Add Category
          </h1>
          <form onSubmit={handleForm}>
            <div className="row g-4 align-items-center">
              <div className="col-md-2">
                <label
                  htmlFor="categoryName"
                  className="form-label fw-bold text-danger text-uppercase"
                >
                  Category Name
                </label>
              </div>
              <div className="col-md-10">
                <input
                  id="categoryName"
                  type="text"
                  value={categoryName}
                  onChange={changeCategory}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-2">
                <label
                  htmlFor="description"
                  className="form-label fw-bold text-danger text-uppercase"
                >
                  Description
                </label>
              </div>
              <div className="col-md-10">
                <input
                  id="description"
                  type="text"
                  value={description}
                  onChange={changeDes}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-2">
                <label
                  htmlFor="image"
                  className="form-label fw-bold text-danger text-uppercase"
                >
                  Image
                </label>
              </div>
              <div className="col-md-10">
                <input
                  id="image"
                  type="file"
                  value={imageName}
                  onChange={changeImage}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-12 text-center pt-4">
                <button
                  type="submit"
                  className="btn btn-danger px-5 fw-bold"
                  style={{ letterSpacing: "1px" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        .breadcrumb-item + .breadcrumb-item::before {
          color: white;
        }
        a.text-white:hover {
          color: #f5c2c7 !important;
          text-decoration: underline;
        }
        button.btn-danger:hover {
          background-color: #b02a37;
          border-color: #b02a37;
          transition: background-color 0.3s ease;
        }
      `}</style>
    </>
  );
}

export default AdminCategory;
