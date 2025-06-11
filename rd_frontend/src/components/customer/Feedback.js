import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const nav = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    let data = { name, email, review, suggestion };

    axios
      .post("http://localhost:4000/api/feedback/add", data)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          nav("/");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch(() => {
        toast.error("Feedback submission failed");
      });
  };

  return (
    <>
      {/* Header with reddish background overlay and bg image */}
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
          <h1 className="display-4 fw-bold text-white mb-3">Add Feedback</h1>
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
                Feedback
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Feedback form container with light red bg */}
      <div className="container mb-5 px-3 px-md-5">
        <div
          style={{
            backgroundColor: "#f8d7da", // light red/pink background
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(220, 53, 69, 0.3)",
          }}
        >
          <form onSubmit={handleForm}>
            <div className="row g-4 justify-content-center">
              <h2 className="text-center mb-4 fw-bold" style={{ color: "#B22222" }}>
                Add Feedback
              </h2>
              <div className="col-md-6">
                <label className="form-label text-danger fw-bold">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label text-danger fw-bold">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-12">
                <label className="form-label text-danger fw-bold">Review</label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="form-control"
                  rows={4}
                  required
                />
              </div>

              <div className="col-12">
                <label className="form-label text-danger fw-bold">Suggestion</label>
                <textarea
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  className="form-control"
                  rows={3}
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

      {/* Custom styles */}
      <style>{`
        .breadcrumb-item + .breadcrumb-item::before {
          color: white;
        }
        a.text-white:hover {
          color: #f5c2c7 !important;
          text-decoration: underline;
        }
        label {
          text-transform: uppercase;
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

export default Feedback;
