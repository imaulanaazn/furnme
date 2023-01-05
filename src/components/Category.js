// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import ShopScrollableCard from './ShopScrollableCard';
import shopCardTotalSlide from '../utils/shopCardTotalSlide';
import desk from '../assets/img/productivity-category.webp';
import classic from '../assets/img/classic-category.webp';
import modern from '../assets/img/modern-category.webp';
import decor from '../assets/img/decor-category.webp';
import cutePlant from '../assets/img/cute-plant-category.webp';
import bench from '../assets/img/bench-category.webp';

export default function Category() {
  const totalSlide = shopCardTotalSlide();

  return (
    <section className="category w-full md:px-12 px-6 my-28">
      <h1 className="font-bold lg:text-2xl md:text-3xl text-lg my-8">Top Category</h1>
      <div className="swiper mySwiper w-full h-56">
        <Swiper
          className="swiper-wrapper"
          spaceBetween={15}
          slidesPerView={totalSlide}
        >
          <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200">
            <ShopScrollableCard image={cutePlant} name="cute plant" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200">
            <ShopScrollableCard image={decor} name="home decor" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200">
            <ShopScrollableCard image={modern} name="modern" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200">
            <ShopScrollableCard image={classic} name="classic" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200">
            <ShopScrollableCard image={bench} name="aesthetic" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200">
            <ShopScrollableCard image={desk} name="productivity" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
