// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import shopCardTotalSlide from '../utils/shopCardTotalSlide';

export default function Comments() {
  const totalSlide = shopCardTotalSlide();
  return (
    <section className="home_decor lg:px-12 sm:px-10 px-6 text-center my-20">
      <h1 className="lg:text-2xl md:text-2xl sm:text-xl text-lg font-bold text-center my-4">What do the say?</h1>
      <p className="lg:text-base md:text-xl sm:text-lg font-normal text-slate-600 text-center lg:w-3/4 w-full mb-10 mx-auto sm:max-w-[34rem] max-w-[28rem]">
        Lorem ipsum iat optio totam mollitia atquefacilis
        eligendi quibusdam amet, commodi hic iste! Assumenda!
      </p>

      <Swiper
        className="swiper-wrapper"
        spaceBetween={20}
        slidesPerView={totalSlide + 0.2}
      >
        <SwiperSlide className="swiper-slide text-left bg-slate-100 w-96 shadow-lg sm:py-6 sm:px-7 py-5 px-6">
          <em>
            <p className="font-bold sm:text-6xl text-5xl text-left text-orange-800">&quot;</p>
          </em>
          <p className="md:text-base sm:text-lg text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
            distinctio adipisci voluptatum voluptatibus corporis expedita
            repellat deserunt at ducimus repudiandae.
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="user-profile">
              <div className="user-profile-thumb md:w-10 md:h-10 sm:w-12 sm:h-12 w-10 h-10 bg-slate-200 rounded-full overflow-hidden mb-2">
                <img src="" alt="" />
              </div>
              <p className="md:text-base sm:text-lg text-gray-600">username</p>
            </div>
            <div className="stars">
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide text-left bg-slate-100 w-96 shadow-lg sm:py-6 sm:px-7 py-5 px-6">
          <em>
            <p className="font-bold sm:text-6xl text-5xl text-left text-orange-800">&quot;</p>
          </em>
          <p className="md:text-base sm:text-lg text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
            distinctio adipisci voluptatum voluptatibus corporis expedita
            repellat deserunt at ducimus repudiandae.
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="user-profile">
              <div className="user-profile-thumb md:w-10 md:h-10 sm:w-12 sm:h-12 w-10 h-10 bg-slate-200 rounded-full overflow-hidden mb-2">
                <img src="" alt="" />
              </div>
              <p className="md:text-base sm:text-lg text-gray-600">username</p>
            </div>
            <div className="stars">
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide text-left bg-slate-100 w-96 shadow-lg sm:py-6 sm:px-7 py-5 px-6">
          <em>
            <p className="font-bold sm:text-6xl text-5xl text-left text-orange-800">&quot;</p>
          </em>
          <p className="md:text-base sm:text-lg text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
            distinctio adipisci voluptatum voluptatibus corporis expedita
            repellat deserunt at ducimus repudiandae.
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="user-profile">
              <div className="user-profile-thumb md:w-10 md:h-10 sm:w-12 sm:h-12 w-10 h-10 bg-slate-200 rounded-full overflow-hidden mb-2">
                <img src="" alt="" />
              </div>
              <p className="md:text-base sm:text-lg text-gray-600">username</p>
            </div>
            <div className="stars">
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide text-left bg-slate-100 w-96 shadow-lg sm:py-6 sm:px-7 py-5 px-6">
          <em>
            <p className="font-bold sm:text-6xl text-5xl text-left text-orange-800">&quot;</p>
          </em>
          <p className="md:text-base sm:text-lg text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
            distinctio adipisci voluptatum voluptatibus corporis expedita
            repellat deserunt at ducimus repudiandae.
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="user-profile">
              <div className="user-profile-thumb md:w-10 md:h-10 sm:w-12 sm:h-12 w-10 h-10 bg-slate-200 rounded-full overflow-hidden mb-2">
                <img src="" alt="" />
              </div>
              <p className="md:text-base sm:text-lg text-gray-600">username</p>
            </div>
            <div className="stars">
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide text-left bg-slate-100 w-96 shadow-lg sm:py-6 sm:px-7 py-5 px-6">
          <em>
            <p className="font-bold sm:text-6xl text-5xl text-left text-orange-800">&quot;</p>
          </em>
          <p className="md:text-base sm:text-lg text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
            distinctio adipisci voluptatum voluptatibus corporis expedita
            repellat deserunt at ducimus repudiandae.
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="user-profile">
              <div className="user-profile-thumb md:w-10 md:h-10 sm:w-12 sm:h-12 w-10 h-10 bg-slate-200 rounded-full overflow-hidden mb-2">
                <img src="" alt="" />
              </div>
              <p className="md:text-base sm:text-lg text-gray-600">username</p>
            </div>
            <div className="stars">
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide text-left bg-slate-100 w-96 shadow-lg sm:py-6 sm:px-7 py-5 px-6">
          <em>
            <p className="font-bold sm:text-6xl text-5xl text-left text-orange-800">&quot;</p>
          </em>
          <p className="md:text-base sm:text-lg text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
            distinctio adipisci voluptatum voluptatibus corporis expedita
            repellat deserunt at ducimus repudiandae.
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="user-profile">
              <div className="user-profile-thumb md:w-10 md:h-10 sm:w-12 sm:h-12 w-10 h-10 bg-slate-200 rounded-full overflow-hidden mb-2">
                <img src="" alt="" />
              </div>
              <p className="md:text-base sm:text-lg text-gray-600">username</p>
            </div>
            <div className="stars">
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
              <i className="fa-solid fa-star md:text-base sm:text-lg text-base text-yellow-500" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
