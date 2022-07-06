// eslint-disable-next-line import/no-unresolved
import { Autoplay, Pagination } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
import '../styles/forsale.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from '../assets/img/logo.png';
import heart from '../assets/img/heart.png';
import cart from '../assets/img/shopping-cart.png';
import star from '../assets/icon/star.svg';
import banner1 from '../assets/img/banner1.png';
import banner2 from '../assets/img/banner2.png';
import banner3 from '../assets/img/banner3.png';

export default function Forsale() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(12);
  const viewMoreBtn = useRef(null);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const hideViewMoreBtn = () => {
    viewMoreBtn.current.classList.add('hidden');
  };

  if (visible === data.length) hideViewMoreBtn();

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://pixabay.com/api/?key=28334884-dec5f8a5c85957b716b081a18&q=furniture&image_type=photo&pretty=true');
      const responseData = await response.json();
      setData(responseData.hits);
    }
    getData();
  }, []);

  return (
    <>
      <header className="w-full lg:px-12 md:px-10 md:pt-5 px-4 pt-3 top-0 left-0 z-10 bg-white">
        <div className="secondary_menu w-full border-b border-solid border-slate-600">
          <ul className="w-full flex justify-between py-2">
            <li>
              <ul className="flex">
                <li><Link to="/about" className="text-xs lg:text-xs  md:text-base text-slate-500">ABOUT</Link></li>
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
              <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 hidden lg:block md:block"><a href="/#">FORSALE</a></li>
              <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 lg:hidden md:hidden"><a href="/#">MENU</a></li>

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

      <div className="showcase-wrapper w-full h-96 my-10">
        <div className="swiper mySwiper md:w-11/12 w-full h-full">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="swiper-wrapper"
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide className="swiper-slide bg-black w-full h-full">
              <img src={banner1} alt="furniture banner" className="w-full h-full object-cover" />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide bg-slate-400 w-full h-full">
              <img src={banner2} alt="furniture banner" className="w-full h-full object-cover" />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide bg-slate-500 w-full h-full">
              <img src={banner3} alt="furniture banner" className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>
          <div className="Pagination" />
        </div>
      </div>

      <div className="discounted_product w-full lg:px-12 pt-6 pb-16 text-center">
        <div className="products_wrapper my-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {data.slice(0, visible).map((gambar) => (
            <div className="item h-96 w-full  overflow-hidden">
              <div className="thumb relative w-full h-5/6 bg-slate-200">
                <img src={gambar.previewURL} alt="" className="w-full h-full object-cover " />
                <a href="/#" className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700 ">view product</a>
              </div>
              <div className="product_detail flex justify-between items-center w-full h-1/6">
                <p className="text-left">
                  {gambar.tags.split(',')[0]}
                  <br />
                  <span className="discount">
                    $
                    {gambar.imageHeight}
                  </span>
                  <s className="text-slate-400">
                    $
                    {gambar.imageWidth}
                  </s>
                </p>
                <div className="stars flex w-1/3 justify-evenly">
                  <img src={star} alt="stars icons" width="15" />
                  <img src={star} alt="stars icons" width="15" />
                  <img src={star} alt="stars icons" width="15" />
                  <img src={star} alt="stars icons" width="15" />
                  <img src={star} alt="stars icons" width="15" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button type="submit" ref={viewMoreBtn} onClick={visible === data.length ? undefined : showMoreItems} className="text-sm py-1 px-2 w-1/7 border border-solid border-slate-700 left-1/2">view more</button>
      </div>

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
