export default function Checkout() {
  return (
    <div className="flex justify-center items-center min-h-screen p-[25px] w-full mx-auto bg-orange-100">

      <form action="" className="w-[700px] shadow-[0_5px_10px_rgba(0,0,0,0.1)] p-5 max-w-lg bg-white rounded-md">

        <div className="row flex flex-wrap gap-[15px]">

          <div className="col flex-[1_1_250px]">

            <h3 className="title text-xl font-semibold text-[#333] uppercase pb-[5px]">billing address</h3>

            <div className="inputBox mx-0 my-[15px]">
              <span className="block mb-2.5 text-base">full name :</span>
              <input type="text" className="w-full border text-[15px] normal-case px-[15px] py-2.5 border-solid border-[#ccc] focus:border focus:border-solid focus:border-black" placeholder="your name" />
            </div>
            <div className="inputBox mx-0 my-[15px]">
              <span className="block mb-2.5 text-base">email :</span>
              <input type="email" className="w-full border text-[15px] normal-case px-[15px] py-2.5 border-solid border-[#ccc] focus:border focus:border-solid focus:border-black" placeholder="example@example.com" />
            </div>
            <div className="inputBox mx-0 my-[15px]">
              <span className="block mb-2.5 text-base">address :</span>
              <input type="text" className="w-full border text-[15px] normal-case px-[15px] py-2.5 border-solid border-[#ccc] focus:border focus:border-solid focus:border-black" placeholder="room - street - locality" />
            </div>
            <div className="inputBox mx-0 my-[15px]">
              <span className="block mb-2.5 text-base">city :</span>
              <input type="text" className="w-full border text-[15px] normal-case px-[15px] py-2.5 border-solid border-[#ccc] focus:border focus:border-solid focus:border-black" placeholder="newyork" />
            </div>

            <div className="flex gap-7">
              <div className="inputBox mx-0 my-[15px] mt-[5px] flex-1">
                <span className="block mb-2.5 text-base">state :</span>
                <input type="text" className="w-full border text-[15px] normal-case px-[15px] py-2.5 border-solid border-[#ccc] focus:border focus:border-solid focus:border-black" placeholder="united state" />
              </div>
              <div className="inputBox mx-0 my-[15px] mt-[5px] flex-1">
                <span className="block mb-2.5 text-base">zip code :</span>
                <input type="text" className="w-full border text-[15px] normal-case px-[15px] py-2.5 border-solid border-[#ccc] focus:border focus:border-solid focus:border-black" placeholder="123 456" />
              </div>
            </div>

          </div>
        </div>

        <input type="submit" value="proceed to checkout" className="submit-btn w-full text-lg font-normal text-orange-800 cursor-pointer mt-[5px] p-3 bg-orange-200" />

      </form>

    </div>
  );
}
