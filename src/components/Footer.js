export default function Footer() {
  return (
    <footer className="grid lg:grid-cols-4 md:text-center grid-cols-2 gap-x-6 gap-y-6 lg:gap-y-0 py-14 lg:px-12 px-8">
      <div className="subs col-span-2 md:col-span-1 ml-auto flex flex-col">
        <h1 className="font-bold  lg:tex-base md:text-lg text-slate-700 mb-4">Subscribe</h1>
        <p className="lg:text-sm md:text-base">Subscribe to our newsletter to be the first to hear about new arrivals, sales and special offers!</p>
        <input type="email" className="border-solid border text-sm border-slate-700 rounded mt-4 py-2 px-4 " placeholder="Enter your email" />
        <button type="submit" className="rounded text-xs font-bold border border-solid bg-orange-100  text-orange-800 py-2 px-4 my-3">Send</button>
      </div>
      <div className="menu lg:mx-auto md:text-center md:mx-0 mr-auto">
        <h1 className="font-bold lg:tex-base md:text-lg text-slate-700 mb-4">Menu</h1>
        <ul>
          <li><a href="/" className="lg:text-sm md:text-base">Home</a></li>
          <li><a href="shop" className="lg:text-sm md:text-base">Shop</a></li>
          <li><a href="forsale" className="lg:text-sm md:text-base">Forsale</a></li>
          <li><a href="about" className="lg:text-sm md:text-base">About</a></li>
          <li><a href="#contact" className="lg:text-sm md:text-base">Contact</a></li>
          <li><a href="signform" className="lg:text-sm md:text-base">Signin</a></li>
          <li><a href="signform" className="lg:text-sm md:text-base">Signup</a></li>
        </ul>
      </div>
      <div className="info lg:mx-auto md:text-center md:mx-0 ml-auto">
        <h1 className="font-bold lg:tex-base md:text-lg text-slate-700 mb-4">Information</h1>
        <ul>
          <li><a href="/#" className="lg:text-sm md:text-base">About Us</a></li>
          <li><a href="/#" className="lg:text-sm md:text-base">Terms & Conditions</a></li>
          <li><a href="/#" className="lg:text-sm md:text-base">User&apos;s Guide</a></li>
          <li><a href="/#" className="lg:text-sm md:text-base">Support Center</a></li>
        </ul>
      </div>
      <div className="social_media lg:mx-auto md:text-center md:mx-0 mr-auto " id="contact">
        <h1 className="font-bold lg:tex-base md:text-lg text-slate-700 mb-4">Social Media</h1>
        <ul>
          <li><a href="/#" className="lg:text-sm md:text-base">Twitter</a></li>
          <li><a href="/#" className="lg:text-sm md:text-base">Facebook</a></li>
          <li><a href="/#" className="lg:text-sm md:text-base">Telegram</a></li>
          <li><a href="/#" className="lg:text-sm md:text-base">Discord</a></li>
          <li><a href="/#" className="lg:text-sm md:text-base">Telephone</a></li>
          <li><a href="/#" className="lg:text-sm md:text-base">Whatsapp</a></li>
          <li><a href="/#" className="lg:text-sm md:text-base">Email</a></li>
        </ul>
      </div>
    </footer>
  );
}
