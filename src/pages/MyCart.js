import '../styles/cart.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/img/logo.png';
import heart from '../assets/img/heart.png';
import cart from '../assets/img/shopping-cart.png';
import MyCartMain from '../components/MyCartMain';
import MyCartAside from '../components/MyCartAside';

export default function MyCart() {
  const [totalCost, setTotalCost] = useState([]);
  const preventRefresh = (event) => event.preventDefault();
  return (
    <>
      <header className="lg:w-2/3 w-full absolute lg:px-12 md:px-10 md:pt-5 px-4 pt-3 top-0 left-0 z-10 bg-white">
        <div className="secondary_menu w-full border-b border-solid border-slate-300">
          <ul className="w-full flex justify-between py-2">
            <li>
              <ul className="flex">
                <li><Link to="/about" className="text-xs lg:text-xs  md:text-base text-slate-500">ABOUT</Link></li>
              </ul>
            </li>
          </ul>
        </div>

        <nav className="lg:py-7 py-4 flex justify-between items-center">
          <div className="logo">
            <a href="/#" className="flex items-center">
              <img src={logo} className="md:w-10 w-6" alt="logo" />
              <p className="justify-self-end font-bold md:text-4xl  text-xl ml-1">ltar</p>
            </a>
          </div>

          <div className="main_menu">
            <ul className="flex">
              <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 hidden lg:block md:block"><Link to="/">HOME</Link></li>
              <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 hidden lg:block md:block"><Link to="/shop">SHOP</Link></li>
              <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 hidden lg:block md:block"><Link to="/forsale">FORSALE</Link></li>
              <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 lg:hidden md:hidden"><a href="/#" onClick={preventRefresh}>MENU</a></li>

            </ul>
          </div>

          <div className="user_cart md:w-32 w-30 flex justify-between items-center">
            <img src={heart} className="w-5 h-5 lg:w-5 lg:h-5 md:h-7 md:w-7" alt="heart" />
            <a href="/#">
              <div className="cart_icon flex items-center">
                <img src={cart} className="lg:w-4 lg:h-4 md:h-6 md:w-6 w-4 h-4" alt="cart" />
                <p className="text-sm mx-1">CART</p>
                <div className="user_cart_total rounded-full bg-amber-500 w-5 h-5 lg:w-5 lg:h-5 md:h-7 md:w-7 flex items-center justify-center">
                  <p className="text-white text-xs">5</p>
                </div>
              </div>
            </a>
          </div>
        </nav>
      </header>
      <section className="user_cart lg:flex overflow-hidden">
        <MyCartMain setTotalCost={setTotalCost} />
        <MyCartAside totalCost={totalCost} />
      </section>
    </>
  );
}
