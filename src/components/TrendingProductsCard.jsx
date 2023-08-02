import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { string, number, arrayOf } from 'prop-types';
import getUserData from '../utils/getUserData';
import { updateUserCarts } from '../utils/fetchData';

export default function TrendingProductsCard({
  colSpan, product,
}) {
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
    <div className={`card bg-orange-100 h-96 w-full md:py-8 md:px-7 sm:py-7 sm:px-6 py-8 px-6 ${colSpan} rounded-lg`}>
      <div className="home_decor_thumb h-4/6 w-full relative">
        <Link to={`/product/${product._id}`}>
          <img src={product.images[0]} className="h-full m-auto" alt="" />
        </Link>
      </div>

      <div className="h-2/6 w-full flex flex-col justify-end sm:gap-y-2 gap-y-2 ">
        <h3 className="max-w-1/2 lg:text-lg md:text-xl text-base text-left font-semibold">{product.name}</h3>
        <div className="flex justify-between">
          {/* eslint-disable-next-line no-restricted-globals */}
          <button
            type="button"
            onClick={() => { addToCart(product._id); }}
            className="flex justify-center items-center font-bold w-12 h-12 bg-orange-800 text-orange-200 rounded-lg"
          >
            <i className="fa-solid fa-cart-shopping text-lg" />
          </button>
          <div className="price">
            <div className="discount flex items-end mb-1 gap-2">
              <p className="lg:text-sm md:text-base text-sm text-slate-600 line-through">
                $
                {product.discount ? `${product.price}` : ''}
              </p>
              <span className="product-info__discount font-medium text-sm md:text-xl lg:text-sm text-rose-700">
                {`%${product.discount}`}
              </span>
            </div>
            <p className="lg:text-base md:text-lg text-base font-semibold">
              $
              {product.discount ? `${product.price - ((product.price * product.discount) / 100)}` : product.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

TrendingProductsCard.propTypes = {
  product: {
    productId: string,
    images: arrayOf(string),
    name: string,
    price: number,
    quantity: number,
  },
  colSpan: string,
};

TrendingProductsCard.defaultProps = {
  product: {
    productId: string,
    images: arrayOf(string),
    name: string,
    price: number,
    quantity: number,
  },
  colSpan: string,
};
