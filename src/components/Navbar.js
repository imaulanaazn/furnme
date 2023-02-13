import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import logo from '../assets/img/logo.webp';
import heart from '../assets/img/heart.webp';
import cart from '../assets/img/shopping-cart.webp';
import { setIsLogin } from '../redux/slices/auth';
import validateToken from '../utils/validateToken';

export default function Navbar(props) {
  const ROOT_URL = process.env.REACT_APP_PUBLIC_API;
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('');
  const [totalCartItems, setCartTotal] = useState(0);

  const { isLogin } = useSelector((state) => state.auth);
  const {
    // eslint-disable-next-line react/prop-types
    position = 'absolute',
  } = props;

  useEffect(() => {
    async function getUserId() {
      const token = Cookies.get('token');
      const decodedToken = atob(token);
      const data = await validateToken(decodedToken);
      const id = data?.data?.user?.id;
      setUserId(id);
    }
    getUserId();
  }, []);

  useEffect(() => {
    async function getUserCart() {
      const token = Cookies.get('token');
      const decodedToken = atob(token);
      if (decodedToken && userId) {
        await axios.get(`${ROOT_URL}/cart/${userId}`, {
          headers: {
            Authorization: `Bearer ${decodedToken}`,
          },
        })
          .then(({ data }) => setCartTotal(data))
          .catch((err) => console.log(err));
      }
    }
    getUserCart();
  }, [userId]);

  return (
    <header className={`w-full lg:px-12 md:px-10 md:pt-5 px-4 pt-3 ${position} top-0 left-0 z-10 bg-white`}>
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
              <li className={`${isLogin ? 'hidden' : ''}`}><Link to="/auth" className="text-xs lg:text-xs md:text-base text-slate-500 pr-2 xl:pr-3 ">SIGNIN</Link></li>
              <li className={`${isLogin ? 'hidden' : ''}`}><Link to="/auth" className="text-xs lg:text-xs md:text-base text-slate-500 pl-2 xl:pl-3 border-l border-solid border-slate-300">SIGNUP</Link></li>
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

      <nav className="lg:py-7 py-4 flex justify-between md:items-center items-start">
        <div className="logo md:flex-none flex-1">
          <a href="/#" className="flex items-center" onClick={(event) => { event.preventDefault(); }}>
            <img src={logo} className="xl:w-8 md:w-10 w-6" alt="logo" />
            <p className="justify-self-end font-bold md:text-4xl  text-xl ml-1">ltar</p>
          </a>
        </div>

        <div className="main_menu group md:flex-none flex-1 flex flex-col items-start text-center">
          <ul className="lg:hidden md:hidden w-11/12">
            <li className="mx-4 text-sm lg:text-sm md:text-lg text-slate-600 "><a href="/#" onClick={(event) => { event.preventDefault(); }}>MENU</a></li>
          </ul>
          <ul className="md:flex md:flex-row flex-col md:h-auto h-0 md:group-hover:h-auto group-hover:h-14 overflow-hidden transition-all duration-500 md:w-auto w-11/12">
            <li className="mx-4 xl:mx-5 text-sm lg:text-sm md:text-lg text-slate-600 lg:block md:block"><Link to="/">HOME</Link></li>
            <li className="mx-4 xl:mx-5 text-sm lg:text-sm md:text-lg text-slate-600 lg:block md:block"><Link to="/shop">SHOP</Link></li>
            <li className="mx-4 xl:mx-5 text-sm lg:text-sm md:text-lg text-slate-600 lg:block md:block"><Link to="/forsale">FORSALE</Link></li>
          </ul>
        </div>

        <div className="user_cart lg:w-40 lg:w-32 md:w-40 w-30 flex justify-between items-center md:flex-none flex-1">
          <img src={heart} className="w-5 h-5 xl:w-6 xl:h-6 lg:w-5 lg:h-5 md:h-7 md:w-7" alt="heart" />
          <Link to={userId ? `/cart/${userId}` : '/auth'}>
            <div className="cart_icon flex items-center">
              <img src={cart} className="xl:w-5 xl:h-5 lg:w-4 lg:h-4 md:h-6 md:w-6 w-4 h-4" alt="cart" />
              <p className="lg:text-sm md:text-base mx-1 xl:mx-2 text-slate-700">CART</p>
              <div className="user_cart_total rounded-full bg-amber-500 w-5 h-5 xl:w-6 xl:h-6 lg:w-5 lg:h-5 md:h-7 md:w-7 flex items-center justify-center">
                <p className="text-white lg:text-xs md:text-sm">{totalCartItems?.length}</p>
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
