import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeHero from '../components/HomeHero';
import TrendingProducts from '../components/TrendingProducts';
import Services from '../components/Services';

export default function Home() {
  return (
    <>
      <Navbar bg="bg-white" />
      <HomeHero />
      <TrendingProducts />
      <Services />
      <Footer />
    </>
  );
}
