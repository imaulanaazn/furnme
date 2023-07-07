import { useEffect, useState } from 'react';
import { getCategories } from '../utils/fetchData';

export default function LookingForProducts() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function callApi() {
      const res = await getCategories();
      if (res.success) {
        setCategories(res.data);
      } else {
        console.log(res);
      }
    }
    callApi();
  }, []);

  return (
    <section className="looking-for-products xl:px-20 lg:px-12 md:px-16 sm:px-10 px-6 text-center xl:my-20 lg:my-16 md:my-24 my-12">
      <h1 className="md:text-2xl sm:text-xl text-lg font-bold text-center my-4">What Are You Looking For?</h1>
      <div className="products_wrapper md:my-12 my-7 grid xl:grid-cols-7 lg:grid-cols-6 sm:grid-cols-4 grid-cols-3 sm:gap-3 gap-2">
        {
          categories.map((category) => (
            <div className="item w-full overflow-hidden">
              <a href="/#">
                <div className="thumb group relative w-full pb-[100%] bg-slate-200 bg-cover rounded-lg hover:brightness-75 transition-all duration-400" style={{ backgroundImage: `url(${category.thumbnail})` }}>
                  <p className="absolute z-10 text-white top-3/4 left-1/2 -translate-x-1/2 md:text-base text-sm w-max">{category.name}</p>
                  <div className="absolute w-full h-full rounded-lg" style={{ background: 'linear-gradient(0deg, rgba(20,10,10,0.8) 0%, rgba(0,212,255,0) 100%)' }} />
                </div>
              </a>
            </div>
          ))
        }
      </div>
    </section>
  );
}
