import { Link, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

// import userState
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
 
  const [address, setAddress] = useState("");



  const nav = useNavigate()
  const handleForm = ((e) => {

    e.preventDefault()
    let data = {
      name: name,
      email: email,
      contact: contact,
      address: address,

      password: password,

    }

   axios.post('http://localhost:4000/api/customer/add',data)
      .then((res) => {
        console.log(res);

        if (res.data.success == true) {
          toast.success(res.data.message)
          let data = {
            email: email,
            password: password
          }

        axios.post("http://localhost:4000/api/customer/login",data)
            .then((res) => {
              if (res.data.success == true) {
                sessionStorage.setItem("userId", res.data.data._id)
                sessionStorage.setItem("token", res.data.token)
                localStorage.setItem("token", res.data.token)
                nav('/login')
              } else {
                toast.error(res.data.message)
              }
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  )
  return (
    <>
      <section className="d-flex align-items-center justify-content-center vh-100 bg-light my-5">
        <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "400px" }}>
          <h2 className="text-center mb-4">User Registration</h2>
          <form onSubmit={handleForm}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}

              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                id="contact"
                className="form-control"
                placeholder="Enter your contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}

              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Password</label>
              <input
                type="text"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}

              />
            </div>

               <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                className="form-control"
                placeholder="Enter your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}

              />
            </div>
 
            <button className="btn btn-primary btn-block">Register</button>
          </form>
          <p className="text-center mt-3">
            Already have an account?
            <Link to="/doctor" className="text-primary"> Login</Link>
          </p>
        </div>
      </section>
    </>
  )
}
export default Register