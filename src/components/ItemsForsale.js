import { useState, useEffect, useRef } from 'react';
import star from '../assets/icon/star.svg';
import ItemsForsaleNavbar from './ItemsForsaleNavbar';

export default function ItemsForsale() {
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
    <section className="our_product w-full md:px-12 px-6 py-20 text-center">
      <h1 className="text-left font-bold text-lg lg:text-2xl md:text-3xl mb-7">Forsale Products</h1>
      <ItemsForsaleNavbar setProductValue={setProductValue} />
      <div className="products_wrapper md:my-16 my-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {data.slice(0, visible).map((gambar) => (
          <div className="item h-96 w-full  overflow-hidden" key={gambar.id}>
            <div className="thumb group relative w-full h-5/6 bg-slate-200">
              <img src={`${gambar.webformatURL.slice(0, gambar.webformatURL.length - 7)}340.jpg`} alt="" className="w-full h-full object-cover group-hover:brightness-50 transition-all duration-500" />
              <a href="/#" className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/4 group-hover:-translate-y-1/4 opacity-0 group-hover:opacity-100 transition-all duration-500 text-sm text-white py-2 px-3 border border-solid border-white ">view product</a>
            </div>
            <div className="product_detail flex justify-between items-center w-full h-1/6">
              <div>
                <p className="text-left text-base font-semibold">
                  {gambar.tags.split(',')[0]}
                </p>
                <p className="text-left text-base text-slate-600">
                  $
                  {gambar.imageHeight}
                </p>
              </div>
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
      <button type="submit" ref={viewMoreBtn} onClick={visible === data.length ? undefined : showMoreItems} className="lg:text-sm md:text-base py-2 px-5 border border-solid border-slate-700">view more</button>
    </section>
  );
}
