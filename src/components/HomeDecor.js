import flamingoDecor from '../assets/img/flamingo_decor.png';
import goldVase from '../assets/img/gold_vase_decor.png';
import planDecor from '../assets/img/plant_decor.png';
import tableDecor from '../assets/img/table_decor.png';
import vaseDecor from '../assets/img/vase_decor.png';
import welcomeDecor from '../assets/img/welcome_home_decor.png';
import HomeDecorCard from './HomeDecorCard';

export default function HomeDecor() {
  return (
    <section className="home_decor lg:px-12 px-6 text-center my-12">
      <h1 className="text-orange-800 lg:text-base md:text-xl font-bold text-center my-4 text-lg">Modern Home Decor Essentials</h1>
      <p className="lg:text-sm md:text-2xl font-normal text-slate-700 text-center lg:w-3/4 w-full mb-10 mx-auto">Lorem ipsum iat optio totam mollitia atque dignissimos eos quaerat, nulla reiciendis, in explicabo facere cupiditate facilis eligendi quibusdam amet, commodi hic iste! Assumenda!</p>
      <div className="grid grid_wrapper lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-rows-2 gap-2 justify-content-center">
        <HomeDecorCard thumb={vaseDecor} name="Vase bunga gelap" price={40} colSpan="col-span-1" />
        <HomeDecorCard thumb={flamingoDecor} name="Flamingo Statue" price={70} colSpan="col-span-1" />
        <HomeDecorCard thumb={goldVase} name="Vase Emas" price={76} colSpan="col-span-1" />
        <HomeDecorCard thumb={planDecor} name="Plant" price={43} colSpan="col-span-1" />
        <HomeDecorCard thumb={tableDecor} name="Table decoration" price={210} colSpan="md:col-span-2" />
        <HomeDecorCard thumb={vaseDecor} name="Vase Dengan Motif" price={221} colSpan="col-span-1" />
        <HomeDecorCard thumb={welcomeDecor} name="Welcome Greetings" price={21} colSpan="col-span-1" />
      </div>
    </section>
  );
}
