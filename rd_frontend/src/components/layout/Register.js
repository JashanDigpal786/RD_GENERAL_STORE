import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// If your image is in the "public" folder, use the direct path
const bgImage = "/assets/img/login-bg.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const nav = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    let data = { name, email, contact, address, password };

    axios
      .post("http://localhost:4000/api/customer/add", data)
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message);
          // Auto-login after registration
          axios
            .post("http://localhost:4000/api/customer/login", {
              email,
              password,
            })
            .then((res) => {
              if (res.data.success === true) {
                sessionStorage.setItem("userId", res.data.data._id);
                sessionStorage.setItem("token", res.data.token);
                localStorage.setItem("token", res.data.token);
                nav("/user/viewcategory");
              } else {
                toast.error(res.data.message);
              }
            })
            .catch((err) => {
              console.error(err);
              toast.error("Login failed. Please try again.");
            });
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Registration failed. Please try again.");
      });
  };

  return (
    <section
      className="container d-flex justify-content-center align-items-center mt-0"
      style={{
        minHeight: "130vh",
        minWidth: "100vw",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional previous styles for reference */}
      {/* className="d-flex align-items-center justify-content-center my-5" */}
      {/* style={{ minHeight: "125vh" }} */}

      <div
        className="card shadow p-4 w-100"
        style={{
          maxWidth: "420px",
          borderRadius: "15px",
          marginTop: "100px", // 👈 Added this line
        }}
      >

        <h2
          className="text-center mb-4"
          style={{ color: "#b22222", fontWeight: "700" }}
        >
          User Registration
        </h2>

        <form onSubmit={handleForm}>
          {[
            {
              label: "Full Name",
              type: "text",
              id: "name",
              value: name,
              setter: setName,
              placeholder: "Enter your full name",
            },
            {
              label: "Email Address",
              type: "email",
              id: "email",
              value: email,
              setter: setEmail,
              placeholder: "Enter your email",
            },
            {
              label: "Contact",
              type: "text",
              id: "contact",
              value: contact,
              setter: setContact,
              placeholder: "Enter your contact",
            },
            {
              label: "Password",
              type: "password",
              id: "password",
              value: password,
              setter: setPassword,
              placeholder: "Enter your password",
            },
            {
              label: "Address",
              type: "text",
              id: "address",
              value: address,
              setter: setAddress,
              placeholder: "Enter your Address",
            },
          ].map(({ label, type, id, value, setter, placeholder }) => (
            <div className="mb-3" key={id}>
              <label
                htmlFor={id}
                className="form-label"
                style={{ color: "#4a0000", fontWeight: "600" }}
              >
                {label}
              </label>
              <input
                type={type}
                id={id}
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setter(e.target.value)}
                required
                style={{
                  backgroundColor: "#fff7f7",
                  border: "1.5px solid #dc3545",
                  borderRadius: "10px",
                  padding: "12px",
                  color: "#4a0000",
                  fontWeight: "500",
                }}
              />
            </div>
          ))}

          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#dc3545",
              color: "#fff",
              marginTop: "15px",
              padding: "14px",
              fontWeight: "700",
              fontSize: "1.1rem",
              borderRadius: "50px",
              border: "none",
              boxShadow: "0 4px 12px rgba(220, 53, 69, 0.5)",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#b22222")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "#dc3545")
            }
          >
            Register
          </button>
        </form>

        <p className="text-center mt-3" style={{ color: "#4a0000" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#b22222", fontWeight: "600" }}>
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
