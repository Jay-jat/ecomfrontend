import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  useEffect(() => {
    getAllProducts();
  }, []);
  const navigate = useNavigate()
  const [getData, setGetData] = useState([]);
  const carouselRef = useRef(null); // Ref for scrolling

  const getAllProducts = () => {
    axios.get('http://localhost:9000/product').then(
      (res) => {
        setGetData(res.data);
      },
      (err) => {
        console.error("Error fetching data", err);
      }
    );
  };

  // Left Scroll
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Right Scroll
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  //Search 
  const [filterTitle, setFilterTitle] = useState("")

  return (
    <div className="h-[80vh] w-[60%] top-0 left-[35vh] bg-white fixed border border-black">
   
      <div className="h-[7.5vh] border border-black w-full flex items-center gap-3 justify-between text-lg px-4">
        <i className="text-black flex justify-end items-center w-[5%] h-full fa fa-search"></i>
        <input
        onChange={(e)=> setFilterTitle(e.target.value)}
          className="w-[95%] h-full text-black border-0 focus:outline-none"
          type="search"
          placeholder="Search...."
        />
      </div>

      <div className="flex h-[72.5vh]">
      
      <div className="h-full w-[28%] bg-[#f7f7f6] px-4 py-2">
  <h3 className="text-black text-sm font-bold mb-2">POPULAR CHOICES</h3>
  <div className="mx-4 flex flex-wrap gap-2">
    <button onClick={()=> {localStorage.setItem("category", "watches") ;navigate("/manyproduct")}} className="bg-black text-white rounded-sm px-3 py-1 text-xs font-semibold">
      SMART WATCHES
    </button>
    <button onClick={()=> {localStorage.setItem("category","powerseries"); navigate("/manyproduct")}} className="bg-black text-white rounded-sm px-3 py-1 text-xs font-semibold">
      GAN CHARGER
    </button>
    <button onClick={()=>{localStorage.setItem("category", "earphones"); navigate("/manyproduct")}}  className="bg-black text-white rounded-sm px-3 py-1 text-xs font-semibold">
      WIRELESS EARBUDS
    </button>
    <button onClick={()=> {localStorage.setItem("category", "headphones") ;navigate("/manyproduct")}}  className="bg-black text-white rounded-sm px-3 py-1 text-xs font-semibold">
      PRO HEADPHONES
    </button>
   
  </div>
      </div>


      
        <div className="h-full w-[72%] text-black relative">
          <h4 className="py-2 mt-2 font-bold px-4">RECOMMENDED FOR YOU</h4>

          {/*  Carousel Wrapper */}
          <div className="relative">
            {/* ◀️ Left Arrow */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-[50%] transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            >
              <i className="fa fa-arrow-circle-left text-gray-600 text-2xl"></i>
            </button>

            {/* 🔄 Scrollable Product List */}
            <div ref={carouselRef} className="flex gap-4 px-4 overflow-x-auto scrollbar-hide scroll-smooth">
              {getData.filter((i)=> i.title.toLowerCase().includes(filterTitle.toLowerCase())).map((i, index) => (
                <div onClick={()=>{localStorage.setItem("product-detail", JSON.stringify(i)) ;navigate('/singleproduct')}} key={index} className="h-[55vh] w-[220px] border border-gray-200 flex-shrink-0">
                  <div className="bg-[#f3f3f2] h-[60%] flex items-center justify-center">
                    <img src={i.images[0]} alt={i.title} className="h-full object-cover" />
                  </div>
                  <div className="p-2">
                    <h3 className="font-semibold">{i.title}</h3>
                    <h5 className="text-gray-500">{i.features[0]}</h5>
                    <div className="flex items-center gap-1 py-2">
                      <div className="h-[15px] w-[15px] bg-[#010100] rounded-full"></div>
                      <div className="h-[15px] w-[15px] bg-[#09465f] rounded-full"></div>
                      <div className="h-[15px] w-[15px] bg-[#a7d8f4] rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <label className="text-[22px] font-semibold">
                        <i className="fa fa-inr"></i> {Math.floor((i.price * i.discount) / 100)}
                      </label>
                      <del className="text-gray-400">
                        <i className="fa fa-inr"></i> {i.price}
                      </del>
                      <button className="bg-[#e1efe4] text-[#4e9b64] rounded-full px-2 py-1 text-xs font-semibold">
                        {i.discount}% OFF
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ▶️ Right Arrow */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-[50%] transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            >
              <i className="fa fa-arrow-circle-right text-gray-600 text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
