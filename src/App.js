import { Routes, Route } from 'react-router-dom';

import Shop from './pages/Shop';
import Home from './pages/Home';
import About from './pages/About';
import Forsale from './pages/Forsale';
import Auth from './pages/Auth';
import MyCart from './pages/MyCart';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/forsale" element={<Forsale />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
