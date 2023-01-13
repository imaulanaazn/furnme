/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Navbar from '../components/Navbar';
import validateToken from '../utils/validateToken';

export default function ProductDetail() {
  const [furniture, setFurniture] = useState(null);
  const { id } = useParams();
  const [userId, setUserId] = useState(null);
  const [cartData, setCartData] = useState({
    userId: '',
    products: { productId: '', quantity: '' },
  });

  useEffect(() => {
    async function getData() {
      const { data: result } = await axios(`http://localhost:4000/product/${id}`);
      setFurniture(result?.data);
    }
    getData();
    async function getUser() {
      const { data } = await validateToken(Cookies.get('token'));
      setUserId(data.user.id);
    }
    getUser();
  }, [id]);

  useEffect(() => {
    setCartData({ ...cartData, userId, products: { productId: id } });
  }, [userId]);

  async function submitCartData(e) {
    e.preventDefault();
    const cartDataResult = await axios.post('http://localhost:4000/cart', cartData);
    setCartData({
      ...cartData,
      products: {
        productId: cartData.products.productId,
        quantity: '',
      },
    });
    console.log(cartDataResult);
  }

  return (
    <>
      <Navbar position="static" />

      <section className="w-11/2 md:h-screen md:py-20
       md:px-10 lg:px-20 py-12 m-auto flex items-center"
      >
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center lg:gap-20">
          <div className="relative lg:w-2/5">
            <img id="image" className="w-full h-full" src={furniture?.img} alt="" />
            <div className="arrows w-full absolute inset-y-1/2 flex justify-between px-3">
              <button type="button" id="prev"><i className="fa-solid fa-chevron-left" /></button>
              <button type="button" id="next"><i className="fa-solid fa-chevron-right" /></button>
            </div>
          </div>
          <div className="p-5 lg:w-3/5">
            <h4 className="text-base font-thin mb-10">{furniture?.categories[0]}</h4>
            <h1 className="text-5xl font-medium">{furniture?.title}</h1>
            <h2 className="text-3xl font-normal mt-2">
              $
              {furniture?.price}
            </h2>
            <p className="text-base text-slate-700 my-10 max-w-md">
              {furniture?.desc}
            </p>
            <form className="flex items-center md:justify-start justify-between space-x-5 my-7" onSubmit={(e) => { submitCartData(e); }}>
              <input
                className="w-24 h-8 px-4 h-10 border border-slate-600 outline-0"
                type="number"
                id="amount"
                required
                value={cartData.products.quantity}
                onChange={(e) => {
                  setCartData({
                    ...cartData,
                    products: {
                      productId: cartData.products.productId,
                      quantity: e.target.value,
                    },
                  });
                }}
              />
              <button
                type="submit"
                className="flex items-center h-10 px-4 border border-orange-200
                 bg-orange-200 hover:bg-orange-300 hover:border hover:border-gray-600"
              >
                <i className="fa-solid fa-cart-shopping text-xl mr-3" />
                <span>Add To Cart</span>
              </button>
            </form>
            <button
              type="button"
              className="flex items-center justify-center border border-rose-400
               h-10 w-10 rounded-md hover:bg-rose-400 hover:text-white"
            >
              <i className="fa-regular fa-heart text-xl" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
