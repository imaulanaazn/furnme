import { Link } from 'react-router-dom';
import sofa from '../assets/img/sofa_showcase_bg.webp';
import table from '../assets/img/table_showcase_bg.webp';
import lamp from '../assets/img/lamp_showcase_bg.webp';

export default function HomeHero() {
  return (
    <section className="hero relative w-full h-screen">
      <img src={table} className="w-24 xl:w-28 lg:block hidden absolute bottom-0 left-1/4 -translate-x-1/2" alt="table" />
      <img src={lamp} className="w-24 xl:w-28 lg:block hidden absolute top-0 left-1/4 -translate-x-1/2" alt="lamp" />
      <img src={sofa} className="xl:w-96 lg:w-80 md:w-96 absolute bottom-0 lg:left-3/4 left-1/2 -translate-x-1/2" alt="sofa" />
      <div className="text text-center w-5/6  absolute lg:top-2/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 zindex-1">
        <h1 className="title text-slate-800 font-extrabold text-lg xl:text-3xl lg:text-2xl md:text-3xl text-center md:max-w-[24rem] md:mx-auto">Comfy Furniture for Your Home</h1>
        <p className="xl:text-lg lg:text-base md:text-xl text-sm text-slate-500 mt-2 mb-10">Discover the most beautiful furniture</p>
        <Link to="/shop" className="xl:text-base lg:text-sm md:text-base text-sm font-bold text-orange-800 bg-orange-200 md:py-3 py-3 md:px-4 px-3">Shop Now</Link>
      </div>
    </section>
  );
}
