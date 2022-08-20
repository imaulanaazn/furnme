import { Link } from 'react-router-dom';
import sofa from '../assets/img/sofa_showcase_bg.png';
import table from '../assets/img/table_showcase_bg.png';
import lamp from '../assets/img/lamp_showcase_bg.png';

export default function HomeHero() {
  return (
    <section className="hero relative w-full h-screen bg-slate-400">
      <div className="left-side absolute lg:w-1/2 w-full h-full bg-orange-200 top-0 left-0">hello</div>
      <div className="right-side hidden lg:block absolute w-1/2 h-full bg-orange-100 top-0 left-1/2" />
      <img src={table} className="w-24 lg:block hidden absolute bottom-0 left-1/4 -translate-x-1/2" alt="table" />
      <img src={lamp} className="w-24 lg:block hidden absolute top-0 left-1/4 -translate-x-1/2" alt="lamp" />
      <img src={sofa} className="lg:w-80 md:w-96 absolute bottom-0 lg:left-3/4 left-1/2 -translate-x-1/2" alt="sofa" />
      <div className="text text-center w-5/6  absolute lg:top-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 zindex-1">
        <h1 className="title text-slate-700 font-extrabold lg:text-2xl md:text-3xl text-center">Comfy Furniture for Your Home</h1>
        <p className="lg:text-lg md:text-xl text-slate-700 mt-2 mb-10">Discover the most beautiful furniture</p>
        <Link to="/shop" className="lg:text-sm md:text-base font-bold text-orange-800 bg-white py-2 px-3 rounded-full">Shop Now</Link>
      </div>
    </section>
  );
}
