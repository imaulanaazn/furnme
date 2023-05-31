import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import logo from '../assets/img/logo.webp';
import heart from '../assets/img/heart.webp';
import cart from '../assets/img/shopping-cart.webp';
import { setIsLogin } from '../redux/slices/auth';
import validateToken from '../utils/validateToken';

export default function Navbar(props) {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('');
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const { isLogin } = useSelector((state) => state.auth);
  const {
    // eslint-disable-next-line react/prop-types
    position = 'absolute',
  } = props;

  useEffect(() => {
    async function getUserId() {
      const token = Cookies.get('token');
      if (token) {
        const decodedToken = atob(token);
        const data = await validateToken(decodedToken);
        const id = data?.data?.user?.id;
        setUserId(id);
      }
    }
    getUserId();
  }, []);

  return (
    <header className={`w-full overflow-x-clip lg:px-12 md:px-10 md:pt-5 px-4 pt-3 ${position} top-0 left-0 z-10 bg-white`}>

      {/* TOP MENU */}
      <div className="secondary_menu w-full border-b border-solid border-slate-300">
        <ul className="w-full flex justify-between py-2">
          <li>
            <ul className="flex">
              <li><Link to="/About" className="text-xs lg:text-xs md:text-base text-slate-500">ABOUT</Link></li>
              <li><a href="#contact" className="text-xs lg:text-xs md:text-base text-slate-500 ml-4 xl:ml-6">CONTACT</a></li>
            </ul>
          </li>
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
        <div className="logo sm:flex-1 flex-0">
          <a href="/#" className="flex items-center" onClick={(event) => { event.preventDefault(); }}>
            <img src={logo} className="xl:w-8 md:w-10 w-6" alt="logo" />
            <p className="justify-self-end font-bold md:text-4xl  text-xl ml-1">ltar</p>
          </a>
        </div>

        <div className="main_menu group flex-1 lg:flex hidden flex-col items-center text-center">
          <ul className="md:flex md:flex-row flex-col md:h-auto h-0 md:group-hover:h-auto group-hover:h-14 overflow-hidden transition-all duration-500 md:w-auto w-11/12">
            <li className="mx-4 xl:mx-5 text-sm lg:text-sm md:text-lg text-slate-600 lg:block md:block"><Link to="/">HOME</Link></li>
            <li className="mx-4 xl:mx-5 text-sm lg:text-sm md:text-lg text-slate-600 lg:block md:block"><Link to="/shop">SHOP</Link></li>
            <li className="mx-4 xl:mx-5 text-sm lg:text-sm md:text-lg text-slate-600 lg:block md:block"><Link to="/forsale">FORSALE</Link></li>
          </ul>
        </div>

        <div className="act flex justify-between items-center flex-1 gap-4">
          <div className="search-bar max-w-xs sm:w-auto w-9/12 ml-auto">
            <div className="flex items-center">
              <input className="appearance-none border-b border-gray-500 w-full text-gray-700 py-2 px-3 leading-tight focus:outline-none mr-3" type="text" placeholder="Search..." />
              <button className="flex-shrink-0 bg-orange-300 hover:bg-orange-400 text-sm border-none text-white md:py-2 md:px-3 py-1 px-2 rounded" type="button">
                <i className="fa-solid fa-magnifying-glass text-white md:text-lg text-base" />
              </button>
            </div>
          </div>
          <button type="button" onClick={() => { setMobileMenuVisible(!mobileMenuVisible); }} className="lg:hidden inline">
            <i className="fa-solid fa-bars text-xl" />
          </button>
          <img src={heart} className="lg:block hidden w-5 h-5 xl:w-6 xl:h-6 lg:w-5 lg:h-5 md:h-7 md:w-7" alt="heart" />
          <Link to={userId ? `/cart/${userId}` : '/auth'} className="lg:inline hidden">
            <div className="cart_icon flex items-center">
              <img src={cart} className="xl:w-5 xl:h-5 lg:w-4 lg:h-4 md:h-6 md:w-6 w-4 h-4" alt="cart" />
            </div>
          </Link>
        </div>
      </nav>

      {/* MAIN MENU ON MOBILE */}
      <div className={`mobile-menu w-full h-screen lg:hidden flex absolute top-0 right-0 z-10 transition-all duration-400 ${mobileMenuVisible ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="mobile-menu_backdrop bg-black opacity-20 sm:w-2/5 w-1/5" />
        <div className="mobile-menu_lists sm:w-3/5 w-4/5 px-6 py-7 bg-white">
          <button
            type="button"
            onClick={() => { setMobileMenuVisible(!mobileMenuVisible); }}
            className="block w-max ml-auto"
          >
            <i className="fa-solid fa-xmark text-xl" />
          </button>
          <ul className="text-center">
            <li className="my-2 p-1">
              <a href="/#">
                <i className="fa-solid fa-house pr-3" />
                Home
              </a>
            </li>
            <li className="my-2 p-1">
              <a href="/#">
                <i className="fa-solid fa-cart-shopping pr-3" />
                Shop
              </a>
            </li>
            <li className="my-2 p-1">
              <a href="/#">
                <i className="fa-solid fa-percent pr-3" />
                Forsale
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
