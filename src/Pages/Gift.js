import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Gift() {
  return (
    <div>
      <Header></Header>
      <div className=" h-[66vh] w-[100%]  ">
        <img
          className=" "
          src="https://www.gonoise.com/cdn/shop/files/Rectangle_2622_1ee9180a-aaab-4e48-a2a6-6fcb50626302.png?v=1692622097"
        ></img>
      </div>
      <div className=" h-[100vh] w-[100%] bg-white">
        <label>Gifts for a lasting impression</label>
        <div className=" flex w-[100%]">
        <div>
          <img src="https://www.gonoise.com/cdn/shop/files/Frame_482528.png?v=1692354191"></img>
        </div>
        <div>
          <img src="https://www.gonoise.com/cdn/shop/files/Frame_482529_1.png?v=1692354648"></img>
        </div>
        <div>
          <img src="https://www.gonoise.com/cdn/shop/files/Group_482418.png?v=1692354775"></img>
        </div>
        <div className="">
          <img src="https://www.gonoise.com/cdn/shop/files/Frame_482527_1.png?v=1692620128"></img>
        </div>
        </div>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default Gift;
