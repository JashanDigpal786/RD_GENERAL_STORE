import React from 'react';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div
                className="container-fluid py-4 bg-white hero-header mb-4"
                style={{ background: '#fff5f5' }} // soft red-pink background
            >
                <div className="container py-4">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-7 text-center text-lg-start">
                            <h4 className="mb-2" style={{ color: '#dc3545' }}>
                                Welcome to RD General Store
                            </h4>
                            <h1 className="display-5 fw-bold mb-3" style={{ color: '#dc3545' }}>
                                One Stop Shop for Grocery, Paint & Cold Drinks
                            </h1>
                            <p className="mb-4" style={{ color: '#333', maxWidth: '550px' }}>
                                Get all your daily essentials, home improvement supplies, and refreshing beverages under one roof with exciting offers and fast delivery.
                            </p>
                            <div className="input-group w-100 w-md-75 w-lg-75 mx-auto mx-lg-0" style={{ maxWidth: '450px' }}>
                                <input
                                    type="text"
                                    className="form-control border-2 border-danger py-2 px-3 rounded-start"
                                    placeholder="Search for products..."
                                    style={{ borderColor: '#dc3545' }}
                                />
                                <button className="btn btn-danger px-4 rounded-end" type="button">
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-5 text-center">
                            <img
                                src="/assets/img/rd-banner.png"
                                alt="RD General Store"
                                className="img-fluid rounded shadow"
                                style={{ maxHeight: '320px', objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero Section */}

            {/* Features Section */}
            <div className="container-fluid py-5" style={{ background: '#fffaf0' }}> {/* warm ivory */}
                <div className="container py-5">
                    <div className="row g-4">
                        {[
                            {
                                icon: "fas fa-truck",
                                title: "Free Delivery",
                                desc: "Free delivery on orders over ₹3000",
                                bgColor: "#dc3545"
                            },
                            {
                                icon: "fas fa-shield-alt",
                                title: "Secure Payment",
                                desc: "100% secure payment guaranteed",
                                bgColor: "#dc3545"
                            },
                            {
                                icon: "fas fa-undo-alt",
                                title: "30-Day Returns",
                                desc: "Easy return within 30 days",
                                bgColor: "#dc3545"
                            },
                            {
                                icon: "fas fa-headset",
                                title: "24/7 Support",
                                desc: "Quick support anytime",
                                bgColor: "#dc3545"
                            }
                        ].map(({ icon, title, desc, bgColor }, i) => (
                            <div key={i} className="col-md-6 col-lg-3">
                                <div className="text-center rounded bg-white p-4 shadow-sm h-100">
                                    <div
                                        className="mb-4 mx-auto rounded-circle d-flex align-items-center justify-content-center"
                                        style={{
                                            backgroundColor: bgColor,
                                            width: "70px",
                                            height: "70px",
                                            color: "white",
                                            fontSize: "2rem"
                                        }}
                                    >
                                        <i className={icon} />
                                    </div>
                                    <h5 style={{ color: bgColor, fontWeight: '600' }}>{title}</h5>
                                    <p className="mb-0" style={{ color: "#333" }}>{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Features Section */}

            {/* Categories Section */}
            <div className="container py-4" style={{ background: '#fefefe' }}>
                <h2 className="text-center mb-4 fw-bold" style={{ color: '#dc3545' }}>
                    Explore Our Categories
                </h2>
                <div className="row g-3 text-center">
                    {[
                        {
                            img: '/assets/img/cold-drinks.png',
                            title: 'Cold Drinks',
                            desc: 'Stay refreshed with our collection of cold beverages, energy drinks, and soft drinks.',
                            link: '/cold-drinks',
                            btnText: 'View Drinks',
                        },
                        {
                            img: '/assets/img/paint.png',
                            title: 'Paint',
                            desc: 'Get the best range of wall paints, brushes, and hardware supplies for home or commercial use.',
                            link: '/paint',
                            btnText: 'Explore Paints',
                        },
                        {
                            img: '/assets/img/grocery.png',
                            title: 'Grocery',
                            desc: 'Shop for fresh and packaged food, grains, spices, and daily household items at the best prices.',
                            link: '/grocery',
                            btnText: 'Shop Now',
                        },
                    ].map(({ img, title, desc, link, btnText }) => (
                        <div key={title} className="col-md-4">
                            <div className="card h-100 shadow-sm border-0">
                                <img src={img} className="card-img-top" alt={title} />
                                <div className="card-body px-4 pt-3 pb-4">
                                    <h5 className="card-title mb-2" style={{ color: '#dc3545' }}>
                                        {title}
                                    </h5>
                                    <p className="card-text mb-3" style={{ color: '#333', fontSize: '0.95rem' }}>
                                        {desc}
                                    </p>
                                    <a href={link} className="btn btn-danger">
                                        {btnText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Categories Section */}

           {/* Banner Section Start */}
<div className="container-fluid banner my-5" style={{ backgroundColor: '#dc3545' }}>
  <div className="container py-5">
    <div className="row g-4 align-items-center">
      <div className="col-lg-6">
        <div className="py-4">
          <h1 className="display-6 text-white">Welcome to RD General Store</h1>
          <p className="fw-normal display-6 text-light mb-4">Kirana, Paint & Cold Drinks</p>
          <p className="mb-4 text-light">
            Your one-stop destination for daily groceries, premium quality paints, and refreshing cold drinks.
            Serving fresh and reliable products for your home and business needs.
          </p>
          <a
            href="#"
            className="banner-btn btn border-2 border-white rounded-pill text-white py-3 px-5"
            style={{ backgroundColor: '#e69c9c' }}
          >
            Explore Now
          </a>
        </div>
      </div>
      <div className="col-lg-6 position-relative">
        <div
          className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
          style={{ width: 100, height: 100, top: 80, left: 25, border: '2px solid #dc3545' }}
        >
          <div className="text-center">
            <h1 style={{ fontSize: 36, color: '#dc3545' }}>3</h1>
            <span className="h6" style={{ color: '#dc3545' }}>Shops</span><br />
            <span className="text-muted small">Managed</span>
          </div>
        </div>
        <img
          src="assets/img/banner-rd-store.png"
          className="img-fluid w-100 rounded shadow"
          alt="RD General Store Banner"
        />
      </div>
    </div>
  </div>
</div>
{/* Banner Section End */}

{/* Bestseller Products Start */}
<div className="container-fluid py-5" style={{ backgroundColor: '#fff8f8' }}>
  <div className="container py-5">
    <div className="text-center mx-auto mb-5" style={{ maxWidth: 900 }}>
      <h1 className="display-4" style={{ color: '#dc3545' }}>Popular Products</h1>
      <p style={{ color: '#6c2a2a' }}>
        Browse top-selling items from our Kirana, Paint, and Cold Drinks stores, selected to meet your everyday needs.
      </p>
    </div>
    <div className="row g-4">
      {/* Kirana Store Product */}
      <div className="col-lg-6 col-xl-4">
        <div className="p-4 rounded" style={{ backgroundColor: '#f2bcbc'}}>
          <div className="row align-items-center">
            <div className="col-6">
              <img
                src="assets/img/kirana-product.jpg"
                className="img-fluid rounded-circle w-100"
                alt="Kirana Product"
              />
            </div>
            <div className="col-6">
              <a href="#" className="h5 text-danger">Premium Atta</a>
              <div className="d-flex my-3 text-danger">
                <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" />
              </div>
              <h4 className="mb-3 text-danger">40 ₹ / 10 kg</h4>
              <a href="#" className="btn border border-danger rounded-pill px-3 text-danger">
                <i className="fa fa-shopping-bag me-2" /> Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Paint Store Product */}
      <div className="col-lg-6 col-xl-4">
        <div className="p-4 rounded" style={{ backgroundColor: '#f2bcbc' }}>
          <div className="row align-items-center">
            <div className="col-6">
              <img
                src="assets/img/paint-product.jpg"
                className="img-fluid rounded-circle w-100"
                alt="Paint Product"
              />
            </div>
            <div className="col-6">
              <a href="#" className="h5 text-danger">Interior Wall Paint</a>
              <div className="d-flex my-3 text-danger">
                <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="fas fa-star" />
              </div>
              <h4 className="mb-3 text-danger">25 ₹ / litre</h4>
              <a href="#" className="btn border border-danger rounded-pill px-3 text-danger">
                <i className="fa fa-shopping-bag me-2" /> Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cold Drinks Store Product */}
      <div className="col-lg-6 col-xl-4">
        <div className="p-4 rounded" style={{ backgroundColor: '#f2bcbc' }}>
          <div className="row align-items-center">
            <div className="col-6">
              <img
                src="assets/img/cold-drinks-product.jpg"
                className="img-fluid rounded-circle w-100"
                alt="Cold Drinks Product"
              />
            </div>
            <div className="col-6">
              <a href="#" className="h5 text-danger">ColaColla (500ml)</a>
              <div className="d-flex my-3 text-danger">
                <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
              </div>
              <h4 className="mb-3 text-danger">1.20 ₹</h4>
              <a href="#" className="btn border border-danger rounded-pill px-3 text-danger">
                <i className="fa fa-shopping-bag me-2" /> Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Bestseller Products End */}

{/* Fact Start */}
<div className="container-fluid py-5" style={{ backgroundColor: '#fff8f8' }}>
  <div className="container">
    <div className="p-5 rounded" style={{ backgroundColor: '#f2bcbc' }}>
      <div className="row g-4 justify-content-center">
        {[
          { icon: "fa-users", label: "Satisfied Customers", value: "1963" },
          { icon: "fa-check-circle", label: "Quality of Service", value: "99%" },
          { icon: "fa-certificate", label: "Quality Certificates", value: "33" },
          { icon: "fa-boxes", label: "Available Products", value: "789" },
        ].map(({ icon, label, value }, i) => (
          <div key={i} className="col-md-6 col-lg-6 col-xl-3">
            <div className="counter bg-white rounded p-4 text-center shadow-sm">
              <i className={`fa ${icon} text-danger mb-3`} style={{ fontSize: '40px' }} />
              <h5 className="text-danger text-uppercase">{label}</h5>
              <h2 className="text-danger">{value}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
{/* Fact End */}



        </>
    );
};

export default Home;
