import { Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Home from './pages/Home';
import About from './pages/About';
import Forsale from './pages/Forsale';
import SignForm from './pages/SignForm';
import MyCart from './pages/MyCart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/forsale" element={<Forsale />} />
        <Route path="/signform" element={<SignForm />} />
        <Route path="/mycart" element={<MyCart />} />
      </Routes>
    </div>
  );
}

export default App;
