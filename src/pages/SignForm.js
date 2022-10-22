import { gsap } from 'gsap';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../assets/icon/google.svg';
import facebook from '../assets/icon/facebook.svg';
import linkedin from '../assets/icon/linkedin.svg';
import logo from '../assets/img/logo.webp';

export default function SignForm() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
  const [isSignUp, setIsSignUp] = useState(false);
  const aside = useRef();
  const main = useRef();
  const welcomeBack = useRef();
  const welcome = useRef();
  const username = useRef();
  const forgotPass = useRef();
  const prevValue = !isSignUp;
  useEffect(() => {
    if (isSignUp) {
      const tl = gsap.timeline();
      tl.to(aside.current, {
        marginLeft: 'auto',
        duration: '1.2',
        ease: 'power2.out',
      });
      gsap.to(main.current, {
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
      gsap.to(main.current, {
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
  }, [isSignUp, screenWidth]);

  return (
    <div className="bg-orange-100 w-screen h-screen flex items-center">
      <div className="container lg:block flex flex-col bg-white lg:w-4/6 md:w-4/5 w-11/12 h-4/5 m-auto  rounded-lg overflow-hidden relative">
        <div className="logo absolute top-4 left-4 z-10 flex items-start justify-end">
          <img src={logo} className="w-6" alt="" />
          <p className="text-2xl font-bold">ltar</p>
        </div>
        <main ref={main} className="bg-white h-full lg:w-3/5 w-full p-10 ml-auto flex flex-col flex-1 items-center justify-center">
          <h1 className="title font-bold lg:text-3xl text-3xl md:text-5xl text-orange-300 mb-6">{prevValue ? 'Sign in to Altar' : 'Create Account'}</h1>
          <input type="text" ref={username} placeholder="Enter your username" className="username bg-slate-200 rounded lg:text-xs text-xs md:text-xl lg:h-8 h-8 lg:w-72 md:w-4/5 w-11/12 md:h-12 px-3 mb-1" />
          <input type="email" placeholder="Enter your email" className="bg-slate-200 rounded lg:text-xs text-xs md:text-xl lg:h-8 h-8 lg:w-72 md:w-4/5 w-11/12 md:h-12 px-3 mb-1" />
          <input type="password" placeholder="Enter you passord" className="bg-slate-200 rounded lg:text-xs text-xs md:text-xl lg:h-8 h-8 lg:w-72 md:w-4/5 w-11/12 md:h-12 px-3" />
          <p ref={forgotPass} className="forgot-pass lg:text-sm text-sm md:text-lg mt-3"><a href="/#" className="underline underline-offset-8 decoration-1 decoration-slate-500 hover:decoration-slate-900">Forgot your password?</a></p>

          <div className="socmed flex justify-between lg:w-24 w-24 md:w-36 mt-6 ">

            <Link to="/signform"><img src={google} className="lg:w-5 w-5 md:w-7" alt="google" /></Link>

            <Link to="/signform"><img src={facebook} className="lg:w-5 w-5 md:w-7" alt="facebook" /></Link>

            <Link to="/signform"><img src={linkedin} className="lg:w-5 w-5 md:w-7" alt="linkedin" /></Link>

          </div>
          <p className="lg:text-xs text-xs md:text-lg text-slate-500 mt-3 mb-6">Or use you social media account</p>
          <button type="submit" className="main-btn bg-orange-300 lg:h-9 h-9 lg:w-40 w-40 md:w-48 md:h-14 md:text-lg lg:text-base rounded-full text-white font-normal">{prevValue ? 'SIGN IN' : 'SIGN UP'}</button>
        </main>
        <div ref={welcome} className="welcome lg:flex hidden h-1/2 opacity-0 translate-x-10 absolute top-0 right-0 z-10 w-2/5  flex-col items-center justify-end px-12 text-center">
          <h1 className="font-bold text-3xl text-white">Welcome Back</h1>
          <p className="text-sm text-white mt-5">To keep connected with with us please sign in with your personal info </p>
        </div>
        <div ref={welcomeBack} className="welcome-back lg:flex hidden h-1/2  absolute top-0 z-10 w-2/5   flex-col items-center justify-end px-12 text-center">
          <h1 className="font-bold text-3xl text-white ">Welcome</h1>
          <p className="text-sm text-white mt-5">Start your journey with us by signing up with your personal info</p>
        </div>
        <aside ref={aside} className="lg:bg-orange-300 bg-white lg:h-full h-auto lg:w-2/5 w-full ml-0 -translate-y-full flex flex-col items-center justify-center px-12 text-center">
          <button type="submit" onClick={() => { setIsSignUp(prevValue); }} className="secondary-btn border border-white border solid rounded-full h-9 w-40 rounded-full lg:text-white text-orange-300 font-normal lg:text-base md:text-lg lg:mt-24 m-0">{prevValue ? 'SIGN UP' : 'SIGN IN'}</button>
        </aside>
      </div>
    </div>
  );
}
