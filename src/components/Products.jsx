/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useEffect, useState, useRef } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import getUserData from '../utils/getUserData';
import { updateUserCarts, getAllProducts } from '../utils/fetchData';

import ProductsFilter from './ProductsFilter';

export default function AllProducts() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(12);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({
    category: [],
    minPrice: undefined,
    maxPrice: undefined,
    rating: 0,
    discount: false,
    flashSale: false,
    limit: 10,
  });
  const [filterVisible, setFilterVisible] = useState(false);
  const viewMoreBtn = useRef(null);

  function hideViewMoreBtn() {
    viewMoreBtn.current.classList.add('hidden');
  }

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
    async function callApi() {
      await getAllProducts(filter)
        .then((res) => setProducts(res.data ? res.data : []))
        .catch((err) => console.log(err));
    }
    callApi();
  }, [searchParams]);

  useEffect(() => {
    if (visible === products.length) hideViewMoreBtn();
  }, [visible]);

  useEffect(() => {
    const category = searchParams.get('category');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const rating = searchParams.get('rating');
    const discount = searchParams.get('discount');
    const flashSale = searchParams.get('flashSale');
    const limit = searchParams.get('limit');

    setFilter({
      category: category ? category.split(',') : [],
      minPrice: minPrice ? parseInt(minPrice, 10) : undefined,
      maxPrice: maxPrice ? parseInt(maxPrice, 10) : undefined,
      rating: rating ? parseFloat(rating) : 0,
      discount: discount === 'true',
      flashSale: flashSale === 'true',
      limit: limit ? parseInt(limit, 10) : 10,
    });
  }, []);

  useEffect(() => {
    const {
      category,
      minPrice,
      maxPrice,
      rating,
      discount,
      flashSale,
      limit,
    } = filter;

    // Update the query params in the URL
    searchParams.set('category', category);
    if (minPrice !== undefined) searchParams.set('minPrice', minPrice);
    if (maxPrice !== undefined) searchParams.set('maxPrice', maxPrice);
    searchParams.set('rating', rating);
    searchParams.set('discount', discount);
    searchParams.set('flashSale', flashSale);
    searchParams.set('limit', limit);

    // Navigate to the current URL with updated query params
    navigate(`?${searchParams.toString()}`);
  }, [filter]);

  return (
    <section className="our-products w-full xl:px-20 lg:px-12 md:px-16 sm:px-10 px-6 xl:my-20 lg:my-16 md:my-24 my-12">
      <h1 className="text-left font-bold lg:text-2xl md:text-3xl sm:text-2xl text-xl mb-5">Products</h1>
      <p className="md:text-lg text-base flex-1">Discover Endless Possibilities: Elevate Your Space with Exquisite Furniture Creations</p>

      <div className="products-wrapper lg:flex xl:gap-7 lg:gap-5 lg:mt-10 mt-6 relative">
        <button
          type="button"
          className="lg:hidden py-2 px-6 border border-slate-300 rounded-md my-7"
          onClick={() => { setFilterVisible((prev) => !prev); }}
        >
          Filter
        </button>
        <ProductsFilter filter={filter} setFilter={setFilter} filterVisible={filterVisible} />

        <div className="products-side xl:w-10/12 lg:w-9/12 w-full">
          <div className="products grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  sm:gap-6 gap-10">
            {products?.slice(0, visible).map((product) => (
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
