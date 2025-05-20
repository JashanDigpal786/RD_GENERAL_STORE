import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"

function ViewSubCategory() {

    const [data, setData] = useState([])
    const [isDelete, setIsDelete] = useState(false)

    useEffect(() => {
        axios.post("http://localhost:4000/api/subcategory/getall")
            .then(res => {
                console.log(res.data)
                setData(res.data.data)
            })
    }, [isDelete])

    const deleteData = (id) => {
        let data = {
            _id: id
        }
        axios.post("http://localhost:4000/api/subcategory/delete", data)
            .then((res) => {
                console.log(res.data)
                if (res.data.success) {
                    toast.success(res.data.message)
                }
                else {
                    toast.error(res.data.message)
                }
            })
        setIsDelete(true)

    }

    return (
        <>
            <div className="container-fluid py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container text-center py-5">
                        <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">Category</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
                                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-primary active" aria-current="page">Login</li>
                            </ol>
                        </nav>
                    </div>
                </div>


                <div className="container">
                    <table className="table table-striped-columns">
                        <tbody>
                            <tr>
                                <td>Category Name</td>
                                <td>Description</td>
                                <td>Action</td>


                            </tr>


                            {
                                data.map((el, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{el.categoryName}</td>
                                                <td>{el.description}</td>


                                                <td>
                                                    <button className="btn btn-primary" onClick={() => { deleteData(el._id) }}><i class="bi bi-trash"></i></button>
                                                    <Link to={"/admin/updatecategory/" + el._id} className="btn btn-success"><i class="bi bi-pencil"></i></Link>

                                                </td>
                                            </tr>

                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
export default ViewSubCategory