import {
  arrayOf, number, string, func,
} from 'prop-types';
import InCartProduct from './InCartProduct';

export default function MyCartMain({ cart, updateCart, removeProduct }) {
  return (
    <main className="lg:w-2/3 w-full h-screen lg:pt-20 pt-16">
      <div className="flex-wrapper lg:mx-14 mx-3 mb-10 lg:mt-10 md:mt-8 mt-3">
        <div className="title flex w-full items-center text-center text-xs text-slate-500">
          <h1 className="flex-1 lg:text-sm md:text-base">PRODUCT</h1>
          <h1 className="flex-1 lg:text-sm md:text-base">PRICE</h1>
          <h1 className="flex-1 lg:text-sm md:text-base">QUANTITY</h1>
          <h1 className="flex-1 lg:text-sm md:text-base">TOTAL</h1>
        </div>
        {cart.products?.map((product) => (
          <InCartProduct
            key={product.productId}
            userId={cart.userId}
            product={product}
            updateCart={updateCart}
            removeProduct={removeProduct}
          />
        ))}
      </div>
    </main>
  );
}

MyCartMain.propTypes = {
  cart: {
    userId: string,
    products: arrayOf({
      productId: string,
      images: arrayOf(string),
      name: string,
      price: number,
      quantity: number,
    }),
  },
  updateCart: func,
  removeProduct: func,
};

MyCartMain.defaultProps = {
  cart: {
    userId: string,
    products: arrayOf({
      productId: string,
      images: arrayOf(string),
      name: string,
      price: number,
      quantity: number,
    }),
  },
  updateCart: func,
  removeProduct: func,
};
