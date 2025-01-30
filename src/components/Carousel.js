import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Carousel() {
  let [move, setMove] = useState(0);
  const navigate = useNavigate()
  useEffect(() => {
    const interval = setInterval(() => {
      setMove((prevMove) => (prevMove === 75 ? 0 : prevMove + 25));
    }, 4000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="w-[100%] h-[100vh] relative  delay-100 overflow-hidden">
      <div
        style={{ transform: `translate(-${move}%)` }}
        className="flex duration-300  w-[400%]"
      >
        <div className="w-[100%] h-[100vh] img-div flex justify-center ease-in-out items-center">
          <img
           onClick={()=> {localStorage.setItem("category","powerseries"); navigate("/manyproduct")}} 
            className="w-[92%] h-[90vh] mt-8 rounded-[20px]"
            src="https://www.gonoise.com/cdn/shop/files/image_63_c93be278-6d6a-441a-b48b-60918a6ffdd2.png?v=1734427383"
          ></img>
        </div>
        <div className="w-[100%] h-[100vh] img-div flex justify-center ease-in-out items-center">
          <img
            onClick={()=>{localStorage.setItem("category", "earphones"); navigate("/manyproduct")}}  
            className="w-[92%] h-[90vh] mt-8 rounded-[20px]"
            src="https://www.gonoise.com/cdn/shop/files/image_1_d9913755-4408-4c7e-9c41-bbfdc66c77c9.png"
          ></img>
        </div>
        <div className="w-[100%] h-[100vh] img-div flex ease-in-out justify-center items-center">
          <img
            onClick={()=> {localStorage.setItem("category", "watches") ;navigate("/manyproduct")}}
            className="w-[92%] h-[90vh] mt-8 rounded-[20px]"
            src="https://www.gonoise.com/cdn/shop/files/image_1_c8e1baba-4b57-44df-b571-e8f2834138b2.png"
          ></img>
        </div>
        <div className="w-[100%] h-[100vh] img1-div flex ease-in-out justify-center items-center">
          <img
            onClick={()=> {localStorage.setItem("category", "watches") ;navigate("/manyproduct")}}
            className="w-[92%] h-[90vh] mt-8 rounded-[20px]"
            src="https://www.gonoise.com/cdn/shop/files/911e30-Diva2-D_302428a3-b35a-4f7a-94c3-64b8964831d9.webp"
          ></img>
        </div>
      </div>
      <div className="absolute flex w-[100%] z-20 bottom-[3%] justify-center gap-2">
        <div
          onClick={() => setMove(0)}
          className={`h-2 w-2 cursor-pointer rounded-full ${
            move === 0 ? "bg-black" : "bg-white"
          }`}
        ></div>
        <div
          onClick={() => setMove(25)}
          className={`h-2 w-2 cursor-pointer rounded-full ${
            move === 25 ? "bg-black" : "bg-white"
          }`}
        ></div>
        <div
          onClick={() => setMove(50)}
          className={`h-2 w-2 cursor-pointer rounded-full ${
            move === 50 ? "bg-black" : "bg-white"
          }`}
        ></div>
        <div
          onClick={() => setMove(75)}
          className={`h-2 w-2 cursor-pointer rounded-full ${
            move === 75 ? "bg-black" : "bg-white"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Carousel;
