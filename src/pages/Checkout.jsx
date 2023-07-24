/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import getUserData from '../utils/getUserData';

function CheckoutSuccees() {
  return (
    <div className="z-50 absolute w-full h-full bg-[rgba(0,0,0,.3)] flex items-center justify-center">
      <div className="w-80 h-96 bg-white shadow-md rounded-lg flex flex-col items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center">
          <i className="fa-solid fa-check text-green-300 text-5xl font-bold" />
        </div>

        <h1 className="text-xl font-bold text-center mt-10 mb-4">
          Checkout success
        </h1>
        <a href="/" className="text-center font-semibold py-2 px-10 bg-orange-200 text-orange-700">Close</a>
      </div>
    </div>
  );
}

export default function Checkout() {
  const ROOT_URL = process.env.REACT_APP_PUBLIC_API;
  const [formValues, setFormValues] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);
  const [userId, setUserId] = useState('');
  const [userCartProd, setUserCartProd] = useState('');
  const [userCartProdId, setUserCartProdId] = useState('');
  const totalCount = useSelector((state) => state.cart);

  useEffect(() => {
    async function getUserInfo() {
      const { id } = getUserData();
      setUserId(id);
    }
    getUserInfo();
  }, []);

  useEffect(() => {
    async function getUserCart() {
      const cartItems = await axios.get(`${ROOT_URL}/cart/${userId}`)
        .then((res) => res.data);
      if (cartItems) {
        cartItems.forEach((cartItem) => {
          setUserCartProd((prevValue) => [...prevValue, {
            productId: cartItem._id,
            quantity: cartItem.products.quantity,
          }]);
          setUserCartProdId((prevValue) => [...prevValue, cartItem._id]);
        });
      }
    }

    if (userId) {
      getUserCart();
    }
  }, [userId]);

  function formHandle(e) {
    e.preventDefault();
    setIsFormFilled(true);
  }

  function deleteUserCart() {
    async function deleteCart(cartId) {
      await axios.delete(`${ROOT_URL}/cart/${cartId}`)
        .then((res) => console.log(res));
    }
    userCartProdId.forEach((cartId) => {
      deleteCart(cartId);
    });
  }

  async function completeCheckout(e) {
    e.preventDefault();
    const notes = localStorage.getItem('note');
    const res = await axios.post(`${ROOT_URL}/orders`, {
      userId,
      products: userCartProd,
      notes: JSON.parse(notes),
      amount: totalCount.reduce((a, b) => a + b, 0),
      ...formValues,
    });
    if (res) { deleteUserCart(); }
    localStorage.removeItem('note');

    if (isChecked) {
      setIsCheckoutSuccess(true);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-[25px] w-full mx-auto bg-orange-100">
      {isCheckoutSuccess ? <CheckoutSuccees /> : null}
      {
            !isFormFilled ? (
              <form onSubmit={(e) => { formHandle(e); }} className="w-[700px] shadow-[0_5px_10px_rgba(0,0,0,0.1)] p-5 max-w-lg bg-white rounded-md">
                <div className="row flex flex-wrap gap-[15px]">
                  <div className="col flex-[1_1_250px]">
                    <h3 className="title text-xl font-semibold text-[#333] uppercase pb-[5px]">billing address</h3>

                    <div className="inputBox mx-0 my-[15px]">
                      <span className="block mb-2.5 text-base">full name :</span>
                      <input required value={formValues.fullName} onChange={(e) => setFormValues({ ...formValues, fullName: e.target.value })} type="text" className="w-full border text-[15px] normal-case px-[15px] py-2.5 border-solid border-[#ccc] focus:border focus:border-solid focus:border-black" placeholder="your name" />
                    </div>
                    <div className="inputBox mx-0 my-[15px]">
                      <span className="block mb-2.5 text-base">email :</span>
                      <input required value={formValues.email} onChange={(e) => setFormValues({ ...formValues, email: e.target.value })} type="email" className="w-full border text-[15px] normal-case px-[15px] py-2.5 border-solid border-[#ccc] focus:border focus:border-solid focus:border-black" placeholder="example@example.com" />
                    </div>
                    <div className="inputBox mx-0 my-[15px]">
                      <span className="block mb-2.5 text-base">address :</span>
                      <input required value={formValues.address} onChange={(e) => setFormValues({ ...formValues, address: e.target.value })} type="text" className="w-full border text-[15px] normal-case px-[15px] py-2.5 border-solid border-[#ccc] focus:border focus:border-solid focus:border-black" placeholder="room - street - locality" />
                    </div>
                    <div className="inputBox mx-0 my-[15px]">
                      <span className="block mb-2.5 text-base">city :</span>
                      <input required value={formValues.city} onChange={(e) => setFormValues({ ...formValues, city: e.target.value })} type="text" className="w-full border text-[15px] normal-case px-[15px] py-2.5 border-solid border-[#ccc] focus:border focus:border-solid focus:border-black" placeholder="newyork" />
                    </div>
                    <div className="inputBox mx-0 my-[15px]">
                      <span className="block mb-2.5 text-base">Bank name :</span>
                      <input required value={formValues.bankName} onChange={(e) => setFormValues({ ...formValues, bankName: e.target.value })} type="text" className="w-full border text-[15px] normal-case px-[15px] py-2.5 border-solid border-[#ccc] focus:border focus:border-solid focus:border-black" placeholder="mandiri" />
                    </div>
                    <div className="inputBox mx-0 my-[15px]">
                      <span className="block mb-2.5 text-base">Bank number :</span>
                      <input required value={formValues.bankNumber} onChange={(e) => setFormValues({ ...formValues, bankNumber: e.target.value })} type="number" className="w-full border text-[15px] normal-case px-[15px] py-2.5 border-solid border-[#ccc] focus:border focus:border-solid focus:border-black" placeholder="1102112031120103" />
                    </div>

                    <div className="flex gap-7">
                      <div className="inputBox mx-0 my-[15px] mt-[5px] flex-1">
                        <span className="block mb-2.5 text-base">state :</span>
                        <input required value={formValues.state} onChange={(e) => setFormValues({ ...formValues, state: e.target.value })} type="text" className="w-full border text-[15px] normal-case px-[15px] py-2.5 border-solid border-[#ccc] focus:border focus:border-solid focus:border-black" placeholder="united state" />
                      </div>
                      <div className="inputBox mx-0 my-[15px] mt-[5px] flex-1">
                        <span className="block mb-2.5 text-base">zip code :</span>
                        <input required value={formValues.zipcode} onChange={(e) => setFormValues({ ...formValues, zipcode: e.target.value })} type="text" className="w-full border text-[15px] normal-case px-[15px] py-2.5 border-solid border-[#ccc] focus:border focus:border-solid focus:border-black" placeholder="123 456" />
                      </div>
                    </div>

                  </div>
                </div>

                <input type="submit" value="Next" className="submit-btn w-full text-lg font-normal text-orange-800 cursor-pointer mt-[5px] p-3 bg-orange-200" />

              </form>
            ) : (
              <div className="w-[700px] shadow-[0_5px_10px_rgba(0,0,0,0.1)] px-6 py-10 max-w-lg bg-white rounded-md">
                <h1 className="text-lg font-semibold mb-5">purchase Details</h1>
                <ul>
                  <li className="flex justify-between">
                    <span className=" text-slate-700 text-base my-2">FullName :</span>
                    <span className=" text-slate-700 text-base my-2">{formValues.fullName}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className=" text-slate-700 text-base my-2">E-mail :</span>
                    <span className=" text-slate-700 text-base my-2">{formValues.email}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className=" text-slate-700 text-base my-2">Address :</span>
                    <span className=" text-slate-700 text-base my-2">{formValues.address}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className=" text-slate-700 text-base my-2">City :</span>
                    <span className=" text-slate-700 text-base my-2">{formValues.city}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className=" text-slate-700 text-base my-2">State :</span>
                    <span className=" text-slate-700 text-base my-2">{formValues.state}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className=" text-slate-700 text-base my-2">Zipcode :</span>
                    <span className=" text-slate-700 text-base my-2">{formValues.zipcode}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className=" text-slate-700 text-base my-2">Bank name :</span>
                    <span className=" text-slate-700 text-base my-2">{formValues.bankName}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className=" text-slate-700 text-base my-2">Bank number:</span>
                    <span className=" text-slate-700 text-base my-2">{formValues.bankNumber}</span>
                  </li>
                </ul>

                <h2 className="text-lg font-semibold my-5">
                  *to continue the payment proccess, kindly send the money to :
                </h2>
                <ul>
                  <li className="flex justify-between">
                    <span className=" text-slate-700 text-base my-2">Bank name :</span>
                    <span className=" text-slate-700 text-base my-2">Mandiri</span>
                  </li>
                  <li className="flex justify-between">
                    <span className=" text-slate-700 text-base my-2">Bank number :</span>
                    <span className=" text-slate-700 text-base my-2">1284927301823</span>
                  </li>
                </ul>

                <div className="flex items-center gap-2 mb-2">
                  <input type="checkbox" required className="my-5" onChange={() => { setIsChecked((prev) => !prev); }} />
                  <p className="text-base font-normal">i have transfer the money</p>
                </div>

                <button type="button" onClick={(e) => { completeCheckout(e); }} className={`py-3 px-6 ${isChecked ? 'bg-orange-200 text-orange-800' : 'bg-slate-200 text-slate-400'} `}>Complete Checkout</button>

              </div>
            )
        }

    </div>
  );
}
