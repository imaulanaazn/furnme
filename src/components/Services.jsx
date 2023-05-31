export default function Services() {
  return (
    <div className="services-container flex lg:flex-row flex-col xl:gap-48 lg:gap-38 gap-10 lg:px-12 sm:px-10 px-6 my-20">
      <div className="services-text xl:w-3/5 lg:w-1/2">
        <h1 className="font-extrabold lg:text-5xl sm:text-5xl text-3xl mb-10">ALTAR</h1>
        <h2 className="font-bold sm:text-xl text-lg mb-5">Services</h2>
        <p className="text-slate-600 lg:text-base sm:text-lg mb-5">
          Through our services, we strive to provide our customers with satisfication.
          At Furnme, you can get free delivery installation services with a certain minimum
          purchase,
          guaranted best price and quality. So you don&quot;t overpay for the product you&quot;ve
          purchased, simple proccess of returning and exchanging goods if the product does not
          meet your expectations.
        </p>
        <p className="text-slate-600 lg:text-base sm:text-lg">
          Of course, a modern strategy to elevate our products above competitors is to focus
          on customer pleasure. We strive to provide our clients with a positive buying experience
          because of this.
        </p>
      </div>
      <div className="xl:w-2/5 lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:gap-3 gap-4">
        <div className="bg-orange-100 flex flex-col justify-center xl:h-48 lg:h-52 md:h-72 sm:h-64 h-80 lg:p-4 p-7 text-orange-800 text-center">
          <i className="mb-5 fa-solid fa-certificate lg:text-4xl sm:text-6xl text-5xl" />
          <p className="md:text-base sm:text-lg">
            Easily Warranty Digitaly With E-Warranty
          </p>
        </div>
        <div className="bg-orange-50 flex flex-col justify-center xl:h-48 lg:h-52 md:h-72 sm:h-64 h-80 lg:p-4 p-7 text-center">
          <i className="mb-5 fa-solid fa-truck-fast lg:text-4xl sm:text-6xl text-5xl" />
          <p className="md:text-base sm:text-lg">
            Free Shipping and Installation Fees
          </p>
        </div>
        <div className="sm:bg-orange-50 bg-orange-100 flex flex-col justify-center xl:h-48 lg:h-52 md:h-72 sm:h-64 h-80 lg:p-4 p-7 text-center sm:text-black text-orange-800">
          <i className="mb-5 fa-solid fa-money-bill-transfer lg:text-4xl sm:text-6xl text-5xl" />
          <p className="md:text-base sm:text-lg">
            100% Satisfication Guarantee
          </p>
        </div>
        <div className="sm:bg-orange-100 bg-orange-50 flex flex-col justify-center xl:h-48 lg:h-52 md:h-72 sm:h-64 h-80 lg:p-4 p-7 sm:text-orange-800 text-black text-center">
          <i className="mb-5 fa-solid fa-pen-ruler lg:text-4xl sm:text-6xl text-5xl" />
          <p className="md:text-base sm:text-lg">
            Free Design Interior Service
          </p>
        </div>
      </div>
    </div>
  );
}
