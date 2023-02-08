import '../styles/cart.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import MyCartNavbar from '../components/MyCartNavbar';
import MyCartMain from '../components/MyCartMain';
import MyCartAside from '../components/MyCartAside';

export default function MyCart() {
  const [cartItems, setCartItems] = useState(null);
  const { id: userId } = useParams();
  const token = Cookies.get('token');

  useEffect(() => {
    async function getUserCart() {
      if (token) {
        await axios.get(`http://localhost:4000/cart/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then(({ data }) => setCartItems(data))
          .catch((err) => console.log(err));
      }
    }
    getUserCart();
  }, []);

  return (
    <>
      <MyCartNavbar />
      <section className="user_cart lg:flex overflow-hidden">
        <MyCartMain cartItems={cartItems} setCartItems={setCartItems} />
        <MyCartAside cartItems={cartItems} />
      </section>
    </>
  );
}
