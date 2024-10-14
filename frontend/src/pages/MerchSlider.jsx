import React, { useState } from "react";
import MerchItem from "../Components/MerchItem";
import image1 from "../assets/images/Alabay Merch/pink tshirt.png";
import bgImage1 from "../assets/images/Alabay Merch/pink tee bck.png";
import image2 from "../assets/images/Alabay Merch/yellow tshirt.png";
import bgImage2 from "../assets/images/Alabay Merch/yellow tee bck.png";
import image3 from "../assets/images/Alabay Merch/black hoodie.png";
import bgImage3 from "../assets/images/Alabay Merch/black hoodie bck.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const merchItems = [
  { id: 1, image: image1, background: bgImage1 },
  { id: 2, image: image2, background: bgImage2 },
  { id: 3, image: image3, background: bgImage3 },
];

const MerchSlider = () => {
  const [current, setCurrent] = useState(0); // Track the current active item
  const [direction, setDirection] = useState("right"); // Track the direction of slide

  // Move to the next slide
  const nextSlide = () => {
    setDirection("right");
    setCurrent((prev) => (prev === merchItems.length - 1 ? 0 : prev + 1));
  };

  // Move to the previous slide
  const prevSlide = () => {
    setDirection("left");
    setCurrent((prev) => (prev === 0 ? merchItems.length - 1 : prev - 1));
  };

  return (
    <div className="h-full mt-20 z-20">
      <h1 className="text-[4rem] md:text-[7rem] font-cheeseburga text-[#FFA800] w-full text-center">
        MERCHANDISE
      </h1>
      <div className="w-full flex justify-center items-center py-10 z-20">
        <div className="relative w-[90%] md:w-[80%] h-[25rem] md:h-[35rem] rounded-lg overflow-hidden">
          <MerchItem
            key={merchItems[current].id}
            image={merchItems[current].image}
            background={merchItems[current].background}
            direction={direction} 
          />

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-5 transform -translate-y-1/2 text-gray-700 bg-white rounded-full p-4 text-[2rem] md:text-[3rem]"
          >
            <GoArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-5 transform -translate-y-1/2 text-gray-700 bg-white rounded-full p-4 text-[2rem] md:text-[3rem]"
          >
            <GoArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchSlider;
