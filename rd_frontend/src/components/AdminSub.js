import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"

function AdminSub() {
    const [subCategoryName, setSubCategory] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [categories, setCategories] = useState([])
    const nav = useNavigate()

    useEffect(() => {
        // Load categories to select parent category
        axios.get("http://localhost:4000/api/subcategory/all")
            .then(res => {
                if (res.data.success) {
                    setCategories(res.data.data)
                }
            })
            .catch(err => {
                toast.error("Failed to load categories")
            })
    }, [])

    const handleForm = (event) => {
        event.preventDefault()
        let data = {
            categoryId: categoryId,
            subcategoryName: subCategoryName
        }

        axios.post("http://localhost:4000/api/subcategory/add", data)
            .then(res => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    setSubCategory("")
                    setCategoryId("")
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch(err => {
                toast.error("Error adding subcategory")
            })
    }

    return (
        <>
            <div className="container-fluid py-5 mb-5">
                <div className="container">
                    <h1 className="text-center">Add SubCategory</h1>
                    <form onSubmit={handleForm}>
                        <div className="row py-2">
                            <div className="col-2">Category</div>
                            <div className="col-10">
                                <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="form-control" required>
                                    <option value="">-- Select Category --</option>
                                    {
                                        categories.map((cat) => (
                                            <option key={cat._id} value={cat._id}>{cat.categoryName}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="col-2 mt-3">SubCategory Name</div>
                            <div className="col-10 mt-3">
                                <input
                                    type="text"
                                    value={subCategoryName}
                                    onChange={(e) => setSubCategory(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="col-12 py-3">
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminSub
