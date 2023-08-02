/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { getCategories } from '../utils/fetchData';

export default function ProductsFilter(props) {
  const [categories, setCategories] = useState([]);
  const { filter, setFilter, filterVisible } = props;

  function updateCategoryFilter(id) {
    let tempCategory = filter.category;
    if (!tempCategory) {
      tempCategory = [id];
    } else {
      const index = tempCategory.indexOf(id);
      if (index !== -1) {
        tempCategory.splice(index, 1);
      } else {
        tempCategory.push(id);
      }
    }
    return tempCategory;
  }

  useEffect(() => {
    async function callApi() {
      await getCategories()
        .then((res) => setCategories(res?.data))
        .catch((err) => console.log(err));
    }
    callApi();
  }, []);

  return (
    <div
      className={`filter-side xl:w-2/12 lg:w-3/12 sm:w-min w-full lg:shadow-none shadow-lg rounded-lg 
          lg:static absolute top-20 left-0 z-10 bg-white lg:p-0 p-5 lg:h-auto ${filterVisible ? 'h-auto' : 'h-0 py-0'} 
          overflow-hidden transition-all duration-400`}
    >
      <div className="mb-5">
        <h6 className="font-semibold mb-4">Kategori</h6>
        {
              categories.map((category) => (
                <div className="flex items-center gap-2 my-2" key={category._id}>
                  <input
                    className="w-6 h-6 shrink-0 hover:cursor-pointer"
                    id={category._id}
                    type="checkbox"
                    checked={filter.category.includes(category._id)}
                    onChange={() => {
                      setFilter({ ...filter, category: updateCategoryFilter(category._id) });
                    }}
                  />
                  <label htmlFor={category._id} className="text-slate-600 hover:cursor-pointer">{category.name}</label>
                </div>
              ))
            }
      </div>

      <div className="my-5">
        <h6 className="font-semibold mb-4">Price</h6>
        <input
          type="number"
          className="border border-solid border-slate-400 p-2 rounded-md lg:w-full"
          placeholder="max price"
          onChange={(e) => {
            setFilter({ ...filter, maxPrice: e.target.value });
          }}
        />
        <input
          type="number"
          className="border border-solid border-slate-400 p-2 rounded-md lg:w-full mt-3"
          placeholder="min price"
          onChange={(e) => {
            setFilter({ ...filter, minPrice: e.target.value });
          }}
        />
      </div>

      <div className="my-5">
        <h6 className="font-semibold mb-4">Rating</h6>
        <div className="flex items-center gap-2 my-2">
          <input
            className="w-6 h-6 hover:cursor-pointer"
            id="filter-rating"
            type="checkbox"
            onChange={(e) => { setFilter({ ...filter, rating: e.target.checked ? 4 : 0 }); }}
          />
          <label htmlFor="filter-rating" className="text-slate-600 hover:cursor-pointer">
            <i className="fa-solid fa-star md:text-base sm:text-lg text-sm text-yellow-500 mr-1" />
            4 Keatas
          </label>
        </div>
      </div>

      <div className="my-5">
        <h6 className="font-semibold mb-4">Promo</h6>
        <div className="flex items-center gap-2 my-2">
          <input
            className="w-6 h-6 hover:cursor-pointer"
            id="filter-discount"
            type="checkbox"
            onChange={(e) => { setFilter({ ...filter, discount: e.target.checked }); }}
          />
          <label htmlFor="filter-discount" className="text-slate-600 hover:cursor-pointer">
            Discount
          </label>
        </div>
        <div className="flex items-center gap-2 my-2">
          <input
            className="w-6 h-6 hover:cursor-pointer"
            id="filter-flash-sale"
            type="checkbox"
            onChange={(e) => { setFilter({ ...filter, flashSale: e.target.checked }); }}
          />
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
  );
}
