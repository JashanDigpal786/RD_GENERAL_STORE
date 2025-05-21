
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



function Dashboard() {
    const [data, setData] = useState([])
    useEffect(() => {

        axios.post("http://localhost:4000/api/dashboard")
            .then((res) => {
                console.log(res)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <>

            <section
                className="breadcrumb-section set-bg"
                // data-setbg="/assets/img/breadcrumb-bg.jpg"
                style={{ backgroundImage: "url(/assets/img/breadcrumb-bg.jpg)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb-text">
                                <h2>Admin Dashboard</h2>
                                <div className="bt-option">
                                    <a href="./index.html">Home</a>
                                    {/* <a href="#">Pages</a> */}
                                    <span>Dashboard</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid" style={{ overflow: "hidden" }}>
                <div className="container">
                    <div className="row py-2">
                        <div className="col-md-12 fw-bold text-center py-3"><h1 id="welcome">Welcome Admin</h1></div>
                        <div className="col-md-1"></div>

                        <div className="col-md-4 text-center py-5 shadow">
                            <Link to={"/admin/viewcategory"} style={{ textDecoration: "none", }}><br /><h1>Total Service {data.totalservice}
                            </h1></Link>

                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-4 shadow text-center py-5">
                            <Link to={"/admin/viewsubcategory"} style={{ textDecoration: "none" }}><br /><h1>Total Subservice {data.totalsubservice}</h1></Link>
                        </div>

                        <div className="col-md-12 py-3 fw-bold text-center"></div>
                        <div className="col-md-1"></div>

                        <div className="col-md-4 text-center  py-5 shadow">
                            <Link to={"/admin/viewpackage"} style={{ textDecoration: "none" }}><br /><h1>Total User {data.totalCustomer}</h1>

                            </Link>

                        </div>
                        {/* <div className="col-md-2"></div>
                        <div className="col-md-4 text-center  py-5 shadow">
                            <Link to={"/admin/viewuser"} style={{ textDecoration: "none" }}><br /><h1>Total User {data.totalCustomer}</h1>

                            </Link>

                        </div> */}



                    </div>
                </div>
            </div>
     

        </>

    )
}
export default Dashboard


