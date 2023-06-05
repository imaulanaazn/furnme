/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import totalCards from '../utils/totalCards';

export default function FlashSale() {
  const cardsPerPage = totalCards({
    xl: 5, lg: 4, md: 3, sm: 2, xs: 1,
  });
  return (
    <section className="our-product w-full md:px-12 sm:px-10 px-6 my-20">
      <h1 className="text-left font-bold lg:text-2xl md:text-3xl sm:text-2xl text-xl mb-5">
        Flash Sale
        {' '}
        <i className="fa-solid fa-bolt" />
      </h1>
      <Swiper
        className="swiper-wrapper"
        spaceBetween={20}
        slidesPerView={cardsPerPage}
      >
        <SwiperSlide>
          <div className="item w-full overflow-hidden">
            <a href="/#">
              <div className="thumb group relative w-full pb-[100%] bg-slate-200 bg-cover rounded-lg hover:brightness-75 transition-all duration-400" style={{ backgroundImage: 'url()' }} />
            </a>
            <div className="product_detail mt-4">
              <div className="name-price flex justify-between items-start">
                <p className="text-left lg:text-sm md:text-lg text-base font-semibold">nama</p>
                <p className="text-left lg:text-sm md:text-lg text-base font-semibold">
                  $
                  {12000}
                  <br />
                  <span className="text-slate-600 font-light text-sm">
                    <del>
                      $
                      {20000}
                    </del>
                  </span>
                </p>
              </div>
              <div className="rate-cart mt-3 flex justify-between items-center">
                <div className="stars flex gap-0.5">
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
                </div>
                <i className="fa-solid fa-cart-shopping text-2xl bg-orange-200 py-1 px-2 rounded-md text-orange-800" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full overflow-hidden">
            <a href="/#">
              <div className="thumb group relative w-full pb-[100%] bg-slate-200 bg-cover rounded-lg hover:brightness-75 transition-all duration-400" style={{ backgroundImage: 'url()' }} />
            </a>
            <div className="product_detail mt-4">
              <div className="name-price flex justify-between items-start">
                <p className="text-left lg:text-sm md:text-lg text-base font-semibold">nama</p>
                <p className="text-left lg:text-sm md:text-lg text-base font-semibold">
                  $
                  {12000}
                  <br />
                  <span className="text-slate-600 font-light text-sm">
                    <del>
                      $
                      {20000}
                    </del>
                  </span>
                </p>
              </div>
              <div className="rate-cart mt-3 flex justify-between items-center">
                <div className="stars flex gap-0.5">
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
                </div>
                <i className="fa-solid fa-cart-shopping text-2xl bg-orange-200 py-1 px-2 rounded-md text-orange-800" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full overflow-hidden">
            <a href="/#">
              <div className="thumb group relative w-full pb-[100%] bg-slate-200 bg-cover rounded-lg hover:brightness-75 transition-all duration-400" style={{ backgroundImage: 'url()' }} />
            </a>
            <div className="product_detail mt-4">
              <div className="name-price flex justify-between items-start">
                <p className="text-left lg:text-sm md:text-lg text-base font-semibold">nama</p>
                <p className="text-left lg:text-sm md:text-lg text-base font-semibold">
                  $
                  {12000}
                  <br />
                  <span className="text-slate-600 font-light text-sm">
                    <del>
                      $
                      {20000}
                    </del>
                  </span>
                </p>
              </div>
              <div className="rate-cart mt-3 flex justify-between items-center">
                <div className="stars flex gap-0.5">
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
                </div>
                <i className="fa-solid fa-cart-shopping text-2xl bg-orange-200 py-1 px-2 rounded-md text-orange-800" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full overflow-hidden">
            <a href="/#">
              <div className="thumb group relative w-full pb-[100%] bg-slate-200 bg-cover rounded-lg hover:brightness-75 transition-all duration-400" style={{ backgroundImage: 'url()' }} />
            </a>
            <div className="product_detail mt-4">
              <div className="name-price flex justify-between items-start">
                <p className="text-left lg:text-sm md:text-lg text-base font-semibold">nama</p>
                <p className="text-left lg:text-sm md:text-lg text-base font-semibold">
                  $
                  {12000}
                  <br />
                  <span className="text-slate-600 font-light text-sm">
                    <del>
                      $
                      {20000}
                    </del>
                  </span>
                </p>
              </div>
              <div className="rate-cart mt-3 flex justify-between items-center">
                <div className="stars flex gap-0.5">
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
                </div>
                <i className="fa-solid fa-cart-shopping text-2xl bg-orange-200 py-1 px-2 rounded-md text-orange-800" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full overflow-hidden">
            <a href="/#">
              <div className="thumb group relative w-full pb-[100%] bg-slate-200 bg-cover rounded-lg hover:brightness-75 transition-all duration-400" style={{ backgroundImage: 'url()' }} />
            </a>
            <div className="product_detail mt-4">
              <div className="name-price flex justify-between items-start">
                <p className="text-left lg:text-sm md:text-lg text-base font-semibold">nama</p>
                <p className="text-left lg:text-sm md:text-lg text-base font-semibold">
                  $
                  {12000}
                  <br />
                  <span className="text-slate-600 font-light text-sm">
                    <del>
                      $
                      {20000}
                    </del>
                  </span>
                </p>
              </div>
              <div className="rate-cart mt-3 flex justify-between items-center">
                <div className="stars flex gap-0.5">
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
                </div>
                <i className="fa-solid fa-cart-shopping text-2xl bg-orange-200 py-1 px-2 rounded-md text-orange-800" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
