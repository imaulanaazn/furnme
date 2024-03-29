import { gsap } from 'gsap';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
// import { GoogleLogin } from '@react-oauth/google';
import logo from '../assets/img/logo.webp';
import { handleSignup, handleSignin } from '../utils/handleAuth';
import { setIsLogin } from '../redux/slices/auth';

function animateForm({
  screenWidth,
  currentForm,
  aside,
  form,
  welcomeBack,
  welcome,
  username,
  forgotPass,
}) {
  if (currentForm === 'signup') {
    const tl = gsap.timeline();
    tl.to(aside.current, {
      marginLeft: 'auto',
      duration: '1.2',
      ease: 'power2.out',
    });
    gsap.to(form.current, {
      marginLeft: 0,
      duration: '1.2',
      ease: 'power2.out',
    });
    gsap.to(welcomeBack.current, {
      x: '-2.5rem',
      opacity: 0,
      duration: '0.5',
      display: 'none',
    });
    gsap.to(welcome.current, {
      x: '0',
      opacity: 1,
      duration: '1.2',
      display: screenWidth >= 1024 ? 'flex' : 'none',
    });
    gsap.to(username.current, {
      display: 'initial',
      delay: 0.2,
    });
    tl.to(forgotPass.current, {
      display: 'none',
    }, '-=1.5');
  } else {
    const tl = gsap.timeline();
    tl.to(aside.current, {
      marginLeft: 0,
      duration: '1.2',
      ease: 'power2.out',
    });
    gsap.to(form.current, {
      marginLeft: 'auto',
      duration: '1.2',
      ease: 'power2.out',
    });
    gsap.to(welcomeBack.current, {
      x: '0',
      opacity: 1,
      duration: '1.2',
      display: screenWidth >= 1024 ? 'flex' : 'none',
    });
    gsap.to(welcome.current, {
      x: '2.5rem',
      opacity: 0,
      duration: '0.5',
      display: 'none',
    });
    tl.to(username.current, {
      display: 'none',
    }, '-=1.5');
    tl.to(forgotPass.current, {
      display: 'initial',
    }, '-=1');
  }
}

export default function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentForm, setCurrentForm] = useState('signup');
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
  const aside = useRef();
  const form = useRef();
  const welcomeBack = useRef();
  const welcome = useRef();
  const username = useRef();
  const forgotPass = useRef();

  useEffect(() => {
    animateForm({
      screenWidth,
      currentForm,
      aside,
      form,
      welcomeBack,
      welcome,
      username,
      forgotPass,
    });
  }, [currentForm, screenWidth]);

  // CODE FOR HANDLING FORM SUBMITION
  async function handleSubmit(e) {
    e.preventDefault();
    const result = currentForm === 'signup'
      ? await handleSignup(formData).then((response) => response).catch((err) => err)
      : await handleSignin(formData).then((response) => response).catch((err) => err);
    setFormData({ username: '', email: '', password: '' });
    if (!result.data) {
      alert(result.response.data.message);
    } else {
      const { token } = result.data;
      const tokenBase64 = btoa(token);
      Cookies.set('token', tokenBase64, { expires: 1 });
      dispatch(setIsLogin({ isLogin: true }));
      navigate('/');
    }
  }

  return (
    <div className="bg-orange-100 w-screen h-screen flex items-center">
      <div className="container relative lg:block flex flex-col justify-center lg:gap-0 md:gap-3 md:h-4/5 h-3/5 lg:w-4/6 sm:w-4/5  w-11/12  m-auto rounded-lg overflow-hidden bg-white">

        {/* ALTAR LOGO */}
        <div className="logo absolute top-4 left-4 z-10 flex items-start justify-end">
          <img src={logo} className="w-6" alt="" />
          <p className="text-2xl font-bold">ltar</p>
        </div>

        {/* FORM SIGIN AND SIGNUP */}
        <form
          ref={form}
          className="bg-white lg:h-full lg:w-3/5 h-auto w-full p-10 ml-auto flex flex-col lg:flex-1 flex-none items-center justify-center"
          onSubmit={(e) => { handleSubmit(e); }}
        >
          <h1 className="form-title font-bold lg:text-3xl md:text-5xl text-3xl text-orange-300 mb-6">
            {currentForm === 'signup' ? 'Create Account' : 'Sign in to Altar'}
          </h1>
          <input
            type="text"
            name="username"
            required={currentForm === 'signup'}
            value={formData.username}
            ref={username}
            onChange={(event) => { setFormData({ ...formData, username: event.target.value }); }}
            placeholder="Enter your username"
            className="rounded border border-stone-300 lg:text-xs md:text-xl text-xs lg:w-72 sm:w-4/5 w-11/12 lg:h-9 md:h-12 h-8 px-3 mb-2"
          />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={(event) => { setFormData({ ...formData, email: event.target.value }); }}
            placeholder="Enter your email"
            className="rounded border border-stone-300 lg:text-xs md:text-xl text-xs lg:w-72 sm:w-4/5 w-11/12 lg:h-9 md:h-12 h-8 px-3 mb-2"
          />
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={(event) => { setFormData({ ...formData, password: event.target.value }); }}
            placeholder="Enter you password"
            className="rounded border border-stone-300 lg:text-xs md:text-xl text-xs lg:w-72 sm:w-4/5 w-11/12 lg:h-9 md:h-12 h-8 px-3"
          />

          <p ref={forgotPass} className="forgot-pass lg:text-sm md:text-lg text-sm  mt-3">
            <a href="/#" className="underline underline-offset-8 decoration-1 decoration-slate-500 hover:decoration-slate-900">
              Forgot your password?
            </a>
          </p>

          {/* <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          /> */}

          <button type="submit" className="main-btn bg-orange-300 lg:w-40 md:w-48 w-40 lg:h-9 md:h-14 h-9 lg:text-base md:text-lg rounded-full text-white font-normal mt-6">
            {currentForm === 'signup' ? 'SIGN UP' : 'SIGN IN'}
          </button>

        </form>

        {/* TEXT FOR DESKTOP ONLY */}
        <div ref={welcome} className="welcome md:flex hidden h-1/2 opacity-0 translate-x-10 absolute top-0 right-0 z-10 w-2/5  flex-col items-center justify-end px-12 text-center">
          <h1 className="font-bold text-3xl text-white">Welcome Back</h1>
          <p className="text-sm text-white mt-5">To keep connected with with us please sign in with your personal info </p>
        </div>

        <div ref={welcomeBack} className="welcome-back md:flex hidden h-1/2 absolute top-0 z-10 w-2/5 flex-col items-center justify-end px-12 text-center">
          <h1 className="font-bold text-3xl text-white ">Welcome</h1>
          <p className="text-sm text-white mt-5">Start your journey with us by signing up with your personal info</p>
        </div>

        <aside ref={aside} className="lg:bg-orange-300 bg-white lg:h-full h-auto lg:w-2/5 w-full ml-0 -translate-y-full flex flex-col items-center justify-center px-12 text-center">
          <button
            type="button"
            onClick={() => { setCurrentForm((prevValue) => (prevValue === 'signup' ? 'signin' : 'signup')); }}
            className="secondary-btn border border-white border solid rounded-full h-9 w-40 rounded-full lg:text-white text-orange-300 font-normal lg:text-base md:text-lg lg:mt-24 m-0"
          >
            {currentForm === 'signup' ? 'SIGN IN' : 'SIGN UP'}
          </button>
        </aside>
      </div>
    </div>
  );
}
