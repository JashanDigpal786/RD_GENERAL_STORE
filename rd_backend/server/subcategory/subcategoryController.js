const subCategory = require('./subcategoryModel')

const addsubCategory = (req, res) => {
    var validationerror = []
    if (!req.body.categoryId)
        validationerror.push("categoryId is required")
    // if(req.body.categoryImage)
    //     validationerror.push("categoryImage is required")
    if (!req.body.subcategoryName)
        validationerror.push("subcategoryName is required")
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
        subCategory.findOne({ subcategoryName: req.body.subcategoryName })
            .then(subcategoryData => {
                if (!subcategoryData) {
                    // let total=Category.countDocuments()
                    let subcategoryObj = new subCategory()
                    // subcategoryObj.autoId = total + 1
                    subcategoryObj.categoryId = req.body.categoryId
                    // subcategoryObj.categoryImage=req.body.categoryImage
                    subcategoryObj.subcategoryName = req.body.subcategoryName
                    subcategoryObj.save()
                        .then((saveData) => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "Subcategory added successfully !!",
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
getallsubCategory = (req, res) => {
    subCategory.find()
    .populate('categoryId')
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
singlesubCategoryData = (req, res) => {
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
        subCategory.findOne({ _id: req.body._id })
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
updatesubCategory = (req, res) => {
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
        subCategory.findOne({ _id: req.body._id })
            .then(categoryData => {
                if (!categoryData) {
                    res.send({
                        status: 404,
                        success: false,
                        message: "Data not Found"
                    })
                } else {

                    // update
                    if (req.body.categoryId)
                        categoryData.categoryId = req.body.categoryId
                    if (req.body.subcategoryName)
                        categoryData.subcategoryName = req.body.subcategoryName     
                   
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
deletesubCategory = (req, res) => {
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
        subCategory.deleteOne({ _id: req.body._id })
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
    addsubCategory, getallsubCategory, singlesubCategoryData, updatesubCategory,
    deletesubCategory
}