import React from 'react';

export default function Footer() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: '#121212', color: '#f5f5f5' }}>
        <div className="container py-5">
          <div className="pb-4 mb-4" style={{ borderBottom: "1px solid rgba(220, 53, 69, 0.7)" }}>
            <div className="row g-4">
              <div className="col-lg-3">
                <a href="#" style={{ textDecoration: 'none' }}>
                  <h1 style={{ color: '#dc3545', marginBottom: 0, fontWeight: '700' }}>RD <p>General Store</p> </h1>
                  <p style={{ color: '#ccc', marginBottom: 0, fontWeight: '500' }}>
                    Your One Stop Shop for Grocery, Paint & Cold Drinks
                  </p>
                </a>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mx-auto">
                  <input
                    className="form-control border-2 w-100 py-3 px-4 rounded-pill"
                    type="email"
                    placeholder="Enter your email to get latest offers"
                    style={{ borderColor: '#dc3545', backgroundColor: '#2a2a2a', color: '#f5f5f5' }}
                  />
                  <button
                    type="submit"
                    className="btn py-3 px-4 position-absolute rounded-pill text-white"
                    style={{ top: 2, right: 2, backgroundColor: '#dc3545', border: 'none', fontWeight: '600' }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex justify-content-end pt-3">
                  {['twitter', 'facebook-f', 'youtube', 'linkedin-in'].map((icon) => (
                    <a
                      key={icon}
                      className="btn btn-outline-danger me-3 btn-md-square rounded-circle"
                      href="#"
                      style={{ borderColor: '#dc3545', color: '#dc3545' }}
                      aria-label={icon}
                    >
                      <i className={`fab fa-${icon}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 style={{ color: '#dc3545', marginBottom: '1rem', fontWeight: '700' }}>Why Shop With Us?</h4>
                <p style={{ color: '#ddd', fontWeight: '500' }}>
                  Trusted by thousands for quality groceries, premium paints, and refreshing cold drinks. We offer competitive prices, fast delivery, and excellent customer support.
                </p>
                <a
                  href="#"
                  className="btn"
                  style={{
                    backgroundColor: '#dc3545',
                    color: '#fff',
                    borderRadius: '50px',
                    padding: '0.5rem 1.5rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 style={{ color: '#dc3545', marginBottom: '1rem', fontWeight: '700' }}>Shop Info</h4>
                {[
                  'About RD General Store',
                  'Contact Us',
                  'Privacy Policy',
                  'Terms & Conditions',
                  'Return Policy',
                  'FAQs & Help',
                ].map((linkText, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="btn-link"
                    style={{ color: '#f5f5f5', fontWeight: '500', marginBottom: '0.4rem' }}
                  >
                    {linkText}
                  </a>
                ))}
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 style={{ color: '#dc3545', marginBottom: '1rem', fontWeight: '700' }}>Account</h4>
                {[
                  'My Account',
                  'Order History',
                  'Wishlist',
                  'Shopping Cart',
                  'International Orders',
                ].map((linkText, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="btn-link"
                    style={{ color: '#f5f5f5', fontWeight: '500', marginBottom: '0.4rem' }}
                  >
                    {linkText}
                  </a>
                ))}
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 style={{ color: '#dc3545', marginBottom: '1rem', fontWeight: '700' }}>Contact Us</h4>
                <p style={{ color: '#ddd', fontWeight: '500' }}>
                  Address: 143529, Tibber, Gurdaspur, Punjab
                </p>
                <p style={{ color: '#ddd', fontWeight: '500' }}>
                  Email: jashan8847683268@gmail.com
                </p>
                <p style={{ color: '#ddd', fontWeight: '500' }}>
                  Phone: +91 8847683268
                </p>
                <p style={{ color: '#ddd', fontWeight: '500' }}>
                  We accept all major payments
                <img src="/assets/img/payment.png" className="img-fluid mx-2" width={40} alt="Payment Methods" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: '#1f1f1f' }}>
        <div className="container py-4">
          <div className="row">
            <div
              className="col-md-6 text-center text-md-end mb-3 mb-md-0"
              style={{ color: '#999', fontWeight: '500' }}
            >
              <span>
                <a href="#" style={{ color: '#dc3545', textDecoration: 'none' }}>
                  <i className="fas fa-copyright me-2" /> RD General Store
                </a>
                , All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
