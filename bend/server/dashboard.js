const categoryModel=require("../server/category/categoryModel");
const exerciseModel=require("../server/exercise/exerciseModel");
const packageModel=require("../server/package/packageModel");
const customerModel=require("../server/customer/customerModel");

const adminDash=async(req,res)=>{
    let categorys=await categoryModel.find({status:true}).countDocuments();
    let exercises=await exerciseModel.find({status:true}).countDocuments();
    
    let packages=await packageModel.find({status:true}).countDocuments();
    let customers=await customerModel.find({status:true}).countDocuments();


    
    let activeCategorys=await categoryModel.find({status:true});
    let activeexercises=await exerciseModel.find({status:true});
    let activepackages=await packageModel.find({status:true});

    let activeCustomers=await customerModel.find({userType:2,status:true});

    res.send({
        status:200,
        success:true,
        message:"Dashboard",
        totalcategory:categorys,
        totalexercise:exercises,
        totalpackage:packages,
        totalCustomer:customers,
        activeCategory:activeCategorys.length,
        activeexercise:activeexercises.length,
        activepackage:activepackages.length,
        activeCustomer:activeCustomers.length,
    })
    
}
module.exports={
    adminDash
}
