import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Powerseries() {
  return (
    <div className="">
      <Header></Header>
      <div className=" w-[100%] flex justify-center items-center bg-black h-[80vh]">
        <div className=" h-[74vh] mt-[5%]  w-[100%]">
          <img className=" power-image" src="https://www.gonoise.com/cdn/shop/files/Desktop_1__compressedwebp85.webp?v=1734678645"></img>
        </div>
      </div>
      <div className="  w-[100%] bg-white flex">
        <div className=" w-[25%] h-[100%] ">
          <div className=" flex justify-between px-6 py-2">
            <label className=" text-black text-[30px] font-bold  ">
              Filters :{" "}
            </label>
            <label className=" flex items-center text-[blue] text-[18px] ">
              Clear All
            </label>
          </div>
          <div className=" h-[0.5px] w-[100%] bg-[gray]  "></div>
          <div className=" flex justify-between  px-6 py-2 ">
            <label className=" text-[20px] font-bold ">Sort by</label>
            <i class="fa fa-angle-up" aria-hidden="true"></i>
          </div>
          <div className=" h-[.5px] w-[100%] bg-[gray] "></div>

          <div className=" flex gap-1 px-4 py-4  flex-col ">
            <div className=" flex gap-2 items-center text-[15px] ">
              <i class="fa fa-circle-thin" aria-hidden="true"></i>
              <label>Featured</label>
            </div>
            <div className=" flex gap-2 items-center text-[15px] ">
              <i class="fa fa-circle-thin" aria-hidden="true"></i>
              <label>Best Selling</label>
            </div>
            <div className=" flex gap-2 items-center text-[15px] ">
              <i class="fa fa-circle-thin" aria-hidden="true"></i>
              <label>Price, low to high</label>
            </div>
            <div className=" flex gap-2 items-center text-[15px] ">
              <i class="fa fa-circle-thin" aria-hidden="true"></i>
              <label>Price, low to high</label>
            </div>
            <div className=" flex gap-2 items-center text-[15px] ">
              <i class="fa fa-circle-thin" aria-hidden="true"></i>
              <label>Date, old to new</label>
            </div>
            <div className=" flex gap-2 items-center text-[15px] ">
              <i class="fa fa-circle-thin" aria-hidden="true"></i>
              <label>Date, new to old</label>
            </div>
          </div>
          <div className=" h-[.5px] w-[100%] bg-[gray] "></div>
          <div className=" flex justify-between px-6 py-2 ">
            <label className=" text-[19px] font-bold  ">Price</label>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </div>
          <div className=" h-[.5px] w-[100%] bg-[gray] "></div>
        </div>
        <div className=" w-[75%]">
          <div className=" h-[9.8vh] w-[100%]  px-4 flex justify-between items-center">
            <div>
              <label className=" text-[29px] font-bold">
                Noise Power Series
              </label>
            </div>
            <div className=" flex gap-6 items-center ">
              <label className=" text-[gray] text-[15.5px] ">Home</label>
              <i class=" text-[gray]  fa fa-angle-right" aria-hidden="true"></i>
              <label className=" text-[gray] text-[15.5px] ">Collections</label>
              <i class=" text-[gray] fa fa-angle-right" aria-hidden="true"></i>
              <label className="text-[15.5px]">Noise Power Series</label>
            </div>
          </div>
          <div className=" h-[0.5px] w-[100%] bg-[gray]  "></div>
         <div className=" flex flex-wrap w-full gap-4 px-10 py-4">
          <div className=" flex flex-col  w-[32%] bg-gray-100">
            <div className="  w-[100%] flex justify-center border  items-center">
              <img className=" h-[100%] w-[100%]" src="https://www.gonoise.com/cdn/shop/files/Artboard_13_result.webp?v=1734676369"></img>
            </div>
            <div className=" flex flex-col p-4 gap-1 bg-white border">
              <label>Noise Gan Charger - 100W</label>
              <label className=" text-[gray] text-[15px]">Compact Design | Fast Charging</label>
              <label className=" text-[16px] mt-1 font-bold">₹3,499 
                <span className=" text-[gray] px-2  font-normal "><strike>₹4,999</strike></span>
                </label>
            </div>
          </div>
          <div className=" flex flex-col  w-[32%] bg-gray-100">
            <div className="  w-[100%] flex justify-center items-center">
              <img className=" h-[100%] w-[100%] border " src="https://www.gonoise.com/cdn/shop/files/Artboard_13_result.webp?v=1734676369"></img>
            </div>
            <div className=" flex flex-col p-4 gap-1 bg-white border ">
              <label>Noise Gan Charger - 100W</label>
              <label className=" text-[gray] text-[15px]">Compact Design | Fast Charging</label>
              <label className=" text-[16px] mt-1 font-bold">₹3,499 
                <span className=" text-[gray] px-2  font-normal "><strike>₹4,999</strike></span>
                </label>
            </div>
          </div>
          <div className=" flex flex-col  w-[32%] bg-gray-100">
            <div className="  w-[100%] flex border  justify-center items-center">
              <img className=" h-[100%] w-[100%]" src="https://www.gonoise.com/cdn/shop/files/Artboard_13_result.webp?v=1734676369"></img>
            </div>
            <div className=" flex flex-col p-4 gap-1 bg-white border">
              <label>Noise Gan Charger - 100W</label>
              <label className=" text-[gray] text-[15px]">Compact Design | Fast Charging</label>
              <label className=" text-[16px] mt-1 font-bold">₹3,499 
                <span className=" text-[gray] px-2  font-normal "><strike>₹4,999</strike></span>
                </label>
            </div>
          </div>
          <div className=" flex flex-col  w-[32%] bg-gray-100">
            <div className="  w-[100%] flex justify-center items-center border ">
              <img className=" h-[100%] w-[100%]" src="https://www.gonoise.com/cdn/shop/files/Artboard_13_result.webp?v=1734676369"></img>
            </div>
            <div className=" flex flex-col p-4 gap-1 bg-white border">
              <label>Noise Gan Charger - 100W</label>
              <label className=" text-[gray] text-[15px]">Compact Design | Fast Charging</label>
              <label className=" text-[16px] mt-1 font-bold">₹3,499 
                <span className=" text-[gray] px-2  font-normal "><strike>₹4,999</strike></span>
                </label>
            </div>
          </div>
         </div>
         
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Powerseries;
