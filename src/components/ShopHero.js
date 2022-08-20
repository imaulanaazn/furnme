import sofa from '../assets/img/sofa_showcase_bg.png';

export default function ShopHero() {
  return (
    <section className="showcase relative w-full h-screen bg-orange-200">
      <img src={sofa} className="w-96 absolute bottom-0 left-1/2 -translate-x-1/2" alt="sofa" />
      <div className="text w-full lg:w-auto text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 zindex-1">
        <h1 className="title text-slate-800 font-extrabold lg:text-2xl md:text-3xl sm:text-xl text-center">Comfy Furniture for Your Home</h1>
        <p className="text-lg text-slate-800 mt-2">Discover the most beautiful furniture</p>
      </div>
    </section>
  );
}
