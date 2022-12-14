import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeHero from '../components/HomeHero';
import BestSelling from '../components/BestSelling';
import ThingsForYou from '../components/ThingsForYou';
import HomeDecor from '../components/HomeDecor';

export default function Home() {
  return (
    <>
      <Navbar bg="bg-white" />
      <HomeHero />
      <BestSelling />
      <ThingsForYou />
      <HomeDecor />
      <Footer />
    </>
  );
}
