import '../styles/cart.css';
import { useState, useEffect } from 'react';

import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import MyCartNavbar from '../components/MyCartNavbar';
import MyCartMain from '../components/MyCartMain';
import MyCartAside from '../components/MyCartAside';
import validateToken from '../utils/validateToken';

export default function MyCart() {
  const navigate = useNavigate();
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    async function authorization() {
      const token = Cookies.get('token');
      if (!token) {
        navigate('/auth');
      } else {
        await validateToken(token)
          .then((res) => {
            if (!res.data) {
              navigate('/auth');
            }
          })
          .catch((err) => console.log(err));
      }
    }
    authorization();
  }, []);

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
