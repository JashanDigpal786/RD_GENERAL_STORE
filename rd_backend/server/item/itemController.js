const Item = require("./itemModel")

const addItem = (req, res) => {
    var validationerror = []
    if (!req.body.subcategoryId)
        validationerror.push("subcategoryId is required")
    if (!req.body.thumbnail)
        validationerror.push("thumbnail is required")
    if (!req.body.itemName)
        validationerror.push("itemName is required")
    if (!req.body.itemPrice)
        validationerror.push("itemPrice is required")
    if (!req.body.itemDes)
        validationerror.push("itemDes is required")
    if (!req.body.itemshippingCharge)
        validationerror.push("itemshippingCharge is required")
    if (validationerror.length > 0) {
        res.send({
            status: false,
            message: "Validation error occur",
            error: validationerror,
            status: 420
        })
    }
    else { // insert
        Item.findOne({ itemshippingCharge: req.body.itemshippingCharge })
            .then(subcategoryData => {
                if (!subcategoryData) {
                    // let total=Category.countDocuments()
                    let itemObj = new Item()
                    itemObj.subcategoryId = req.body.subcategoryId
                    itemObj.thumbnail = "itemimages/" + req.body.thumbnail
                    itemObj.itemPrice = req.body.itemPrice
                    itemObj.itemName = req.body.itemName
                    itemObj.itemDes = req.body.itemDes
                    itemObj.itemshippingCharge = req.body.itemshippingCharge
                    itemObj.save()
                        .then((saveData) => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "item added successfully !!",
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
                else { // duplicacy
                    res.send({
                        status: 400,
                        success: false,
                        message: "Record is already exist",
                        data: subcategoryData
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

const getAllItem = (req, res) => {
    Item.find()
        .populate('subcategoryId')
        .then(categoryData => {
            if (!categoryData) {
                res.send({
                    status: 404,
                    success: false,
                    message: "Data Not Found",
                    data: categoryData,
                })
            } else {
                res.send({
                    staus: 200,
                    success: true,
                    message: "Data Loaded",
                    data: categoryData
                })
            }
        })
        .catch((err) => {
            res.send({
                status: 500,
                message: "Internal server error",
                success: false,
                error: err.message
            })
        })
}

const singleItem = (req, res) => {
    var validationerror = []
    if (!req.body._id) {
        validationerror.push("_id is required")
    }
    if (validationerror.length > 0) {
        res.send({
            status: 420,
            success: false,
            message: "Validation error",
            error: validationerror
        })
    }
    else {
        Item.findOne({ _id: req.body._id })
            .then((categoryData) => {
                res.send({
                    status: 200,
                    success: true,
                    message: "Single Categody found",
                    data: categoryData
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

}

const updateItem = (req, res) => {
    var validationerror = []
    if (!req.body._id)
        validationerror.push("_id is required")
    if (validationerror.length) {
        res.send({
            status: 420,
            success: false,
            message: "Validation error",
            error: validationerror
        })
    }
    else {
        Item.findOne({ _id: req.body._id })
            .then(categoryData => {
                if (!categoryData) {
                    res.send({
                        status: 404,
                        success: false,
                        message: "Data not Found"
                    })
                } else {
                    // update
                    if (req.body.itemName)
                        categoryData.itemName = req.body.itemName
                    if (req.body.itemDes)
                        categoryData.itemDes = req.body.itemDes
                    if (req.body.itemPrice)
                        categoryData.itemPrice = req.body.itemPrice
                    if (req.body.itemshippingCharge)
                        categoryData.itemshippingCharge = req.body.itemshippingCharge

                    categoryData.save()
                        .then((categoryData) => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "Record is update !!",
                                data: categoryData
                            })
                            // console.log(saveData);
                        })
                        .catch(err => {
                            res.send({
                                status: 500,
                                success: false,
                                message: "Internal Server error",
                                error: err.message
                            })
                        })
                }
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
}

const deleteItem = (req, res) => {
    var validationerror = []
    if (!req.body._id)
        validationerror.push("_id is required")
    if (validationerror.length > 0) {
        res.send({
            status: 420,
            success: false,
            message: "Validation error occur",
            error: validationerror
        })
    }
    else {
        Item.deleteOne({ _id: req.body._id })
            .then(categoryData => {
                res.send({
                    status: 200,
                    success: true,
                    message: "Deleted Successfully !!",
                    data: categoryData
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
}

module.exports = { addItem, getAllItem, singleItem, deleteItem }