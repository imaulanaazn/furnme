/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { useState } from 'react';
import HomeDecorCard from './HomeDecorCard';

export default function HomeDecor() {
  const [furnitures, setFurnitures] = useState(null);

  async function getFurnitures() {
    const { data } = await axios('http://localhost:4000/product');
    setFurnitures(data);
  }
  getFurnitures();

  return (
    <section className="home_decor lg:px-12 px-6 text-center my-20">
      <h1 className="text-orange-800 lg:text-lg md:text-xl font-bold text-center my-2 text-lg">Modern Home Decor Essentials</h1>
      <p className="lg:text-sm md:text-2xl font-normal text-slate-600 text-center lg:w-3/4 w-full mb-10 mx-auto max-w-[28rem]">Lorem ipsum iat optio totam mollitia atquefacilis eligendi quibusdam amet, commodi hic iste! Assumenda!</p>
      <div className="grid grid_wrapper lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-rows-2 gap-2 justify-content-center">
        {furnitures?.slice(0, 7).map((furniture, i) => (
          i === 4 ? (<HomeDecorCard key={furniture._id} thumb={furniture.img} id={`${furniture._id}`} name={furniture.title} price={furniture.price} colSpan="col-span-2" />)
            : <HomeDecorCard key={furniture._id} thumb={furniture.img} id={`${furniture._id}`} name={furniture.title} price={furniture.price} colSpan="col-span-1" />
        ))}
      </div>
    </section>
  );
}
