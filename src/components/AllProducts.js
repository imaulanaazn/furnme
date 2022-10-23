/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState, useRef } from 'react';
import star from '../assets/icon/star.svg';

export default function AllProducts() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(12);
  const [productValue, setProductValue] = useState('furniture');
  const viewMoreBtn = useRef(null);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const hideViewMoreBtn = () => {
    viewMoreBtn.current.classList.add('hidden');
  };

  if (visible === data.length) hideViewMoreBtn();

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://pixabay.com/api/?key=28334884-dec5f8a5c85957b716b081a18&q=${productValue}&image_type=photo&pretty=true`);
      const responseData = await response.json();
      setData(responseData.hits);
    }
    getData();
  }, [productValue]);

  return (
    <section className="our_product w-full md:px-12  px-6 text-center">
      <h1 className="text-left font-bold lg:text-2xl md:text-3xl text-xl mb-7">Our Product</h1>
      <div className="product_navbar w-full flex-wrap flex justify-between ">
        <ul className="flex md:w-80 md:flex-none flex-1 justify-between">
          <li className="all-btn text-base"><button type="submit" onClick={() => setProductValue('furniture')}>All product</button></li>
          <li className="chair-btn text-base hidden md:block"><button type="submit" onClick={() => setProductValue('chair')}>Chair</button></li>
          <li className="table-btn text-base hidden md:block"><button type="submit" onClick={() => setProductValue('table')}>Table</button></li>
          <li className="bed-btn text-base hidden md:block"><button type="submit" onClick={() => setProductValue('bed')}>Bed</button></li>
          <li className="decor-btn text-base hidden md:block"><button type="submit" onClick={() => setProductValue('home+decor')}>Decorative</button></li>
        </ul>
        <div className="category">
          <label htmlFor="category" className="text-base">Sort by :</label>
          <select id="category">
            <option className="text-base" value="price">price</option>
            <option className="text-base" value="star">star</option>
            <option className="text-base" value="seller">seller</option>
            <option className="text-base" value="discount">discount</option>
          </select>
        </div>
      </div>
      <div className="products_wrapper md:my-16 my-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {data.slice(0, visible).map((gambar) => (
          <div className="item h-96 w-full  overflow-hidden" key={gambar.id}>
            <div className="thumb group relative w-full h-5/6 bg-slate-200">
              <img src={`${gambar.webformatURL.slice(0, gambar.webformatURL.length - 7)}340.jpg`} alt="" className="w-full h-full object-cover group-hover:brightness-50 transition-all duration-500" />
              <a href="/#" className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/4 group-hover:-translate-y-1/4 opacity-0 group-hover:opacity-100 transition-all duration-500 text-sm text-white py-2 px-3 border border-solid border-white ">view product</a>
            </div>
            <div className="product_detail flex justify-between items-center w-full h-1/6">
              <p className="text-left lg:text-base md:text-lg">

                {gambar.tags.split(',')[0]}
                <br />
                $
                {gambar.imageHeight}
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
      <button type="submit" ref={viewMoreBtn} onClick={visible === data.length ? undefined : showMoreItems} className="lg:text-base md:text-lg py-2 px-5 border border-solid border-slate-700">view more</button>
    </section>
  );
}
