import React from 'react';
import dogGroup from '../assets/images/DALL·E 2024-07-14 20.01.25 - A wide 3D cartoon illustration of a group of furry Central Asian Shepherd dog friends. The dogs should have joyful expressions with wide smiles, ears_ 2.png';

function ProjectVision() {
    return (
        <div className='w-full flex flex-col items-center mt-20 relative z-20'>
            <div className='text-[5rem] md:text-[8rem] text-[#FFA800] text-center font-cheeseburga'>PROJECT VISION</div>
            <img src={dogGroup} className='w-[80%] md:w-[64rem] h-auto md:h-[46rem] object-contain' alt="Group of Central Asian Shepherd Dogs" />
            <div className='absolute bottom-0 -z-10 border-b-transparent border-t-transparent border-t-[150px] border-b-[150px] h-full w-full border-r-[110rem] border-t-white border-b-white translate-y-[25rem]' style={{ borderRightColor: "transparent" }}></div>
            <div className='absolute bottom-0 h-full w-full -z-20 translate-y-[25rem]' style={{ background: "radial-gradient(30.64% 32.66% at 47.77% 66.92%, #FFF280 0%, #FFC700 100%)" }}></div>
            <div className='font-bold w-[90%] md:w-1/2 text-center mt-4 px-4'>
                Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.
            </div>
        </div>
    );
}

export default ProjectVision;
