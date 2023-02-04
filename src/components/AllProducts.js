/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import star from '../assets/icon/star.svg';
import AllProductsNavbar from './AllProductsNavbar';

export default function AllProducts() {
  const [visible, setVisible] = useState(12);
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const viewMoreBtn = useRef(null);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const hideViewMoreBtn = () => {
    viewMoreBtn.current.classList.add('hidden');
  };

  if (visible === products.length) hideViewMoreBtn();

  async function getAllProduct() {
    await axios.get('http://localhost:4000/product')
      .then((result) => result.data && setProducts(result.data))
      .catch((err) => console.log(err));
  }

  async function getProductsByCategory() {
    await axios.get(`http://localhost:4000/product/categories?category=${category}`)
      .then((result) => result.data && setProducts(result.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (category) {
      getProductsByCategory();
    } else {
      getAllProduct();
    }
  }, [category]);

  return (
    <section className="our_product w-full md:px-12  px-6 text-center">
      <h1 className="text-left font-bold lg:text-2xl md:text-3xl text-xl mb-7">Our Product</h1>
      <AllProductsNavbar setCategory={setCategory} />
      <div className="products_wrapper md:my-16 my-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {products?.slice(0, visible).map((product) => (
          <div className="item h-96 w-full  overflow-hidden" key={product._id}>
            <div className="thumb group relative w-full h-5/6 bg-slate-200">
              <img src={product.img} alt="" className="w-full h-full object-cover group-hover:brightness-50 transition-all duration-500" />
              <a href="/#" className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/4 group-hover:-translate-y-1/4 opacity-0 group-hover:opacity-100 transition-all duration-500 text-sm text-white py-2 px-3 border border-solid border-white ">view product</a>
            </div>
            <div className="product_detail flex justify-between items-center w-full h-1/6">
              <p className="text-left lg:text-base md:text-lg">

                {product.categories}
                <br />
                $
                {product.price}
              </p>
              <div className="stars flex w-1/3 justify-evenly">
                <img src={star} alt="stars icons" width="15" />
                <img src={star} alt="stars icons" width="15" />
                <img src={star} alt="stars icons" width="15" />
                <img src={star} alt="stars icons" width="15" />
                <img src={star} alt="stars icons" width="15" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button type="submit" ref={viewMoreBtn} onClick={visible === products.length ? undefined : showMoreItems} className="lg:text-base md:text-lg py-2 px-5 border border-solid border-slate-700">view more</button>
    </section>
  );
}
