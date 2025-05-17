import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const changeEmail = (event) => setEmail(event.target.value);
  const changePassword = (event) => setPassword(event.target.value);

  const handleForm = (event) => {
    event.preventDefault();
    if (email === "admin@gmail.com" && password === "123") {
      toast.success("Login Successfully");
      nav("/admin/category");
    }
    else {
      toast.error("Invalid user");
    }
  };

  return (
    <>
      <div className="container-fluid bg-dark text-white py-5 mb-4">
        <div className="container text-center">
          <h1 className="display-4">Login</h1>
        </div>
      </div>

      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
        <div className="card p-4 shadow rounded" style={{ width: "100%", maxWidth: "400px" }}>
          <h3 className="text-center mb-4">Sign In</h3>
          <form onSubmit={handleForm}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" id="email" className="form-control" value={email} onChange={changeEmail} required />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" id="password" className="form-control" value={password} onChange={changePassword} required />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
