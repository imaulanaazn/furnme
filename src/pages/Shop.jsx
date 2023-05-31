/* eslint-disable jsx-a11y/label-has-associated-control */
// import { Link } from 'react-router-dom';
import '../styles/shop.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopRated from '../components/TopRated';
import ShopHero from '../components/ShopHero';
import AllProducts from '../components/AllProducts';
import Category from '../components/Category';
import DiscountedFurniture from '../components/DiscountedFurniture';

export default function Shop() {
  return (
    <>
      <Navbar bg="bg-white" />
      <ShopHero />
      <TopRated />
      <AllProducts />
      <Category />
      <DiscountedFurniture />
      <Footer />
    </>
  );
}
