import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, Bounce } from 'react-toastify';

import Master from './components/Master';
import Home from './components/Home';
import Shop from './components/Shop';
import ShopDetail from './components/ShopDetail';
import Testimonial from './components/Testimonial';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Page404 from './components/Page404';
import Login from './components/Login';
import Contact from './components/Contact';

import AdminMaster from './components/AdminMaster';
import AdminProduct from './components/AdminProduct';
import AdminCategory from './components/AdminCategory';
import AdminSubCategory from './components/AdminSub';

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
            <Route path="/login" element={<Login />} />
            <Route path="/page404" element={<Page404 />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path='/admin' element={<AdminMaster />}>
            <Route path='/admin/product' element={<AdminProduct />} />
            <Route path='/admin/category' element={<AdminCategory />} />
            <Route path='/admin/subcategory' element={<AdminSubCategory />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce} />
    </>
  );
}

export default App;
