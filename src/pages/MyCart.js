import '../styles/cart.css';
import { useState } from 'react';
import jwt from 'jsonwebtoken';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import MyCartNavbar from '../components/MyCartNavbar';
import MyCartMain from '../components/MyCartMain';
import MyCartAside from '../components/MyCartAside';

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, 'my-secret-key');
    return decoded;
  } catch (error) {
    return null;
  }
};

export default function MyCart() {
  const navigate = useNavigate();
  const [totalCost, setTotalCost] = useState(0);

  const token = Cookies.get('token');
  if (!token) {
    navigate('/');
  } else {
    const decoded = verifyToken(token);
    if (!decoded) {
      navigate('/');
    }
  }
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
