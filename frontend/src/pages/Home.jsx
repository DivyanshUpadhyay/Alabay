import React from 'react';
import Media from '../Components/Media';
import MediaSlider from '../Components/MediaSlider';
import AlabayWorld from './AlabayWorld';
import FeatureCards from './FeatureCards';
import GameSlider from '../Components/GameSlider';
import HistoryAlabay from './HistoryAlabay';
import MerchSlider from './MerchSlider';
import ProjectVision from './ProjectVision';
import RoadMap from './RoadMap';
import Tokenomics from './Tokenomics';
import Games from './Games';
import GamePreviewSlider from './GamePreviewSlider';
import SocialMedia from './SocialMedia';
import frontImage from '../assets/images/Front.png';

const Home = () => {
  return (
    <div className='h-[100vh] p-0 mb-0'>
      {/* Background and Heading */}
      <div className='h-screen w-full flex flex-col gap-y-48 fixed -z-10 object-contain' style={{ background: `url(${frontImage})` }}>
        <h1 className='bg-gradient-to-b from-[#FFF280] to-[#7EFF5E] text-transparent bg-clip-text text-[4rem] md:text-[6rem] drop-shadow-[0px_0px_11px_#0F1B29] text-center font-cheeseburga' style={{ WebkitTextStroke: '2px black', color: 'transparent' }}>
          WELCOME TO ALABAY WORLD
        </h1>
        <div className='bg-[#181C27] h-[8rem] flex items-center justify-center text-xl md:text-3xl p-2 font-cheeseburga'>
          <p className='text-white text-center'>
            WHERE THE <span className='bg-custom-gradient text-transparent bg-clip-text' style={{ fontWeight: "400" }}>LEGENDARY CENTRAL ASIAN SHEPHERD DOG</span> MEETS A NEW-AGE ADVENTURE.
            <span className='bg-custom-gradient text-transparent bg-clip-text' style={{ fontWeight: "400" }}>JOIN US</span> IN CELEBRATING THE <span>STRENGTH, LOYALTY,</span> AND <span className='bg-custom-gradient text-transparent bg-clip-text' style={{ fontWeight: "400" }}>HERITAGE</span> OF THE ALABAY BREED.
          </p>
        </div>
      </div>
      
      <div className='h-[75%] bg-transparent'></div>
      
      {/* Main Content */}
      <div className='relative overflow-y-scroll flex flex-col justify-center m-5 md:m-20 mb-0 rounded-t-xl bg-white overflow-x-hidden'>
        <HistoryAlabay />
        <MediaSlider />
        <ProjectVision />
        <RoadMap />
        <FeatureCards />
        <Tokenomics />
        <MerchSlider />
        <Games />
        <GamePreviewSlider />
        <SocialMedia />
      </div>
    </div>
  );
};

export default Home;
