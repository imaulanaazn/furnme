import {
  arrayOf, number, string, func,
} from 'prop-types';
import { useState, useEffect } from 'react';

export default function InCartProduct({
  product, userId, updateCart, removeProduct,
}) {
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    updateCart({
      userId,
      productId: product.productId,
      quantity,
    });
  }, [quantity]);

  return (
    <div className="product-1 my-8 flex w-full items-center text-slate-600 text-center">
      <div className="product-item flex-1 text-center">
        <div className="thumb lg:w-24 w-16 lg:h-24 h-16 mx-auto">
          <img src={product?.images[0]} className="w-full h-full object-cover object-center" alt="" />
        </div>
        <div className="text">
          <h1 className="mt-2 text-center font-bold lg:text-base md:text-xl">{product?.name}</h1>
        </div>
        <button type="button" onClick={() => { removeProduct({ userId, productId: product.productId }); }}>
          <i className="fa-solid fa-trash text-center text-lg mt-1 text-rose-400" />
        </button>
      </div>

      <p className="price md:text-base flex-1">
        $
        {product?.price}
      </p>

      <div className="quantity flex-1 flex justify-evenly">
        {quantity <= 1
          ? <button type="submit" className="md:text-base" disabled>-</button>
          : <button type="submit" className="md:text-base" onClick={() => { setQuantity(quantity - 1); }}>-</button>}
        <p className="lg:text-sm md:text-base">{quantity}</p>
        <button type="submit" className="md:text-base" onClick={() => { setQuantity(quantity + 1); }}>+</button>
      </div>

      <p className="total md:text-base flex-1">
        $
        {product.price * quantity}
      </p>
    </div>
  );
}

InCartProduct.propTypes = {
  userId: string,
  product: {
    productId: string,
    images: arrayOf(string),
    name: string,
    price: number,
    quantity: number,
  },
  updateCart: func,
  removeProduct: func,
};

InCartProduct.defaultProps = {
  userId: string,
  product: {
    productId: string,
    images: arrayOf(string),
    name: string,
    price: number,
    quantity: number,
  },
  updateCart: func,
  removeProduct: func,
};
