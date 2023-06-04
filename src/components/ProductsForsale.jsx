/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
// import AllProductsNavbar from './AllProductsNavbar';

export default function AllProducts() {
  const [visible, setVisible] = useState(12);
  // const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const viewMoreBtn = useRef(null);
  const ROOT_URL = process.env.REACT_APP_PUBLIC_API;

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const hideViewMoreBtn = () => {
    viewMoreBtn.current.classList.add('hidden');
  };

  if (visible === products.length) hideViewMoreBtn();

  async function getAllProduct() {
    await axios.get(`${ROOT_URL}/product`)
      .then((result) => result.data && setProducts(result.data))
      .catch((err) => console.log(err));
  }

  // async function getProductsByCategory() {
  //   await axios.get(`${ROOT_URL}/product/categories?category=${category}`)
  //     .then((result) => result.data && setProducts(result.data))
  //     .catch((err) => console.log(err));
  // }

  useEffect(() => {
    // if (category) {
    //   getProductsByCategory();
    // } else {
    //   getAllProduct();
    // }
    getAllProduct();
  }, []);

  console.log(products);

  return (
    <section className="our-product w-full md:px-12 sm:px-10 px-6 mt-20">
      <h1 className="text-left font-bold lg:text-2xl md:text-3xl sm:text-2xl text-xl mb-5">Products</h1>
      <p className="md:text-lg text-base flex-1">Discover Endless Possibilities: Elevate Your Space with Exquisite Furniture Creations</p>

      <div className="flex flex-wrap md:gap-4 gap-3 my-5 items-center">
        <div className="flex items-center p-2 rounded-md border-2 border-solid border-slate-200 lg:text-base md:text-lg text-base">
          <select name="" id="">
            <option value="">All</option>
            <option value="">Chair</option>
          </select>
        </div>
        <div className="flex items-center p-2 rounded-md border-2 border-solid border-slate-200 lg:text-base md:text-lg text-base">
          <select name="" id="">
            <option value="">Price (asc)</option>
            <option value="">Price (desc)</option>
            <option value="">Rate  (asc)</option>
            <option value="">Rate  (desc)</option>
          </select>
        </div>
        <input type="number" id="min" className="md:w-40 w-32 p-2 rounded-md border-2 border-solid border-slate-200 lg:text-base md:text-lg text-base" placeholder="Min" />
        <input type="number" id="max" className="md:w-40 w-32 p-2 rounded-md border-2 border-solid border-slate-200 lg:text-base md:text-lg text-base" placeholder="Max" />
      </div>

      {/* <AllProductsNavbar setCategory={setCategory} className="hidden" /> */}
      <div className="products_wrapper md:my-12 my-7 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  sm:gap-6 gap-10">
        {products?.slice(0, visible).map((product) => (
          <div className="item w-full overflow-hidden" key={product._id}>
            <a href="/#">
              <div className="thumb group relative w-full pb-[100%] bg-slate-200 bg-cover rounded-lg hover:brightness-75 transition-all duration-400" style={{ backgroundImage: `url(${product.img})` }} />
            </a>
            <div className="product_detail mt-4">
              <div className="name-price flex justify-between items-start">
                <p className="text-left lg:text-sm md:text-lg text-base font-semibold">{product.title}</p>
                <p className="text-left lg:text-sm md:text-lg text-base font-semibold">
                  $
                  {product.price}
                  <br />
                  <span className="text-slate-600 font-light text-sm">
                    <del>
                      $
                      {product.price}
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
        ))}
      </div>
      <button type="submit" ref={viewMoreBtn} onClick={showMoreItems} className={`${visible === products.length || products.length < 12 ? 'hidden' : ''} lg:text-base md:text-lg py-2 px-5 border border-solid border-slate-700`}>view more</button>
    </section>
  );
}
