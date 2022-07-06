/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import '../styles/shop.css';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import logo from '../assets/img/logo.png';
import heart from '../assets/img/heart.png';
import cart from '../assets/img/shopping-cart.png';
import star from '../assets/icon/star.svg';
import sofa from '../assets/img/sofa_showcase_bg.png';
import darkGraySofa from '../assets/img/dark-gray-sofa.jpg';
import darkHighChair from '../assets/img/dark-high-chair.jpg';
import blackStandLamp from '../assets/img/black-stand-lamp.jpg';
import cuteCactus from '../assets/img/cute-plant.jpg';
import shelf from '../assets/img/shelf.jpg';
import darkGrayBed from '../assets/img/dark-gray-bed.jpg';
import desk from '../assets/img/productivity-category.jpg';
import classic from '../assets/img/classic-category.jpg';
import modern from '../assets/img/modern-category.jpg';
import decor from '../assets/img/decor-category.jpg';
import cutePlant from '../assets/img/cute-plant-category.jpg';
import bench from '../assets/img/bench-category.jpg';
import whiteSofa from '../assets/img/white-sofa.jpg';

export default function Shop() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(12);
  const [productValue, setProductValue] = useState('furniture');
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
      const response = await fetch(`https://pixabay.com/api/?key=28334884-dec5f8a5c85957b716b081a18&q=${productValue}&image_type=photo&pretty=true`);
      const responseData = await response.json();
      setData(responseData.hits);
    }
    getData();
  }, [productValue]);

  const screenW = window.outerWidth;
  let totalSlide = 0;
  if (screenW >= 1024) {
    totalSlide = 4;
  } else if (screenW >= 768) {
    totalSlide = 3;
  } else {
    totalSlide = 1;
  }

  return (
    <>
      <header className="w-full lg:px-12 md:px-10 md:pt-5 px-4 pt-3 top-0 absolute left-0 z-10 bg-white">
        <div className="secondary_menu w-full border-b border-solid border-slate-300">
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
              <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 hidden lg:block md:block"><a href="/#">SHOP</a></li>
              <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 hidden lg:block md:block"><Link to="/forsale">FORSALE</Link></li>
              <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 lg:hidden md:hidden"><Link to="/#">MENU</Link></li>

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

      <section className="showcase relative w-full h-screen bg-orange-200">
        <img src={sofa} className="w-96 absolute bottom-0 left-1/2 -translate-x-1/2" alt="sofa" />
        <div className="text w-full lg:w-auto text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 zindex-1">
          <h1 className="title text-slate-800 font-extrabold text-2xl text-center">Comfy Furniture for Your Home</h1>
          <p className="text-lg text-slate-800 mt-2">Discover the most beautiful furniture</p>
        </div>
      </section>

      <section className="top_rated w-full lg:px-12 px-4 lg:my-28 my-12">
        <h1 className="font-bold text-2xl my-8">Top Rated Product</h1>
        <div className="swiper mySwiper w-full h-56">
          <Swiper
            className="swiper-wrapper"
            spaceBetween={15}
            slidesPerView={totalSlide}
          >
            <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200 ">
              <img
                src={darkGraySofa}
                className="w-full h-full object-cover brightness-50"
                alt=""
              />
              <a
                href="/#"
                className="absolute text-sm py-2
              border border-solid border-white text-white"
              >
                Dark gray sofa

              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200 ">
              <img
                src={darkHighChair}
                className="w-full h-full object-cover brightness-50"
                alt=""
              />
              <a
                href="/#"
                className="absolute w-7/12 text-sm py-2
              border border-solid border-white text-white"
              >
                aesthetic high chair

              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200 ">
              <img
                src={blackStandLamp}
                className="w-full h-full object-cover brightness-50"
                alt=""
              />
              <a
                href="/#"
                className="absolute w-7/12 text-sm py-2
              border border-solid border-white text-white"
              >
                Beautiful lamp

              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200 ">
              <img
                src={cuteCactus}
                className="w-full h-full object-cover brightness-50"
                alt=""
              />
              <a
                href="/#"
                className="absolute w-7/12 text-sm py-2
              border border-solid border-white text-white"
              >
                Cute litle cactus

              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200 ">
              <img
                src={shelf}
                className="w-full h-full object-cover brightness-50"
                alt=""
              />
              <a
                href="/#"
                className="absolute w-7/12 text-sm py-2
              border border-solid border-white text-white"
              >
                Shelf

              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200 ">
              <img
                src={darkGrayBed}
                className="w-full h-full object-cover brightness-50"
                alt=""
              />
              <a
                href="/#"
                className="absolute w-7/12 text-sm py-2
              border border-solid border-white text-white"
              >
                Comfortable bed

              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="our_product w-full md:px-12 px-6 text-center">
        <h1 className="text-left font-bold text-2xl mb-7">Our Product</h1>
        <div className="product_navbar w-full flex-wrap flex justify-between ">
          <ul className="flex md:w-80 md:flex-none flex-1 justify-between">
            <li className="all-btn"><button type="submit" onClick={() => setProductValue('furniture')}>All product</button></li>
            <li className="chair-btn hidden md:block"><button type="submit" onClick={() => setProductValue('chair')}>Chair</button></li>
            <li className="table-btn hidden md:block"><button type="submit" onClick={() => setProductValue('table')}>Table</button></li>
            <li className="bed-btn hidden md:block"><button type="submit" onClick={() => setProductValue('bed')}>Bed</button></li>
            <li className="decor-btn hidden md:block"><button type="submit" onClick={() => setProductValue('home+decor')}>Decorative</button></li>
          </ul>
          <label htmlFor="filter">Choose a car:</label>
          <select id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="products_wrapper md:my-16 my-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {data.slice(0, visible).map((gambar) => (
            <div className="item h-96 w-full  overflow-hidden">
              <div className="thumb group relative w-full h-5/6 bg-slate-200">
                <img src={gambar.previewURL} alt="" className="w-full h-full object-cover group-hover:brightness-50 transition-all duration-500" />
                <a href="/#" className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/4 group-hover:-translate-y-1/4 opacity-0 group-hover:opacity-100 transition-all duration-500 text-sm text-white py-2 px-3 border border-solid border-white ">view product</a>
              </div>
              <div className="product_detail flex justify-between items-center w-full h-1/6">
                <p className="text-left">

                  {gambar.tags.split(',')[0]}
                  <br />
                  $
                  {gambar.imageHeight}
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
        <button type="submit" ref={viewMoreBtn} onClick={visible === data.length ? undefined : showMoreItems} className="text-sm py-1 px-2 border border-solid border-slate-700">view more</button>
      </section>

      <section className="category w-full md:px-12 px-6 my-28">
        <h1 className="font-bold text-2xl my-8">Top Category</h1>
        <div className="swiper mySwiper w-full h-56">
          <Swiper
            className="swiper-wrapper"
            spaceBetween={15}
            slidesPerView={totalSlide}
          >
            <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200">
              <img src={cutePlant} className="w-full h-full object-cover brightness-50" alt="" />
              <a href="/#" className="absolute text-sm py-2 w-2/4 border border-solid border-white text-white">cute plant</a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200">
              <img src={decor} className="w-full h-full object-cover brightness-50" alt="" />
              <a href="/#" className="absolute text-sm py-2 w-2/4 border border-solid border-white text-white">home decor</a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200">
              <img src={modern} className="w-full h-full object-cover brightness-50" alt="" />
              <a href="/#" className="absolute text-sm py-2 w-2/4 border border-solid border-white text-white">modern</a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200">
              <img src={classic} className="w-full h-full object-cover brightness-50" alt="" />
              <a href="/#" className="absolute text-sm py-2 w-2/4 border border-solid border-white text-white">classic</a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200">
              <img src={bench} className="w-full h-full object-cover brightness-50" alt="" />
              <a href="/#" className="absolute text-sm py-2 w-2/4 border border-solid border-white text-white">aesthetic</a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide flex items-center justify-center bg-slate-200">
              <img src={desk} className="w-full h-full object-cover brightness-50" alt="" />
              <a href="/#" className="absolute text-sm py-2 w-2/4 border border-solid border-white text-white">productivity</a>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className=" w-full md:px-12 px-6 my-24">
        <div className="container flex md:flex-row flex-col h-80 bg-slate-200">
          <div className="left-text md:w-1/2 md:flex-none flex-1 w-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Discounted</h1>
            <p className="text-lg tracking-widest">Wonder sofa</p>
            <div className="h-12 w-20 gap-3 text-center discounted_persen grid grid-cols-2 grid-rows-3 items-center">
              <h2 className="col-start-1 col-end-2 row-start-1 row-end-3 text-5xl font-bold text-red-600">25</h2>
              <p className="col-start-2 col-end-3 row-start-1 row-end-3 text-normal mb-4">%</p>
              <p className="col-start-2 col-end-3 row-start-2 row-end-3 text-normal">off</p>
              <p className="col-start-1 col-end-3 row-start-3 row-end-4 text-xl text-left font-bold ">On Sale</p>
            </div>
          </div>
          <div className="image md:w-1/2 md:flex-none flex-1 w-full flex items-center justify-center md:border-l md:border-slate-400 md:border-solid">
            <img src={whiteSofa} className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </section>

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
            <li><a href="/#" className="text-sm">User&amp;s Guide</a></li>
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
