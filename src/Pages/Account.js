  import React, { useState } from "react";
  import Header from "../components/Header";
  import Footer from "../components/Footer";

  function Account() {
    const [activeSection, setActiveSection] = useState("Your Orders");

    return (
      <div>
        <Header />
        <div className="h-[43vh] w-[100%]">
          <div className="h-[43vh] w-[100%]">
            <img
              className="h-[100%] w-[100%]"
              src="https://cdn.shopify.com/s/files/1/0997/6284/files/Desktop_297128ee-6b9f-4a87-9903-a15c051af7e1.png"
              alt="Banner"
            />
          </div>
        </div>
        <div className="h-[10vh] w-[100%] text-[32px] font-bold px-10 flex items-center">
          <label>Your Account</label>
        </div>
        <div className="h-[0.5px] w-[100%] bg-[gray]"></div>
        <div className="h-[60vh] w-[100%] flex">
          <div className="h-[100%] w-[25%] bg-transparent flex gap-6 flex-col py-5">
            <label
              onClick={() => setActiveSection("Your Orders")}
              className={`px-10 font-bold cursor-pointer ${
                activeSection === "Your Orders" ? "text-black" : "text-gray-500"
              }`}
            >
              Your Orders
            </label>
            <div className="h-[0.5px] w-[100%] bg-[gray]"></div>
            <label
              onClick={() => setActiveSection("Your Profile")}
              className={`px-10 font-bold cursor-pointer ${
                activeSection === "Your Profile" ? "text-black" : "text-gray-500"
              }`}
            >
              Your Profile
            </label>
            <div className="h-[0.5px] w-[100%] bg-[gray]"></div>
          </div>

          <div className="h-[100%] w-[75%]  ">
            {activeSection === "Your Orders" && (
              <div className="flex flex-col gap-6">
                <label className="text-[25px]">
                  You haven't placed any orders yet.
                </label>
                <button className="bg-black h-[5.4vh] w-[15%] text-[18px] font-bold ml-24 text-white rounded-full">
                  Shop Now
                </button>
              </div>
            )}
            {activeSection === "Your Profile" && <ProfileSection />}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
 function ProfileSection() {
  return (
    <div>
      <div className="w-[100%] h-[16vh] flex">
        <div className="h-[100%] w-[50%] flex flex-col gap-8 px-6 py-5">
          <div>
            <label className="text-[25px] font-bold">Hi, Valued Customer</label>
          </div>
          <div className="flex gap-6">
            <i className="text-[18px] fa fa-phone" aria-hidden="true">
              {" "}+ 9630709988
            </i>
            <i
              className="text-[18px] text-purple-700 fa fa-pencil"
              aria-hidden="true"
            >
              {" "}Edit
            </i>
            <i className="text-[19px] fa fa-envelope-o" aria-hidden="true">
              {" "}   raghuvanshipradhumn@gmail.com
            </i>
          </div>
        </div>

        <div className="h-[100%] w-[50%] flex justify-end items-center px-6">
          <div className=" flex flex-col gap-4">
          <i className="text-[18px] text-purple-700 px-2 fa fa-pencil" aria-hidden="true">
            {" "} Edit
          </i>
          <label className=" text-purple-700 font-bold">Sign Out</label>
          </div>
        </div>
      </div>
      <div className="h-[0.5px] w-[100%] bg-[gray]"></div>

      <div className="h-[15vh] w-[100%] bg flex justify-between items-center px-8">
        <label className="text-[25px] font-bold">Manage Address</label>
        <label className="text-[16px] text-purple-700 cursor-pointer">
          + Add Address
        </label>
      </div>
      <div className="h-[0.5px] w-[100%] bg-[gray]"></div>
    </div>
  );
}

  export default Account;
