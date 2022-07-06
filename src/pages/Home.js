import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import heart from '../assets/img/heart.png';
import cart from '../assets/img/shopping-cart.png';
import sofa from '../assets/img/sofa_showcase_bg.png';
import table from '../assets/img/table_showcase_bg.png';
import lamp from '../assets/img/lamp_showcase_bg.png';
import whiteVase from '../assets/img/white_pale_vase.png';
import floorLamp from '../assets/img/floor_lamp.png';
import flamingoDecor from '../assets/img/flamingo_decor.png';
import goldVase from '../assets/img/gold_vase_decor.png';
import planDecor from '../assets/img/plant_decor.png';
import tableDecor from '../assets/img/table_decor.png';
import vaseDecor from '../assets/img/vase_decor.png';
import welcomeDecor from '../assets/img/welcome_home_decor.png';

export default function Home() {
  return (
    <>
      <header className="w-full lg:px-12 md:px-10 md:pt-5 px-4 pt-3 absolute top-0 left-0 z-10 bg-white">
        <div className="secondary_menu w-full border-b border-solid border-slate-300">
          <ul className="w-full flex justify-between py-2">
            <li>
              <ul className="flex">
                <li><Link to="/About" className="text-xs lg:text-xs md:text-base text-slate-500">ABOUT</Link></li>
                <li><a href="#contact" className="text-xs lg:text-xs md:text-base text-slate-500 ml-4">CONTACT</a></li>
              </ul>
            </li>
            <li>
              <ul className="flex">
                <li><Link to="/signform" className="text-xs lg:text-xs  md:text-base text-slate-500 pr-2">SIGNIN</Link></li>
                <li><Link to="/signform" className="text-xs lg:text-xs  md:text-base text-slate-500 pl-2 border-l border-solid border-slate-300">SIGNUP</Link></li>
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
              <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 hidden lg:block md:block"><a href="/#">HOME</a></li>
              <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 hidden lg:block md:block"><Link to="/shop">SHOP</Link></li>
              <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 hidden lg:block md:block"><Link to="/forsale">FORSALE</Link></li>
              <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 lg:hidden md:hidden"><a href="pages/forsale.html">MENU</a></li>
            </ul>
          </div>

          <div className="user_cart md:w-32 w-30 flex justify-between items-center">
            <img src={heart} className="w-5 h-5 lg:w-5 lg:h-5 md:h-7 md:w-7" alt="heart" />
            <Link to="/mycart">
              <div className="cart_icon flex items-center">
                <img src={cart} className="lg:w-4 lg:h-4 md:h-6 md:w-6 w-4 h-4" alt="cart" />
                <p className="text-sm mx-1">CART</p>
                <div className="user_cart_total rounded-full bg-amber-500 w-5 h-5 lg:w-5 lg:h-5 md:h-7 md:w-7 flex items-center justify-center">
                  <p className="text-white text-xs">5</p>
                </div>
              </div>
            </Link>
          </div>
        </nav>
      </header>

      <section className="showcase relative w-full h-screen bg-slate-400">
        <div className="left-side absolute lg:w-1/2 w-full h-full bg-orange-200 top-0 left-0">hello</div>
        <div className="right-side hidden lg:block absolute w-1/2 h-full bg-orange-100 top-0 left-1/2" />
        <img src={table} className="w-24 lg:block hidden absolute bottom-0 left-1/4 -translate-x-1/2" alt="table" />
        <img src={lamp} className="w-24 lg:block hidden absolute top-0 left-1/4 -translate-x-1/2" alt="lamp" />
        <img src={sofa} className="w-80 absolute bottom-0 lg:left-3/4 left-1/2 -translate-x-1/2" alt="sofa" />
        <div className="text text-center w-5/6  absolute lg:top-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 zindex-1">
          <h1 className="title text-slate-700 font-extrabold text-2xl text-center">Comfy Furniture for Your Home</h1>
          <p className="text-lg text-slate-700 mt-2 mb-10">Discover the most beautiful furniture</p>
          <Link to="/shop" className="text-sm font-bold text-orange-800 bg-white py-2 px-3 rounded-full">Shop Now</Link>
        </div>
      </section>

      <section className="best_selling lg:h-96 h-screen flex lg:flex-row flex-col-reverse lg:py-8 md:my-12">
        <div className="produc_desc flex-1 lg:block flex flex-col justify-center items-center lg:w-1/2 w-full text-center">
          <h2 className="text-orange-800 font-bold text-sm">Best Selling</h2>
          <h1 className="text-slate-700 font-extrabold text-2xl my-4">White pale vase</h1>
          <p className="w-3/4 text-sm text-slate-700 lg:m-auto m-3">This vase has been sold for over 130 in year making this thing as the most wanted vase in our store, this vase is made by an artist based on canada with experience in this field for over 5 year since he start to make vase in 2007, with the cheap price and high quality product you will not disapointed for buying this vase</p>
          <p className="font-extrabold text-slate-700 my-4">$110</p>
          <a href="/#" className="rounded text-xs font-bold  text-orange-800 bg-orange-200 py-2 px-4">Buy Now</a>
        </div>
        <figure className="flex-1 flex items-center justify-center lg:h-full h-auto">
          <div className="img_wrapper lg:w-1/2 md:h-full w-5/6 h-4/5 flex items-center justify-center margin-auto rounded-b-full bg-orange-200">
            <img src={whiteVase} className="h-48 lg:h-48 md:h-80 " alt="white vase" />
          </div>
        </figure>
      </section>

      <section className="for_you lg:h-96 h-screen  flex lg:flex-row flex-col lg:py-8 lg:my-12 ">
        <figure className="flex-1 flex items-center justify-center h-full h-auto">
          <div className="img_wrapper lg:w-1/2 md:h-full w-4/5 h-4/5 flex items-center justify-center margin-auto rounded-t-full bg-orange-100">
            <img src={floorLamp} className="h-44 lg:h-44 md:h-96 " alt="white vase" />
          </div>
        </figure>
        <div className="produc_desc flex-1 lg:block flex flex-col justify-center items-center lg:w-1/2 w-full text-center">
          <h2 className="text-orange-800 font-bold text-sm">For Your Things</h2>
          <h1 className="text-slate-700 font-extrabold text-2xl my-4">Floor Lamp</h1>
          <p className="w-3/4 text-sm text-slate-700 lg:m-auto m-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus nam, animi omnis voluptas saepe amet expedita at qui sit facilis reiciendis ratione? Quis, animi nam. Doloribus recusandae ipsum dicta quas optio debitis at quibusdam rerum a accusamus!</p>
          <p className="font-extrabold text-slate-700 my-4">$50</p>
          <a href="/#" className="rounded text-xs font-bold  text-orange-800 bg-orange-100 py-2 px-4">Buy Now</a>
        </div>
      </section>

      <section className="home_decor lg:px-12 px-6 text-center my-12">
        <h1 className="text-orange-800 text-normal font-bold text-center my-4">Modern Home Decor Essentials</h1>
        <p className="text-sm font-normal text-slate-700 text-center lg:w-3/4 w-full mb-10 mx-auto">Lorem ipsum iat optio totam mollitia atque dignissimos eos quaerat, nulla reiciendis, in explicabo facere cupiditate facilis eligendi quibusdam amet, commodi hic iste! Assumenda!</p>
        <div className="grid grid_wrapper lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-rows-2 gap-2 justify-content-center">
          <div className="card bg-orange-100 flex items-center justify-center h-96 w-full">
            <div className="card_item flex flex-col text-center w-3/4 h-3/4">
              <img src={vaseDecor} className="h-1/2 m-auto" alt="" />
              <h3 className="mt-4">Vase bunga gelap</h3>
              <h4 className="my-3">$40</h4>
              <a href="/#" className="font-bold text-xs bg-orange-800 py-2 px-4 rounded w-1/2 m-auto text-orange-200">Buy</a>
            </div>
          </div>
          <div className="card bg-orange-100 flex items-center justify-center h-96 w-full">
            <div className="card_item flex flex-col text-center w-3/4 h-3/4">
              <img src={flamingoDecor} className="h-1/2 m-auto" alt="" />
              <h3 className="mt-4">Flamingo Statue</h3>
              <h4 className="my-3">$70</h4>
              <a href="/#" className="font-bold text-xs bg-orange-800 py-2 px-4 rounded w-1/2 m-auto text-orange-200">Buy</a>
            </div>
          </div>
          <div className="card bg-orange-100 flex items-center justify-center h-96 w-full">
            <div className="card_item flex flex-col text-center w-3/4 h-3/4">
              <img src={goldVase} className="w-8 m-auto" alt="" />
              <h3 className="mt-4">Vase Emas</h3>
              <h4 className="my-3">$76</h4>
              <a href="/#" className="font-bold text-xs bg-orange-800 py-2 px-4 rounded w-1/2 m-auto text-orange-200">Buy</a>
            </div>
          </div>
          <div className="card bg-orange-100 flex items-center justify-center h-96 w-full">
            <div className="card_item flex flex-col text-center w-3/4 h-3/4">
              <img src={planDecor} className="h-1/2 m-auto" alt="" />
              <h3 className="mt-4">Plant</h3>
              <h4 className="my-3">$43</h4>
              <a href="/#" className="font-bold text-xs bg-orange-800 py-2 px-4 rounded w-1/2 m-auto text-orange-200">Buy</a>
            </div>
          </div>
          <div className="card bg-orange-100 flex items-center justify-center h-96 w-full md:col-span-2">
            <div className="card_item flex flex-col text-center w-3/4 h-3/4">
              <img src={tableDecor} className="h-1/2 m-auto" alt="" />
              <h3 className="mt-4">Table decoration</h3>
              <h4 className="my-3">$210</h4>
              <a href="/#" className="font-bold text-xs bg-orange-800 py-2 px-4 rounded w-1/2 m-auto text-orange-200">Buy</a>
            </div>
          </div>
          <div className="card bg-orange-100 flex items-center justify-center h-96 w-full">
            <div className="card_item flex flex-col text-center w-3/4 h-3/4">
              <img src={vaseDecor} className="h-1/2 m-auto" alt="" />
              <h3 className="mt-4">Vase Dengan Motif</h3>
              <h4 className="my-3">$221</h4>
              <a href="/#" className="font-bold text-xs bg-orange-800 py-2 px-4 rounded w-1/2 m-auto text-orange-200">Buy</a>
            </div>
          </div>
          <div className="card bg-orange-100 flex items-center justify-center h-96">
            <div className="card_item flex flex-col text-center w-3/4 h-3/4">
              <img src={welcomeDecor} className="h-1/2 m-auto" alt="" />
              <h3 className="mt-4">Welcome Greetings</h3>
              <h4 className="my-3">$21</h4>
              <a href="/#" className="font-bold text-xs bg-orange-800 py-2 px-4 rounded w-1/2 m-auto text-orange-200">Buy</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="grid lg:grid-cols-4 md:text-center grid-cols-2 gap-x-6 gap-y-6 lg:gap-y-0 m-6">
        <div className="subs col-span-2 md:col-span-1 ml-auto flex flex-col">
          <h1 className="font-bold  text-slate-700 mb-4">Subscribe</h1>
          <p className="text-sm">Subscribe to our newsletter to be the first to hear about new arrivals, sales and special offers!</p>
          <input type="email" className="border-solid border text-sm border-slate-700 rounded mt-4 py-2 px-4 " placeholder="Enter your email" />
          <a href="/#" className="rounded text-xs font-bold border border-solid bg-orange-100  text-orange-800 py-2 px-4 my-3">Send</a>
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
