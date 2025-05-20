const booking = require("./bookingModel");

const addbooking = (req, res) => {
  var validationerror = [];
  if (!req.body.package) validationerror.push("package is required");
  if (!req.body.price) validationerror.push("Price is required");
  if (!req.body.accountHolder) validationerror.push("accountHolder is required");
  if (!req.body.accountNumber) validationerror.push("accountNumber is required");
  if (!req.body.cvv) validationerror.push("cvv is required");
  if (!req.body.paymentMode)
    validationerror.push("paymentMode is required");
  if (validationerror.length > 0) {
    res.send({
      status: 420,
      success: false,
      message: "validation error occur",
      error: validationerror,
    });
  } else {
    booking.findOne({ accountNumber: req.body.accountNumber })
    .then((bookingData) => {
        if (!bookingData) {
          let bookingObj = new booking();
          bookingObj.package = req.body.package;
          bookingObj.price = req.body.price;
          bookingObj.accountHolder = req.body.accountHolder;
          bookingObj.accountNumber = req.body.accountNumber;
          bookingObj.cvv = req.body.cvv;
          bookingObj.paymentMode = req.body.paymentMode;
          bookingObj
            .save()
            .then((data) => {
              res.send({
                status: 200,
                success: true,
                message: "booking added successfully",
                data: data,
              });
            })
            .catch((err) => {
              res.send({
                status: 500,
                success:false,
                message: "Internal server error",
                error: err.message,
              });
            });
        } else {
          res.send({
            status: 400,
            success: false,
            message: "Record is already exist",
            data: bookingData,
          });
        }
      }
    );
  }
};

const getallbooking = (req, res) => {
  booking.find()
    .then((bookingData) => {
      if (!bookingData) {
        res.send({
          status: 404,
          success: false,
          message: "Data is not Found",
          data: bookingData,
        });
      } else {
        res.send({
          status: 200,
          success: true,
          message: "Data Loaded",
          data: bookingData,
        });
      }
    })
    .catch((err) => {
      res.send({
        status: 500,
        success: false,
        message: "Interval server error",
        error: err.message,
      });
    });
};

  singlebooking=(req,res)=>{
   var validationerror=[]
   if(!req.body._id){
    validationerror.push("_id is required")
   }
   if(validationerror.length>0){
    res.send({
      status:420,
      success:false,
      message:"validationerror",
      error:validationerror,
    })
   }
   else{
    booking.findOne({_id:req.body._id})
    .then((booking)=>{
      res.send({
        status:200,
        sccess:true,
        message:"Single booking is Found",
        data:booking
      })
    })
    .catch((err)=>{
      res.send({
        staus:500,
        success:false,
        message:"Interval server error",
        error:err.message
      })
    })

   }
 }

//  updatebooking=(req,res)=>{
//    var validationerror = []
//    if (!req.body._id)
//      validationerror.push("_id is required")
//    if(validationerror.length){
//      res.send({
//        status:420,
//        success:false,
//        message:"validation error",
//        error:validationerror
//      })
//    }
//    else{
//      booking.findOne({_id: req.body._id})
//      .then(bookingData=>{
//        if(!bookingData){
//          res.send({
//            status:404,
//            success:false,
//            message:"Data not Found"
//          })
//        }else{
//         //  if(req.body.userId)
//         //    bookingData.userId=req.body.userId
//          if(req.body.cardno)
//            bookingData.cardno=req.body.cardno
//          bookingData.save()
//          .then((bookingData)=>{
//            res.send({
//              status:200,
//              success:true,
//              message:"Record is update!!",
//              data:bookingData
//            })
//          })
//          .catch(err=>{
//            res.send({
//              status:500,
//              success:false,
//              message:"Internal Server error",
//              error:err.message
//            })
//          })
//        }
//      })
//      .catch(err=>{
//        res.send({
//          status:500,
//          success:false,
//          message:"Internal server error",
//          error:err.message
//        })
//      })
//    }
//  }

 deletebooking=(req,res)=>{
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
     booking.deleteOne({_id:req.body._id})
     .then(bookingData=>{
       res.send({
         status:200,
         success:true,
         message:"Deleted Sucessfully !!",
         data:bookingData
       })
     })
     .catch((err)=>{
       res.send({
         status:500,
         success:false,
         message:"Internal server error",
         error:err.message
       })
     }
   )
   }
 }

 changeStatus=(req,res)=>{
    var validationerror=[]
    if(!req.body._id)
        validationerror.push("id is required")
    
    if(validationerror.length>0){
        res.send({
            success:false,
            status:420,
            message:"Validation error",
            error:validationerror,
        })
    }
    else{
            booking.findOne({_id:req.body._id})
            .then(bookingData=>{
                if(!bookingData){
                    res.send({
                        success:false,
                        status:404,
                        message:"Data not found",
                        data:bookingData
                    })
                }
                else{
                    if(req.body.status)
                    bookingData.status=req.body.status
                    bookingData.save()
                    .then(bookingData=>{
                        res.send({
                            success:true,
                            status:200,
                            message:"updated status",
                            data:bookingData
                        })
                    })
                    .catch(err=>{
                        res.send({
                            success:false,
                            status:500,
                            message:"Internal server error",
                            error:err.message
                        })
                    })
                }

            })
    }
}

module.exports = {
  addbooking,
  getallbooking,
  singlebooking,
  // updatebooking,
  deletebooking,
  changeStatus
};
