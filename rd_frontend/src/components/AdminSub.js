import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"

function AdminCategory() {

    const [subCategoryName, setSubCategory] = useState("")
    const [categoryId,setCategoryID] = useState("")

    const [categorydata,setCategory] = useState([])


    const changeSubCategory = (event) => {
        setSubCategory(event.target.value)
    }

    const changeCategoryId = (event) => {
        setCategoryID(event.target.value)
    }
    useEffect(()=>{
        axios.post('http://localhost:4000/api/category/getall')
        .then(res=>{
            setCategory(res.data.data)
        })
    },[])

    const nav = useNavigate()
    const handleForm = (event) => {
        event.preventDefault()
        let data = {
            subCategoryName: subCategoryName,
            categoryId:categoryId
        }
        // axios.method(URL,body,Header)
        // let data={
        //   subCategoryName:subCategoryName
        // }
        axios.post("http://localhost:4000/api/subcategory/add", data)
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
            <div className="container-fluid py-1 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container-fluid page-header py-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container text-center py-5">
                        <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">subcategory</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
                                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-primary active" aria-current="page">subcategory</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <h1 className="text-center">ADD SUBCATEGORY</h1>
                    <form onSubmit={handleForm}>
                        <div className="row py-2">
                            <div className="col-2">SubCategory Name</div>
                            <div className="col-10"><input type="text" value={subCategoryName} onChange={changeSubCategory} className="form-control" /></div>
                            <div className="col-2"></div>
                            <div className="col-10 py-3"></div>
                            <div className="col-2">category</div>
                            <div className="col-10">

                                {/* <input type="text" value={categoryId} onChange={changeCID} className="form-control" /> */}
                                <select value={categoryId} onChange={changeCategoryId}  className="form-control" >

                                    {
                                        categorydata.map((el)=>{
                                            return(
                                                <>
                                                <option value={''} selected-disabled>Choose Category</option>
                                                <option value={el._id}>{el.categoryName}</option>

                                                </>
                                            )
                                        })
                                    }
                                </select>
                                
                                
                                
                                </div>
                            <div className="col-12 pt-4 text-center"><button type="submit" value="submit" className="btn btn-success">Submit</button>  </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default AdminCategory