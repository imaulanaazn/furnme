/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
// import AllProductsNavbar from './AllProductsNavbar';

export default function AllProducts() {
  const [visible, setVisible] = useState(12);
  // const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [filterVisible, setFilterVisible] = useState(false);
  const viewMoreBtn = useRef(null);
  const ROOT_URL = process.env.REACT_APP_PUBLIC_API;

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
    <section className="our-products w-full xl:px-20 lg:px-12 md:px-16 sm:px-10 px-6 xl:my-20 lg:my-16 md:my-24 my-12">
      <h1 className="text-left font-bold md:text-2xl sm:text-xl text-lg mb-5">Discounted Products</h1>
      <p className="md:text-lg text-base flex-1">Discover Endless Possibilities: Elevate Your Space with Exquisite Furniture Creations</p>

      {/* <AllProductsNavbar setCategory={setCategory} className="hidden" /> */}
      <div className="products-wrapper lg:flex xl:gap-7 lg:gap-5 lg:mt-10 mt-6 relative">
        <button
          type="button"
          className="lg:hidden py-2 px-6 border border-slate-300 rounded-md my-7"
          onClick={() => { setFilterVisible((prev) => !prev); }}
        >
          Filter
        </button>
        <div
          className={`filter-side xl:w-2/12 lg:w-3/12 sm:w-min w-full lg:shadow-none shadow-lg rounded-lg 
          lg:static absolute top-20 left-0 z-10 bg-white lg:p-0 p-5 lg:h-auto ${filterVisible ? 'h-auto' : 'h-0 py-0'} 
          overflow-hidden transition-all duration-400`}
        >
          <div className="mb-5">
            <h6 className="font-semibold mb-4">Kategori</h6>
            <div className="flex items-center gap-2 my-2">
              <input className="w-6 h-6 hover:cursor-pointer" id="filter-table" type="checkbox" />
              <label htmlFor="filter-table" className="text-slate-600 hover:cursor-pointer">Table</label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <input className="w-6 h-6 hover:cursor-pointer" id="filter-chair" type="checkbox" />
              <label htmlFor="filter-chair" className="text-slate-600 hover:cursor-pointer">Chair</label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <input className="w-6 h-6 hover:cursor-pointer" id="filter-bed" type="checkbox" />
              <label htmlFor="filter-bed" className="text-slate-600 hover:cursor-pointer">Bed</label>
            </div>
          </div>

          <div className="my-5">
            <h6 className="font-semibold mb-4">Price</h6>
            <input type="number" className="border border-solid border-slate-400 p-2 rounded-md lg:w-full" placeholder="max price" />
            <input type="number" className="border border-solid border-slate-400 p-2 rounded-md lg:w-full mt-3" placeholder="min price" />
          </div>

          <div className="my-5">
            <h6 className="font-semibold mb-4">Rating</h6>
            <div className="flex items-center gap-2 my-2">
              <input className="w-6 h-6 hover:cursor-pointer" id="filter-rating" type="checkbox" />
              <label htmlFor="filter-rating" className="text-slate-600 hover:cursor-pointer">
                <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500 mr-1" />
                4 Keatas
              </label>
            </div>
          </div>

          <div className="my-5">
            <h6 className="font-semibold mb-4">Promo</h6>
            <div className="flex items-center gap-2 my-2">
              <input className="w-6 h-6 hover:cursor-pointer" id="filter-discount" type="checkbox" />
              <label htmlFor="filter-discount" className="text-slate-600 hover:cursor-pointer">
                Discount
              </label>
            </div>
            <div className="flex items-center gap-2 my-2">
              <input className="w-6 h-6 hover:cursor-pointer" id="filter-flash-sale" type="checkbox" />
              <label htmlFor="filter-flash-sale" className="text-slate-600 hover:cursor-pointer">
                Flash sale
              </label>
            </div>
          </div>

          <button
            type="button"
            className="lg:hidden py-2 px-3 rounded-md mt-5 bg-orange-100"
          >
            Apply filter
          </button>
        </div>

        <div className="products-side xl:w-10/12 lg:w-9/12 w-full">
          <div className="products grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  sm:gap-6 gap-10">
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
          <button
            type="submit"
            ref={viewMoreBtn}
            onClick={() => { setVisible((prevValue) => prevValue + 4); }}
            className={`${visible === products.length || products.length < 12 ? 'hidden' : ''} block mx-auto mt-10 lg:text-base md:text-lg py-2 px-5 border border-solid border-slate-700 rounded-md`}
          >
            view more

          </button>
        </div>
      </div>
    </section>
  );
}
