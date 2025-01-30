import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

function Powerseries() {
  const [getData, setGetdata] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get("http://localhost:9000/product").then(
      (res) => {
        setGetdata(res.data);
        setLoading(false)
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  return (
    <div>
      <Header />
      <div className="flex w-full  bg-white">
        {/* Filters Section */}
        <div className="w-[25%] mt-12  p-6">
          <div className="flex justify-between py-2">
            <label className="text-black text-[30px] font-bold">Filters:</label>
            <label className="text-[blue] text-[18px]">Clear All</label>
          </div>
          <hr className="bg-gray-400" />
          <div className="py-2 flex justify-between">
            <label className="text-[20px] font-bold">Sort by</label>
            <i className="fa fa-angle-up" />
          </div>
          <hr className="bg-gray-400" />
          {/* Sort Options */}
          {["Featured", "Best Selling", "Price, low to high", "Price, high to low", "Date, old to new", "Date, new to old"].map((option, index) => (
            <div key={index} className="flex gap-2  items-center text-[15px]">
              <i className="fa fa-circle-thin" />
              <label>{option}</label>
            </div>
          ))}
          <hr className="bg-gray-400" />
          <div className="flex justify-between py-2">
            <label className="text-[19px] font-bold">Price</label>
            <i className="fa fa-angle-down" />
          </div>
          <hr className="bg-gray-400" />
        </div>

        {/* Products Section */}
        <div className="w-[75%] px-10 mt-12  py-4">
          <div className="h-[7.8vh] flex justify-between items-center">
            <label className="text-[29px] font-bold">Noise power Series</label>
            <div className="flex gap-6 items-center text-gray-500 text-[15.5px]">
              <label>Home</label>
              <i className="fa fa-angle-right" />
              <label>Collections</label>
              <i className="fa fa-angle-right" />
              <label>Noise Power Series</label>
            </div>
          </div>
          <hr className="bg-gray-400" />
          {loading == false ?
          <div className="flex flex-wrap gap-4">
            {getData.filter((i)=> i.category === localStorage.getItem("category")).map((item, index) => (
              <div key={index} className="flex flex-col w-[32%] border">
                <div className="w-full flex justify-center items-center ">
                  <img className="w-full h-[100%]" src={item.images[0]} alt={item.title} />
                </div>
                <div className=" flex gap-1 mt-1 pl-6 items-center">
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
                <div className="flex flex-col p-4 gap-1 bg-white">
                  <label>{item.title}</label>
                  <label className="text-[gray] text-[15px]">
                    {item.features.join(" | ")}
                  </label>
                  <label className="text-[16px] font-bold mt-1">
                    ₹{Math.floor((item.price * item.discount) / 100)}
                    <span className="text-[gray] px-2 font-normal">
                      <strike>₹{item.price}</strike>
                    </span>
                  </label>
                </div>
              </div>
            ))}
          </div>
          :
          <div className="absolute top-0 left-0" id="container">
  <div class="spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Powerseries;
