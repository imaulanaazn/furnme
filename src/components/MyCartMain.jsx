/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import InCartProduct from './InCartProduct';

export default function MyCartMain({ cartItems, setCartItems }) {
  return (
    <main className="lg:w-2/3 w-full h-screen lg:pt-20 pt-16">
      <div className="flex-wrapper lg:mx-14 mx-3 mb-10 lg:mt-10 md:mt-8 mt-3">
        <div className="title flex w-full items-center text-center text-xs text-slate-500">
          <h1 className="flex-1 lg:text-sm md:text-base">PRODUCT</h1>
          <h1 className="flex-1 lg:text-sm md:text-base">PRICE</h1>
          <h1 className="flex-1 lg:text-sm md:text-base">QUANTITY</h1>
          <h1 className="flex-1 lg:text-sm md:text-base">TOTAL</h1>
        </div>
        {cartItems?.map((product, i) => (
          <InCartProduct
            key={product._id}
            productId={product?.products?.productId}
            qty={product?.products?.quantity}
            cartItems={cartItems}
            setCartItems={setCartItems}
            index={i}
          />
        ))}
      </div>
    </main>
  );
}
