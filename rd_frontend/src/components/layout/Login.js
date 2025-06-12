import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleForm = (event) => {
    event.preventDefault();
    let data = {
      email: email,
      password: password,
    };
    // setTimeout(() => nav("/admin"), 1000)
    axios
      .post("http://localhost:4000/api/customer/login", data)
      .then((res) => {
        if (res.data.success === true) {
          sessionStorage.setItem("userData", JSON.stringify(res.data.data));
          sessionStorage.setItem("userId", res.data.data._id);
          sessionStorage.setItem("token", res.data.token);
          localStorage.setItem("token", res.data.token);

          toast.success(res.data.message);
          if (res.data.data.userType == 1) {
            nav("/admin");
          } else {
            nav("/user/viewcategory");
          }
        } else {
          toast.error(res.data.message);
        }
      });
  };

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{
          minHeight: "95vh",
          minWidth: "100vw",
          backgroundImage: `url("/assets/img/login-bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="card p-4 shadow" style={{ marginLeft: "15px", width: "100%", maxWidth: "450px", borderRadius: "15px" }}>
          <h3 className="text-center mb-4" style={{ color: "#b22222", fontWeight: "700" }}>  Sign In</h3>
          <form onSubmit={handleForm}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ color: "#4a0000", fontWeight: "600" }}>Email address</label>
              <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required style={{
                backgroundColor: "#fff7f7", border: "1.5px solid #dc3545", borderRadius: "10px", padding: "12px", color: "#4a0000", fontWeight: "500",
              }} />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label" style={{ color: "#4a0000", fontWeight: "600" }}>Password</label>
              <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required style={{
                backgroundColor: "#fff7f7", border: "1.5px solid #dc3545", borderRadius: "10px", padding: "12px", color: "#4a0000", fontWeight: "500",
              }} />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn" style={{
                backgroundColor: "#dc3545", color: "#fff", padding: "14px", fontWeight: "700", fontSize: "1.1rem", borderRadius: "50px", border: "none", boxShadow: "0 4px 12px rgba(220, 53, 69, 0.5)", cursor: "pointer", transition: "background-color 0.3s ease",
              }} onMouseEnter={(e) => (e.target.style.backgroundColor = "#b22222")} onMouseLeave={(e) => (e.target.style.backgroundColor = "#dc3545")}              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
