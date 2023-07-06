import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeHero from '../components/HomeHero';
import TrendingProducts from '../components/TrendingProducts';
import Services from '../components/Services';
import Comments from '../components/Comments';
import LookingForProducts from '../components/LookingForProducts';
import SpecialDiscount from '../components/SpecialDiscount';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <LookingForProducts />
      <SpecialDiscount />
      <TrendingProducts />
      <Services />
      <Comments />
      <Footer />
    </>
  );
}
