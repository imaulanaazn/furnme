import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import heart from '../assets/img/heart.png';
import cart from '../assets/img/shopping-cart.png';
import lineDecor from '../assets/img/decor_line.png';
import highChair from '../assets/img/high_chair.png';

export default function About() {
  return (
    <>
      <header className="w-full lg:px-12 md:px-10 md:pt-5 px-4 pt-3 top-0 left-0 z-10 bg-orange-100">
        <div className="secondary_menu w-full border-b border-solid border-slate-700">
          <ul className="w-full flex justify-between py-2">
            <li>
              <ul className="flex">
                <li><a href="/#" className="text-xs lg:text-xs  md:text-base text-slate-500">ABOUT</a></li>
                <li><a href="#contact" className="text-xs lg:text-xs  md:text-base text-slate-500 ml-4">CONTACT</a></li>
              </ul>
            </li>
            <li>
              <ul className="flex">
                <li><Link to="/signform" className="text-xs lg:text-xs  md:text-base text-slate-500 pr-2">SIGNIN</Link></li>
                <li><Link to="/signform" className="text-xs lg:text-xs  md:text-base text-slate-500 pl-2 border-l border-solid border-slate-700">SIGNUP</Link></li>
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
            <img src={cart} className="w-5 h-5 lg:w-5 lg:h-5 md:h-7 md:w-7" alt="heart" />
            <Link to="/mycart">
              <div className="cart_icon flex items-center">
                <img src={heart} className="lg:w-4 lg:h-4 md:h-6 md:w-6 w-4 h-4" alt="cart" />
                <p className="text-sm mx-1">CART</p>
                <div className="user_cart_total rounded-full bg-amber-500 w-5 h-5 lg:w-5 lg:h-5 md:h-7 md:w-7 flex items-center justify-center">
                  <p className="text-white text-xs">5</p>
                </div>
              </div>
            </Link>
          </div>
        </nav>
      </header>

      <main className="py-12 w-full lg:pl-52 md:px-36 px-4 bg-orange-200 relative border-y-2 border-dashed border-slate-600">
        <h1 className="md:w-96 font-extrabold lg:text-2xl text-xl">An abstract and personal approach, defined by a mood of feeling</h1>
        <h2 className="font-black text-right lg:text-9xl text-5xl ml-auto w-full mt-6 mb-12">About</h2>
        <h1 className="lg:w-72 md:w-80 font-bold lg:text-xl text-lg">With our tastefull crew, web created a product with high taste of art and functionality, high quality is one of our highlighted aspect and cheap price is our prioritise.</h1>
        <p className="lg:w-72 md:w-80 text-sm mb-5 mt-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex tenetur molestias similique dignissimos voluptatem eum accusamus a, animi sequi debitis consequuntur esse voluptas blanditiis sapiente deserunt, sint fugiat? Recusandae dignissimos architecto, rerum laborum tempore perspiciatis alias doloribus libero fugit animi veniam autem quae.</p>
        <p className="lg:w-72 md:w-80 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet, atque tenetur beatae vitae minima totam ratione veritatis deserunt illum asperiores, numquam soluta itaque excepturi consectetur pariatur culpa illo placeat. Illo possimus sequi, temporibus.</p>
        <div className="service_and_clients mt-40 flex lg:w-72 justify-between">
          <ul className="service">
            <li><h1 className="font-bold ">Services</h1></li>
            <li><a href="/#">Furniture</a></li>
            <li><a href="/#">Design interior</a></li>
            <li><a href="/#">Custom furniture</a></li>
            <li><a href="/#">Soufenire</a></li>
          </ul>
          <ul className="clients">
            <h1 className="font-bold ">Clients</h1>
            <li><a href="/#">lorem</a></li>
            <li><a href="/#">ipsum</a></li>
            <li><a href="/#">dolor</a></li>
            <li><a href="/#">sit</a></li>
            <li><a href="/#">amet</a></li>
          </ul>
          <img src={highChair} className="hidden lg:block absolute bottom-0 right-0 w-1/2" alt="chair" />
          <img src={lineDecor} className="hidden lg:block absolute top-0 left-0 w-20 translate-x-3/4" alt="decorative line" />
        </div>
      </main>

      <footer className="grid lg:grid-cols-4 md:text-center grid-cols-2 gap-x-6 gap-y-6 lg:gap-y-0 m-6">
        <div className="subs col-span-2 md:col-span-1 ml-auto flex flex-col">
          <h1 className="font-bold  text-slate-700 mb-4">Subscribe</h1>
          <p className="text-sm">Subscribe to our newsletter to be the first to hear about new arrivals, sales and special offers!</p>
          <input type="email" className="border-solid border text-sm border-slate-700 rounded mt-4 py-2 px-4 " placeholder="Enter your email" />
          <button type="submit" className="rounded text-xs font-bold border border-solid bg-orange-100  text-orange-800 py-2 px-4 my-3">Send</button>
        </div>
        <div className="menu lg:mx-auto md:text-center md:mx-0 mr-auto">
          <h1 className="font-bold text-slate-700 mb-4">Menu</h1>
          <ul>
            <li><a href="/#" className="text-sm">Home</a></li>
            <li><a href="pages/shop.html" className="text-sm">Shop</a></li>
            <li><a href="/#" className="text-sm">Forsale</a></li>
            <li><a href="pages/about.html" className="text-sm">About</a></li>
            <li><a href="#contact" className="text-sm">Contact</a></li>
            <li><a href="pages/sign-form.html" className="text-sm">Signin</a></li>
            <li><a href="pages/sign-form.html" className="text-sm">Signup</a></li>
          </ul>
        </div>
        <div className="info lg:mx-auto md:text-center md:mx-0 ml-auto">
          <h1 className="font-bold text-slate-700 mb-4">Information</h1>
          <ul>
            <li><a href="/#" className="text-sm">About Us</a></li>
            <li><a href="/#" className="text-sm">Terms & Conditions</a></li>
            <li><a href="/#" className="text-sm">User&apos;s Guide</a></li>
            <li><a href="/#" className="text-sm">Support Center</a></li>
          </ul>
        </div>
        <div className="social_media lg:mx-auto md:text-center md:mx-0 mr-auto " id="contact">
          <h1 className="font-bold text-slate-700 mb-4">Social Media</h1>
          <ul>
            <li><a href="/#" className="text-sm">Twitter</a></li>
            <li><a href="/#" className="text-sm">Facebook</a></li>
            <li><a href="/#" className="text-sm">Telegram</a></li>
            <li><a href="/#" className="text-sm">Discord</a></li>
            <li><a href="/#" className="text-sm">Telephone</a></li>
            <li><a href="/#" className="text-sm">Whatsapp</a></li>
            <li><a href="/#" className="text-sm">Email</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
