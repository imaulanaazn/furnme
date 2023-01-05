// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import darkGraySofa from '../assets/img/dark-gray-sofa.webp';
import darkHighChair from '../assets/img/dark-high-chair.webp';
import blackStandLamp from '../assets/img/black-stand-lamp.webp';
import cuteCactus from '../assets/img/cute-plant.webp';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import shelf from '../assets/img/shelf.webp';
import darkGrayBed from '../assets/img/dark-gray-bed.webp';
import ShopScrollableCard from './ShopScrollableCard';
import shopCardTotalSlide from '../utils/shopCardTotalSlide';

export default function TopRated() {
  const totalSlide = shopCardTotalSlide();

  return (
    <section className="top_rated w-full md:px-12 px-6  lg:my-28 my-12">
      <h1 className="font-bold lg:text-2xl md:text-3xl text-xl my-8">Top Rated Product</h1>
      <div className="swiper mySwiper w-full h-56">
        <Swiper
          className="swiper-wrapper"
          spaceBetween={15}
          slidesPerView={totalSlide}
        >
          <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200 ">
            <ShopScrollableCard image={darkGraySofa} name="Dark gray sofa" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200 ">
            <ShopScrollableCard image={darkHighChair} name="aesthetic high chair" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200 ">
            <ShopScrollableCard image={blackStandLamp} name="Beautiful lamp" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200 ">
            <ShopScrollableCard image={cuteCactus} name="Cute litle cactus" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200 ">
            <ShopScrollableCard image={shelf} name="Shelf" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200 ">
            <ShopScrollableCard image={darkGrayBed} name="Comfortable bed" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
