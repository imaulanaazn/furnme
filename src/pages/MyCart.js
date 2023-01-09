import '../styles/cart.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MyCartNavbar from '../components/MyCartNavbar';
import MyCartMain from '../components/MyCartMain';
import MyCartAside from '../components/MyCartAside';

export default function MyCart() {
  const navigate = useNavigate();
  const [totalCost, setTotalCost] = useState(0);
  const { isLogin } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLogin) {
      navigate('/auth');
    }
  }, [isLogin]);

  return (
    <>
      <MyCartNavbar />
      <section className="user_cart lg:flex overflow-hidden">
        <MyCartMain setTotalCost={setTotalCost} />
        <MyCartAside totalCost={totalCost} />
      </section>
    </>
  );
}
