import { Link } from 'react-router-dom';
import heroImg from '../assets/img/bed.svg';

export default function ForsaleHero() {
  return (
    <div
      className="forsale-hero w-full lg:h-screen lg:px-12 sm:px-10 px-6 lg:my-0 sm:mt-48 sm:mb-20 mt-40 mb-12"
    >
      <img src={heroImg} alt="" className="lg:absolute lg:bottom-10 lg:right-10  lg:w-96 w-full md:w-8/12 xl:w-[32rem] sm:w-3/4 sm:mx-auto my-10" />
      <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold text-orange-400 sm:leading-tight xl:pt-52 lg:pt-40">
        The Best
        {' '}
        <br />
        <span className="text-5xl sm:text-6xl xl:text-7xl font-bold text-orange-700">FURNITURE</span>
      </h1>
      <h2 className="text-lg sm:text-xl font-light text-white tracking-[0.5rem] bg-orange-400 max-w-max px-2 mt-2 mb-4 xl:mt-6 xl:mb-8">SPECIAL SALE</h2>
      <p className="text-base xl:max-w-2xl lg:max-w-md md:max-w-xl sm:text-lg text-slate-600 mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        excepturi eum quidem necessitatibus officia dignissimos.
        Quia quaerat officiis possimus voluptatibus!
      </p>
      <Link to="/shop" className="xl:text-base lg:text-sm sm:text-lg text-sm font-semibold text-orange-800 bg-orange-200 md:py-3 md:px-4 sm:py-4 sm:px-5 p-3">Shop Now</Link>
    </div>
  );
}
