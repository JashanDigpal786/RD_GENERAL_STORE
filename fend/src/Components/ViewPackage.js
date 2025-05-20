import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminHeader from "./AdminHeader";
// import AdminFooter from "./AdminFooter"
// import Package from "./Package"
import { Link } from "react-router-dom";

function ViewPackage() {
  const [data, setData] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  useEffect(() => {
    axios
      .post("http://localhost:2000/api/package/getall")
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isDelete]);
  // }, [isDelete]);

    const deleteData = (id) => {
      let data = {
          _id: id
      }
      axios.post("http://localhost:2000/api/package/delete",data)
      .then((res)=>{
          console.log(res.data)
          if(res.data.success){
              setIsDelete(res.data.data)
              toast.error(res.data.message)
          }else{
              toast.error(res.data.message)
          }

      })
      setIsDelete(true)
  }

  return (
    <>
      <AdminHeader />
      <section
        className="breadcrumb-section set-bg"
        // data-setbg="/assets/img/breadcrumb-bg.jpg"
        style={{ backgroundImage: "url(/assets/img/breadcrumb-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb-text">
                <h2>View Package</h2>
                <div className="bt-option">
                  <a href="./index.html">Home</a>
                  {/* <a href="#">Pages</a> */}
                  <span>Package</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container"></div>
      <div className="row"></div>
      <div className="col-lg-12 text-center"></div>

      <div className="row"></div>
    <div className="col-lg-12 text-center mb-4">
      <h1 className=" fw-bold text-">View Package</h1><br></br>
      <hr style={{ borderTop: "", width: "200px", margin: "auto", }} />
       
       <div className="col-lg-12">
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle shadow-sm">
          <thead className="table-primary text-center">
            <tr>
              <th>Sr No</th>
              <th>Package Name</th>
              <th>Thumbnail</th>
              <th>Cost</th>
              <th>Duration</th>
              <th>Description</th>
              <th>Action</th>
              <th>View</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((el, index) => (
              <tr key={el._id}>
                <td>{index + 1}</td>
                <td className="fw-semibold">{el.packageName}</td>
                <td>
                  <img
                    src={`http://localhost:2000/${el.thumbnail}`}
                    alt="thumbnail"
                    className="img-thumbnail"
                    style={{ width: "100px", borderRadius: "10px" }}
                  />
                </td>
                <td><span className="badge bg-success fs-6">₹{el.cost}</span></td>
                <td>{el.duration}</td>
                <td>{el.description}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteData(el._id)}
                    title="Delete"
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </td>
                <td>
                  <Link
                    to={`/singlepackage/${el._id}`}
                    className="btn btn-info btn-sm"
                    title="View Details"
                  >
                    <i className="bi bi-eye"></i>
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/updatepackage/${el._id}`}
                    className="btn btn-success btn-sm"
                    title="Edit"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>


    </>
  );
}
export default ViewPackage;
