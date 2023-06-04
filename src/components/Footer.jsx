import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>

      <footer className="grid lg:grid-cols-4 md:text-center grid-cols-2 gap-x-6 gap-y-6 lg:gap-y-0 py-14 xl:px-20 lg:px-12 md:px-16 sm:px-10 px-4">
        <div className="subs col-span-2 md:col-span-1 ml-auto flex flex-col">
          <h1 className="font-bold  lg:tex-base md:text-lg text-slate-700 mb-4">Subscribe</h1>
          <p className="lg:text-sm md:text-base text-slate-600">Subscribe to our newsletter to be the first to hear about new arrivals, sales and special offers!</p>
          <input type="email" className="border-solid border text-sm border-slate-700 rounded mt-4 py-2 px-4 " placeholder="Enter your email" />
          <button type="submit" className="rounded text-xs font-bold border border-solid bg-orange-100  text-orange-800 py-2 px-4 my-3">Send</button>
        </div>
        <div className="menu lg:mx-auto md:text-center md:mx-0 mr-auto">
          <h1 className="font-bold lg:tex-base md:text-lg text-slate-700 mb-4">Menu</h1>
          <ul>
            <li className="my-1"><Link to="/" className="lg:text-sm md:text-base text-slate-600 hover:text-black">Home</Link></li>
            <li className="my-1"><Link to="/shop" className="lg:text-sm md:text-base text-slate-600 hover:text-black">Shop</Link></li>
            <li className="my-1"><Link to="/about" className="lg:text-sm md:text-base text-slate-600 hover:text-black">About</Link></li>
            <li className="my-1"><Link to="/forsale" className="lg:text-sm md:text-base text-slate-600 hover:text-black">Forsale</Link></li>
            <li className="my-1"><Link to="#contact" className="lg:text-sm md:text-base text-slate-600 hover:text-black">Contact</Link></li>
            <li className="my-1"><Link to="/signform" className="lg:text-sm md:text-base text-slate-600 hover:text-black">Signin</Link></li>
            <li className="my-1"><Link to="/signform" className="lg:text-sm md:text-base text-slate-600 hover:text-black">Signup</Link></li>
          </ul>
        </div>
        <div className="info lg:mx-auto md:text-center md:mx-0 ml-auto">
          <h1 className="font-bold lg:tex-base md:text-lg text-slate-700 mb-4">Information</h1>
          <ul>
            <li className="my-1"><Link to="/#" className="lg:text-sm md:text-base text-slate-600 hover:text-black">About Us</Link></li>
            <li className="my-1"><Link to="/#" className="lg:text-sm md:text-base text-slate-600 hover:text-black">Terms & Conditions</Link></li>
            <li className="my-1"><Link to="/#" className="lg:text-sm md:text-base text-slate-600 hover:text-black">User&apos;s Guide</Link></li>
            <li className="my-1"><Link to="/#" className="lg:text-sm md:text-base text-slate-600 hover:text-black">Support Center</Link></li>
          </ul>
        </div>
        <div className="social_mediLink lg:mx-auto md:text-center md:mx-0 mr-auto " id="contact">
          <h1 className="font-bold lg:tex-base md:text-lg text-slate-700 mb-4">Social Media</h1>
          <ul>
            <li className="my-1"><Link to="/#" className="lg:text-sm md:text-base text-slate-600 hover:text-black">Twitter</Link></li>
            <li className="my-1"><Link to="/#" className="lg:text-sm md:text-base text-slate-600 hover:text-black">Facebook</Link></li>
            <li className="my-1"><Link to="/#" className="lg:text-sm md:text-base text-slate-600 hover:text-black">Telegram</Link></li>
            <li className="my-1"><Link to="/#" className="lg:text-sm md:text-base text-slate-600 hover:text-black">Discord</Link></li>
            <li className="my-1"><Link to="/#" className="lg:text-sm md:text-base text-slate-600 hover:text-black">Telephone</Link></li>
            <li className="my-1"><Link to="/#" className="lg:text-sm md:text-base text-slate-600 hover:text-black">Whatsapp</Link></li>
            <li className="my-1"><Link to="/#" className="lg:text-sm md:text-base text-slate-600 hover:text-black">Email</Link></li>
          </ul>
        </div>
      </footer>
      <div className="credits w-full flex justify-center items-center">
        <p className="border-b border-dashed border-black">
          Built by
          {' '}
          <a target="_blank" href="https://irham-maulana.netlify.app" className="text-blue-800" rel="noreferrer">Irham Maulana </a>
        </p>
      </div>
    </>

  );
}
