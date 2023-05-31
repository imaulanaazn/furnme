import sofa from '../assets/img/sofa_showcase_bg.webp';

export default function ShopHero() {
  return (
    <section className="showcase relative w-full h-screen bg-orange-200">
      <img src={sofa} className="w-96 absolute bottom-0 left-1/2 -translate-x-1/2" alt="sofa" />
      <div className="text w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-auto">
        <h1 className="title text-slate-800 font-extrabold text-xl text-center lg:text-2xl md:text-3xl sm:text-xl">Comfy Furniture for Your Home</h1>
        <p className="text-sm text-slate-800 mt-2 md:text-lg">Discover the most beautiful furniture</p>
      </div>
    </section>
  );
}
