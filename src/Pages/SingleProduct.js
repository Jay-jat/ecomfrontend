import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SingleProduct() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://www.gonoise.com/cdn/shop/files/3_05a11b1c-3a15-4a70-b433-a7b145c14b4c.png?v=1716531880",
    "https://www.gonoise.com/cdn/shop/files/4_344ca49c-c4a9-44a5-b34e-7aa4a40d87ef.webp?v=1721364460",
    "https://www.gonoise.com/cdn/shop/files/3_e8d1c594-2efc-4813-b490-a9401249e581.webp?v=1721364459",
    "https://www.gonoise.com/cdn/shop/files/6_3a92cd9d-6031-43bf-9401-e3716248e959.png?v=1716531880",
    "https://www.gonoise.com/cdn/shop/files/4_ee8431dc-f193-4a4e-8290-40543365921d.png?v=1716531880",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <Header />
      <div className="flex">
        {/* Left Sticky Section */}
        <div className="bg-white h-[89vh] w-[57%] flex items-center justify-center sticky top-0">
          <div className="relative h-[60vh] w-[60vh]">
            <img
              src={images[currentImageIndex]}
              alt="Main Carousel"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={prevImage}
            className="text-[30px] absolute top-1/2 left-2 text-[#4a4a4a] p-2"
          >
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button
            onClick={nextImage}
            className="text-[30px] absolute top-1/2 right-2 text-[#454545] p-2"
          >
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full ${currentImageIndex === index ? "bg-black" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-auto w-[1px] bg-slate-300"></div>

        {/* Right Scrollable Content */}
        <div className="h-auto flex justify-center w-[43%]">
          <div className="bg-white w-[95%] p-5">
            <div className="flex mt-20 items-center justify-between border-b pb-2">
              <h2 className="text-[34px] font-bold text-black">Air Clips</h2>
              <div className="text-[20px] font-semibold text-[#363535]">
                <i className="fa fa-star text-yellow-500 text-[16px] pr-2"></i>
                4.6
              </div>
            </div>
            <div className="text-[16px] font-medium text-[#6e6e6e] mt-3">
              1.85" AMOLED, Customized Button
            </div>
            <div className="flex items-center gap-3 mt-4">
              <label className="text-[24px] font-bold text-black">₹3,499</label>
              <label className="text-[16px] font-medium line-through text-[#898989]">
                ₹8,999
              </label>
              <label className="text-[14px] font-medium text-[#6e6e6e]">
                (MRP Inclusive of all taxes)
              </label>
            </div>
            <div className="flex items-center gap-2 text-green-600 mt-4">
              <i className="fa fa-chevron-circle-up"></i>
              <label className="font-medium">
                2000+ People ordered this in the last 7 days
              </label>
            </div>
            <div className="flex items-center gap-3 p-4 mt-4 bg-[#F5D196] border-2 border-[#ffc76d] rounded-lg">
              <i className="fa fa-gg-circle text-[#ffae2d] text-[20px]"></i>
              <label className="font-medium">
                Use code <strong className="font-semibold">OFFER10</strong> and
                get flat 10% off
              </label>
            </div>


            <div className="mb-4 mt-8">
              <h3 className="text-lg font-semibold mb-2">Available Colors</h3>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-purple-500 text-white rounded-lg">
                  Pearl Purple
                </button>
                <button className="px-4 py-2 bg-gray-200 text-black rounded-lg">
                  Pearl White
                </button>
              </div>
            </div>

            <div className="flex mt-10 items-end justify-between w-full">
              <div className="flex flex-col w-[50%]">
                <h3 className="text-lg font-semibold mb-2">Check Delivery Date</h3>
                <input
                  type="text"
                  placeholder="  Enter pincode"
                  className="border border-gray-300 rounded-lg p-2 w-[80%] focus:outline-none"
                />
              </div>
              <button className="bg-black h-[8vh] text-white w-[50%] rounded-3xl">
                Buy Now
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 mt-10">Key Features</h3>
              <div className="flex flex-wrap gap-x-20 gap-y-10">
                <div className="flex items-center space-x-2">
                  <i className="fa fa-assistive-listening-systems" aria-hidden="true"></i>
                  <label>Upto 40 hours playtime</label>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fa fa-american-sign-language-interpreting" aria-hidden="true"></i>
                  <label>Dual pairing</label>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fa fa-snowflake-o" aria-hidden="true"></i>
                  <label>Touch/Button control</label>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fa fa-bluetooth-b" aria-hidden="true"></i>
                  <label>BT version</label>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-14 flex-wrap">
              <div className="flex flex-col items-center">
                <img
                  src="https://www.gonoise.com/cdn/shop/files/rupee_square_5ee889ca-710c-4b9d-baae-16adab9d84d4.svg?v=1684401789"
                  alt="icon"
                  className="h-[10vh] w-[10vh]"
                />
                <label className="font-[500]">7-day replacement</label>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://www.gonoise.com/cdn/shop/files/Document_verified_-_1_398219e2-8134-4693-a498-58635f9c03d7.svg?v=1684401789"
                  alt="icon"
                  className="h-[10vh] w-[10vh]"
                />
                <label className="font-[500]">1 year warranty</label>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://www.gonoise.com/cdn/shop/files/Shield_Done_04409ec8-3d1b-414b-96f8-7d2211b7f52f.svg?v=1684401789"
                  alt="icon"
                  className="h-[10vh] w-[10vh]"
                />
                <label className="font-[500]">Secure payment</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <img className="h-[100vh] w-[100%]" src="https://img-cdn.thepublive.com/fit-in/1200x675/filters:format(webp)/entrackr/media/post_attachments/wp-content/uploads/2022/04/noise.jpg"></img>
      <img className="h-[70vh] w-[100%]" src="https://images.javatpoint.com/company/images/noise-company.png"></img>
      
      {/* Disclaimer Section */}
      <div className="w-[80%] mx-auto mt-28 mb-10 bg-[#FAFAFA] p-6 rounded-lg shadow-md">

        <div className="text-[12px] font-[400] leading-[20.8px] text-black space-y-4">
          <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Prices are subject to change without prior notice. (Special discount prices are valid for a limited time only).</li>
            <li>The quality of bass and loudness is subjective and may vary from person to person.</li>
            <li>Up to 40 hours of playtime depends on factors such as music genre, and sound volume.</li>
            <li>The Air Clips have an IPX5 water-resistant rating. However, it needs to be dried completely before the next usage.</li>
            <li>Actual products may differ slightly in appearance from the illustrations/pictures provided.</li>
          </ul>
        </div>

        <div className="mt-6 text-[12px] font-[400] leading-[20.8px] text-black space-y-4">
          <p>
            Lucky for you, India’s no. 1 smartwatch brand has everything covered. Noise smart watches come with a comprehensive suite of features to enhance daily living. Along with a stellar design, our products are well suited for the daily needs of both Android and Apple users. Among the best smart watches in India, make your selection by exploring our complete collection at the earliest.
          </p>
          <h4 className="text-[12px] font-semibold mt-4">Buy Air Clips Online</h4>
          <p>
            Stay hooked to the beat with Noise Air Clips, the new generation of audio aesthetics. Weighing just 5.4 grams, it comes with AirWave™ Technology, delivering precise air conduction for a seamless listening experience.
          </p>
          <h4 className="text-[12px] font-semibold mt-4">Why Choose Air Clips?</h4>
          <p>
            Noise Air Clips brings you a fresh look with Open Beam Design. The chrome aesthetic on the curve, and clip design combines comfort with fashion, making it an accessory that’s designed to be noticed. Now, your music is truly yours to hear, all thanks to AirWave™ Technology that uses a precise air conduction mechanism to deliver music straight to your ears.
          </p>
          <p>
            With up to 40 hours of playtime, dual device pairing, and Instacharge™, Noise Air Clips is designed to stay comfortably clipped on you and never weigh you down. Take control of your audio experience with responsive touch controls and a secure fit that lasts for hours.
          </p>
          <h4 className="text-[12px] font-semibold mt-4">Shop Air Clips Online in India</h4>
          <p>
            Noise Air Clips is feature-packed with a feather-light fit, premium chrome finish, and AirWave™ Technology. With 40 hours of playtime, responsive touch controls and dual device connectivity, it keeps your music playing only for you.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SingleProduct;
