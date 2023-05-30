import PropTypes from 'prop-types';
import { useRef } from 'react';

export default function TrendingProductsCard({
  thumb, name, price, colSpan, id,
}) {
  const priceRef = useRef();
  return (
    <div className={`card bg-orange-100 h-96 w-full md:py-10 md:px-8 py-8 px-6 rounded-xl ${colSpan}`}>
      <div className="home_decor_thumb h-3/5 w-full relative">
        <img src={thumb} className="h-full m-auto" alt="" />
      </div>

      <div className="h-2/5 w-full flex flex-col justify-end gap-y-2 ">
        <h3 className="max-w-1/2 lg:text-lg md:text-xl text-base text-left font-semibold">{name}</h3>
        <div className="flex justify-between">
          {/* eslint-disable-next-line no-restricted-globals */}
          <a href={`/product/${id}`} className="flex justify-center items-center font-bold w-12 h-12 bg-orange-800 text-orange-200  rounded-lg">
            <i className="fa-solid fa-cart-shopping text-lg" />
          </a>
          <div className="price">
            <p className="lg:text-sm md:text-base text-sm text-slate-600 line-through" ref={priceRef}>
              $
              {price}
            </p>
            <p className="lg:text-base md:text-lg text-base font-semibold" ref={priceRef}>
              $
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

TrendingProductsCard.propTypes = {
  id: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  colSpan: PropTypes.string.isRequired,
};
