import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Picks() {
  const navigate = useNavigate()

const [getData,setGetdata]= useState([])
  axios.get('http://localhost:9000/product').then(
    (res) => {
      setGetdata(res.data);
    },
    (err) => {}
  );



  return (
    <div className="h-[60vh] w-[100%]  flex gap-2 flex-col ">
      <div className=" font-bold text-2xl px-28">
        <label>Top Picks For You</label>
      </div>
      <div className="flex justify-between gap-8 text-[13.5px] px-24 mt-2">
        <div className="flex justify-between w-[50%] h-[3.5vh] text-center">
          <div className="bg-gray-300 rounded-[10px] h-[3.5vh] w-[20%] text-center">
            BestSellers
          </div>
          <label className=" text-[14px]">New Launches</label>
          <label className=" text-[14px]">Curated Steals</label>
          <label className=" text-[14px]">The Noise Choice</label>
        </div>
        <div className="w-[15%] text-center underline">
          <label className=" text-[10px]">View All</label>
        </div>
      </div>

      <div className="flex  gap-5 mt-2 justify-center items-center  ">

        {getData.map((i,index)=> index<5 &&

        <div onClick={()=>{localStorage.setItem("product-detail", JSON.stringify(i)) ;navigate('/singleproduct')}} className=" w-[16%] rounded-[10px] flex flex-col px-2 shadow-xl">
          <img
            className="h-[32vh] w-[100%] rounded-[10%] mt-1 bg-gray-300"
            src= {i.images[0]}
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
          <strike className="text-gray-300 ">₹{i.price}</strike> ₹{Math.floor((i.price*i.discount)/100)}

          </label>
          <label className=" text-[10px] py-1">
            {i.features.filter((i, index)=> index < 2).join(' | ')}
          </label>
        </div>
        )}
       
      </div>
    </div>
  );
}

export default Picks;
