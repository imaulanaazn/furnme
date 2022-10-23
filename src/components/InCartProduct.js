import PropTypes from 'prop-types';
// import mbuh from '../assets/img/checkout-item1.webp';
import { useDispatch } from 'react-redux';
import { addProdQuantity, decProdQuantity } from '../redux/slices/cartSlice';

export default function InCartProduct({
  name, price, image, quantity, id, total,
}) {
  const dispatch = useDispatch();
  return (
    <div className="product-1 my-8 flex w-full items-center text-slate-600 text-center">
      <div className="product-item flex-1 text-left">
        <div className="thumb lg:w-24 w-16 lg:h-24 h-16 mx-auto">
          <img src={image} className="w-full h-full object-cover object-center" alt="" />
        </div>
        <div className="text md:ml-12 ">
          <h1 className="mt-2 mb-1 font-bold lg:text-base md:text-xl">{name}</h1>
        </div>
      </div>
      <p className="price md:text-base flex-1">
        $
        {price}
      </p>
      <div className="quantity flex-1 flex justify-evenly">
        {!quantity ? <button type="submit" className="md:text-base" disabled>-</button> : <button type="submit" className="md:text-base" onClick={() => (dispatch(decProdQuantity(id)))}>-</button>}
        <p className="lg:text-sm md:text-base">{quantity}</p>
        <button type="submit" className="md:text-base" onClick={() => { dispatch(addProdQuantity(id)); }}>+</button>
      </div>
      <p className="total md:text-base flex-1">
        $
        {total}
      </p>
    </div>
  );
}
InCartProduct.propTypes = {
  total: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
