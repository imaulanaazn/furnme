// eslint-disable-next-line import/no-unresolved
import { Autoplay, Pagination } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../assets/img/forsale-banner-1.jpg';
import banner2 from '../assets/img/forsale-banner-2.jpg';
import banner3 from '../assets/img/forsale-banner-3.jpg';

export default function DiscountedProdSlide() {
  return (
    <div className="forsale-hero w-full md:h-96 h-48 md:my-10 my-5 lg:px-12 md:px-10 px-4">
      <div className="swiper mySwiper w-full h-full">
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
