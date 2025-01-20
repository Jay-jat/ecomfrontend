import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";


const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-transparent z-10 fixed w-[100%] h-[8vh] text-white flex justify-between lg:px-[10%] px-[5%] items-center ">
      <div className="lg:hidden flex gap-3 text-[20px]">
        <i class="fa fa-bars" aria-hidden="true"></i>
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
      <img
        className="h-[3vh]"
        src="https://www.gonoise.com/cdn/shop/files/Untitled-1_2.png?v=1727772937"
      ></img>
      <div className="lg:flex hidden text-[14px] ">
        <div className="menu-item h-[8vh]  flex items-center px-5  cursor-pointer">
          <div className="smartwatch-hover cursor-pointer">
            <label>Smart Watches</label>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
            </div>
           <div className="category-div bg-white absolute top-[8vh] left-0  w-full flex justify-center ">
            <div className="w-[85%] py-6 flex gap-6 h-[90vh]">
              <div className="w-[40%] flex flex-col">
               <h1 className="text-[20px] font-bold text-black">Explore Smart Watches</h1>
                <div className="w-full flex gap-[20%] mt-[6%] ">
                  <div className="w-[40%] h-[30vh] flex flex-col gap-2 bg-[] overflow-y-scroll">
                    <label className="text-[15px] text-[black] underline">SHOP BY TYPE</label>
                    <label className="text-[13px] text-[black] underline">AMOLED Smartwatches</label>
                    <label className="text-[13px] text-[black] underline">Sports SmartWacthes</label>
                    <label className="text-[13px] text-[black] underline">Leather Straps</label>
                    <label className="text-[13px] text-[black] underline">Braides Straps</label>
                    <label className="text-[13px] text-[black] underline">Metal Straps</label>
                    <label className="text-[13px] text-[black] underline">Round Dials</label>
                    <label className="text-[13px] text-[black] underline">Square Dials</label>
                    <label className="text-[13px] text-[black] underline">GPS Enabled</label>
                  </div>
                  <div className="w-[30%] flex flex-col  ">
                    <label className="text-[15px] text-[black] underline">SHOP BY SERIES</label>
                    <label className="text-[13px] text-[black] underline">Pro Series</label>
                    <label className="text-[13px] text-[black] underline">Ultra Series</label>
                    <label className="text-[13px] text-[black] underline">Halo Series</label>
                  </div>
                </div> 
                <div className="w-full flex gap-[20%] mt-[15%]">
                  <div className="w-[30%] h-[20vh] flex flex-col gap-2 ">
                    <label className="text-[15px] text-[black] underline">BESTSELLERS</label>
                    <label className="text-[13px] text-[black] underline">Pro 5 Max</label>
                    <label className="text-[13px] text-[black] underline">Pro 5</label>
                    <label className="text-[13px] text-[black] underline">Halo 2</label>
                    <label className="text-[13px] text-[black] underline">Diva</label>
                    <label className="text-[13px] text-[black] underline">Icon 2 Elite</label>
                  </div>
                  <div className="w-[30%] flex flex-col gap-2">
                    <label className="text-[15px] text-[black] underline">SHOP BY PRICE</label>
                    <label className="text-[13px] text-[black] underline">Rs 5000-6000</label>
                    <label className="text-[13px] text-[black] underline">Rs 5000-4000</label>
                    <label className="text-[13px] text-[black] underline">Rs 4000-3000</label>
                    <label className="text-[13px] text-[black] underline">Rs 3000-2000</label>
                    <label className="text-[13px] text-[black] underline">Under Rs-2000</label>
                  </div>
                </div> 
              </div>
              <div className="w-[60%] flex flex-col gap-[3%] justify-center">
                <div>
                  <label className="text-[15px] text-[black] underline flex" >CHOOSE A CATEGORY</label>
                </div>
                <div className="category-image flex gap-[5%]">
                  <div className="">
                    <img  className=" h-[25vh] object-cover" src="https://www.gonoise.com/cdn/shop/files/flagship-gear.png">
                    </img>
                  </div>
                  <div className="">
                    <img  className=" h-[25vh] object-cover" src="https://www.gonoise.com/cdn/shop/files/tech-spotlight.png">
                    </img>
                  </div>
                  <div className="">
                    <img  className=" h-[25vh] object-cover" src="https://www.gonoise.com/cdn/shop/files/lifestyle-tech.png">
                    </img>
                  </div>
                </div>
                <div className=" flex  gap-[5%]">
                <div className="">
                    <img  className=" h-[25vh] object-cover" src="https://www.gonoise.com/cdn/shop/files/shine-by-noise.png">
                    </img>
                  </div>
                  <div className="">
                    <img  className=" h-[25vh] object-cover" src="https://www.gonoise.com/cdn/shop/files/made-for-kids.png">
                    </img>
                  </div>
                  <div className="">
                    <img  className=" h-[25vh] object-cover" src="https://www.gonoise.com/cdn/shop/files/view-all-watches.png">
                    </img>
                  </div>
                </div>
              </div>
            </div>
           </div>
        </div>
    
        <div className="lg:flex hidden text-[14px]">
        <div className="menu-item h-[8vh] flex items-center   cursor-pointer">
          <div className="wireless-hover">
            <label>Wireless Audio</label>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
            </div>
           <div className="bg-white category-div absolute top-[8vh] left-0  w-full flex justify-center ">
            <div className="w-[85%] py-6 flex gap-6 h-[90vh]">
              <div className="w-[40%] flex flex-col">
               <h1 className="text-[20px] font-bold text-black">Explore Wireless Audio</h1>
                <div className="w-full flex gap-[20%] mt-[6%] ">
                  <div className="w-[40%]  flex flex-col gap-2 ">
                    <label className="text-[15px] text-[black] underline">BESTSELLERS</label>
                    <label className="text-[13px] text-[black] underline">Xero</label>
                    <label className="text-[13px] text-[black] underline">N1 Pro</label>
                    <label className="text-[13px] text-[black] underline">VS102 Lite</label>
                    <label className="text-[13px] text-[black] underline">Pure Pods</label>
                  </div>
                  <div className="w-[35%] flex flex-col  ">
                    <label className="text-[15px] text-[black] underline">SHOP BY PREFFERENCE</label>
                    <label className="text-[13px] text-[black] underline">Hybrid Anc</label>
                    <label className="text-[13px] text-[black] underline">Open Earbuds</label>
                    <label className="text-[13px] text-[black] underline">Long Playtime</label>
                    <label className="text-[13px] text-[black] underline">Design</label>
                  </div>
                </div> 
                <div className="w-full flex gap-[20%] mt-[15%]">
                  <div className="w-[30%] h-[20vh] flex flex-col gap-2 ">
                    <label className="text-[15px] text-[black] underline">SHOP BY PRICE</label>
                    <label className="text-[13px] text-[black] underline">Above Rs-8000</label>
                    <label className="text-[13px] text-[black] underline">Rs-3000-4000</label>
                    <label className="text-[13px] text-[black] underline">Rs-2000-3000</label>
                    <label className="text-[13px] text-[black] underline">Rs-1000-2000</label>
                    <label className="text-[13px] text-[black] underline">Under Rs-1000</label>
                  </div>
                </div> 
              </div>
              <div className="w-[60%] flex flex-col gap-[3%] justify-center">
                <div>
                  <label className="text-[15px] text-[black] underline flex" >CHOOSE A CATEGORY</label>
                </div>
                <div className="category-image flex gap-[5%]">
                  <div className="">
                    <img  className=" h-[25vh] object-cover" src="https://www.gonoise.com/cdn/shop/files/enc-tws.png">
                    </img>
                  </div>
                  <div className="">
                    <img  className=" h-[25vh] object-cover" src="https://www.gonoise.com/cdn/shop/files/enc-tws.png">
                    </img>
                  </div>
                  <div className="">
                    <img  className=" h-[25vh] object-cover" src="https://www.gonoise.com/cdn/shop/files/all-headphones.png">
                    </img>
                  </div>
                </div>
                <div className=" flex  gap-[5%]">
                <div className="">
                    <img  className=" h-[25vh] object-cover" src="https://www.gonoise.com/cdn/shop/files/neckbands.png">
                    </img>
                  </div>
                  <div className="">
                    <img  className=" h-[25vh] object-cover" src="https://www.gonoise.com/cdn/shop/files/speakers.png">
                    </img>
                  </div>
                  <div className="">
                    <img  className=" h-[25vh] object-cover" src="https://www.gonoise.com/cdn/shop/files/view-all-audio.png">
                    </img>
                  </div>
                </div>
              </div>
            </div>
           </div>
        </div>
        <div onClick={()=>navigate("./Powerseries")} className="power-div">
        <label className="h-[8vh] flex items-center ">Power Series</label>
        </div>
        <div className="accessories-div">
          <label className="h-[8vh] flex items-center ">Accesories</label>
          </div>
        <div className="gift-div">
          <label className="h-[8vh] flex items-center ">Gift Store</label>
          </div>
      </div>
      </div>
      <div className="text-white flex lg:gap-5 gap-3 lg:text-[16px] text-[20px] ">
        <i class="fa fa-search hidden lg:block" aria-hidden="true"></i>
        
        <i class="fa fa-user" aria-hidden="true"></i>
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>
      <Search></Search>
    </header>
  );
};

export default Header;
