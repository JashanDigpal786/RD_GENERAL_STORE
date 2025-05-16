const { model } = require("mongoose")
const Booking = require("./bookingModel")

const addBooking = (req, res) => {
    var validationerror = []
    if (!req.body.itemId) {
        validationerror.push("itemId is required")
    }
    if (!req.body.customerId) {
        validationerror.push("customerId is required")
    }
    if (!req.body.accountHolderName) {
        validationerror.push("accountHolderName is required")
    }
    if (!req.body.accountNumber) {
        validationerror.push("accountNumber is required")
    }
    if (!req.body.paymentMode) {
        validationerror.push("paymentMode is required")
    }
    if (!req.body.cvv) {
        validationerror.push("cvv is required")
    }
    if (validationerror.length > 0) {
        res.send({
            status: 420,
            success: false,
            message: "Validation error occur",
            error: validationerror,
        })
    }
    else { // insert
        Booking.findOne({ accountNumber: req.body.accountNumber })
            .then(bookData => {
                if (!bookData) {
                    // let total=Category.countDocuments()
                    let bookingObj = new Booking()
                    bookingObj.itemId = req.body.itemId
                    bookingObj.customerId = req.body.customerId
                    bookingObj.accountHolderName = req.body.accountHolderName
                    bookingObj.paymentMode = req.body.paymentMode
                    bookingObj.accountNumber = req.body.accountNumber
                    bookingObj.cvv = req.body.cvv
                    bookingObj.save()
                        .then((saveData) => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "New Booking successfully !!",
                                data: saveData
                            })
                        })
                        .catch((err) => {
                            res.send({
                                status: 500,
                                success: false,
                                message: "Internal server error",
                                error: err.message
                            })
                        })
                }
                else {
                    // duplycacy
                    res.send({
                        status: 400,
                        success: false,
                        message: "Record is already exist",


                    })
                }
            })
            .catch((err) => {
                res.send({
                    status: 500,
                    success: false,
                    message: "Internal server error",
                    error: err.message
                })
            })

    }
}

const getAllBooking = (req, res) => {
    Booking.find()
        .populate("itemId")
        .populate("customerId")
        .then(bookData => {
            res.send({
                status: 200,
                success: true,
                message: "Data loaded",
                data: bookData
            })
        })
        .catch(err => {
            res.send({
                status: 500,
                success: false,
                message: "Internal server error",
                error: err.message
            })
        })
}

module.exports = { addBooking, getAllBooking }