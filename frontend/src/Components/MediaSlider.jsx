import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SliderItem from "../Components/SliderItem";
import image1 from "../assets/images/DALL·E 2024-07-15 01.28.43 - A full body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed as a construction worker. The dog should have a big_ 3.png"; 
import image2 from "../assets/images/DALL·E 2024-07-15 01.31.03 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a t-shirt with an Alabay dog printed on it and we 2.png";
import image3 from "../assets/images/DALL·E 2024-07-15 01.32.53 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog celebrating with a trophy. The dog should have a big smile a 1.png";
import image4 from "../assets/images/DALL·E 2024-07-15 01.33.29 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a Viking outfit. The dog should have a big smile_ 1.png";
import image5 from "../assets/images/history.png";

const MediaSlider = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = {
    all: [
      { id: 1, src: image1, type: "photo" },
      { id: 3, src: image2, type: "photo" },
      { id: 4, src: image3, type: "video" },
      { id: 5, src: image4, type: "photo" },
      { id: 2, src: image5, type: "photo" },
    ],
    photos: [
      { id: 1, src: image1, type: "photo" },
      { id: 3, src: image2, type: "photo" },
      { id: 5, src: image4, type: "photo" },
    ],
    videos: [
      { id: 2, src: image5, type: "video" },
      { id: 4, src: image3, type: "video" },
    ],
  };

  const itemsToShow = categories[activeCategory];
  const visibleItems = itemsToShow.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    if (currentIndex + 3 < itemsToShow.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full mx-auto mt-20 p-2 flex flex-col h-full">
      <div className="flex justify-center space-x-4 mb-4 ">
        {["all", "photos", "videos"].map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setCurrentIndex(0);
            }}
            className={`${
              activeCategory === category ? "text-yellow-400" : "text-black"
            } px-4 font-bold transition-colors duration-300`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center w-full p-2 h-[15rem] relative">
        <button 
          onClick={handlePrev} 
          className={`absolute left-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-xl text-[2rem] h-[3.5rem] shadow-lg ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentIndex === 0}
        >
          <FaArrowLeft />
        </button>

        <div className="flex space-x-4">
          {visibleItems.map((item) => (
            <SliderItem key={item.id} item={item} />
          ))}
        </div>

        <button 
          onClick={handleNext} 
          className={`absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-xl text-[2rem] h-[3.5rem] shadow-lg ${currentIndex + 3 >= itemsToShow.length ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentIndex + 3 >= itemsToShow.length}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MediaSlider;
