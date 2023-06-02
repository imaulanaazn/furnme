import '../styles/shop.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import TopRated from '../components/TopRated';
import Products from '../components/Products';
import Recommendation from '../components/Recommendation';
// import Category from '../components/Category';

export default function Shop() {
  return (
    <>
      <Navbar bg="bg-white" />
      {/* <TopRated /> */}
      <Recommendation />
      <Products />
      {/* <Category /> */}
      <Footer />
    </>
  );
}
