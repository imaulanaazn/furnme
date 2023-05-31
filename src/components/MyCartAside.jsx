/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyCartAside({ cartItems }) {
  const ROOT_URL = process.env.REACT_APP_PUBLIC_API;
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [note, setNote] = useState('');
  const data = useSelector((state) => state.cart);
  async function updateCart(cartItem) {
    const res = await axios.put(`${ROOT_URL}/cart/${cartItem._id}`, {
      products: {
        productId: cartItem.products.productId,
        quantity: cartItem.products.quantity,
      },
    });
    return res;
  }

  function checkoutHandle(e) {
    e.preventDefault();
    if (data.length > 0 && isChecked) {
      localStorage.setItem('note', JSON.stringify(note));
      cartItems.map((cartItem) => updateCart(cartItem));
      navigate('/checkout');
    } else {
      alert('make sure that your cart is not empty and check the agree');
    }
  }

  return (
    <aside className="lg:w-1/3 w-full lg:absolute top-0 right-0 h-screen bg-orange-100 lg:px-12 md:px-20 px-4 flex flex-col text-slate-600 justify-center">
      <h2 className="lg:text-base md:text-2xl text-center font-semibold">
        Cart Total :
        {' '}
        <span className="lg:text-xl md:text-3xl font-bold text-slate-700">
          $
          {data.reduce((a, b) => a + b, 0)}
        </span>
      </h2>
      {/* <p className="lg:text-sm md:text-lg
      text-center">Total belum termasuk PPN dan Ongkir</p> */}
      <div className="term flex items-center lg:text-sm md:text-base mx-auto mt-2">
        <input type="checkbox" name="agree" required onClick={() => { setIsChecked((prev) => !prev); }} />
        <label htmlFor="agree" className="ml-2 ">
          {' '}
          I agree to
          {' '}
          <a href="/#" className="text-orange-800">Terms and Conditions</a>
        </label>
      </div>

      <div className="note my-6 text-left text-slate-600">
        <h2 className="lg:text-sm md:text-base">Add A Note</h2>
        <textarea onChange={(e) => { setNote(e.target.value); }} value={note} name="notes" id="" cols="30" className="lg:py-2 md:py-5 py-3 lg:px-4 md:px-5 px-4 mt-2 w-full lg:text-xs md:text-base" rows="1" placeholder="Add a note here..." />
      </div>
      <button type="button" aria-disabled href="/checkout" onClick={(e) => { checkoutHandle(e); }} className="text-center  mx-auto lg:py-3 md:py-4 py-3 px-10 bg-orange-200 text-orange-800 text-sm font-semibold">Checkout</button>
    </aside>
  );
}