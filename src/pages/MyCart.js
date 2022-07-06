import '../styles/cart.css';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import heart from '../assets/img/heart.png';
import cart from '../assets/img/shopping-cart.png';
import item1 from '../assets/img/checkout-item1.jpg';

export default function MyCart() {
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
              <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 lg:hidden md:hidden"><a href="forsale.html">MENU</a></li>

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
        <main className="lg:w-2/3 w-full h-screen pt-28">
          <div className="flex-wrapper lg:mx-14 mx-3 mb-10 lg:mt-10 md:mt-8 mt-3">
            <div className="title flex w-full items-center text-center text-xs text-slate-500">
              <h1 className="flex-1">PRODUCT</h1>
              <h1 className="flex-1">PRICE</h1>
              <h1 className="flex-1">QUANTITY</h1>
              <h1 className="flex-1">TOTAL</h1>
            </div>
            <div className="product-1 my-8 flex w-full items-center text-slate-600 text-center">
              <div className="product-item flex-1 text-left">
                <div className="thumb lg:w-24 w-16 lg:h-24 h-16 mx-auto">
                  <img src={item1} className="w-full h-full object-cover object-center" alt="" />
                </div>
                <div className="text md:ml-12 ">
                  <h1 className="mt-2 mb-1 font-bold text-base">Vase</h1>
                  <p className="text-xs">Size : medium</p>
                  <p className="text-xs">Color: white</p>
                </div>
              </div>
              <p className="price flex-1">$123</p>
              <div className="quantity flex-1 flex justify-evenly">
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
              <p className="total flex-1">$123</p>
            </div>
            <div className="product-1 my-8 flex w-full items-center text-slate-600 text-center">
              <div className="product-item flex-1 text-left">
                <div className="thumb lg:w-24 w-16 lg:h-24 h-16 mx-auto">
                  <img src={item1} className="w-full h-full object-cover object-center" alt="" />
                </div>
                <div className="text md:ml-12 ">
                  <h1 className="mt-2 mb-1 font-bold text-base">Vase</h1>
                  <p className="text-xs">Size : medium</p>
                  <p className="text-xs">Color: white</p>
                </div>
              </div>
              <p className="price flex-1">$123</p>
              <div className="quantity flex-1 flex justify-evenly">
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
              <p className="total flex-1">$123</p>
            </div>
            <div className="product-1 my-8 flex w-full items-center text-slate-600 text-center">
              <div className="product-item flex-1 text-left">
                <div className="thumb lg:w-24 w-16 lg:h-24 h-16 mx-auto">
                  <img src={item1} className="w-full h-full object-cover object-center" alt="" />
                </div>
                <div className="text md:ml-12 ">
                  <h1 className="mt-2 mb-1 font-bold text-base">Vase</h1>
                  <p className="text-xs">Size : medium</p>
                  <p className="text-xs">Color: white</p>
                </div>
              </div>
              <p className="price flex-1">$123</p>
              <div className="quantity flex-1 flex justify-evenly">
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
              <p className="total flex-1">$123</p>
            </div>
            <div className="product-1 my-8 flex w-full items-center text-slate-600 text-center">
              <div className="product-item flex-1 text-left">
                <div className="thumb lg:w-24 w-16 lg:h-24 h-16 mx-auto">
                  <img src={item1} className="w-full h-full object-cover object-center/" alt="" />
                </div>
                <div className="text md:ml-12 ">
                  <h1 className="mt-2 mb-1 font-bold text-base">Vase</h1>
                  <p className="text-xs">Size : medium</p>
                  <p className="text-xs">Color: white</p>
                </div>
              </div>
              <p className="price flex-1">$123</p>
              <div className="quantity flex-1 flex justify-evenly">
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
              <p className="total flex-1">$123</p>
            </div>
            <div className="product-1 my-8 flex w-full items-center text-slate-600 text-center">
              <div className="product-item flex-1 text-left">
                <div className="thumb lg:w-24 w-16 lg:h-24 h-16 mx-auto">
                  <img src={item1} className="w-full h-full object-cover object-center/" alt="" />
                </div>
                <div className="text md:ml-12 ">
                  <h1 className="mt-2 mb-1 font-bold text-base">Vase</h1>
                  <p className="text-xs">Size : medium</p>
                  <p className="text-xs">Color: white</p>
                </div>
              </div>
              <p className="price flex-1">$123</p>
              <div className="quantity flex-1 flex justify-evenly">
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
              <p className="total flex-1">$123</p>
            </div>
          </div>
        </main>
        <aside className="lg:w-1/3 w-full lg:absolute top-0 right-0 h-screen bg-orange-100 lg:px-12 md:px-20 px-4 flex flex-col text-slate-600 justify-center">
          <h2 className="text-base text-center font-semibold">
            Cart Total :
            {' '}
            <span className="text-xl font-bold text-slate-700">$123</span>
          </h2>
          <p className="text-sm text-center">Total belum termasuk PPN dan Ongkir</p>
          <div className="term flex items-center text-sm mx-auto mt-2">
            <input type="checkbox" name="agree" />
            <label htmlFor="agree" className="ml-2">
              {' '}
              I agree to
              {' '}
              <a href="/#" className="text-orange-800">Terms and Conditions</a>
            </label>
          </div>

          <div className="note my-6 text-left text-slate-600">
            <h2>Add A Note</h2>
            <textarea name="notes" id="" cols="30" className="py-2 px-4 mt-2 w-full text-xs" rows="1" placeholder="Add a note here..." />
          </div>
          <button type="submit" className="w-1/2 mx-auto py-2 px-4 bg-gray-800 text-white text-sm font-semibold rounded-full ">Checkout</button>
        </aside>
      </section>
    </>
  );
}
