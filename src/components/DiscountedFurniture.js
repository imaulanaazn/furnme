import whiteSofa from '../assets/img/white-sofa.webp';

export default function DiscountedFurniture() {
  return (
    <section className="discounted w-full md:px-12 px-6 my-24">
      <div className="container flex md:flex-row flex-col h-80 bg-orange-100 mx-auto">
        <div className="left-text md:w-1/2 md:flex-none flex-1 w-full flex flex-col items-center justify-center md:p-0 py-14">
          <h1 className="text-4xl font-bold">Discounted</h1>
          <p className="text-lg font-medium tracking-widest">Wonder sofa</p>
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
  );
}
