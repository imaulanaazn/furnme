/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ShopScrollableCard from './ShopScrollableCard';
import shopCardTotalSlide from '../utils/shopCardTotalSlide';

export default function Category() {
  const ROOT_URL = process.env.REACT_APP_PUBLIC_API;
  const totalSlide = shopCardTotalSlide();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      await axios.get(`${ROOT_URL}/product/toprated`)
        .then((result) => result.data && setProducts(result.data))
        .catch((err) => console.log(err));
    }

    getProducts();
  }, []);

  return (
    <section className="category w-full md:px-12 px-6 my-28">
      <h1 className="font-bold lg:text-2xl md:text-3xl text-lg my-8">Top Category</h1>
      <div className="swiper mySwiper w-full h-56">
        <Swiper
          className="swiper-wrapper"
          spaceBetween={15}
          slidesPerView={totalSlide}
        >
          {products && products.map((product) => (
            <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200" key={product._id}>
              <ShopScrollableCard image={product.img} name={product.title} id={product._id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
