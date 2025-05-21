

import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify"
// useParams
function Booking() {
    const [accountHolder, setAccountHolder] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [paymentMode, setPaymentMode] = useState("");
    const [itemPrice, setPrice] = useState("");
   

    let param=useParams()
    const id=param.id
useEffect(()=>{
    let data={
        _id:id
    }
axios.post('http://localhost:4000/api/item/getsingle',data)
    .then((res)=>{
        setPrice(res.data.data.itemPrice)
    })
},[])

    const nav=useNavigate()
    const handleForm = (e) => {
        e.preventDefault();
        let data = {
            accountHolderName:accountHolder,
            accountNumber:accountNumber,
            cvv:cvv,
            paymentMode:paymentMode,
            itemPrice:itemPrice,          
        };
        axios.post('http://localhost:4000/api/book/add', data)
            .then(res => {
                console.log(res.data)
                if (res.data.success) {
                    toast.success(res.data.message);
                    nav('/user/viewbooking')
                } else {
                    toast.error(res.data.message);
                }
            }).catch(err => {
                toast.error("Booking failed");
            });
    };

    return (
        <>
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Add Booking</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Booking</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h1 className="text-center">Add Booking</h1>
                <form onSubmit={handleForm}>
                    <div className="row">

                        <div className="col-6">
                            <label>Account Holder Name</label>
                            <input type="text" value={accountHolder} onChange={(e) => setAccountHolder(e.target.value)} className="form-control" required />
                        </div>

                        <div className="col-6">
                            <label>Account Number</label>
                            <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className="form-control" required />
                        </div>

                        <div className="col-6">
                            <label>CVV</label>
                            <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} className="form-control" required />
                        </div>

                        <div className="col-6">
                            <label>Payment Mode</label><br />
                            <input type="radio" id="credit" name="payment" value="credit" checked={paymentMode === "credit"} onChange={(e) => setPaymentMode(e.target.value)} />
                            <label htmlFor="credit" className="mx-2">Credit Card</label>

                            <input type="radio" id="debit" name="payment" value="debit" checked={paymentMode === "debit"} onChange={(e) => setPaymentMode(e.target.value)} />
                            <label htmlFor="debit" className="mx-2">Debit Card</label>
                        </div>

 
                        <div className="col-12">
                       Price <input type="text" value={itemPrice} onChange={(e) => setPrice(e.target.value)} className="form-control" readOnly />
                           
               
                    </div>
    

                        <div className="col-12 py-3">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        </>
    );
}

export default Booking;
