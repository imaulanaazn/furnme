import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import heart from '../assets/img/heart.png';
import cart from '../assets/img/shopping-cart.png';

export default function Navbar(props) {
  const {
    // eslint-disable-next-line react/prop-types
    bg, border, position = 'absolute', text = 'text-slate-500',
  } = props;

  const preventRefresh = (event) => event.preventDefault();
  return (
    <header className={`w-full lg:px-12 md:px-10 md:pt-5 px-4 pt-3 ${position} top-0 left-0 z-10 ${bg}`}>
      <div className={`secondary_menu w-full border-b border-solid ${border}`}>
        <ul className="w-full flex justify-between py-2">
          <li>
            <ul className="flex">
              <li><Link to="/About" className={`text-xs lg:text-xs md:text-base ${text}`}>ABOUT</Link></li>
              <li><a href="#contact" className={`text-xs lg:text-xs md:text-base ${text} ml-4`}>CONTACT</a></li>
            </ul>
          </li>
          <li>
            <ul className="flex">
              <li><Link to="/signform" className={`text-xs lg:text-xs  md:text-base ${text} pr-2 `}>SIGNIN</Link></li>
              <li><Link to="/signform" className={`text-xs lg:text-xs  md:text-base ${text} pl-2 border-l border-solid border-slate-300`}>SIGNUP</Link></li>
            </ul>
          </li>
        </ul>
      </div>

      <nav className="lg:py-7 py-4 flex justify-between md:items-center items-start">
        <div className="logo md:flex-none flex-1">
          <a href="/#" className="flex items-center">
            <img src={logo} className="md:w-10 w-6" alt="logo" />
            <p className="justify-self-end font-bold md:text-4xl  text-xl ml-1">ltar</p>
          </a>
        </div>

        <div className="main_menu group md:flex-none flex-1 flex flex-col items-start text-center">
          <ul className="lg:hidden md:hidden w-11/12">
            <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 "><a href="/#" onClick={preventRefresh}>MENU</a></li>
          </ul>
          <ul className="md:flex md:flex-row flex-col md:h-auto h-0 md:group-hover:h-auto group-hover:h-14 overflow-hidden transition-all duration-500 md:w-auto w-11/12">
            <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 lg:block md:block"><Link to="/">HOME</Link></li>
            <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 lg:block md:block"><Link to="/shop">SHOP</Link></li>
            <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 lg:block md:block"><Link to="/forsale">FORSALE</Link></li>
          </ul>
        </div>

        <div className="user_cart lg:w-32 md:w-40 w-30 flex justify-between items-center md:flex-none flex-1">
          <img src={heart} className="w-5 h-5 lg:w-5 lg:h-5 md:h-7 md:w-7" alt="heart" />
          <Link to="/mycart">
            <div className="cart_icon flex items-center">
              <img src={cart} className="lg:w-4 lg:h-4 md:h-6 md:w-6 w-4 h-4" alt="cart" />
              <p className="lg:text-sm md:text-base mx-1">CART</p>
              <div className="user_cart_total rounded-full bg-amber-500 w-5 h-5 lg:w-5 lg:h-5 md:h-7 md:w-7 flex items-center justify-center">
                <p className="text-white lg:text-xs md:text-sm">5</p>
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
