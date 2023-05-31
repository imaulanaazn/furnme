// eslint-disable-next-line import/no-unresolved
import { Autoplay, Pagination } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
import banner1 from '../assets/img/banner1.webp';
import banner2 from '../assets/img/banner2.webp';
import banner3 from '../assets/img/banner3.webp';

export default function ForsaleHero() {
  return (
    <div className="forsale-hero w-full md:h-96 h-48 md:my-10 my-5">
      <div className="swiper mySwiper md:w-11/12 lg:w-10/12 w-full h-full">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="swiper-wrapper"
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide className="swiper-slide bg-black w-full h-full ">
            <img src={banner1} alt="furniture banner" className="w-full h-full object-cover" />
          </SwiperSlide>

          <SwiperSlide className="swiper-slide bg-slate-400 w-full h-full ">
            <img src={banner2} alt="furniture banner" className="w-full h-full object-cover" />
          </SwiperSlide>

          <SwiperSlide className="swiper-slide bg-slate-500 w-full h-full ">
            <img src={banner3} alt="furniture banner" className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>
        <div className="Pagination" />
      </div>
    </div>
  );
}
