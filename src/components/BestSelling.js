import { useDispatch } from 'react-redux';
import whiteVase from '../assets/img/white_pale_vase.webp';
import { addToCart } from '../redux/slices/cartSlice';

export default function BestSelling() {
  const dispatch = useDispatch();
  const data = {
    id: '10',
    image: whiteVase,
    name: 'White pale vase',
    price: 110,
    quantity: 1,
  };
  return (
    <section className="best_selling lg:h-96 h-screen flex lg:flex-row flex-col-reverse lg:py-8 md:my-12">
      <div className="produc_desc flex-1 lg:block flex flex-col justify-center items-center lg:w-1/2 w-full text-center">
        <h2 className="text-orange-800 font-semibold lg:text-base md:text-2xl">Best Selling</h2>
        <h1 className="text-slate-800 font-extrabold lg:text-2xl md:text-3xl my-4">White pale vase</h1>
        <p className="w-3/4 lg:text-sm md:text-lg text-slate-500 lg:m-auto m-3">This vase has been sold for over 130 in year making this thing as the most wanted vase in our store, this vase is made by an artist based on canada with experience in this field for over 5 year since he start to make vase in 2007, with the cheap price and high quality product you will not disapointed for buying this vase</p>
        <p className="font-bold lg:text-base md:text-lg text-slate-600 my-4">$110</p>
        <button type="button" onClick={() => { dispatch(addToCart(data)); }} className=" lg:text-sm md:text-lg font-bold  text-orange-800 bg-orange-200 py-2.5 px-5">Buy Now</button>
      </div>
      <figure className="flex-1 flex items-center justify-center lg:h-full h-auto">
        <div className="img_wrapper lg:w-1/2 w-3/4 md:h-full  h-4/5 flex items-center justify-center margin-auto rounded-b-full bg-orange-200">
          <img src={whiteVase} className="h-48 lg:h-48 md:h-80 " alt="white vase" />
        </div>
      </figure>
    </section>
  );
}
