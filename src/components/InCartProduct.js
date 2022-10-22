import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import mbuh from '../assets/img/checkout-item1.webp';

export default function InCartProduct({
  name, size, color, price, index, changeTempArr,
}) {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(quantity * price);
  useEffect(() => {
    setTotal(quantity * price);
    changeTempArr(index, quantity * price);
  }, [quantity]);

  return (
    <div className="product-1 my-8 flex w-full items-center text-slate-600 text-center">
      <div className="product-item flex-1 text-left">
        <div className="thumb lg:w-24 w-16 lg:h-24 h-16 mx-auto">
          <img src={mbuh} className="w-full h-full object-cover object-center" alt="" />
        </div>
        <div className="text md:ml-12 ">
          <h1 className="mt-2 mb-1 font-bold lg:text-base md:text-xl">{name}</h1>
          <p className="lg:text-xs md:text-base">
            Size :
            {' '}
            {size}
          </p>
          <p className="lg:text-xs md:text-base">
            Color:
            {' '}
            {color}
          </p>
        </div>
      </div>
      <p className="price lg:text-xs md:text-base flex-1">
        $
        {price}
      </p>
      <div className="quantity flex-1 flex justify-evenly">
        {!quantity ? <button type="submit" className="lg:text-xs md:text-base" disabled>-</button> : <button type="submit" className="lg:text-xs md:text-base" onClick={() => (setQuantity(quantity - 1))}>-</button>}
        <p className="lg:text-xs md:text-base">{quantity}</p>
        <button type="submit" className="lg:text-xs md:text-base" onClick={() => { setQuantity(quantity + 1); }}>+</button>
      </div>
      <p className="total lg:text-xs md:text-base flex-1">
        $
        {total}
      </p>
    </div>
  );
}
InCartProduct.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  changeTempArr: PropTypes.func.isRequired,
};
