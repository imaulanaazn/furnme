/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { useState } from 'react';
import TrendingProductsCard from './TrendingProductsCard';

export default function TrendingProducts() {
  const ROOT_URL = process.env.REACT_APP_PUBLIC_API;
  const [furnitures, setFurnitures] = useState([]);

  async function getFurnitures() {
    const { data } = await axios(`${ROOT_URL}/product`);
    setFurnitures(data);
  }
  getFurnitures();

  return (
    <section className="trending_products text-center xl:px-20 lg:px-12 md:px-16 sm:px-10 px-6 xl:my-20 lg:my-16 md:my-24 my-12">
      <h1 className="md:text-2xl sm:text-xl text-lg font-bold text-center my-4">Trending Products</h1>
      <p className="lg:text-base sm:text-lg font-normal text-slate-600 text-center lg:w-3/4 w-full mb-10 mx-auto sm:max-w-[34rem] max-w-[28rem]">
        Lorem ipsum iat optio totam mollitia atquefacilis
        eligendi quibusdam amet, commodi hic iste! Assumenda!
      </p>
      <div className="grid_wrapper flex flex-col sm:grid lg:grid-cols-4 grid-cols-2 grid-rows-2 lg:gap-2 gap-5 justify-content-center">
        {furnitures?.slice(0, 7).map((furniture, i) => (
          i === 4 ? (
            <TrendingProductsCard
              key={furniture._id}
              thumb={furniture.img}
              id={`${furniture._id}`}
              name={furniture.title}
              price={furniture.price}
              colSpan="col-span-2"
            />
          )
            : (
              <TrendingProductsCard
                key={furniture._id}
                thumb={furniture.img}
                id={`${furniture._id}`}
                name={furniture.title}
                price={furniture.price}
                colSpan="col-span-1"
              />
            )
        ))}
      </div>
    </section>
  );
}
