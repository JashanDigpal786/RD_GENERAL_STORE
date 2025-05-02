import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Master from './components/Master';
import Home from './components/Home';
import Shop from './components/Shop';
import ShopDetail from './components/ShopDetail';
import Testimonial from './components/Testimonial';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Page404 from './components/Page404';
import Contact from './components/Contact';
import Login from './components/Login';

import AdminMaster from './components/AdminMaster';
// import AdminCategory from './components/AdminCategory';
// import AdminProduct from './components/AdminProduct';
import { ToastContainer, Bounce } from 'react-toastify';

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
          </Route>

          <Route path='/admin' element={<AdminMaster />}>
            {/* <Route path='/category' element={<AdminCategory />} />
            <Route path='/product' element={<AdminProduct />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer theme="light" position="top-center" transition={Bounce} autoClose={5000} rtl={false} newestOnTop={false} closeOnClick={false} hideProgressBar={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
}

export default App;
