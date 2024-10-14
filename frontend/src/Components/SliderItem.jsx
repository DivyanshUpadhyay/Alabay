import React from "react";

const SliderItem = ({ item }) => {
  return (
    <div className="size-[15rem] bg-gray-300 flex items-center justify-center rounded-lg">
        <img
          src={item.src}
          alt={`Slide ${item.id}`}
          className="w-full h-full object-contain rounded-lg"
        /> 
    </div>
  );
};

export default SliderItem;