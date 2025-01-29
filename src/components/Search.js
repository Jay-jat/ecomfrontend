import React from "react";

function Search() {
  return (
    <div className="h-[80vh] w-[60%] top-0 left-[35vh] bg-white fixed border border-black">
      <div className="h-[7.5vh] border border-black w-full flex items-center justify-between text-lg">
        <i className="text-black flex justify-end items-center w-[4.5%] h-full fa fa-search"></i>
        <input
          className="w-[95%] h-full text-black border-0 focus:outline-none focus:border-0"
          type="search"
          placeholder="Search...."
        />
      </div>
      <div className="flex h-[72.5vh] justify-between">
        <div className="h-full w-[28%] bg-[#f7f7f6] gap-2">
          <h3 className="text-black text-sm mx-4 py-2 font-bold">
            POPULAR CHOICES
          </h3>
          <div className="mx-4 flex flex-wrap gap-2">
            <button className="bg-black rounded-sm flex justify-center items-center py-1">
              <label className="mx-2 text-xs font-semibold">
                SMART WATCHES
              </label>
            </button>
            <button className="bg-black rounded-sm flex justify-center items-center py-1">
              <label className="mx-2 text-xs font-semibold">GAN CHARGER</label>
            </button>
            <button className="bg-black rounded-sm flex justify-center items-center py-1">
              <label className="mx-2 text-xs font-semibold">
                WIRELESS EARBUDS
              </label>
            </button>
            <button className="bg-black rounded-sm flex justify-center items-center py-1">
              <label className="mx-2 text-xs font-semibold">PRO 5</label>
            </button>
            <button className="bg-black rounded-sm flex justify-center items-center py-1">
              <label className="mx-2 text-xs font-semibold">
                DIVA 2 WOMEN SMARTWATCH
              </label>
            </button>
          </div>
        </div>
        <div className="h-full w-[70%] text-black">
          <h4 className="py-2 mt-2 font-bold">RECOMMENDED FOR YOU</h4>
          <div className="flex flex-wrap justify-evenly">
            <div className="h-[55vh] w-[30%] border border-gray-200">
              <div className=" bg-[#f3f3f2]">
                <img
                  src="https://cdn.shopify.com/s/files/1/0997/6284/files/Artboard_2_result_1000x.webp?v=1734676369"
                  alt=""
                />
              </div>
              <div>
                <div className="py-2 mx-2">
                  <h3 className="font-semibold">Noise Power Charger</h3>
                </div>
                <div className="py-2 mx-2 text-gray-500">
                  <h5>Advanced Overcharged</h5>
                </div>
                <div className="py-2">
                  <div className="flex mx-2">
                    <div className="h-[15px] w-[15px] mx-[2px] rounded-full bg-[#010100]"></div>
                    <div className="h-[15px] w-[15px] mx-[2px] rounded-full bg-[#09465f]"></div>
                    <div className="h-[15px] w-[15px] mx-[2px] rounded-full bg-[#a7d8f4]"></div>
                  </div>
                  <div className="mx-2 py-2 flex flex-wrap items-center">
                    <label className="text-[22px] font-semibold">
                      {" "}
                      <i class="fa fa-inr" aria-hidden="true">
                        999
                      </i>
                    </label>
                    <del className="text-gray-400 mx-2">
                      {" "}
                      <i class="fa fa-inr"></i> 1499{" "}
                    </del>
                    <button className="bg-[#e1efe4] text-[#4e9b64] rounded-full mt-2">
                      <label className="mx-2">33% OFF</label>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[55vh] w-[30%] border border-gray-200">
              <div className=" bg-[#f3f3f2]">
                <img
                  src="https://cdn.shopify.com/s/files/1/0997/6284/files/Artboard_7-min_1000x.png?v=1726721617"
                  alt=""
                />
              </div>
              <div>
                <div className="py-2 mx-2">
                  <h3 className="font-semibold">Air Bods Pro4</h3>
                </div>
                <div className="py-2 mx-2 text-gray-500">
                  <h5>Hybrid Anc (Up to 40db)</h5>
                </div>
                <div className="py-2">
                  <div className="flex mx-2">
                    <div className="h-[15px] w-[15px] mx-[2px] rounded-full bg-[#30483b]"></div>
                    <div className="h-[15px] w-[15px] mx-[2px] rounded-full bg-[#09465f]"></div>
                    <div className="h-[15px] w-[15px] mx-[2px] rounded-full bg-[#d3d0ee]"></div>
                  </div>
                  <div className="mx-2 py-2 flex flex-wrap items-center">
                    <label className="text-[22px] font-semibold">
                      {" "}
                      <i class="fa fa-inr" aria-hidden="true">
                        1799
                      </i>
                    </label>
                    <del className="text-gray-400 mx-2">
                      {" "}
                      <i class="fa fa-inr"></i> 5499{" "}
                    </del>
                    <button className="bg-[#e1efe4] text-[#4e9b64] rounded-full mt-2">
                      <label className="mx-2">67% OFF</label>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[55vh] w-[30%] border border-gray-200">
              <div className=" bg-[#f3f3f2]">
                <img
                  src="https://cdn.shopify.com/s/files/1/0997/6284/files/AirClipsBlack_5_1000x.webp?v=1732867997"
                  alt=""
                />
              </div>
              <div>
                <div className="py-2 mx-2">
                  <h3 className="font-semibold">Air Clips</h3>
                </div>
                <div className="py-2 mx-2 text-gray-500">
                  <h5>Open Beam Design</h5>
                </div>
                <div className="py-2">
                  <div className="flex mx-2">
                    <div className="h-[15px] w-[15px] mx-[2px] rounded-full bg-[#010100]"></div>
                    <div className="h-[15px] w-[15px] mx-[2px] rounded-full bg-[#09465f]"></div>
                    <div className="h-[15px] w-[15px] mx-[2px] rounded-full bg-red-400"></div>
                    <div className="flex justify-center ml-7">
                      <i class="text-yellow-300 fa fa-star"></i>
                      <span className="ml-1">4.6</span>
                      <span className="text-gray-400">(12)</span>
                    </div>
                  </div>
                  <div className="mx-2 py-2 flex flex-wrap items-center">
                    <label className="text-[22px] font-semibold">
                      {" "}
                      <i class="fa fa-inr" aria-hidden="true">
                        2999
                      </i>
                    </label>
                    <del className="text-gray-400 mx-2">
                      {" "}
                      <i class="fa fa-inr"></i> 3999{" "}
                    </del>
                    <button className="bg-[#e1efe4] text-[#4e9b64] rounded-full mt-2">
                      <label className="mx-2">25% OFF</label>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[15px] bg-[#f0f0f1] flex items-center mt-7">
            <i class="fa fa-arrow-circle-left"></i>
            <div className="h-[15px] w-[40%] bg-[#c0c0c1] "></div>
            <div className="h-[15px] w-[55%] "></div>
            <i class="fa fa-arrow-circle-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
