import React from "react";

function Mycart({ showModal, setShowModal }) {
  return (
    <div  className={`h-[100vh] w-full bg-black ${showModal === "MyCart" ? 'bg-opacity-70': 'bg-opacity-0'} fixed left-0 top-0`}>
      <div
        style={{ right: showModal === "MyCart" ? "0%" : "-60%" }}
        className=" h-[100vh] w-[42%] bg-white fixed top-0 duration-1000  "
      >
        <div className=" flex justify-between items-center px-5 text-[30px] py-5">
          <label className=" text-black">Your cart</label>
          <label
            onClick={() => setShowModal("")}
            className="text-black cursor-pointer flex justify-end text-[25px] px-3"
          >
            X
          </label>
        </div>
        <div className=" flex flex-col justify-center items-center text-black text-[24px] mt-48 ">
          <label>You have not added any item</label>
          <label>to your cart</label>
          <button className=" bg-black text-white rounded-full w-[20%] items-center text-[18px] h-[4.5vh] mt-4">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mycart;
