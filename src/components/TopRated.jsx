/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'swiper/css';
import ShopScrollableCard from './ShopScrollableCard';
import totalCards from '../utils/totalCards';

export default function TopRated() {
  const ROOT_URL = process.env.REACT_APP_PUBLIC_API;
  const cardsPerPage = totalCards({
    xl: 5, lg: 4, md: 3, sm: 2, xs: 1,
  });
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
    <section className="top_rated w-full md:px-12 px-6  lg:my-28 my-12">
      <h1 className="font-bold lg:text-2xl md:text-3xl text-xl my-8">Top Rated Product</h1>
      <div className="swiper mySwiper w-full h-56">
        <Swiper
          className="swiper-wrapper"
          spaceBetween={15}
          slidesPerView={cardsPerPage}
        >
          {products && products.map((product) => (
            <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200 " key={product._id}>
              <ShopScrollableCard image={product.img} name={product.title} id={product._id} />
            </SwiperSlide>
          )) }
        </Swiper>
      </div>
    </section>
  );
}
