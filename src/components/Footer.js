import React, { useState } from "react";

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="h-[100vh] w-[100%] bg-black ">
      <div className="h-[35vh] w-[100%] ">
        <div className="py-10">
          <img
            className="h-[4vh] px-28"
            src="https://www.gonoise.com/cdn/shop/files/Untitled-1_2.png?v=1727772937"
          />
          <div className="flex gap-36 px-28 mt-4">
           
            <div className="flex flex-col mt-4 gap-1">
              <label className="text-[11px] text-white">SHOP BY FEATURES</label>
              <label className="text-[13px] text-white">
                Smart Watches with Alexa
              </label>
              <label className="text-[13px] text-white">
                Amoled Display Smart Watches
              </label>
            </div>

            
            <div className="flex flex-col mt-4 gap-1">
              <label className="text-[11px] text-white">SHOP BY GENDER</label>
              <label className="text-[13px] text-white">
                Smart Watches For Men
              </label>
              <label className="text-[13px] text-white">
                Smart Watches for Women
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[0.5px] w-[80%] bg-[gray] ml-[9%] mt-16 mb-16"></div>

      
      <div className="h-[30vh] w-[100%] bg-black flex">
        <div className="px-28 text-white w-[50%]">
          <div className="flex flex-col w-full gap-1">
            <label className="text-[11px] text-gray-400">OTHER LINKS</label>
            <div className="h-[1px] w-[100%] bg-[gray]"></div>

           
            <div
              className="flex justify-between w-[100%] cursor-pointer"
              onClick={() => toggleSection("products")}
            >
              <label className="text-[13px] text-white">Our Products</label>
              <i
                className={`text-white fa fa-angle-${
                  openSection === "products" ? "up" : "down"
                }`}
              />
            </div>
            {openSection === "products" && (
              <div className="text-[13px] text-gray-300 pl-4">
                <p>Smart Watches</p>
                <p>Wireless Earbuds</p>
                <p>Accessories</p>
              </div>
            )}
            <div className="h-[1px] w-[100%] bg-[gray]"></div>

            <div
              className="flex justify-between w-[100%] cursor-pointer"
              onClick={() => toggleSection("about")}
            >
              <label className="text-[13px] text-white">About Noise</label>
              <i
                className={`text-white fa fa-angle-${
                  openSection === "about" ? "up" : "down"
                }`}
              />
            </div>
            {openSection === "about" && (
              <div className="text-[13px] text-gray-300 pl-4">
                <p>Company Info</p>
                <p>Careers</p>
                <p>Contact Us</p>
              </div>
            )}
            <div className="h-[1px] w-[100%] bg-[gray]"></div>

            
            <div
              className="flex justify-between w-[100%] cursor-pointer"
              onClick={() => toggleSection("support")}
            >
              <label className="text-[13px] text-white">Support</label>
              <i
                className={`text-white fa fa-angle-${
                  openSection === "support" ? "up" : "down"
                }`}
              />
            </div>
            {openSection === "support" && (
              <div className="text-[13px] text-gray-300 pl-4">
                <p>FAQs</p>
                <p>Warranty</p>
                <p>Customer Support</p>
              </div>
            )}
            <div className="h-[1px] w-[100%] bg-[gray]"></div>
          </div>

          <div className="mt-10 text-[10px]">
            <label>
              Copyright <i className="px-1 fa fa-copyright" /> 2024, Noise. All
              Rights Reserved.
            </label>
          </div>
        </div>

        
        <div className="w-[50%]">
          <div className="flex gap-1 flex-col">
            <div className="h-[1px] w-[60%] bg-[gray] mt-6"></div>

            
            <div
              className="flex justify-between w-[60%] cursor-pointer"
              onClick={() => toggleSection("business")}
            >
              <label className="text-[14px] text-white">For Business</label>
              <i
                className={`text-white fa fa-angle-${
                  openSection === "business" ? "up" : "down"
                }`}
              />
            </div>
            {openSection === "business" && (
              <div className="text-[13px] text-gray-300 pl-4">
                <p>Partnerships</p>
                <p>Corporate Sales</p>
              </div>
            )}
            <div className="h-[1px] w-[60%] bg-[gray]"></div>

            
            <div
              className="flex justify-between w-[60%] cursor-pointer"
              onClick={() => toggleSection("legal")}
            >
              <label className="text-[14px] text-white">Legal</label>
              <i
                className={`text-white fa fa-angle-${
                  openSection === "legal" ? "up" : "down"
                }`}
              />
            </div>
            {openSection === "legal" && (
              <div className="text-[13px] text-gray-300 pl-4">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
              </div>
            )}
            <div className="h-[1px] w-[60%] bg-[gray]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
