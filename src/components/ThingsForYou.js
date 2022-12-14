import { useDispatch } from 'react-redux';
import floorLamp from '../assets/img/floor_lamp.webp';
import { addToCart } from '../redux/slices/cartSlice';

export default function ThingsForYou() {
  const dispatch = useDispatch();
  const data = {
    id: '11',
    image: floorLamp,
    name: 'Floor Lamp',
    price: 50,
    quantity: 1,
  };
  return (
    <section className="for_you lg:h-96 h-screen  flex lg:flex-row flex-col lg:py-8 lg:my-12 ">
      <figure className="flex-1 flex items-center justify-center h-full h-auto">
        <div className="img_wrapper lg:w-1/2 md:h-full w-3/4 h-4/5 flex items-center justify-center margin-auto rounded-t-full bg-orange-100">
          <img src={floorLamp} className="h-44 lg:h-44 md:h-96 " alt="white vase" />
        </div>
      </figure>
      <div className="produc_desc flex-1 lg:block flex flex-col justify-center items-center lg:w-1/2 w-full text-center">
        <h2 className="text-orange-800 font-bold lg:text-base md:text-2xl">Things for you</h2>
        <h1 className="text-slate-800 font-extrabold lg:text-2xl md:text-3xl my-4">Floor Lamp</h1>
        <p className="w-3/4 lg:text-sm md:text-lg text-slate-500 lg:m-auto m-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus nam, animi omnis voluptas saepe amet expedita at qui sit facilis reiciendis ratione? Quis, animi nam. Doloribus recusandae ipsum dicta quas optio debitis at quibusdam rerum a accusamus!</p>
        <p className="font-bold lg:text-base md:text-lg text-slate-600 my-4">$50</p>
        <button type="button" onClick={() => { dispatch(addToCart(data)); }} className="lg:text-sm md:text-lg font-bold  text-orange-800 bg-orange-100 py-3 px-5">Buy Now</button>
      </div>
    </section>
  );
}
