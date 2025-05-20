const user = require("../server/user/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const admin = ()=>{
    user.findOne({email:"dharamveer@gmail.com"})
    .then((userdata)=>{
        if(!userdata){
          let userObj = new user();
          userObj.name= "admin";
          userObj.email="dharamveer@gmail.com";
          userObj.password= bcrypt.hashSync("123", saltRounds);
          userObj.userType=1
          userObj.save();
          console.log('admin seeded'); 
        }else{
            console.log("admin already exist");    
        }
    })
    .catch((err)=>{
        console.log(err);    
    });
};
module.exports={admin};