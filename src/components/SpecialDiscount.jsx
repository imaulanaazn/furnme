/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import totalCards from '../utils/totalCards';
import { getSpecialDiscount } from '../utils/fetchData';

export default function SpecialDiscount() {
  const [specialDiscountData, setSpecialDiscountData] = useState([]);

  const cardsPerPage = totalCards({
    xl: 5.5, lg: 4.5, md: 3.5, sm: 2.5, xs: 1.6,
  });
  useEffect(() => {
    async function callAPI() {
      await getSpecialDiscount()
        .then((res) => setSpecialDiscountData(res?.data))
        .catch((err) => console.log(err));
    }
    callAPI();
  }, []);

  console.log(specialDiscountData);

  return (
    <section className="our-product w-full xl:px-20 lg:px-12 md:px-16 sm:px-10 px-6 xl:my-20 lg:my-16 md:my-24 my-12">
      <h1 className="md:text-2xl sm:text-xl text-lg font-bold text-center mb-12">Special Discount</h1>
      <Swiper
        className="swiper-wrapper"
        spaceBetween={20}
        slidesPerView={cardsPerPage}
      >
        {
          specialDiscountData?.map((data) => (
            <SwiperSlide key={data._id}>
              <div className="item w-full overflow-hidden">
                <a href="/#">
                  <div className="thumb group w-full pb-[100%] bg-slate-200 bg-cover rounded-lg hover:brightness-75 transition-all duration-400" style={{ backgroundImage: `url(${data.images[0]})` }} />
                </a>
                <div className="product_detail mt-4">
                  <div className="name-price flex justify-between items-start">
                    <p className="text-left lg:text-sm md:text-lg text-base font-semibold">
                      {data.name}
                      <br />
                      <span className="text-rose-700 text-sm">
                        {data.discount}
                        %
                      </span>
                    </p>
                    <p className="text-left lg:text-sm md:text-lg text-base font-semibold">
                      $
                      {data.price - ((data.price * data.discount) / 100)}
                      <br />
                      <span className="text-slate-600 font-light text-sm">
                        <del>
                          $
                          {data.price}
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
                    <button type="button">
                      <i className="fa-solid fa-cart-shopping lg:text-2xl md:text-xl text-lg bg-orange-200 py-1 px-2 rounded-md text-orange-800" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
}
