import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, Bounce } from 'react-toastify';

import Master from './components/layout/Master';
import Home from './components/layout/Home';
import Shop from './components/layout/Shop';
import ShopDetail from './components/layout/ShopDetail';
import Testimonial from './components/layout/Testimonial';
import Checkout from './components/layout/Checkout';
import Cart from './components/layout/Cart';
import Page404 from './components/layout/Page404';
import Login from './components/layout/Login';
import Contact from './components/layout/Contact';
import Register from './components/layout/Register';

import AdminMaster from './components/admin/AdminMaster';
import AdminCategory from './components/admin/AdminCategory';
import ViewCategory from './components/admin/ViewCategory';
import UpdateCategory from './components/admin/UpdateCategory';
import AdminSubCategory from './components/admin/AdminSub';
import ViewSubCategory from './components/admin/ViewSubCategory';
import UpdateSubCategory from './components/admin/UpdateSubCategory';
import AdminProduct from './components/admin/AdminProduct';
import ViewProducts from './components/admin/ViewProducts';
import ViewFeedback from './components/admin/ViewFeedback';
import Dashboard from './components/admin/Dashboard';
import ViewUser from './components/admin/ViewUser';

import UserMaster from './components/customer/UserMaster';
import UserViewCategory from './components/customer/UserViewCategory';
import UserViewSubcategory from './components/customer/UserViewSubcategory';
import UserViewProduct from './components/customer/UserViewProduct';
import Booking from './components/customer/Booking';
import AdminViewBooking from './components/admin/ViewBooking';
import UserViewBooking from './components/customer/UserViewBooking';
import Feedback from './components/customer/Feedback';
import UserViewFeedback from './components/customer/UserViewFeedback';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shopdetail" element={<ShopDetail />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/page404" element={<Page404 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>


          <Route path='/admin' element={<AdminMaster />}>
            <Route path='/admin' element={<Dashboard />} />
            <Route path='/admin/category' element={<AdminCategory />} />
            <Route path='/admin/viewcategory' element={<ViewCategory />} />
            <Route path='/admin/updatecategory/:id' element={<UpdateCategory />} />
            <Route path='/admin/subcategory' element={<AdminSubCategory />} />
            <Route path='/admin/viewsubcategory' element={<ViewSubCategory />} />
            <Route path='/admin/updatesubcategory/:id' element={<UpdateSubCategory />} />
            <Route path='/admin/product' element={<AdminProduct />} />
            <Route path='/admin/viewproduct' element={<ViewProducts />} />
            <Route path='/admin/viewbooking' element={<AdminViewBooking />} />
            <Route path='/admin/viewfeedback' element={<ViewFeedback />} />
            <Route path='/admin/viewuser' element={<ViewUser />} />
          </Route>

          <Route path='/user' element={<UserMaster />}>
            <Route path='/user/viewcategory' element={<UserViewCategory />} />
            <Route path='/user/viewsubcategory' element={<UserViewSubcategory />} />
            <Route path='/user/viewproduct' element={<UserViewProduct />} />
            <Route path='/user/booking/:id' element={<Booking />} />
            <Route path='/user/viewbooking' element={<UserViewBooking />} />
            <Route path='/user/feedback' element={<Feedback />} />
            <Route path='/user/viewfeedback' element={<UserViewFeedback />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce} />
    </>
  );
}

export default App;
