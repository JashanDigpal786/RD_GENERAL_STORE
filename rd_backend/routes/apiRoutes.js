const router = require('express').Router()

const customerController = require('../server/customer/customerController')
const categoryController = require('../server/category/categoryController')
const subcategoryController = require('../server/subcategory/subcategoryController')
const itemController = require('../server/item/itemController')
const bookingController = require('../server/booking/bookingController')


const multer = require("multer")

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

router.post('/customer/add', customerController.register)
router.post('/customer/getall', customerController.getAllCustomer)
router.post('/customer/login', customerController.login)

// router.post('/register',userController.add)
router.post('/category/add', categoryController.addCategory)
router.post('/category/getall', categoryController.getAllCategory)
router.post('/category/getsingle', categoryController.singleCategoryData)
router.post('/category/update', categoryController.updateCategory)
router.post('/category/delete', categoryController.deleteCategory)

router.post('/subcategory/add', subcategoryController.addsubCategory)
router.post('/subcategory/getall', subcategoryController.getAllsubCategory)
router.post('/subcategory/getsingle', subcategoryController.singlesubCategoryData)
router.post('/subcategory/update', subcategoryController.updatesubCategory)
router.post('/subcategory/delete', subcategoryController.deletesubCategory)


router.post('/item/add', itemupload.single('thumbnail'), itemController.addItem)
router.post('/item/getall', itemController.getAllItem)
router.post('/item/getsingle', itemController.singleItem)
router.post('/item/delete', itemController.deleteItem)

router.post('/book/add', bookingController.addBooking)
router.post('/book/getall', bookingController.getAllBooking)

module.exports = router