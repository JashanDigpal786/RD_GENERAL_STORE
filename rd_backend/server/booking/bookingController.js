const { model } = require("mongoose")
const Booking = require("./bookingModel")

const addBooking = (req, res) => {
    var validationerror = []
    if (!req.body.itemPrice) {
        validationerror.push("itemPrice is required")
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
                    bookingObj.itemPrice = req.body.itemPrice
                    bookingObj.accountHolderName = req.body.accountHolderName
                    bookingObj.paymentMode = req.body.paymentMode
                    bookingObj.accountNumber = req.body.accountNumber
                    bookingObj.cvv = req.body.cvv
                    bookingObj.save()
                        .then(saveData => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "New Booking successfully !!",
                                data: saveData
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

changeStatus = (req, res) => {
    var validationerror = []
    if (!req.body._id)
        validationerror.push("id is required")
    if (!req.body.status)
        validationerror.push("status is required")
    if (validationerror.length > 0) {
        res.send({
            success: false,
            status: 420,
            message: "Validation error",
            error: validationerror,
        })
    }
    else {
        Booking.findOne({ _id: req.body._id })
            .then(bookData => {
                if (!bookData) {
                    res.send({
                        success: false,
                        status: 404,
                        message: "Data not found",
                        data: bookData
                    })
                }
                else {
                    if (req.body.status)
                        bookData.status = req.body.status
                    bookData.save()
                        .then(bookData => {
                            res.send({
                                success: true,
                                status: 200,
                                message: "updated status",
                                data: bookData
                            })
                        })
                        .catch(err => {
                            res.send({
                                success: false,
                                status: 500,
                                message: "Internal server error",
                                error: err.message
                            })
                        })
                }
            })
    }
}

module.exports = { addBooking, getAllBooking, changeStatus }