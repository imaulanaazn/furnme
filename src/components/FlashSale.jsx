/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import totalCards from '../utils/totalCards';
import { getFLashSaleProd, updateUserCarts } from '../utils/fetchData';
import getUserData from '../utils/getUserData';

export default function FlashSale() {
  const [products, setProducts] = useState([]);
  const [countDownTime, setCountDownTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const cardsPerPage = totalCards({
    xl: 5.5, lg: 4.5, md: 3.5, sm: 2.5, xs: 1.6,
  });

  async function addToCart(productId) {
    const { id: userId } = getUserData();

    await updateUserCarts({
      userId,
      productId,
      quantity: 1,
    })
      .then((res) => (res.data ? toast.success(res.data.message) : toast.error(res.message)))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    function updateCountdown() {
      const timeDifference = products.length > 0
        ? new Date(products[0].flashSaleEnd) - new Date() : 0;
      if (timeDifference <= 0) {
        // eslint-disable-next-line no-use-before-define
        clearInterval(countdownInterval);
        setCountDownTime({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountDownTime({ hours, minutes, seconds });
      }
    }
    const countdownInterval = setInterval(updateCountdown, 1000);
  }, [products]);

  useEffect(() => {
    async function callAPI() {
      await getFLashSaleProd()
        .then((res) => setProducts(res.data ? res.data : []))
        .catch((err) => console.log(err));
    }
    callAPI();
  }, []);

  return (
    <section className="our-product w-full xl:px-20 lg:px-12 md:px-16 sm:px-10 px-6 xl:my-20 lg:my-16 md:my-24 my-12">
      <div className="title flex items-end gap-1.5 mb-7">
        <h1 className="text-left font-bold lg:text-2xl md:text-3xl sm:text-2xl text-xl w-full md:w-auto mr-2">
          Flash Sale
          <i className="fa-solid fa-bolt ml-1 text-lg" />
        </h1>
        <span className="text-base font-normal mr-2 text-slate-600">Berakhir dalam </span>
        <span className="w-8 h-8 bg-rose-500 flex justify-center items-center text-white font-medium rounded-md">{countDownTime.hours}</span>
        <span className="self-center font-medium text-rose-500">:</span>
        <span className="w-8 h-8 bg-rose-500 flex justify-center items-center text-white font-medium rounded-md">{countDownTime.minutes}</span>
        <span className="self-center font-medium text-rose-500">:</span>
        <span className="w-8 h-8 bg-rose-500 flex justify-center items-center text-white font-medium rounded-md">{countDownTime.seconds}</span>
      </div>
      <Swiper
        className="swiper-wrapper"
        spaceBetween={20}
        slidesPerView={cardsPerPage}
      >
        {
          products.map((product) => (
            <SwiperSlide>
              <div className="item w-full overflow-hidden">
                <Link to={`/product/${product._id}`}>
                  <div
                    className="thumb group relative w-full pb-[100%] bg-slate-200 bg-cover rounded-lg hover:brightness-75 transition-all duration-400"
                    style={{ backgroundImage: `url(${product.images[0]})` }}
                  />
                </Link>
                <div className="product_detail mt-4">
                  <div className="name-price flex justify-between items-start">
                    <p className="text-left lg:text-sm md:text-lg text-base font-semibold">
                      {product.name}
                      <br />
                      <span className="text-rose-700 text-sm">
                        {product.discount ? `${product.discount}%` : ''}
                      </span>
                    </p>
                    <p className="text-left lg:text-sm md:text-lg text-base font-semibold">
                      $
                      {product.discount ? `${product.price - ((product.price * product.discount) / 100)}` : product.price}
                      <br />
                      <span className="text-slate-600 font-light text-sm">
                        <del>
                          {product.discount ? `$${product.price}` : <p className="opacity-0">.</p>}
                        </del>
                      </span>
                    </p>
                  </div>
                  <div className="rate-cart mt-3 flex justify-between items-center">
                    <div className="stars flex gap-0.5">
                      {
                        Array.from({ length: Math.round(product.rating) }, (_, i) => i + 1)
                          .map(() => (
                            <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500" />
                          ))
                      }
                    </div>
                    <button type="button" onClick={() => { addToCart(product._id); }}>
                      <i className="fa-solid fa-cart-shopping text-2xl bg-orange-200 py-1 px-2 rounded-md text-orange-800" />
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
