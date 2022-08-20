import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
import InCartProduct from './InCartProduct';
import products from '../inCartItems';

const tempArr = [];
export default function MyCartMain({ setTotalCost }) {
  const changeTempArr = (index, num) => {
    tempArr[index] = num;
    const totalCostResult = tempArr.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0,
    );
    setTotalCost(totalCostResult);
  };

  return (
    <main className="lg:w-2/3 w-full h-screen pt-28">
      <div className="flex-wrapper lg:mx-14 mx-3 mb-10 lg:mt-10 md:mt-8 mt-3">
        <div className="title flex w-full items-center text-center text-xs text-slate-500">
          <h1 className="flex-1 lg:text-sm md:text-base">PRODUCT</h1>
          <h1 className="flex-1 lg:text-sm md:text-base">PRICE</h1>
          <h1 className="flex-1 lg:text-sm md:text-base">QUANTITY</h1>
          <h1 className="flex-1 lg:text-sm md:text-base">TOTAL</h1>
        </div>
        {products.map((product, i) => (
          <InCartProduct
            image={product.image}
            name={product.name}
            size={product.size}
            color={product.color}
            price={product.price}
            tempArr={tempArr}
            index={i}
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
