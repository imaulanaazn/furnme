/* eslint-disable jsx-a11y/control-has-associated-label */
// import blueShirt from '../assets/img/blue-shirt.jpg';
// import redShirt from '../assets/img/red-shirt.jpg';
// import whiteShirt from '../assets/img/white-shirt.jpg';
import blackShirt from '../assets/img/black-shirt.jpg';
import Navbar from '../components/Navbar';

export default function ProductDetail() {
  return (
    <>
      <Navbar position="static" />

      <section className="w-11/2 md:h-screen md:py-20 md:px-10 lg:px-20 py-12 m-auto flex items-center">
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center lg:gap-20">
          <div className="relative lg:w-2/5">
            <img id="image" className="w-full h-full" src={blackShirt} alt="" />
            <div className="arrows w-full absolute inset-y-1/2 flex justify-between px-3">
              <button type="button" id="prev"><i className="fa-solid fa-chevron-left" /></button>
              <button type="button" id="next"><i className="fa-solid fa-chevron-right" /></button>
            </div>
          </div>
          <div className="p-5 lg:w-3/5">
            <h4 className="text-base font-thin mb-10">Shirts</h4>
            <h1 className="text-5xl font-medium">Mens Shirt</h1>
            <h2 className="text-3xl font-normal mt-2">$43</h2>
            <p className="text-base text-slate-700 my-10 max-w-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore illo, natus rem debitis impedit error blanditiis
              nobis repellendus provident assumenda id. Qui, laudantium.
            </p>
            <div className="flex items-center md:justify-start justify-between space-x-5 my-7">
              <input className="w-24 h-8 px-4 h-10 border border-slate-600 outline-0" type="number" id="amount" />
              <button
                type="button"
                className="flex items-center h-10 px-4 border border-orange-200 bg-orange-200 hover:bg-orange-300 hover:border hover:border-gray-600"
              >
                <i className="fa-solid fa-cart-shopping text-xl mr-3" />
                <span>Add To Cart</span>
              </button>
            </div>
            <button
              type="button"
              className="flex items-center justify-center border border-rose-400 h-10 w-10 rounded-md hover:bg-rose-400 hover:text-white"
            >
              <i className="fa-regular fa-heart text-xl" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
