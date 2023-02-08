import floorLamp from '../assets/img/floor_lamp.webp';

export default function ThingsForYou() {
  return (
    <section className="for_you lg:h-96 h-screen  flex lg:flex-row flex-col lg:py-8 lg:my-12 ">
      <figure className="flex-1 flex items-center justify-center h-full h-auto">
        <div className="img_wrapper lg:w-1/2 md:h-full w-3/4 h-4/5 flex items-center justify-center margin-auto rounded-t-full bg-orange-100">
          <img src={floorLamp} className="h-44 lg:h-44 md:h-96 " alt="white vase" />
        </div>
      </figure>
      <div className="produc_desc flex-1 lg:block flex flex-col justify-center items-center lg:w-1/2 w-full text-center">
        <h1 className="text-slate-800 font-extrabold lg:text-2xl md:text-3xl my-4">Proffesional</h1>
        <p className="w-3/4 lg:text-base md:text-lg text-slate-500 lg:m-auto m-3">
          Our knowledgeable and friendly staff is always on hand to assist
          you in choosing the perfect piece for your space. Whether you&apos;re
          looking for a cozy armchair for your reading nook, a spacious
          sofa for your family room, or a stylish dining table for your
          kitchen, we&apos;ve got you covered. We only partner with top
          furniture brands to ensure that our customers receive the
          highest-quality pieces available. Our products are carefully
          crafted from high-quality materials and are built to last,
          making them a smart investment for your home.
        </p>
      </div>
    </section>
  );
}
