import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeHero from '../components/HomeHero';
import TrendingProducts from '../components/TrendingProducts';

export default function Home() {
  return (
    <>
      <Navbar bg="bg-white" />
      <HomeHero />
      <TrendingProducts />
      <Footer />
    </>
  );
}
