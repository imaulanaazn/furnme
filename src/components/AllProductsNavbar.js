/* eslint-disable jsx-a11y/label-has-associated-control */
import { func } from 'prop-types';

export default function AllProductsNavbar(props) {
  const { setCategory } = props;
  return (
    <div className="product_navbar w-full flex-wrap flex justify-between ">
      <ul className="flex md:w-80 md:flex-none flex-1 justify-between">
        <li className="all-btn text-base"><button type="submit" onClick={() => setCategory('')}>All product</button></li>
        <li className="chair-btn text-base hidden md:block"><button type="submit" onClick={() => setCategory('chair')}>Chair</button></li>
        <li className="table-btn text-base hidden md:block"><button type="submit" onClick={() => setCategory('table')}>Table</button></li>
        <li className="bed-btn text-base hidden md:block"><button type="submit" onClick={() => setCategory('bed')}>Bed</button></li>
        <li className="decor-btn text-base hidden md:block"><button type="submit" onClick={() => setCategory('decorative')}>Decorative</button></li>
      </ul>
      {/* <div className="category">
        <label htmlFor="category" className="text-base">Sort by :</label>
        <select id="category">
          <option className="text-base" value="price">price</option>
          <option className="text-base" value="star">star</option>
          <option className="text-base" value="seller">seller</option>
          <option className="text-base" value="discount">discount</option>
        </select>
      </div> */}
    </div>
  );
}

AllProductsNavbar.propTypes = {
  setCategory: func.isRequired,
};
