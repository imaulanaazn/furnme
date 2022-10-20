// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeHero from '../components/HomeHero';
import BestSelling from '../components/BestSelling';
import ThingsForYou from '../components/ThingsForYou';
import HomeDecor from '../components/HomeDecor';

export default function Home() {
  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await axios.get('https://api-bwa-storegg.herokuapp.com/api/v1/players/landingpage');
  //     console.log(data.data);
  //   }
  //   fetchData();
  // }, []);

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
