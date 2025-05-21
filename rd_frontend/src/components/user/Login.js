import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
 const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate()
    const handleForm=(event)=>{
      event.preventDefault();
      let data={
        email:email,
        password:password
      }
      axios.post("http://localhost:4000/api/customer/login",data)

      .then(res=>{
        // console.log(res);
        if(res.data.success==true){
          // toast.success(res.data.message)
          sessionStorage.setItem("userData",JSON.stringify(res.data.data))
          sessionStorage.setItem("userId",res.data.data._id)
          sessionStorage.setItem("token",res.data.token)
          localStorage.setItem("token",res.data.token)

            if(res.data.data.userType==1){
            nav("/admin")
          toast.success(res.data.message)
            
          }else {
            nav('/user/viewcategory')
          toast.success(res.data.message)

         

          }
        }else{
          toast.error(res.data.message)
        }
        })

    }

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
              <input type="email" id="email" className="form-control" value={email}  onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" id="password" className="form-control" value={password}  onChange={(e) => setPassword(e.target.value)} required />
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
