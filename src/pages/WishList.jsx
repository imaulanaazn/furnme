import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getLikedProd, updateUserCarts } from '../utils/fetchData';
import getUserData from '../utils/getUserData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WishList() {
  const [likedProds, setLikedProds] = useState([]);

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
    async function callAPI() {
      await getLikedProd()
        .then((res) => setLikedProds(res.data ? res.data : []))
        .catch((err) => console.log(err));
    }
    callAPI();
  }, []);

  return (
    <>

      <Navbar />
      <div className="products-side w-full xl:px-20 lg:px-12 md:px-16 sm:px-10 px-6 pt-40 md:pt-44 lg:pt-46 xl:pt-48">

        <h1 className="text-2xl lg:text-xl xl:text-2xl text-center mb-9">
          MY WISHLIST
          <span className="ml-3"><i className="fa-regular fa-heart" /></span>
        </h1>
        <div className="products grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-10">
          {
            likedProds.map((product) => (
              <div className="item w-full overflow-hidden" key={product._id}>
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
                      <i className="fa-solid fa-cart-shopping text-2xl bg-orange-200 py-1 px-2 rounded-md text-orange-800" />
                    </button>
                  </div>
                </div>
              </div>
            ))
        }
        </div>
        {/* <button
            type="submit"
            ref={viewMoreBtn}
            onClick={() => { setVisible((prevValue) => prevValue + 4); }}
            className={`${visible === products.length || products.length < 12 ? 'hidden' : ''}
            block mx-auto mt-10 lg:text-base md:text-lg py-2 px-5
            border border-solid border-slate-700 rounded-md`}
          >
            view more
          </button> */}
      </div>

      <Footer />
    </>
  );
}
