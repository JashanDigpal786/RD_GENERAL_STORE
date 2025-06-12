import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function UpdateCategory() {
  const [categoryName, setCategory] = useState("");
  const [description, setDes] = useState("");
  const [imageName, setImageName] = useState("");
  const [image, setImage] = useState({});
  const [previousImage, setPreviousImage] = useState("");

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

  const { id } = useParams();

  useEffect(() => {
    axios
      .post("http://localhost:4000/api/category/getsingle", { _id: id })
      .then((res) => {
        setCategory(res.data.data.categoryName);
        setDes(res.data.data.description);
        setPreviousImage(res.data.data.thumbnail);
      });
  }, [id]);

  const nav = useNavigate();

  const handleForm = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("_id", id);
    data.append("categoryName", categoryName);
    data.append("description", description);
    if (!!image) {
      data.append("thumbnail", image);
    }

    axios.post("http://localhost:4000/api/category/update", data).then((res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        nav("/admin/viewcategory");
      } else {
        toast.error(res.data.message);
      }
    });
  };

  return (
    <>
      {/* Header with background image and reddish overlay */}
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
          <h1 className="display-4 fw-bold text-white mb-3">Update Category</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
              <li className="breadcrumb-item">
                <a href="/" className="text-white">Home</a>
              </li>
              <li className="breadcrumb-item text-white">Pages</li>
              <li className="breadcrumb-item active text-white" aria-current="page">
                Update Category
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Form in Table */}
      <div className="container mb-5 px-3 px-md-5">
        <div className="shadow-sm rounded p-4" style={{ backgroundColor: "#f8d7da" }}>
          <h2 className="text-center mb-4" style={{ color: "#842029" }}>
            Edit Category Details
          </h2>

          <form onSubmit={handleForm}>
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <th style={{ width: "25%" }}>Category Name</th>
                  <td>
                    <input
                      type="text"
                      value={categoryName}
                      onChange={changeCategory}
                      className="form-control"
                      required
                    />
                  </td>
                </tr>

                <tr>
                  <th>Upload New Image</th>
                  <td>
                    <input
                      type="file"
                      value={imageName}
                      onChange={changeImage}
                      className="form-control"
                    />
                  </td>
                </tr>

                <tr>
                  <th>Previous Image</th>
                  <td>
                    <img
                      src={`http://localhost:4000/${previousImage}`}
                      alt="Current"
                      style={{ width: "120px", borderRadius: "8px", border: "1px solid #ccc" }}
                    />
                  </td>
                </tr>

                <tr>
                  <th>Description</th>
                  <td>
                    <input
                      type="text"
                      value={description}
                      onChange={changeDes}
                      className="form-control"
                      required
                    />
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="text-center pt-3">
                    <button type="submit" className="btn btn-success px-5">
                      Submit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>

      <style>{`
        .btn-success:hover {
          background-color: #146c43;
          color: white;
          border-color: #146c43;
        }
        .breadcrumb-item + .breadcrumb-item::before {
          color: white;
        }
      `}</style>
    </>
  );
}

export default UpdateCategory;
