import whiteVase from '../assets/img/white_pale_vase.webp';

export default function BestSelling() {
  return (
    <section className="best_selling lg:h-96 h-screen flex lg:flex-row flex-col-reverse lg:py-8 md:my-12">
      <div className="produc_desc flex-1 lg:block flex flex-col justify-center items-center lg:w-1/2 w-full text-center">
        <h1 className="text-slate-800 font-extrabold lg:text-2xl md:text-3xl my-4">Best quality products</h1>
        <p className="w-3/4 lg:text-base md:text-lg text-slate-500 lg:m-auto m-3">
          We offer an extensive collection
          of high-quality furniture pieces that cater to every style and
          budget. From contemporary to classic, our store showcases an array
          of furniture options that are both functional and aesthetically
          pleasing. Whether you&apos;re looking to revamp your living room,
          bedroom, or office space we have everything you need to
          transform your home into a comfortable and stylish haven.
        </p>
      </div>
      <figure className="flex-1 flex items-center justify-center lg:h-full h-auto">
        <div className="img_wrapper lg:w-1/2 w-3/4 md:h-full  h-4/5 flex items-center justify-center margin-auto rounded-b-full bg-orange-200">
          <img src={whiteVase} className="h-48 lg:h-48 md:h-80 " alt="white vase" />
        </div>
      </figure>
    </section>
  );
}
