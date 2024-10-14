import React from 'react';
import Slider from './SliderItem'; // Ensure Slider is correctly imported

function Media() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-yellow-200">
      <h1 className="text-center text-3xl font-bold mb-8">Project Vision</h1>
      <Slider /> {/* Integrate your slider component here */}
    </div>
  );
}

export default Media;
