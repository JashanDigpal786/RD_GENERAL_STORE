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
import Login from './components/Login';

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
