import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Picks() {
  const navigate = useNavigate()
  useEffect(()=>{getAllproduct()},[])

  const getAllproduct = ()=>{
  axios.get('http://localhost:9000/product').then(
    (res) => {
      setGetdata(res.data);
    },
    (err) => {}
  );}


  const [getData, setGetdata] = useState([]);
  const getAllProducts = () => {
    axios
      .get("http://localhost:9000/product")
      .then((res) => setGetdata(res.data));
  };

  return (
    <div className="h-[60vh] w-[100%]  flex gap-2 flex-col ">
      <div className=" font-bold text-3xl px-28">
        <label>Top Picks For You</label>
      </div>
      <div className="flex justify-between  text-[13.5px]  mt-2">
        <div className="flex gap-5 justify-between  w-[50%] h-[3.5vh] px-28 text-center items-center">
          <div className="bg-gray-300 rounded-[14px] flex items-center justify-center h-[4vh] w-[22%] text-center">
            BestSellers
          </div>
          <label
            onClick={() => navigate("/manyproducts")}
            className=" text-[14px] cursor-pointer"
          >
            New Launches
          </label>
          <label
            onClick={() => navigate("/manyproducts")}
            className=" text-[14px] cursor-pointer "
          >
            Curated Steals
          </label>
          <label
            onClick={() => navigate("/manyproducts")}
            className=" cursor-pointer text-[14px]"
          >
            The Noise Choice
          </label>
        </div>
        <div className="w-[15%] text-center underline">
          <label
            onClick={() => navigate("/manyproduct")}
            className=" text-[10px] cursor-pointer"
          >
            View All
          </label>
        </div>
      </div>

      <div className="flex  gap-5 mt-2 justify-center items-center  ">
        {getData.map(
          (i, index) =>
            index < 5 && (
              <div
                onClick={() => {
                  localStorage.setItem("product-detail", JSON.stringify(i));
                  navigate("/singleproduct");
                }}
                className=" w-[16%] rounded-[10px] flex flex-col px-2 shadow-xl"
              >
                <img
                  className="h-[32vh] w-[100%] rounded-[10%] mt-1 bg-gray-300"
                  src={i.images[0]}
                ></img>
                <div className=" flex gap-1 mt-1 items-center">
                  <i
                    class="text-[7px] text-yellow-500 fa fa-star"
                    aria-hidden="true"
                  ></i>
                  <i
                    class="text-[7px] text-yellow-500 fa fa-star"
                    aria-hidden="true"
                  ></i>
                  <i
                    class="text-[7px] text-yellow-500 fa fa-star"
                    aria-hidden="true"
                  ></i>
                  <i
                    class="text-[7px] text-yellow-500 fa fa-star"
                    aria-hidden="true"
                  ></i>
                  <i class="text-[7px] fa fa-star-o" aria-hidden="true"></i>
                  <label className=" text-[9px] ">(89)</label>
                </div>
                <label className=" font-bold">{i.title}</label>
                <label className=" text-[13px]">
                  <strike className="text-gray-300 ">₹{i.price}</strike> ₹
                  {Math.floor((i.price * i.discount) / 100)}
                </label>
                <label className=" text-[10px] py-1">
                  {i.features.filter((i, index) => index < 2).join(" | ")}
                </label>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Picks;
