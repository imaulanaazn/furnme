/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import totalCards from '../utils/totalCards';
import { getRecommendedProducts, updateUserCarts } from '../utils/fetchData';
import getUserData from '../utils/getUserData';

export default function Recommendation() {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  const cardsPerPage = totalCards({
    xl: 5.5, lg: 4.5, md: 3.5, sm: 2.5, xs: 1.6,
  });

  useEffect(() => {
    async function callApi() {
      await getRecommendedProducts()
        .then((res) => (setRecommendedProducts(res.data ? res.data : [])))
        .catch((err) => console.log(err));
    }
    callApi();
  }, []);

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

  return (
    <section className="our-product w-full xl:px-20 lg:px-12 md:px-16 sm:px-10 px-6 xl:my-20 lg:my-16 md:my-24 my-12 pt-32">
      <h1 className="text-left font-bold lg:text-2xl md:text-3xl sm:text-2xl text-xl mb-5">Reccomendation for you</h1>
      <Swiper
        className="swiper-wrapper"
        spaceBetween={20}
        slidesPerView={cardsPerPage}
      >
        {
          recommendedProducts.map((product) => (
            <SwiperSlide key={product._id}>
              <div className="item w-full overflow-hidden">
                <Link to={`/product/${product._id}`}>
                  <div className="thumb group relative w-full pb-[100%] bg-slate-200 bg-cover rounded-lg hover:brightness-75 transition-all duration-400" style={{ backgroundImage: `url(${product.images[0]})` }} />
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
