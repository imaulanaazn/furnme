import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import InCartProduct from './InCartProduct';
// import products from '../inCartItems';

const tempArr = [];
export default function MyCartMain({ setTotalCost }) {
  const inCartProducts = useSelector((state) => state.cart);
  const changeTempArr = (index, num) => {
    tempArr[index] = num;
    const totalCostResult = tempArr.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0,
    );
    setTotalCost(totalCostResult);
  };

  return (
    <main className="lg:w-2/3 w-full h-screen lg:pt-20 pt-16">
      <div className="flex-wrapper lg:mx-14 mx-3 mb-10 lg:mt-10 md:mt-8 mt-3">
        <div className="title flex w-full items-center text-center text-xs text-slate-500">
          <h1 className="flex-1 lg:text-sm md:text-base">PRODUCT</h1>
          <h1 className="flex-1 lg:text-sm md:text-base">PRICE</h1>
          <h1 className="flex-1 lg:text-sm md:text-base">QUANTITY</h1>
          <h1 className="flex-1 lg:text-sm md:text-base">TOTAL</h1>
        </div>
        {inCartProducts.map((product, i) => (
          <InCartProduct
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            index={i}
            total={product.total}
            quantity={product.quantity}
            changeTempArr={changeTempArr}
          />
        ))}

      </div>
    </main>
  );
}

MyCartMain.propTypes = {
  setTotalCost: PropTypes.func.isRequired,
};
