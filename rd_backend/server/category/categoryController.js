const Category=require('./categoryModel')

const addCategory = (req, res) => {
    var validationerror = []
    if (!req.body.categoryName)
        validationerror.push("categoryName is required")
    // if(req.body.categoryImage)
    //     validationerror.push("categoryImage is required")
    if (!req.body.description)
        validationerror.push("description is required")
    if (validationerror.length > 0) {
        res.send({
            success: false,
            message: "Validation error occur",
            error: validationerror,
            status: 420
        })
    }
    else {
        // insert
        Category.findOne({categoryName:req.body.categoryName})
        .then(categoryData=>{
            if(!categoryData){
                // let total=Category.countDocuments()
                let categoryObj = new Category()
                // categoryObj.autoId = total + 1
                categoryObj.categoryName = req.body.categoryName
                // categoryObj.categoryImage=req.body.categoryImage
                categoryObj.description = req.body.description
                categoryObj.save()
                    .then((saveData) => {
                        res.send({
                            status: 200,
                            success:true,
                            message: "category added successfully !!",
                            data: saveData
                        })
                    })
                    .catch((err) => {
                        res.send({
                            status: 500,
                            success:false,
                            message: "Internal server error",
                            error: err.message
                        })
                    })
            }
            else{
                  // duplycacy
                  res.send({
                    status:400,
                    success:false,
                    message:"Record is already exist",
                    data:categoryData
                
                  })
            }
        })


     
    }
}
getallCategory = (req, res) => {
    Category.find()
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
singleCategoryData = (req, res) => {
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
        Category.findOne({ _id: req.body._id })
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
updateCategory = (req, res) => {
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
        Category.findOne({ _id: req.body._id })
            .then(categoryData => {
                if (!categoryData) {
                    res.send({
                        status: 404,
                        success: false,
                        message: "Data not Found"
                    })
                } else 
                {

                    // update
                    if(req.body.categoryName)
                    categoryData.categoryName = req.body.categoryName
                    if(req.body.description)
                    categoryData.description = req.body.description
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
deleteCategory=(req,res)=>{
    var validationerror=[]
    if(!req.body._id)
        validationerror.push("_id is required")
    if(validationerror.length>0){
        res.send({
            status:420,
            success:false,
            message:"Validation error occur",
            error:validationerror
        })
    }
    else{
        Category.deleteOne({_id:req.body._id})
        .then(categoryData=>{
            res.send({
                status:200,
                success:true,
                message:"Deleted Successfully !!",
                data:categoryData
            })
        })
        .catch((err)=>{
            res.send({
                status:500,
                success:false,
                message:"Internal server error",
                error:err.message
            })
        })
    }
}

module.exports = {
    addCategory, getallCategory, singleCategoryData, updateCategory,
    deleteCategory
}