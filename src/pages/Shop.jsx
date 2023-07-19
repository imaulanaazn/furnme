import '../styles/shop.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import TopRated from '../components/TopRated';
import Products from '../components/Products';
import Recommendation from '../components/Recommendation';
import RecentlyViewed from '../components/RecentlyViewed';
import NewArrival from '../components/NewArrival';

export default function Shop() {
  return (
    <>
      <Navbar bg="bg-white" />
      <Recommendation />
      <NewArrival />
      <Products />
      <RecentlyViewed />
      <Footer />
    </>
  );
}
