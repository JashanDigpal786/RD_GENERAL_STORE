import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"

function AdminProduct() {

    const [productName, setProduct] = useState("")
    const [description, setDes] = useState("")
    const [price, setPrice] = useState()
    const [shippingcharge, setShippingCharge] = useState()

    const [subcategoryId, setSubCategoryID] = useState("")
    const [subcategorydata, setSubCategory] = useState([])
    const [imageName, setImageName] = useState("")
    const [image, setImage] = useState({})


    const changeProduct = (event) => {
        setProduct(event.target.value)
    }

    const changeDes = (event) => {
        setDes(event.target.value)
    }
    const changePrice = (event) => {
        setPrice(event.target.value)
    }
    const changeShippingCharge = (event) => {
        setShippingCharge(event.target.value)
    }
    const changeSubCategoryId = (event) => {
        setSubCategoryID(event.target.value)
    }

    const changeImage = (event) => {
        setImageName(event.target.value)
        setImage(event.target.files[0])

    }

    useEffect(() => {
        axios.post('http://localhost:4000/api/subcategory/getall')
            .then(res => {
                setSubCategory(res.data.data)
            })
    }, [])

    const nav = useNavigate()
    const handleForm = (event) => {
        event.preventDefault()
        let data = new FormData()
        data.append('itemName', productName)
        data.append('itemDes', description)
        data.append('thumbnail', image)
        data.append('subcategoryId', subcategoryId)
        data.append('itemPrice', price)
        data.append('itemshippingCharge', shippingcharge)

        // let data = {
        //     productName: productName,
        //     subcategoryId: subcategoryId
        // }

        axios.post("http://localhost:4000/api/item/add", data)
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
                        <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">Products</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
                                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-primary active" aria-current="page">Products</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <h1 className="text-center">ADD PRODUCT</h1>
                    <form onSubmit={handleForm}>
                        <div className="row py-2">
                            <div className="col-2">Product Name</div>
                            <div className="col-10"><input type="text" value={productName} onChange={changeProduct} className="form-control" /></div>
                            <div className="col-12 py-3"></div>
                            <div className="col-2">Image</div>
                            <div className="col-10"><input type="file" value={imageName} onChange={changeImage} className="form-control" /></div>

                            <div className="col-12 py-3"></div>
                            <div className="col-2">Description</div>
                            <div className="col-10"><input type="text" value={description} onChange={changeDes} className="form-control" /></div>

                            <div className="col-12 py-3"></div>
                            <div className="col-2">Price</div>
                            <div className="col-10"><input type="text" value={price} onChange={changePrice} className="form-control" /></div>
                           
                            <div className="col-12 py-3"></div>
                            <div className="col-2">Shipping Charge</div>
                            <div className="col-10"><input type="text" value={shippingcharge} onChange={changeShippingCharge} className="form-control" /></div>

                            <div className="col-12 py-3"></div>
                            <div className="col-2">SubCategory</div>
                            <div className="col-10">
                                {/* <input type="text" value={subcategoryId} onChange={changeCID} className="form-control" /> */}
                                <select value={subcategoryId} onChange={changeSubCategoryId} className="form-control" >
                                    {
                                        subcategorydata.map((el) => {
                                            return (
                                                <>
                                                    <option value={''} selected-disabled>Choose SubCategory</option>
                                                    <option value={el._id}>{el.subcategoryName}</option>
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
export default AdminProduct