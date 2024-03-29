// import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import lineDecor from '../assets/img/decor_line.webp';
import highChair from '../assets/img/high_chair.webp';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ServicesAndClients(props) {
  const { text } = props;
  return (
    <li className="my-1"><a href="/#" className="lg:text-base md:text-lg text-base">{text}</a></li>
  );
}

ServicesAndClients.propTypes = {
  text: string.isRequired,
};

export default function About() {
  return (
    <>
      <Navbar />

      <main className="lg:pt-64 md:pt-52 pt-44 pb-12 w-full lg:pl-52 md:px-24 sm:px-20 px-4 bg-orange-100 relative">
        <h1 className="md:w-96 font-extrabold lg:text-2xl md:text-3xl text-xl">An abstract and personal approach, defined by a mood of feeling</h1>
        <h2 className="font-black text-right lg:text-9xl md:text-7xl text-5xl ml-auto w-full mt-6 mb-12">About</h2>
        <h1 className="lg:w-72 md:w-80 font-bold lg:text-xl md:text-2xl text-lg">With our tastefull crew, we created a product with high taste of art and functionality, high quality is one of our highlighted aspect and cheap price is our prioritise.</h1>
        <p className="lg:w-72 md:w-80 lg:text-sm mb-5 mt-7  md:text-lg text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex tenetur molestias similique dignissimos voluptatem eum accusamus a, animi sequi debitis consequuntur esse voluptas blanditiis sapiente deserunt, sint fugiat? Recusandae dignissimos architecto, rerum laborum tempore perspiciatis alias doloribus libero fugit animi veniam autem quae.</p>
        <p className="lg:w-72 md:w-80 lg:text-sm md:text-lg text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet, atque tenetur beatae vitae minima totam ratione veritatis deserunt illum asperiores, numquam soluta itaque excepturi consectetur pariatur culpa illo placeat. Illo possimus sequi, temporibus.</p>
        <div className="service_and_clients mt-40 flex lg:w-72 justify-between">
          <ul className="service">
            <li><h1 className="font-bold  lg:text-base md:text-xl text-base">Services</h1></li>
            <ServicesAndClients text="Furniture" />
            <ServicesAndClients text="Design interior" />
            <ServicesAndClients text="Custom furniture" />
            <ServicesAndClients text="Soufenire" />
          </ul>
          <ul className="clients ">
            <h1 className="font-bold lg:text-base md:text-xl text-base">Clients</h1>
            <ServicesAndClients text="lorem" />
            <ServicesAndClients text="ipsum" />
            <ServicesAndClients text="dolor" />
            <ServicesAndClients text="sit" />
            <ServicesAndClients text="amet" />
          </ul>
          <img src={highChair} className="hidden lg:block absolute bottom-0 right-0 w-1/2" alt="chair" />
          <img src={lineDecor} className="hidden lg:block absolute top-40 left-0 w-20 translate-x-3/4" alt="decorative line" />
        </div>
      </main>

      <Footer />
    </>
  );
}
