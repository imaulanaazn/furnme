import { gsap } from 'gsap';
import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import google from '../assets/icon/google.svg';
import facebook from '../assets/icon/facebook.svg';
import linkedin from '../assets/icon/linkedin.svg';
import logo from '../assets/img/logo.webp';
import { handleGoogleAuth, handleSignup, handleSignin } from '../utils/handleAuth';
import { setIsLogin } from '../redux/slices/auth';

function animateForm({
  screenWidth,
  isSignUp,
  aside,
  form,
  welcomeBack,
  welcome,
  username,
  forgotPass,
}) {
  if (isSignUp) {
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
      display: screenWidth > 768 ? 'flex' : 'none',
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
      display: screenWidth > 768 ? 'flex' : 'none',
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const aside = useRef();
  const form = useRef();
  const welcomeBack = useRef();
  const welcome = useRef();
  const username = useRef();
  const forgotPass = useRef();

  useEffect(() => {
    animateForm({
      screenWidth,
      isSignUp,
      aside,
      form,
      welcomeBack,
      welcome,
      username,
      forgotPass,
    });
  }, [isSignUp, screenWidth]);

  // CODE FOR HANDLING FORM SUBMITION
  async function handleSubmit() {
    const result = isSignUp
      ? await handleSignup(formData).then((response) => response).catch((err) => err)
      : await handleSignin(formData).then((response) => response).catch((err) => err);
    setFormData({ username: '', email: '', password: '' });
    if (!result.data) {
      alert(result.response.data.message);
    } else {
      const { token } = result.data.data;
      const tokenBase64 = btoa(token);
      Cookies.set('token', tokenBase64, { expires: 1 });
      dispatch(setIsLogin({ isLogin: true }));
      navigate('/');
    }
  }

  // CODE FOR HANDLING GOOGLE SIGNIN SIGNUP
  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const { data: profileObj } = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`);
        const result = await handleGoogleAuth(profileObj);
        if (!result.data) {
          console.log(result.response);
        } else {
          console.log(isSignUp ? 'registrasi berhasi' : 'login berhasil');
          const { token } = result.data.data;
          const tokenBase64 = btoa(token);
          Cookies.set('token', tokenBase64, { expires: 1 });
          dispatch(setIsLogin({ isLogin: true }));
          navigate('/');
        }
      } catch (error) {
        console.log(error);
        prompt('terjadi kesalahan, silahkan coba beberapa saat lagi');
      }
    },
    onError: (err) => {
      prompt('terjadi kesalahan, silahkan coba beberapa saat lagi');
      console.log(err);
    },
  });

  return (
    <div className="bg-orange-100 w-screen h-screen flex items-center">
      <div className="container flex flex-col bg-white w-11/12 h-4/5 m-auto rounded-lg overflow-hidden relative lg:block lg:w-4/6 md:w-4/5">

        {/* ALTAR LOGO */}
        <div className="logo absolute top-4 left-4 z-10 flex items-start justify-end">
          <img src={logo} className="w-6" alt="" />
          <p className="text-2xl font-bold">ltar</p>
        </div>

        {/* FORM SIGIN AND SIGNUP */}
        <form ref={form} className="bg-white h-full lg:w-3/5 w-full p-10 ml-auto flex flex-col flex-1 items-center justify-center" onSubmit={(event) => { handleSubmit(); event.preventDefault(); }}>
          <h1 className="title font-bold lg:text-3xl text-3xl md:text-5xl text-orange-300 mb-6">{isSignUp ? 'Create Account' : 'Sign in to Altar'}</h1>
          <input
            type="text"
            name="username"
            required={!!isSignUp}
            value={formData.username}
            ref={username}
            onChange={(event) => {
              setFormData(
                { ...formData, username: event.target.value },
              );
            }}
            placeholder="Enter your username"
            className="username bg-slate-200 rounded lg:text-xs text-xs md:text-xl lg:h-8 h-8 lg:w-72 md:w-4/5 w-11/12 md:h-12 px-3 mb-1"
          />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={(event) => { setFormData({ ...formData, email: event.target.value }); }}
            placeholder="Enter your email"
            className="bg-slate-200 rounded lg:text-xs text-xs md:text-xl lg:h-8 h-8 lg:w-72 md:w-4/5 w-11/12 md:h-12 px-3 mb-1"
          />
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={(event) => {
              setFormData({ ...formData, password: event.target.value });
            }}
            placeholder="Enter you password"
            className="bg-slate-200 rounded lg:text-xs text-xs md:text-xl lg:h-8 h-8 lg:w-72 md:w-4/5 w-11/12 md:h-12 px-3"
          />

          <p ref={forgotPass} className="forgot-pass lg:text-sm text-sm md:text-lg mt-3"><a href="/#" className="underline underline-offset-8 decoration-1 decoration-slate-500 hover:decoration-slate-900">Forgot your password?</a></p>

          {/* SOCIAL MEDIA BUTTON */}
          <div className="socmed flex justify-between lg:w-24 w-24 md:w-36 mt-6 ">
            <button type="button" onClick={() => googleLogin()}>
              <img src={google} className="lg:w-5 w-5 md:w-7" alt="facebook" />
            </button>
            <Link to="/auth"><img src={facebook} className="lg:w-5 w-5 md:w-7" alt="facebook" /></Link>
            <Link to="/auth"><img src={linkedin} className="lg:w-5 w-5 md:w-7" alt="linkedin" /></Link>
          </div>

          <p className="lg:text-xs text-xs md:text-lg text-slate-500 mt-3 mb-6">Or use you social media account</p>
          <button type="submit" className="main-btn bg-orange-300 lg:h-9 h-9 lg:w-40 w-40 md:w-48 md:h-14 md:text-lg lg:text-base rounded-full text-white font-normal">{isSignUp ? 'SIGN UP' : 'SIGN IN'}</button>
        </form>

        {/* TEXT FOR DESKTOP ONLY */}
        <div ref={welcome} className="welcome lg:flex hidden h-1/2 opacity-0 translate-x-10 absolute top-0 right-0 z-10 w-2/5  flex-col items-center justify-end px-12 text-center">
          <h1 className="font-bold text-3xl text-white">Welcome Back</h1>
          <p className="text-sm text-white mt-5">To keep connected with with us please sign in with your personal info </p>
        </div>

        <div ref={welcomeBack} className="welcome-back lg:flex hidden h-1/2 absolute top-0 z-10 w-2/5 flex-col items-center justify-end px-12 text-center">
          <h1 className="font-bold text-3xl text-white ">Welcome</h1>
          <p className="text-sm text-white mt-5">Start your journey with us by signing up with your personal info</p>
        </div>

        <aside ref={aside} className="lg:bg-orange-300 bg-white lg:h-full h-auto lg:w-2/5 w-full ml-0 -translate-y-full flex flex-col items-center justify-center px-12 text-center">
          <button
            type="button"
            onClick={() => { setIsSignUp((prevValue) => !prevValue); }}
            className="secondary-btn border border-white border solid rounded-full h-9 w-40 rounded-full lg:text-white text-orange-300 font-normal lg:text-base md:text-lg lg:mt-24 m-0"
          >
            {isSignUp ? 'SIGN IN' : 'SIGN UP'}
          </button>
        </aside>

      </div>
    </div>
  );
}
