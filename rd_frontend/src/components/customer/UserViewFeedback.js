import axios from "axios";
import { useEffect, useState } from "react";

function UserViewFeedback() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:4000/api/feedback/getall")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <main>
        {/* Header */}
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
            <h1 className="display-4 fw-bold text-white mb-3">Feedback</h1>
          </div>
        </div>

        {/* Feedback Table */}
        <div className="container my-5">
          <h2 className="text-center mb-4 text-danger fw-bold">View Feedback</h2>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-danger">
                <tr>
                  <th scope="col">S no</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Review</th>
                  <th scope="col">Suggestion</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No feedback found.
                    </td>
                  </tr>
                ) : (
                  data.map((el, index) => (
                    <tr key={el._id || index}>
                      <td>{index + 1}</td>
                      <td>{el.name}</td>
                      <td>{el.email}</td>
                      <td>{el.review}</td>
                      <td>{el.suggestion}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export default UserViewFeedback;
