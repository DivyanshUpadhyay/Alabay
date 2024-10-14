import React from 'react';
import GamePreview from '../Components/GamePreview';
import { FaPlayCircle } from "react-icons/fa";
import standingDog from '../assets/images/Alabay Games/alabay lost heritage prev 1.png';

function AlabayWorld() {
  return (
    <div
      className="bg-[#202020] text-white flex flex-col items-center p-8 w-full h-screen"
      style={{
        backgroundImage: `url('${standingDog}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl w-full flex flex-col items-start gap-4">
        <h1 className="font-baron text-4xl lg:text-[96px] leading-[104.38px] tracking-wider">
          ALABAY HERITAGE
        </h1>

        <h2 className="text-2xl lg:text-[48px] leading-[52.19px] tracking-[0.23em] font-normal text-[#90FFAE]">
          THE LOST ADVENTURE
        </h2>
        <p className="text-lg lg:text-[22px] leading-[23.92px] tracking-wider max-w-2xl mt-4 text-start font-montserrat">
          Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.
        </p>
        <button className="mt-6 bg-[#90FFAE] text-lg pl-4 pr-10 py-2 rounded-full flex justify-start gap-x-5 items-center text-black">
          <FaPlayCircle className='bg-white text-black rounded-full p-2 text-[1.5rem]' />
          PLAY
        </button>
      </div>
      <GamePreview />
    </div>
  );
}

export default AlabayWorld;
