/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import totalCards from '../utils/totalCards';

export default function Recommendation() {
  const cardsPerPage = totalCards({
    xl: 5.5, lg: 4.5, md: 3.5, sm: 2.5, xs: 1.6,
  });
  return (
    <section className="our-product w-full xl:px-20 lg:px-12 md:px-16 sm:px-10 px-6 xl:my-20 lg:my-16 md:my-24 my-12 pt-32">
      <h1 className="text-left font-bold lg:text-2xl md:text-3xl sm:text-2xl text-xl mb-5">Reccomendation for you</h1>
      <Swiper
        className="swiper-wrapper"
        spaceBetween={20}
        slidesPerView={cardsPerPage}
      >
        <SwiperSlide>
          <div className="item w-full overflow-hidden">
            <a href="/#">
              <div className="thumb group relative w-full pb-[100%] bg-slate-200 bg-cover rounded-lg hover:brightness-75 transition-all duration-400" style={{ backgroundImage: 'url()' }}>
                <i className="fa-solid fa-tags pr-3 absolute top-0 left-0 md:text-3xl text-2xl" />

              </div>
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
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                </div>
                <i className="fa-solid fa-cart-shopping lg:text-2xl md:text-xl text-lg bg-orange-200 py-1 px-2 rounded-md text-orange-800" />
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
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                </div>
                <i className="fa-solid fa-cart-shopping lg:text-2xl md:text-xl text-lg bg-orange-200 py-1 px-2 rounded-md text-orange-800" />
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
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                </div>
                <i className="fa-solid fa-cart-shopping lg:text-2xl md:text-xl text-lg bg-orange-200 py-1 px-2 rounded-md text-orange-800" />
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
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                </div>
                <i className="fa-solid fa-cart-shopping lg:text-2xl md:text-xl text-lg bg-orange-200 py-1 px-2 rounded-md text-orange-800" />
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
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                </div>
                <i className="fa-solid fa-cart-shopping lg:text-2xl md:text-xl text-lg bg-orange-200 py-1 px-2 rounded-md text-orange-800" />
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
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                </div>
                <i className="fa-solid fa-cart-shopping lg:text-2xl md:text-xl text-lg bg-orange-200 py-1 px-2 rounded-md text-orange-800" />
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
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                </div>
                <i className="fa-solid fa-cart-shopping lg:text-2xl md:text-xl text-lg bg-orange-200 py-1 px-2 rounded-md text-orange-800" />
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
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                  <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                </div>
                <i className="fa-solid fa-cart-shopping lg:text-2xl md:text-xl text-lg bg-orange-200 py-1 px-2 rounded-md text-orange-800" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
