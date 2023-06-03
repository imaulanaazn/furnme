import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.webp';

export default function MyCartNavbar() {
  return (
    <header className="w-full absolute px-4 pt-3 top-0 left-0 z-10 bg-white lg:w-2/3 lg:px-12 md:px-10 md:pt-3">

      <nav className="lg:py-7 py-4 flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="flex items-center">
            <img src={logo} className="w-6 md:w-10" alt="logo" />
            <p className="justify-self-end font-bold text-xl ml-1 md:text-4xl">ltar</p>
          </Link>
        </div>

        <div className="main_menu group flex-1 flex flex-col items-end text-end md:flex-none">
          <ul className="w-full2 md:hidden">
            <li className="mx-4 text-sm text-slate-600 lg:text-sm md:text-lg ">
              <a href="/#" onClick={(event) => { event.preventDefault(); }}>MENU</a>
            </li>
          </ul>
          <ul className="flex-col h-0 group-hover:h-14 overflow-hidden transition-all duration-500 w-11/12 md:flex md:flex-row md:h-auto md:w-auto md:group-hover:h-auto">
            <li className="mx-4 xl:mx-5 text-sm lg:text-sm md:text-lg text-slate-600 lg:block md:block"><Link to="/">HOME</Link></li>
            <li className="mx-4 xl:mx-5 text-sm lg:text-sm md:text-lg text-slate-600 lg:block md:block"><Link to="/about">ABOUT</Link></li>
            <li className="mx-4 xl:mx-5 text-sm lg:text-sm md:text-lg text-slate-600 lg:block md:block"><Link to="/shop">SHOP</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
