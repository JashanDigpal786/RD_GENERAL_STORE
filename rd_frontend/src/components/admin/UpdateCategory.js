import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"

function UpdateCategory() {

    const [categoryName, setCategory] = useState("")
    const [description, setDes] = useState("")

    const [imageName, setImageName] = useState("")
    const [image, setImage] = useState({})

    const [previousImage,setPreviousImage]=useState("")

    const changeCategory = (event) => {
        setCategory(event.target.value)
    }

    const changeDes = (event) => {
        setDes(event.target.value)
    }

        const changeImage = (event) => {
        setImageName(event.target.value)
        setImage(event.target.files[0])

    }
let param=useParams()
let id=param.id

    useEffect(()=>{
        let data={
  _id:id
}
      axios.post("http://localhost:4000/api/category/getsingle",data)
      .then(res=>{
        console.log(res.data)
        setCategory(res.data.data.categoryName)
        setDes(res.data.data.description)

        setPreviousImage(res.data.data.thumbnail)

      })
    },[])

    const nav = useNavigate()
    const handleForm = (event) => {
        event.preventDefault()

        let data=new FormData()
        data.append('_id',id)

        data.append('categoryName',categoryName)
        data.append('description',description)
       if(!!image){
        data.append("thumbnail",image)
       }



        // let data = {
        //     categoryName: categoryName,
        //     description: description
        // }

        // axios.method(URL,body,Header)
        // let data={
        //   categoryName:categoryName
        // }

        axios.post("http://localhost:4000/api/category/update", data)
            .then(res => {
                console.log(res.data)
                if (res.data.success) {
                    toast.success(res.data.message)
                    nav('/admin/viewcategory')
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
                    <h1 className="text-center">ADD CATEGORY</h1>
                    <form onSubmit={handleForm}>
                        <div className="row py-2">
                            <div className="col-2">Category Name</div>
                            <div className="col-10"><input type="text" value={categoryName} onChange={changeCategory} className="form-control" /></div>

                            <div className="col-12 py-3"></div>

                              <div className="col-2">Image</div>
                            <div className="col-10"><input type="file" value={imageName} onChange={changeImage} className="form-control" /></div> 
                            <img src={"http://localhost:4000/"+previousImage} style={{width:"200px"}}/>

                            <div className="col-12 py-3"></div>
                        
                            <div className="col-2">Description</div>
                            <div className="col-10"><input type="text" value={description} onChange={changeDes} className="form-control" /></div>
                            <div className="col-12 pt-4 text-center"><button type="submit" value="submit" className="btn btn-success">Submit</button>  </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default UpdateCategory