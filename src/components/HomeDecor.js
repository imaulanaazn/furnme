import flamingoDecor from '../assets/img/flamingo_decor.webp';
import goldVase from '../assets/img/gold_vase_decor.webp';
import planDecor from '../assets/img/plant_decor.webp';
import tableDecor from '../assets/img/table_decor.webp';
import vaseDecor from '../assets/img/vase_decor.webp';
import welcomeDecor from '../assets/img/welcome_home_decor.webp';
import HomeDecorCard from './HomeDecorCard';

export default function HomeDecor() {
  return (
    <section className="home_decor lg:px-12 px-6 text-center my-20">
      <h1 className="text-orange-800 lg:text-lg md:text-xl font-bold text-center my-2 text-lg">Modern Home Decor Essentials</h1>
      <p className="lg:text-sm md:text-2xl font-normal text-slate-600 text-center lg:w-3/4 w-full mb-10 mx-auto max-w-[28rem]">Lorem ipsum iat optio totam mollitia atquefacilis eligendi quibusdam amet, commodi hic iste! Assumenda!</p>
      <div className="grid grid_wrapper lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-rows-2 gap-2 justify-content-center">
        <HomeDecorCard thumb={vaseDecor} id="1" name="Vase bunga gelap" price={40} colSpan="col-span-1" />
        <HomeDecorCard thumb={flamingoDecor} id="2" name="Flamingo Statue" price={70} colSpan="col-span-1" />
        <HomeDecorCard thumb={goldVase} id="3" name="Vase Emas" price={76} colSpan="col-span-1" />
        <HomeDecorCard thumb={planDecor} id="4" name="Plant" price={43} colSpan="col-span-1" />
        <HomeDecorCard thumb={tableDecor} id="5" name="Table decoration" price={210} colSpan="md:col-span-2" />
        <HomeDecorCard thumb={vaseDecor} id="6" name="Vase Dengan Motif" price={221} colSpan="col-span-1" />
        <HomeDecorCard thumb={welcomeDecor} id="7" name="Welcome Greetings" price={21} colSpan="col-span-1" />
      </div>
    </section>
  );
}
