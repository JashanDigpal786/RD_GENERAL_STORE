import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"

function AdminCategory() {

    const [categoryName, setCategory] = useState("")
    const [description, setDes] = useState("")
   


    const changeCategory = (event) => {
        setCategory(event.target.value)
    }
    
    const changeDes= (event) => {
        setDes(event.target.value)
    }








    const nav = useNavigate()
    const handleForm = (event) => {
        event.preventDefault()
 let data={
    categoryName:categoryName,
    description:description
 }

        // axios.method(URL,body,Header)
        // let data={
        //   categoryName:categoryName
        // }

        axios.post("http://localhost:4000/api/category/add", data)
            .then(res => {
                console.log(res.data)
                if (res.data.success) {
                    toast.success(res.data.message)
                } else {
                    toast.error(res.data.message)
                }
            })
    }
    return (
        <>
            <div className="container-fluid py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
            {/* <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s"> */}
                {/* <div className="container text-center py-5">
                    <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">Category</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center text-uppercase mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Login</li>
                        </ol>
                    </nav>
                </div> */}
            </div>
            <div className="container">
                <h1 className="text-center">ADD Category</h1>
                <form onSubmit={handleForm}>
                    <div className="row py-2">
                        <div className="col-2">Category Name</div>
                        <div className="col-10"><input type="text" value={categoryName}
                         onChange={changeCategory} className="form-control" /></div>
                        
                        <div className="col-2"></div>


                        <div className="col-10 py-3"></div>
                           <div className="col-2">Description</div>
                        <div className="col-10"><input type="text" value={description}
                         onChange={changeDes} className="form-control" /></div>

                        <div className="col-12"><button type="submit" value="submit" className="btn btn-success">Submit</button>  </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default AdminCategory