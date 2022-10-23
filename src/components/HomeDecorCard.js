import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

export default function HomeDecorCard({
  thumb, name, price, colSpan, id,
}) {
  const dispatch = useDispatch();
  const priceRef = useRef();
  const cardData = {
    id,
    image: thumb,
    name,
    price,
    quantity: 1,
  };
  const addItemToCart = (event) => {
    event.preventDefault();
    dispatch(addToCart(cardData));
  };
  return (
    <div className={`card bg-orange-100 h-96 w-full py-12 px-6 ${colSpan}`}>
      <div className="home_decor_thumb h-1/2 w-full relative">
        <img src={thumb} className="h-full m-auto" alt="" />
      </div>
      <div className="h-1/2 w-full flex flex-col justify-end gap-y-2 ">
        <h3 className="lg:text-base md:text-xl">{name}</h3>
        <h4 className="lg:text-base md:text-lg" ref={priceRef}>
          $
          {price}
        </h4>
        {/* eslint-disable-next-line no-restricted-globals */}
        <a href="/#" onClick={() => addItemToCart(event)} className="font-bold text-xs bg-orange-800 py-2 px-4 rounded-sm w-1/2 mx-auto text-orange-200">Buy</a>
      </div>
    </div>
  );
}

HomeDecorCard.propTypes = {
  id: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  colSpan: PropTypes.string.isRequired,
};
