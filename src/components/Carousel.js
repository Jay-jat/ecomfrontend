import React, { useState } from "react";

function Carousel() {
  let [move, setMove] = useState(0)
  return (
    <div className=" w-[100%] h-[100vh] relative overflow-hidden">
      <div style={{transform: `translate(-${move}%)`}} className="flex duration-300 w-[400%]">
        <div className="w-[100%] h-[100vh] img-div flex justify-center items-center">
          <img className="w-[92%] h-[90vh] mt-8 rounded-[20px]" src="https://www.gonoise.com/cdn/shop/files/image_63_c93be278-6d6a-441a-b48b-60918a6ffdd2.png?v=1734427383"></img>
        </div>
        <div className="w-[100%] h-[100vh] img-div flex justify-center items-center">
          <img className="w-[92%] h-[90vh] mt-8 rounded-[20px]" src="https://www.gonoise.com/cdn/shop/files/image_1_d9913755-4408-4c7e-9c41-bbfdc66c77c9.png"></img>
        </div>
        <div className="w-[100%] h-[100vh] img-div flex justify-center items-center">
          <img className="w-[92%] h-[90vh] mt-8 rounded-[20px]" src="https://www.gonoise.com/cdn/shop/files/image_1_c8e1baba-4b57-44df-b571-e8f2834138b2.png"></img>
        </div>
        <div className="w-[100%] h-[100vh] img1-div flex justify-center items-center">
          <img className="w-[92%] h-[90vh] mt-8 rounded-[20px]" src="https://www.gonoise.com/cdn/shop/files/911e30-Diva2-D_302428a3-b35a-4f7a-94c3-64b8964831d9.webp"></img>
        </div>
       
      </div>
      <div className="absolute flex w-[100%]  z-20 bottom-[3%] justify-center gap-1 ">
        <div onClick={()=> setMove(0)} className={`h-2  w-2 cursor-pointer rounded-full ${move == 0 ? "bg-black" : "bg-white" }`}></div>
        <div onClick={()=> setMove(25)} className={`h-2 w-2 cursor-pointer rounded-full ${move == 25 ? "bg-black" : "bg-white" }`}></div>
        <div onClick={()=> setMove(50)} className={`h-2 w-2 cursor-pointer rounded-full ${move == 50 ? "bg-black" : "bg-white" }`}></div>
        <div onClick={()=> setMove(75)} className={`h-2 w-2 cursor-pointer rounded-full ${move == 75 ? "bg-black" : "bg-white" }`}></div>
      </div>
    </div>
  );
}

export default Carousel;
