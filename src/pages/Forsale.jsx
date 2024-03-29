import ForsaleHero from '../components/ForsaleHero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DiscountedProdSlide from '../components/DiscountedProdSlide';
import PromoDetails from '../components/PromoDetails';
import FlashSale from '../components/FlashSale';

export default function Forsale() {
  return (
    <>
      <Navbar position="absolute" />
      <ForsaleHero />
      <FlashSale />
      <DiscountedProdSlide />
      <PromoDetails />
      <Footer />
    </>
  );
}
