/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getProductById } from '../utils/fetchData';

const productInitialData = {
  category: [{
    name: '',
    thumbnail: '',
    _id: '',
  }],
  comments: [],
  description: '',
  discount: 0,
  flashSaleEnd: null,
  flashSaleAtart: null,
  images: [],
  name: '',
  price: 0,
  rating: 0,
  similarProduct: [],
  _id: '',
};

export default function ProductDetail() {
  const [product, setProduct] = useState(productInitialData);
  const { id: productId } = useParams();
  const [prodQuantity, setProdQuantity] = useState(1);
  // const navigate = useNavigate();

  useEffect(() => {
    async function callAPI() {
      await getProductById(productId)
        .then((res) => {
          setProduct(res.data ? res.data : {});
        })
        .catch((err) => console.log(err));
    }

    callAPI();
  }, []);

  console.log(product);

  return (
    <>
      <Navbar position="static" />

      <section className="product-wrapper w-full xl:px-20 lg:px-12 md:px-16 sm:px-10 px-6 pt-36 md:pt-44 pb-8 md:pb-12 flex flex-col lg:flex-row md:justify-between xl:gap-20 lg:gap-14 gap-7">
        <div className="product-left relative lg:w-1/2 h-min">
          <img id="image" className="w-full lg:w-11/12 xl:w-10/12 h-auto mx-auto" src={product.images[0]} alt="" />
          <div className="arrows inset-y-1/2 w-full xl:w-10/12 absolute flex justify-between px-3 xl:inset-x-1/2 xl:-translate-x-1/2">
            <button type="button" id="prev" className="w-8 h-8 md:w-10 md:h-8 lg:w-8 lg:h-8 bg-white rounded-full opacity-80 hover:opacity-100 -translate-y-1/2 transition-all">
              <i className="fa-solid fa-chevron-left" />
            </button>
            <button type="button" id="next" className="w-8 h-8 md:w-10 md:h-8 lg:w-8 lg:h-8 bg-white rounded-full opacity-80 hover:opacity-100 -translate-y-1/2 transition-all">
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>

        <div className="product-right lg:w-1/2">
          <div className="product-categories mb-4">
            {
            product.category.map((category) => (
              <Link to={`/shop?category=${category._id}`} className="product-category font-light md:text-xl lg:text-sm text-slate-600 border border-slate-600 rounded-md px-2 py-1 max-w-max mr-2">
                {product.category[0].name}
              </Link>
            ))
          }
          </div>
          <h1 className="product-name text-4xl md:text-5xl lg:text-4xl">{product.name}</h1>
          <h2 className="product-price text-lg md:text-2xl lg:text-lg font-normal my-1 md:my-2 lg:my-1">
            $
            {product.price}
          </h2>
          <div className="product-info flex items-end mt-1">
            <p className="product-info__discount text-sm md:text-xl lg:text-sm bg-rose-500 text-white py-1 px-1 rounded">
              {product.discount ? product.discount : ''}
              {' '}
              %
            </p>
            <span className="product-info__discounted-price text-sm md:text-base lg:text-sm text-slate-600 font-light ml-2 mr-4 md:ml-3 md:mr-5 lg:ml-2 lg:mr-4">
              <del>
                {product.discount ? `$${product.price - ((product.price * product.discount) / 100)}` : ' '}
              </del>
            </span>
            <div className="product-info__rating">
              {
                 Array.from({ length: Math.round(product.rating) }, (_, i) => i + 1)
                   .map(() => (
                     <i className="fa-solid fa-star text-sm sm:text-lg lg:text-sm text-yellow-500" />
                   ))
              }
            </div>
          </div>
          <p className="product-desc my-6 md:my-8 lg:my-6 md:text-lg lg:text-base text-slate-700 max-w-md">
            {product.description}
          </p>
          <button type="button" className="product-like flex items-center justify-center">
            <i className="fa-solid fa-heart text-2xl md:text-3xl lg:text-2xl text-slate-300 hover:text-rose-500 transition-all" />
          </button>
          <form className="product-quantity my-4 md:my-5 lg:my-4 w-max" onSubmit={() => { }}>
            <div className="product-quantity__counter flex space-x-2 mb-4 md:mb-5 lg:mb-4">
              <button
                type="button"
                disabled={prodQuantity <= 1}
                className="product-quantity__dec w-9 h-9 md:w-10 md:h-10 lg:w-9 md:h-9 md:text-lg border border-slate-700 rounded-md hover:bg-orange-200 hover:border-none transition-all"
                onClick={() => setProdQuantity(prodQuantity - 1)}
              >
                -
              </button>
              <input
                className="product-quantity__value md:text-lg px-4 border border-slate-600 outline-0 h-9 w-20 md:h-10 md:w-24 md:h-9 rounded-md"
                type="number"
                id="amount"
                max={1000}
                required
                value={prodQuantity}
                onChange={(e) => { setProdQuantity(parseInt(e.target.value, 10)); }}
              />
              <button
                type="button"
                className="product-quantity__inc md:text-lg w-9 h-9 md:w-10 md:h-10 lg:w-9 md:h-9 border border-slate-700 rounded-md hover:bg-orange-200 hover:border-none transition-all"
                onClick={() => setProdQuantity(prodQuantity + 1)}
              >
                +
              </button>
            </div>
            <button
              type="submit"
              className="product-cart__add flex items-center h-10 w-full md:h-11 px-4 border border-orange-200
                 bg-orange-200 hover:bg-orange-300 rounded-md transition-all"
            >
              <i className="fa-solid fa-cart-shopping text-xl mr-3 text-orange-800" />
              <span>Add To Cart</span>
            </button>
          </form>

        </div>
      </section>
    </>
  );
}
