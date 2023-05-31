import { Link } from 'react-router-dom';
import sofa from '../assets/img/sofa_showcase_bg.webp';
import plant from '../assets/img/plant.webp';
import hangingLamp from '../assets/img/hanging-lamp.png';

export default function HomeHero() {
  return (
    <section className="hero relative w-full h-screen">
      <img src={plant} className="w-24 xl:w-28 lg:block hidden absolute bottom-0 left-1/4 -translate-x-1/2" alt="table" />
      <img src={hangingLamp} className="xl:w-28 lg:w-24 sm:w-32 w-24 absolute lg:top-40 lg:left-1/5 md:top-36 md:left-40 sm:left-28 top-32 left-16 z-10" alt="lamp" />
      <img src={sofa} className="xl:w-96 lg:w-80 md:w-96 sm:w-8/12 w-10/12 absolute bottom-0 lg:left-3/4 left-1/2 -translate-x-1/2" alt="sofa" />
      <div className="text text-center w-5/6  absolute lg:top-2/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 zindex-1">
        <h1 className="title text-slate-800 font-extrabold xl:text-4xl lg:text-2xl sm:text-3xl text-lg text-center md:max-w-[24rem] md:mx-auto">ALTAR</h1>
        <p className="xl:text-lg lg:text-base md:text-xl sm:text-lg text-sm text-slate-800 font-semibold mt-2 mt-10">Discover the most beautiful furniture</p>
        <p className="lg:text-base md:text-lg sm:text-base text-sm text-slate-500 mt-2 mb-10 max-w-lg mx-auto">
          kami menyediakan berbagai pilihan furnitur berkualitas
          tinggi yang dapat mengubah ruangan Anda menjadi sebuah karya seni fungsional.
        </p>
        <Link to="/shop" className="xl:text-base lg:text-sm md:text-base text-sm font-semibold text-orange-800 bg-orange-200 md:py-3 md:px-4 py-3 px-3">Shop Now</Link>
      </div>
    </section>
  );
}
