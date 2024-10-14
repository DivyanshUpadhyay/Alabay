import React from "react";

const MerchItem = ({ image, background, direction }) => {
  return (
    <div
      className="absolute rounded-lg top-0 left-0 w-full h-full flex flex-col justify-center items-center"
      style={{
        background: `url(${background})`,
        backgroundSize: "cover", // Use 'cover' for better scaling
        backgroundPosition: "center", // Center the background image
      }}
    >
      <img
        src={image}
        className={`w-[80%] h-[80%] object-cover rounded-lg transform transition-all duration-500 ease-in-out ${
          direction === "left" ? "-translate-x-full opacity-0" : "translate-x-full opacity-0"
        }`}
        style={{ transform: "translateX(0)", opacity: "1" }}
      />
    </div>
  );
};

export default MerchItem;
