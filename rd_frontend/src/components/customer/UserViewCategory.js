import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"

function UserViewCategory() {

    const [data, setData] = useState([])


    useEffect(() => {
        axios.post("http://localhost:4000/api/category/getall")
            .then(res => {
                console.log(res.data)
                setData(res.data.data)
            })
    }, [])



    return (
        <>

            <div className="container-fluid py-1 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container-fluid page-header py-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container text-center py-5">
                        <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">Category</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
                                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-primary active" aria-current="page">Category</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="container">

<div className="row">
        {
         
            data.map((el)=>{
                return(

                    <> 
                       <div className="col-md-4">
                        
                       <div className="card" style={{ width: "18rem" }}>

                        <img src={'http://localhost:4000/'+el.thumbnail} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{el.categoryName}</h5>
                            <p className="card-text">
                        {el.description}
                            </p>
                       
                        </div>
                    </div>
                     </div>
                    
                    </>
                )
            })

        }
        </div>
                   

                </div>
            </div>
        </>
    )
}

export default UserViewCategory