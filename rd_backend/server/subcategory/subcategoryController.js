const subCategory = require('./subcategoryModel')

const addsubCategory = (req, res) => {
    var validationerror = []
    if (!req.body.categoryId)
        validationerror.push("categoryId is required")
    if (!req.body.thumbnail) {
        validationerror.push("thumbnail is required")
    }
    if (!req.body.subcategoryName)
        validationerror.push("subcategoryName is required")

    if (validationerror.length > 0) {
        res.send({
            status: false,
            message: "Validation error occur",
            error: validationerror,
            status: 420
        })
    } else {
        subCategory.findOne({ subcategoryName: req.body.subcategoryName })
            .then(subcategoryData => {
                if (!subcategoryData) {
                    var subcategoryObj = new subCategory()
                    subcategoryObj.categoryId = req.body.categoryId
                    subcategoryObj.subcategoryName = req.body.subcategoryName
                    subcategoryObj.thumbnail = "subcategoryimages/" + req.body.thumbnail
                    subcategoryObj.save()
                        .then(saveData => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "Subcategory added successfully !!",
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
                } else {
                    res.send({
                        status: 400,
                        success: false,
                        message: "Record is already exist",

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

const getAllsubCategory = (req, res) => {
    subCategory.find()
        .populate('categoryId')
        .then(categoryData => {
            if (!categoryData || categoryData.length === 0) {
                res.send({
                    status: 404,
                    success: false,
                    message: "Data Not Found",
                    data: []
                })
            } else {
                res.send({
                    status: 200,
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

const singlesubCategoryData = (req, res) => {
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
    } else {
        subCategory.findOne({ _id: req.body._id })
            .populate('categoryId')
            .then((subcategoryData) => {
                if (!subcategoryData) {
                    res.send({
                        status: 404,
                        success: false,
                        message: "Subcategory not found",
                        data: null
                    })
                } else {
                    res.send({
                        status: 200,
                        success: true,
                        message: "Single Subcategory found",
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

const updatesubCategory = (req, res) => {
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
    } else {
        subCategory.findOne({ _id: req.body._id })
            .then(subcategoryData => {
                if (!subcategoryData) {
                    res.send({
                        status: 404,
                        success: false,
                        message: "Data not Found"
                    })
                } else {
                    if (req.body.categoryId)
                        subcategoryData.categoryId = req.body.categoryId
                      if (req.body.thumbnail) {
                        subcategoryData.thumbnail ="subcategoryimages/"+req.body.thumbnail
                    }
                    if (req.body.subcategoryName)
                        subcategoryData.subcategoryName = req.body.subcategoryName

                    subcategoryData.save()
                        .then((updatedData) => {
                            res.send({
                                status: 200,
                                success: true,
                                message: "Record is updated !!",
                                data: updatedData
                            })
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

const deletesubCategory = (req, res) => {
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
    } else {
        subCategory.deleteOne({ _id: req.body._id })
            .then(deleteData => {
                if (deleteData.deletedCount === 0) {
                    res.send({
                        status: 404,
                        success: false,
                        message: "Subcategory not found or already deleted"
                    })
                } else {
                    res.send({
                        status: 200,
                        success: true,
                        message: "Deleted Successfully !!",
                        data: deleteData
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

module.exports = {
    addsubCategory,
    getAllsubCategory,
    singlesubCategoryData,
    updatesubCategory,
    deletesubCategory
}
