import { Routes, Route, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Shop from './pages/Shop';
import Home from './pages/Home';
import About from './pages/About';
import Auth from './pages/Auth';
import MyCart from './pages/MyCart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Success from './pages/Success';

function App() {
  const { isLogin } = useSelector((state) => state.auth);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={isLogin ? <Navigate to="/" /> : <Auth />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cart/:id" element={isLogin ? <MyCart /> : <Navigate to="/auth" />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
