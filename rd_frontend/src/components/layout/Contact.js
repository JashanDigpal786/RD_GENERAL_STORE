import React from 'react'

function Contact() {
    return (
        <>
            <div className="container-fluid contact py-5 my-5" style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
                <div className="container py-5">
                    <div className="p-5 rounded shadow" style={{ backgroundColor: '#f4e3e3', color: '#4a0000' }}                    >
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="text-center mx-auto" style={{ maxWidth: 700 }}>
                                    <h1 style={{ color: '#dc3545', fontWeight: '700' }}>    Get in Touch with RD General Store</h1>
                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>    We’d love to hear from you! Whether you have questions about our kirana items, paint products, cold drinks, or want to place an order, please reach out. Our team is here to assist you with quality products and great service.</p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <form>
                                    <input type="text" className="w-100 form-control mb-4" placeholder="Your Name" style={{ backgroundColor: '#fff7f7', border: '1.5px solid #dc3545', color: '#4a0000', padding: '15px', borderRadius: '10px', fontWeight: '500', }} />
                                    <input type="email" className="w-100 form-control mb-4" placeholder="Enter Your Email" style={{ backgroundColor: '#fff7f7', border: '1.5px solid #dc3545', color: '#4a0000', padding: '15px', borderRadius: '10px', fontWeight: '500', }} />
                                    <textarea rows={5} className="w-100 form-control mb-4" placeholder="Your Message" style={{ backgroundColor: '#fff7f7', border: '1.5px solid #dc3545', color: '#4a0000', padding: '15px', borderRadius: '10px', fontWeight: '500', resize: 'vertical', }} />
                                    <button type="submit" className="w-100" style={{ backgroundColor: '#dc3545', color: '#fff', padding: '15px', fontWeight: '700', fontSize: '1.1rem', border: 'none', borderRadius: '50px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(220, 53, 69, 0.5)', transition: 'background-color 0.3s ease', }} onMouseEnter={(e) => (e.target.style.backgroundColor = '#b22222')} onMouseLeave={(e) => (e.target.style.backgroundColor = '#dc3545')}                                    >                                        Submit                                    </button>
                                </form>
                            </div>
                            <div className="col-lg-5">
                                {[
                                    {
                                        icon: 'fas fa-map-marker-alt',
                                        title: 'Address',
                                        detail: 'RD General Store, Tibar, Punjab, India',
                                    },
                                    {
                                        icon: 'fas fa-envelope',
                                        title: 'Email Us',
                                        detail: 'jashan8847683268@gmail.com',
                                    },
                                    {
                                        icon: 'fa fa-phone-alt',
                                        title: 'Phone',
                                        detail: '+91 8847683268',
                                    },
                                ].map(({ icon, title, detail }, idx) => (
                                    <div
                                        key={idx}
                                        className="d-flex align-items-center p-4 rounded mb-4 shadow-sm"
                                        style={{ backgroundColor: '#fff7f7', color: '#4a0000' }}
                                    >
                                        <i
                                            className={`${icon} fa-2x me-4`}
                                            style={{ color: '#dc3545', minWidth: '40px' }}
                                        />
                                        <div>
                                            <h4 style={{ marginBottom: '5px', color: '#b22222' }}>{title}</h4>
                                            <p>{detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-12 mt-5 rounded shadow overflow-hidden">
                            <iframe
                                className="w-100 rounded"
                                style={{ height: 400, width: 200, border: 'none' }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10656.956397725326!2d75.40575094050041!3d31.965892354174343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b93f25d117d1f%3A0xd8bd32de1df2bf63!2sTibar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1746102607997!5m2!1sen!2sin"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="RD General Store Location"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact
