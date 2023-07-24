/* eslint-disable react/jsx-no-bind */
import '../styles/cart.css';
import { useState, useEffect } from 'react';
import MyCartNavbar from '../components/MyCartNavbar';
import MyCartMain from '../components/MyCartMain';
import MyCartAside from '../components/MyCartAside';
import { getUserCarts, updateUserCarts, deleteUserCarts } from '../utils/fetchData';

export default function MyCart() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    async function callAPI() {
      await getUserCarts()
        .then((res) => {
          setCart(res?.data.cart);
        })
        .catch((err) => console.log(err));
    }
    callAPI();
  }, []);

  async function updateCart(payload) {
    await updateUserCarts(payload)
      .then((res) => {
        setCart(res?.data.cart);
      })
      .catch((err) => console.log(err));
  }

  async function removeProduct(payload) {
    await deleteUserCarts({
      productId: payload.productId,
      userId: payload.userId,
    })
      .then((res) => {
        setCart(res?.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <MyCartNavbar />
      <section className="user_cart lg:flex overflow-hidden">
        <MyCartMain cart={cart} updateCart={updateCart} removeProduct={removeProduct} />
        <MyCartAside totalPrice={cart.totalPrice} products={cart.products} />
      </section>
    </>
  );
}
