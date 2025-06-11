import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function AdminSubCategory() {
  const [subCategoryName, setSubCategory] = useState("");
  const [categoryId, setCategoryID] = useState("");
  const [categorydata, setCategory] = useState([]);
  const [imageName, setImageName] = useState("");
  const [image, setImage] = useState({});

  const changeSubCategory = (event) => setSubCategory(event.target.value);
  const changeCategoryId = (event) => setCategoryID(event.target.value);
  const changeImage = (event) => {
    setImageName(event.target.value);
    setImage(event.target.files[0]);
  };

  useEffect(() => {
    axios
      .post("http://localhost:4000/api/category/getall")
      .then((res) => {
        setCategory(res.data.data);
      });
  }, []);

  const nav = useNavigate();
  const handleForm = (event) => {
    event.preventDefault();

    let data = new FormData();
    data.append("subcategoryName", subCategoryName);
    data.append("thumbnail", image);
    data.append("categoryId", categoryId);

    axios.post("http://localhost:4000/api/subcategory/add", data).then((res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        nav("/admin/viewsubcategory"); // Navigate back after add, update as needed
      } else {
        toast.error(res.data.message);
      }
    });
  };

  return (
    <>
      {/* Header with reddish background overlay */}
      <div
        className="container-fluid mb-5 pt-5"
        style={{
          position: "relative",
          backgroundColor: "rgba(220, 53, 69, 0.6)", // bootstrap red with opacity
          padding: "60px",
          marginTop: "100px",
          color: "#fff",
        }}
      >
        {/* reddish overlay with background image */}
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
          <h1 className="display-4 fw-bold text-white mb-3">Add Subcategory</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item text-white">Pages</li>
              <li
                className="breadcrumb-item active text-white"
                aria-current="page"
              >
                Add Subcategory
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Form Section with subtle pink/red background */}
      <div className="container mb-5 px-3 px-md-5">
        <div
          className="shadow-sm rounded p-4"
          style={{ backgroundColor: "#f8d7da" /* subtle red background */ }}
        >
          <h2 className="text-center mb-4" style={{ color: "#842029" }}>
            Add New Subcategory
          </h2>
          <form onSubmit={handleForm}>
            <div className="row gy-3">
              <label
                htmlFor="categorySelect"
                className="col-md-2 d-flex align-items-center"
                style={{ color: "#842029" }}
              >
                Category
              </label>
              <div className="col-md-10">
                <select
                  id="categorySelect"
                  value={categoryId}
                  onChange={changeCategoryId}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Choose Category
                  </option>
                  {categorydata.map((el) => (
                    <option key={el._id} value={el._id}>
                      {el.categoryName}
                    </option>
                  ))}
                </select>
              </div>

              <label
                htmlFor="subcategoryName"
                className="col-md-2 d-flex align-items-center"
                style={{ color: "#842029" }}
              >
                Subcategory Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  id="subcategoryName"
                  value={subCategoryName}
                  onChange={changeSubCategory}
                  className="form-control"
                  placeholder="Enter Subcategory Name"
                  required
                />
              </div>

              <label
                htmlFor="subcategoryImage"
                className="col-md-2 d-flex align-items-center"
                style={{ color: "#842029" }}
              >
                Image
              </label>
              <div className="col-md-10">
                <input
                  type="file"
                  id="subcategoryImage"
                  value={imageName}
                  onChange={changeImage}
                  className="form-control"
                  accept="image/*"
                  required
                />
              </div>

              <div className="col-12 text-center pt-4">
                <button type="submit" className="btn btn-danger px-5">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        .breadcrumb-item + .breadcrumb-item::before {
          color: white;
        }
        input.form-control:focus {
          border-color: #842029;
          box-shadow: 0 0 0 0.25rem rgba(132, 32, 41, 0.25);
        }
        button.btn-danger:hover {
          background-color: #b02a37;
          border-color: #b02a37;
        }
      `}</style>
    </>
  );
}

export default AdminSubCategory;
