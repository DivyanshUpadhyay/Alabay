// src/components/Card.jsx
import React from 'react';

const Card = ({ title, description, imgSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center min-w-[250px] h-[140px] bg-gray-700 rounded-lg p-4 mx-2 sm:mx-4 md:mx-6 lg:mx-8 transition-all duration-300 ease-in-out">
      {title && description ? (
        <>
          <img src={imgSrc} alt="Icon" className="mb-4 w-12 h-12 sm:w-16 sm:h-16" />
          <h4 className="text-lg text-center md:text-xl">{title}</h4>
          <p className="text-sm text-center md:text-base">{description}</p>
        </>
      ) : (
        <img src={imgSrc} className='min-w-[300px] h-[140px] rounded-lg object-cover' alt="Icon" />
      )}
    </div>
  );
};

export default Card;
