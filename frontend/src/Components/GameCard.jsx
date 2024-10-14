import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const GameCard = ({ image, title, link }) => {
  return (
    <div className="relative w-full h-full flex-shrink-0 transition-transform duration-500">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-[50px] shadow-lg border-[5px] border-white"
      />
      <a
        href={link}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-[#843AFC] rounded-3xl w-[10rem] h-[3rem] hover:scale-105 transition-all duration-200 flex items-center justify-center"
        aria-label={`Discover ${title}`} // Accessibility enhancement
      >
        <div className="text-white m-2 flex items-center justify-center gap-x-3 px-3 font-bold text-[1.3rem]">
          Discover
          <FaArrowRight />
        </div>
      </a>
    </div>
  );
};

export default GameCard;
