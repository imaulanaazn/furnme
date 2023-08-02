import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import logo from '../assets/img/logo.webp';
import { setIsLogin } from '../redux/slices/auth';

export default function Navbar() {
  const dispatch = useDispatch();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const { isLogin } = useSelector((state) => state.auth);
  const mobileMenuList = [
    {
      name: 'My Cart',
      icon: 'fa-solid fa-cart-shopping',
      url: '/cart',
    },
    {
      name: 'Likes',
      icon: 'fa-solid fa-heart',
      url: '/wishlist',
    },
    {
      name: 'Home',
      icon: 'fa-solid fa-house',
      url: '/',
    },
    {
      name: 'Shop',
      icon: 'fa-solid fa-store',
      url: '/shop',
    },
    {
      name: 'Forsale',
      icon: 'fa-solid fa-tags',
      url: '/forsale',
    },
  ];

  return (
    <header className="w-full overflow-x-clip xl:px-20 lg:px-12 md:px-16 md:pt-5 sm:px-10 px-6 pt-3 absolute top-0 left-0 z-10 bg-white">

      {/* TOP MENU */}
      <div className="secondary_menu w-full border-b border-solid border-slate-300">
        {/* TOP MENU - ABOUT & CONTACT */}
        <ul className="w-full flex justify-between py-2">
          <li>
            <ul className="flex">
              <li><Link to="/About" className="text-xs lg:text-xs md:text-base text-slate-500">ABOUT</Link></li>
              <li><a href="#contact" className="text-xs lg:text-xs md:text-base text-slate-500 ml-4 xl:ml-6">CONTACT</a></li>
            </ul>
          </li>

          {/* TOP MENU - AUTH PAGE */}
          <li>
            <ul className="flex">
              <li className={`${isLogin ? 'hidden' : ''}`}>
                <Link to="/auth" className="text-xs lg:text-xs md:text-base text-slate-500 pr-2 xl:pr-3 ">
                  SIGNIN
                </Link>
              </li>
              <li className={`${isLogin ? 'hidden' : ''}`}>
                <Link to="/auth" className="text-xs lg:text-xs md:text-base text-slate-500 pl-2 xl:pl-3 border-l border-solid border-slate-300">
                  SIGNUP
                </Link>
              </li>
              <li className={`${isLogin ? '' : 'hidden'}`}>
                <Link
                  to="/auth"
                  className="text-xs lg:text-xs md:text-base text-slate-500 pr-2 xl:pr-3 "
                  onClick={() => { dispatch(setIsLogin({ isLogin: false })); }}
                >
                  LOGOUT
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* BOTTOM MENU */}
      <nav className="lg:py-7 py-4 flex justify-between md:items-center items-start">
        {/* BOTTOM MENU - LOGO */}
        <div className="logo sm:flex-1 flex-0">
          <a href="/#" className="flex items-center" onClick={(event) => { event.preventDefault(); }}>
            <img src={logo} className="xl:w-8 md:w-10 w-6" alt="logo" />
            <p className="justify-self-end font-bold md:text-4xl  text-xl ml-1">ltar</p>
          </a>
        </div>

        {/* BOTTOM MENU - MAIN MENU */}
        <div className="main_menu group flex-1 lg:flex hidden flex-col items-center text-center">
          <ul className="md:flex md:flex-row flex-col md:h-auto h-0 md:group-hover:h-auto group-hover:h-14 overflow-hidden transition-all duration-500 md:w-auto w-11/12">
            <li className="mx-4 xl:mx-5 text-sm lg:text-sm md:text-lg text-slate-600 lg:block md:block"><Link to="/">HOME</Link></li>
            <li className="mx-4 xl:mx-5 text-sm lg:text-sm md:text-lg text-slate-600 lg:block md:block"><Link to="/shop">SHOP</Link></li>
            <li className="mx-4 xl:mx-5 text-sm lg:text-sm md:text-lg text-slate-600 lg:block md:block"><Link to="/forsale">FORSALE</Link></li>
          </ul>
        </div>

        {/* BOTTOM MENU - USER ACT */}
        <div className="act flex justify-between items-center flex-1 gap-4">
          <div className="search-bar max-w-xs sm:w-auto w-9/12 ml-auto flex items-center bg-orange-50 rounded">
            <input className="appearance-none w-full text-gray-800 py-2 px-3 leading-tight focus:outline-none mr-3 bg-transparent" type="text" placeholder="search..." />
            <button className="flex-shrink-0 bg-orange-200 hover:bg-orange-300 text-sm border-none text-white md:py-2 md:px-3 py-1 px-2 rounded" type="button">
              <i className="fa-solid fa-magnifying-glass text-orange-800 md:text-lg text-base" />
            </button>
          </div>
          <button type="button" onClick={() => { setMobileMenuVisible(!mobileMenuVisible); }} className="lg:hidden inline">
            <i className="fa-solid fa-bars text-xl" />
          </button>
          <Link to="/wishlist" className="lg:block hidden">
            <i className="fa-solid fa-heart text-xl text-rose-500" />
          </Link>
          <Link to="/cart" className="lg:inline hidden">
            <div className="cart_icon flex items-center">
              <i className="fa-solid fa-cart-shopping text-xl text-orange-300" />
            </div>
          </Link>
        </div>
      </nav>

      {/* MAIN MENU ON MOBILE */}
      <div className={`mobile-menu w-full h-screen lg:hidden z-50 flex absolute top-0 right-0 z-10 transition-all duration-400 ${mobileMenuVisible ? 'translate-x-0' : 'translate-x-full'}`}>
        <div
          className="mobile-menu_backdrop bg-black opacity-20 sm:w-2/5 w-1/5"
          onClick={() => { setMobileMenuVisible(!mobileMenuVisible); }}
        />
        <div className="mobile-menu_lists sm:w-3/5 w-4/5 px-6 py-7 bg-white">
          <button
            type="button"
            onClick={() => { setMobileMenuVisible(!mobileMenuVisible); }}
            className="block w-max ml-auto"
          >
            <i className="fa-solid fa-xmark text-xl" />
          </button>
          <ul className="text-center">
            {mobileMenuList.map((menu) => (
              <li className="my-2 p-1" key={menu.name}>
                <Link to={menu.url} className="text-orange-300">
                  <i className={`${menu.icon}} pr-3`} />
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
