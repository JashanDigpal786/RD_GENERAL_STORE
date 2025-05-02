const Item=require("./itemModel")


const additem = (req, res) => {
    var validationerror = []
    if (!req.body.subcategoryId)
        validationerror.push("subcategoryId is required")
    if(!req.body.thumbnail)
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
    else {
        // insert
        Item.findOne({ itemshippingCharge: req.body.itemshippingCharge })
            .then(subcategoryData => {
                if (!subcategoryData) {
                    // let total=Category.countDocuments()
                    let itemObj = new Item()               
                    itemObj.subcategoryId = req.body.subcategoryId
                    itemObj.thumbnail ="itemimages/"+req.body.thumbnail
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
                else {
                    // duplycacy
                    res.send({
                        status: 400,
                        success: false,
                        message: "Record is already exist",
                        data: categoryData

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
getallitem = (req, res) => {
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
singleitem = (req, res) => {
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
// updateitem = (req, res) => {
//     var validationerror = []
//     if (!req.body._id)
//         validationerror.push("_id is required")
//     if (validationerror.length) {
//         res.send({
//             status: 420,
//             success: false,
//             message: "Validation error",
//             error: validationerror
//         })
//     }
//     else {
//         subCategory.findOne({ _id: req.body._id })
//             .then(categoryData => {
//                 if (!categoryData) {
//                     res.send({
//                         status: 404,
//                         success: false,
//                         message: "Data not Found"
//                     })
//                 } else {

//                     // update
//                     if (req.body.categoryId)
//                         categoryData.categoryId = req.body.categoryId
//                     if (req.body.subcategoryName)
//                         categoryData.subcategoryName = req.body.subcategoryName     
                   
//                     categoryData.save()
//                         .then((categoryData) => {
//                             res.send({
//                                 status: 200,
//                                 success: true,
//                                 message: "Record is update !!",
//                                 data: categoryData
//                             })
//                             // console.log(saveData);


//                         })

//                         .catch(err => {
//                             res.send({
//                                 status: 500,
//                                 success: false,
//                                 message: "Internal Server error",
//                                 error: err.message
//                             })
//                         })
//                 }
//             })
//             .catch(err => {
//                 res.send({
//                     status: 500,
//                     success: false,
//                     message: "Internal server error",
//                     error: err.message
//                 })
//             })
//     }
// }
deleteitem = (req, res) => {
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

module.exports = {
    additem, getallitem, singleitem, 
    deleteitem
}