// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import totalCards from '../utils/totalCards';

export default function Comments() {
  const cardsPerPage = totalCards({
    xl: 3.5, lg: 2.5, md: 1.6, sm: 1.5, xs: 1.2,
  });
  return (
    <section className="comments text-center xl:px-20 lg:px-12 md:px-16 sm:px-10 px-6 xl:my-20 lg:my-16 md:my-24 my-12">
      <h1 className="md:text-2xl sm:text-xl text-lg font-bold text-center my-4">What do the say?</h1>
      <p className="lg:text-base sm:text-lg font-normal text-slate-600 text-center lg:w-3/4 w-full mb-10 mx-auto sm:max-w-[34rem] max-w-[28rem]">
        Lorem ipsum iat optio totam mollitia atquefacilis
        eligendi quibusdam amet, commodi hic iste! Assumenda!
      </p>

      <Swiper
        className="swiper-wrapper"
        spaceBetween={20}
        slidesPerView={cardsPerPage}
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
          <div className="flex justify-between items-end mt-5">
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
          <div className="flex justify-between items-end mt-5">
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
          <div className="flex justify-between items-end mt-5">
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
          <div className="flex justify-between items-end mt-5">
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
          <div className="flex justify-between items-end mt-5">
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
          <div className="flex justify-between items-end mt-5">
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
