import React from "react";

function Footer() {
  return (
    <div className="h-[100vh] w-[100%] bg-black ">
      <div className=" h-[35vh] w-[100%] ">
        <div className=" py-10 ">
          <img
            className="h-[4vh] px-28"
            src="https://www.gonoise.com/cdn/shop/files/Untitled-1_2.png?v=1727772937"
          ></img>
          <div className=" flex gap-36 px-28 mt-4">
            <div className=" flex flex-col  mt-4 gap-1">
              <label className=" text-[11px] text-white">
                SHOP BY FEATURES
              </label>
              <label className="text-[13px] text-white">
                Smart Watches with Alexa
              </label>
              <label className="text-[13px] text-white">
                Amoled Display Smart Watches
              </label>
              <label className="text-[13px] text-white">
                Round Dial Smart Watches
              </label>
              <label className="text-[13px] text-white">
                BT Calling Smart Watches
              </label>
              <label className="text-[13px] text-white">
                Android Smart Watches
              </label>
            </div>
            <div className=" flex flex-col mt-4 gap-1">
              <label className=" text-[11px] text-white ">SHOP BY GENDER</label>
              <label className="text-[13px] text-white">
                Smart Watches For Men
              </label>
              <label className="text-[13px] text-white">
                Smart Watches for Women
              </label>
              <label className="text-[13px] text-white">
                Smart Watches For Kids
              </label>
            </div>
            <div className=" flex flex-col mt-4 gap-1">
              <label className=" text-[11px] text-white">SHOP BY PRICE</label>
              <label className="text-[13px] text-white">
                Smart Watches Under 2000
              </label>
              <label className="text-[13px] text-white">
                Smart Watches Under 3000
              </label>
              <label className="text-[13px] text-white">
                Smart Watches Under 4000
              </label>
              <label className="text-[13px] text-white">
                Smart Watches Under 5000
              </label>
              <label className="text-[13px] text-white">
                Smart Watches Above 5000{" "}
              </label>
            </div>
          </div>
        </div>
        <div className=" h-[0.5px] w-[80%] bg-[gray] ml-[9%]"></div>
      </div>
      <div className=" h-[35vh] w-[100%]  mt-20">
        <div className=" flex gap-56 px-28 mt-4 ">
          <div className=" flex flex-col  mt-4 gap-1">
            <label className=" text-[11px] text-white">SHOP BY FEATURES</label>
            <label className="text-[13px] text-white">Gaming Earbuds</label>
            <label className="text-[13px] text-white">ANC Earbuds</label>
          </div>
          <div className=" flex flex-col mt-4 gap-1 px-1">
            <label className=" text-[11px] text-white ">SHOP BY PRICE</label>
            <label className="text-[13px] text-white">Earbuds Under 1000</label>
            <label className="text-[13px] text-white">Earbuds Under 1500</label>
            <label className="text-[13px] text-white">Earbuds Under 2000</label>
            <label className="text-[13px] text-white">Earbuds Under 2500</label>
            <label className="text-[13px] text-white">Earbuds Above 2500</label>
          </div>
        </div>
        <div className=" h-[0.5px] w-[80%] bg-[gray] ml-[9%] mt-5"></div>
      </div>

      <div className=" h-[30vh] w-[100%] bg-black flex ">
        <div className=" px-28 text-white w-[50%] ">
          <div className=" flex flex-col w-full gap-1 ">
            <div className="">
              <label className=" text-[11px] relative top-[-6px] text-[gray]">
                OTHER LINKS
              </label>
            </div>
            <div className=" h-[1px] w-[100%]  bg-[gray] "></div>

            <div className=" flex justify-between w-[100%] ">
            <label className="text-[13px] text-white">Our Products</label>
            <i class=" text-white fa fa-angle-down" aria-hidden="true"></i>
          </div>
          <div className=" h-[1px] w-[100%] bg-[gray]"></div>
          <div className=" flex justify-between w-[100%] ">
            <label className="text-[13px] text-white">About Noise</label>
            <i class=" text-white fa fa-angle-down" aria-hidden="true"></i>
          </div>
          <div className=" h-[1px] w-[100%] bg-[gray]"></div>
          <div className=" flex justify-between w-[100%] ">
            <label className="text-[13px] text-white">Support</label>
            <i class=" text-white fa fa-angle-down" aria-hidden="true"></i>
          </div>
          <div className=" h-[1px] w-[100%] bg-[gray]"></div>
          </div>
          <div className=" mt-10 text-[10px]">
            <label>
              Copyright <i class=" px-1 fa fa-copyright" aria-hidden="true"></i>
              2024, Noise. All Rights Reserved.
            </label>
          </div>
        </div>
        <div className=" w-[50%]">
          <div className=" flex gap-1 flex-col">
          <div className=" h-[1px] w-[60%] bg-[gray] mt-6"></div> 
          <div className=" flex justify-between w-[60%] ">
            <label className="text-[14px] text-white">For Business</label>
            <i class=" text-white fa fa-angle-down" aria-hidden="true"></i>
          </div>
          <div className=" h-[1.5px] w-[60%] bg-[gray] "></div> 
          <div className=" flex justify-between w-[60%]">
            <label className="text-[14px] text-white">Legal</label>
            <i class=" text-white fa fa-angle-down" aria-hidden="true"></i>
          </div>
          <div className=" h-[1px] w-[60%] bg-[gray] "></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
