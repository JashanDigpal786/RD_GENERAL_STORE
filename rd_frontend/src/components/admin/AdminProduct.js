import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function AdminProduct() {
  const [productName, setProduct] = useState("");
  const [description, setDes] = useState("");
  const [price, setPrice] = useState();
  const [shippingcharge, setShippingCharge] = useState();
  const [subcategoryId, setSubCategoryID] = useState("");
  const [subcategorydata, setSubCategory] = useState([]);
  const [imageName, setImageName] = useState("");
  const [image, setImage] = useState({});

  const changeProduct = (e) => setProduct(e.target.value);
  const changeDes = (e) => setDes(e.target.value);
  const changePrice = (e) => setPrice(e.target.value);
  const changeShippingCharge = (e) => setShippingCharge(e.target.value);
  const changeSubCategoryId = (e) => setSubCategoryID(e.target.value);
  const changeImage = (e) => {
    setImageName(e.target.value);
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    axios.post("http://localhost:4000/api/subcategory/getall").then((res) => {
      setSubCategory(res.data.data);
    });
  }, []);

  const nav = useNavigate();
  const handleForm = (event) => {
    event.preventDefault();
    let data = new FormData();
    data.append("itemName", productName);
    data.append("itemDes", description);
    data.append("thumbnail", image);
    data.append("subcategoryId", subcategoryId);
    data.append("itemPrice", price);
    data.append("itemshippingCharge", shippingcharge);

    axios.post("http://localhost:4000/api/item/add", data).then((res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        nav("/admin/viewproduct");
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
          <h1 className="display-4 fw-bold text-white mb-3">Add Product</h1>
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
                Add Product
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mb-5 px-3 px-md-5">
        <div
          className="shadow-sm rounded p-4"
          style={{ backgroundColor: "#f8d7da" }}
        >
          <h2 className="text-center mb-4" style={{ color: "#842029" }}>
            Add New Product
          </h2>
          <form onSubmit={handleForm}>
            <div className="row gy-3">
              <div className="col-md-2 d-flex align-items-center" style={{ color: "#842029" }}>
                Product Name
              </div>
              <div className="col-md-10">
                <input
                  type="text"
                  value={productName}
                  onChange={changeProduct}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-2 d-flex align-items-center" style={{ color: "#842029" }}>
                Image
              </div>
              <div className="col-md-10">
                <input
                  type="file"
                  value={imageName}
                  onChange={changeImage}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-2 d-flex align-items-center" style={{ color: "#842029" }}>
                Description
              </div>
              <div className="col-md-10">
                <input
                  type="text"
                  value={description}
                  onChange={changeDes}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-2 d-flex align-items-center" style={{ color: "#842029" }}>
                Price
              </div>
              <div className="col-md-10">
                <input
                  type="text"
                  value={price}
                  onChange={changePrice}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-2 d-flex align-items-center" style={{ color: "#842029" }}>
                Shipping Charge
              </div>
              <div className="col-md-10">
                <input
                  type="text"
                  value={shippingcharge}
                  onChange={changeShippingCharge}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-2 d-flex align-items-center" style={{ color: "#842029" }}>
                SubCategory
              </div>
              <div className="col-md-10">
                <select
                  value={subcategoryId}
                  onChange={changeSubCategoryId}
                  className="form-control"
                  required
                >
                  <option value="" disabled>
                    Choose SubCategory
                  </option>
                  {subcategorydata.map((el) => (
                    <option key={el._id} value={el._id}>
                      {el.subcategoryName}
                    </option>
                  ))}
                </select>
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

      {/* Styles */}
      <style>{`
        .breadcrumb-item + .breadcrumb-item::before {
          color: white;
        }
        input.form-control:focus, select.form-control:focus {
          border-color: #b02a37;
          box-shadow: 0 0 0 0.25rem rgba(176, 42, 55, 0.25);
        }
        button.btn-danger:hover {
          background-color: #b02a37;
          border-color: #b02a37;
        }
      `}</style>
    </>
  );
}

export default AdminProduct;
