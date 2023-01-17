/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unsafe-optional-chaining */
import axios from 'axios';
import { any, number, string } from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCartTotal } from '../redux/slices/cartSlice';

export default function InCartProduct({
  productId, qty, cartItems, setCartItems, index,
}) {
  const dispatch = useDispatch();
  const [prodData, setProdData] = useState(null);
  const [quantity, setQuantity] = useState(qty);

  useEffect(() => {
    async function getProdData() {
      await axios(`http://localhost:4000/product/${productId}`)
        .then(({ data }) => setProdData(data))
        .catch((err) => console.log(err));
    }

    getProdData();
  }, [productId]);

  useEffect(() => {
    const newCartData = [...cartItems];
    newCartData[index] = {
      ...cartItems[index],
      products: {
        productId: cartItems[index].products.productId,
        quantity,
      },
    };
    setCartItems(newCartData);
  }, [quantity]);

  if (prodData?.price) dispatch(setCartTotal({ index, value: prodData.price * quantity }));

  return (
    <div className="product-1 my-8 flex w-full items-center text-slate-600 text-center">
      <div className="product-item flex-1 text-left">
        <div className="thumb lg:w-24 w-16 lg:h-24 h-16 mx-auto">
          <img src={prodData?.img} className="w-full h-full object-cover object-center" alt="" />
        </div>
        <div className="text md:ml-12 ">
          <h1 className="mt-2 mb-1 font-bold lg:text-base md:text-xl">{prodData?.title}</h1>
        </div>
      </div>
      <p className="price md:text-base flex-1">
        $
        {prodData?.price}
      </p>
      <div className="quantity flex-1 flex justify-evenly">
        {!quantity ? <button type="submit" className="md:text-base" disabled>-</button>
          : <button type="submit" className="md:text-base" onClick={() => { setQuantity(quantity - 1); }}>-</button>}
        <p className="lg:text-sm md:text-base">{quantity}</p>
        <button type="submit" className="md:text-base" onClick={() => { setQuantity(quantity + 1); }}>+</button>
      </div>
      <p className="total md:text-base flex-1">
        $
        {prodData?.price * quantity}
      </p>
    </div>
  );
}

InCartProduct.propTypes = {
  productId: string,
  qty: number,
  cartItems: any,
  setCartItems: any,
  index: number,
};

InCartProduct.defaultProps = {
  productId: null,
  qty: null,
  cartItems: null,
  setCartItems: null,
  index: null,
};
