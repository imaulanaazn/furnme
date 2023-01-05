import '../styles/cart.css';

import { useState } from 'react';
import MyCartNavbar from '../components/MyCartNavbar';
import MyCartMain from '../components/MyCartMain';
import MyCartAside from '../components/MyCartAside';

export default function MyCart() {
  const [totalCost, setTotalCost] = useState(0);
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
