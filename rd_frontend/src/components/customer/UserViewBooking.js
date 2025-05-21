import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

function UserViewBooking() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.post("http://localhost:4000/api/book/getall")
            .then((res) => {
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err)
                toast.error("Failed to fetch bookings")
            })
    }

    const changeStatus = (id, newStatus) => {
        axios.post("http://localhost:4000/api/book/status", {
            _id: id,
            status: newStatus
        })
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    fetchData() 
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch(err => {
                console.log(err)
                toast.error("Failed to update status")
            })
    }

    return (
        <>
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">View Booking</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h1 className="text-center mb-4">View Booking</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">S no</th>
                            <th scope="col">Item Price</th>
                            <th scope="col">Account Holder Name</th>
                            <th scope="col">Account Number</th>
                            <th scope="col">Payment Mode</th>
                            <th scope="col">Status</th>
                   
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((el, index) => (
                            <tr key={el._id}>
                                <td>{index + 1}</td>
                                <td>{el.itemPrice}</td>
                                <td>{el.accountHolderName}</td>
                                <td>{el.accountNumber}</td>
                                <td>{el.paymentMode}</td>
                                <td>{el.status}</td>
      
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserViewBooking