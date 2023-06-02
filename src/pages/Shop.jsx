import '../styles/shop.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import TopRated from '../components/TopRated';
import Products from '../components/Products';
// import Category from '../components/Category';

export default function Shop() {
  return (
    <>
      <Navbar bg="bg-white" />
      {/* <TopRated /> */}
      <Products />
      {/* <Category /> */}
      <Footer />
    </>
  );
}
