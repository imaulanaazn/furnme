import { Link } from 'react-router-dom';
import sofa from '../assets/img/sofa_showcase_bg.webp';
import plant from '../assets/img/plant.webp';
import hangingLamp from '../assets/img/hanging-lamp.png';

export default function HomeHero() {
  return (
    <section className="hero relative w-full h-screen">
      <img src={plant} className="w-24 xl:w-28 lg:block hidden absolute bottom-0 left-1/4 -translate-x-1/2" alt="table" />
      <img src={hangingLamp} className="xl:w-28 lg:w-24 sm:w-32 w-24 absolute lg:top-40 lg:left-1/5 md:top-36 md:left-40 sm:left-28 top-32 left-16" alt="lamp" />
      <img src={sofa} className="xl:w-96 lg:w-80 md:w-96 sm:w-8/12 w-10/12 absolute bottom-0 lg:left-3/4 left-1/2 -translate-x-1/2" alt="sofa" />
      <div className="text text-center w-5/6  absolute lg:top-2/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 zindex-1">
        <h1 className="title text-slate-800 font-extrabold xl:text-4xl lg:text-2xl sm:text-3xl text-2xl text-center md:max-w-[24rem] md:mx-auto">ALTAR</h1>
        <p className="xl:text-lg lg:text-base md:text-xl sm:text-lg text-lg text-slate-800 font-semibold mt-5">Discover the most beautiful furniture</p>
        <p className="lg:text-base md:text-lg sm:text-lg text-base text-slate-500 mt-2 mb-10 max-w-lg mx-auto">
          kami menyediakan berbagai pilihan furnitur berkualitas
          tinggi yang dapat mengubah ruangan Anda menjadi sebuah karya seni fungsional.
        </p>
        <Link to="/shop" className="xl:text-base lg:text-sm md:text-base text-sm font-semibold text-orange-800 bg-orange-200 py-3 px-4">Shop Now</Link>
      </div>
    </section>
  );
}
