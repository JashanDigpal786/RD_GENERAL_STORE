import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Booking() {
  const [accountHolder, setAccountHolder] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [itemPrice, setPrice] = useState("");
  const [cvv, setCvv] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios
      .post("http://localhost:4000/api/item/getsingle", { _id: id })
      .then((res) => {
        setPrice(res.data.data.itemPrice);
      })
      .catch(() => {
        toast.error("Failed to fetch item price");
      });
  }, [id]);

  const nav = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    let data = {
      accountHolderName: accountHolder,
      accountNumber: accountNumber,
      paymentMode: paymentMode,
      itemPrice: itemPrice,
      cvv: cvv,
    };
    axios
      .post("http://localhost:4000/api/book/add", data)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          nav("/user/viewbooking");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch(() => {
        toast.error("Booking failed");
      });
  };

  return (
    <>
      {/* Page Header */}
      <div
        className="container-fluid mb-0 pt-5"
        style={{
          position: "relative",
          backgroundColor: "rgba(255, 182, 193, 0.6)", // lightpink with opacity
          padding: "60px",
          marginTop: "100px",
          color: "#8B0000", // dark red text
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
            filter: "brightness(0.9) saturate(1.1)", // lighter overlay
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
            backgroundColor: "rgba(255, 228, 225, 0.7)", // misty rose transparent
            color: "#8B0000",
          }}
        >
          <h1 className="display-4 fw-bold mb-3">Add Booking</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-danger fw-semibold">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item text-danger">Pages</li>
              <li
                className="breadcrumb-item active fw-bold"
                aria-current="page"
                style={{ color: "#8B0000" }}
              >
                Booking
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Booking Form with background image */}
      <div
        className="booking-bg d-flex justify-content-center align-items-center py-5"
        style={{
          minHeight: "100vh",
          backgroundImage: "url('/assets/img/booking-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          borderRadius: "20px",
        //   margin: "0 15px 40px",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255, 182, 193, 0.35)", // light pink overlay
            borderRadius: "20px",
            zIndex: 1,
          }}
        ></div>

        {/* Form container */}
        <div
          className="container"
          style={{
            maxWidth: "700px",
            position: "relative",
            zIndex: 2,
            backgroundColor: "rgba(255, 240, 245, 0.95)", // very light pink
            borderRadius: "20px",
            padding: "30px 40px",
            boxShadow: "0 8px 24px rgba(255, 105, 97, 0.3)", // soft red shadow
          }}
        >
          <h2 className="text-center mb-4 fw-bold" style={{ color: "#B22222" }}>
            Add Booking
          </h2>
          <form onSubmit={handleForm}>
            <div className="row g-4">
              <div className="col-md-6">
                <label htmlFor="accountHolder" className="form-label fw-bold" style={{ color: "#8B0000" }}>
                  Account Holder Name
                </label>
                <input
                  type="text"
                  id="accountHolder"
                  value={accountHolder}
                  onChange={(e) => setAccountHolder(e.target.value)}
                  className="form-control"
                  placeholder="Enter account holder name"
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="accountNumber" className="form-label fw-bold" style={{ color: "#8B0000" }}>
                  Account Number
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="form-control"
                  placeholder="Enter account number"
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="cvv" className="form-label fw-bold" style={{ color: "#8B0000" }}>
                  CVV
                </label>
                <input
                  type="password"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="form-control"
                  placeholder="Enter CVV"
                  maxLength={4}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold d-block mb-2" style={{ color: "#8B0000" }}>
                  Payment Mode
                </label>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    id="credit"
                    name="payment"
                    value="credit"
                    checked={paymentMode === "credit"}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    className="form-check-input"
                    required
                  />
                  <label htmlFor="credit" className="form-check-label" style={{ color: "#8B0000" }}>
                    Credit Card
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    id="debit"
                    name="payment"
                    value="debit"
                    checked={paymentMode === "debit"}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    className="form-check-input"
                  />
                  <label htmlFor="debit" className="form-check-label" style={{ color: "#8B0000" }}>
                    Debit Card
                  </label>
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="price" className="form-label fw-bold" style={{ color: "#8B0000" }}>
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  value={`₹${itemPrice}`}
                  className="form-control"
                  readOnly
                  disabled
                />
              </div>

              <div className="col-12 text-center mt-4">
                <button
                  type="submit"
                  className="btn btn-danger btn-lg px-5 fw-bold"
                  style={{ backgroundColor: "#B22222", borderColor: "#B22222" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Booking;
