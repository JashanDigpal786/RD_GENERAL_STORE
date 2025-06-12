<<<<<<< HEAD
    
=======
const categoryModel = require("../category/categoryModel");
const subcategoryModel = require("../subcategory/subcategoryModel");
const userModel = require("../user/userModel");
const customerModel = require("../customer/customerModel");
// const feedbackModel = require("../feedback/feedbackModel");


const adminDash = async (req, res) => {
    let category = await categoryModel.find({ status: true }).countDocuments();
    let subcategory = await subcategoryModel.find({ status: true }).countDocuments();
    let users = await userModel.find({ status: true }).countDocuments();
    let customres = await customerModel.find({ status: true }).countDocuments();
    // let feedabacks = await feedbackModel.find({ status: true }).countDocuments();

    let activeService = await categoryModel.find({ status: true });
    let activesubservice = await subcategoryModel.find({ status: true });
    let activeUser = await userModel.find({ status: true });
    let activeCustomer = await customerModel.find({ userType: 2, status: true });
    // let activefeedback = await feedbackModel.find({ status: true });

    res.send({
        status: 200,
        success: true,
        message: "Dashboard",

        totalservice: category,
        totalsubservice: subcategory,
        totalUser: users,
        totalCustomer: customres,
        // totalfeedback: feedabacks,

        activeService: activeService.length,
        activesubservice: activesubservice.length,
        activeUser: activeUser.length,
        activeCustomer: activeCustomer.length
        // activefeedback: activefeedback.length,
    })
}

module.exports = { adminDash }
>>>>>>> feature/adding-marque
