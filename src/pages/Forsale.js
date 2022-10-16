import '../styles/forsale.css';
// import { Link } from 'react-router-dom';

import ForsaleHero from '../components/ForsaleHero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ItemsForsale from '../components/ItemsForsale';

export default function Forsale() {
  return (
    <>
      <Navbar position="static" />
      <ForsaleHero />
      <ItemsForsale />
      <Footer />
    </>
  );
}
