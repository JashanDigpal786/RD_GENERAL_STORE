const router = require('express').Router()

const customerController = require('../server/customer/customerController')
const categoryController = require('../server/category/categoryController')
const subcategoryController = require('../server/subcategory/subcategoryController')
const itemController = require('../server/item/itemController')
const bookingController = require('../server/booking/bookingController')
const adminDashController = require('../server/dashboard/adminDash')



const multer = require("multer")

// item
const itemStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/itemimages')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    var newname = file.fieldname + '-' + uniqueSuffix + file.originalname
    req.body['thumbnail'] = newname
    cb(null, newname)
  }
})

const itemupload = multer({ storage: itemStorage })



// category
const categoryStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/categoryimages')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    var newname = file.fieldname + '-' + uniqueSuffix + file.originalname
    req.body['thumbnail'] = newname
    cb(null, newname)
  }
})

const categoryupload = multer({ storage: categoryStorage })

// subcategory
const subcategoryStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/subcategoryimages')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    var newname = file.fieldname + '-' + uniqueSuffix + file.originalname
    req.body['thumbnail'] = newname
    cb(null, newname)
  }
})

const subcategoryupload = multer({ storage: subcategoryStorage })

// router.post('/register',userController.add)

// CUSTOMER APIS
router.post('/customer/add', customerController.register)
router.post('/customer/getall', customerController.getAllCustomer)
router.post('/customer/login', customerController.login)

// CATEGORY APIS
router.post('/category/add',categoryupload.single('thumbnail') ,categoryController.addCategory)
router.post('/category/getall', categoryController.getAllCategory)
router.post('/category/getsingle', categoryController.singleCategoryData)
router.post('/category/update',categoryupload.single('thumbnail'), categoryController.updateCategory)
router.post('/category/delete', categoryController.deleteCategory)

// SUB CATEGORY APIS
router.post('/subcategory/add',subcategoryupload.single('thumbnail') , subcategoryController.addsubCategory)
router.post('/subcategory/getall', subcategoryController.getAllsubCategory)
router.post('/subcategory/getsingle', subcategoryController.singlesubCategoryData)
router.post('/subcategory/update', subcategoryController.updatesubCategory)
router.post('/subcategory/delete', subcategoryController.deletesubCategory)

// PRODUCT APIS
router.post('/item/add', itemupload.single('thumbnail'), itemController.addItem)
router.post('/item/getall', itemController.getAllItem)
router.post('/item/getsingle', itemController.singleItem)
router.post('/item/delete', itemController.deleteItem)

// BOOKING APIS
router.post('/book/add', bookingController.addBooking)
router.post('/book/getall', bookingController.getAllBooking)
router.post('/book/status', bookingController.changeStatus)

// DASHBOARD API
router.post('/dashboard', adminDashController.adminDash)

module.exports = router