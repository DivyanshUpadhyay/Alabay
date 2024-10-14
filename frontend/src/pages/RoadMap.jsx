import React from 'react';
import dogMap from '../assets/images/DALL·E 2024-07-14 21.37.17 - A 3D cartoon illustration of a very happy furry Central Asian Shepherd dog in explorer attire, standing at a crossroads and holding a map with a yello 2.png';

function RoadMap() {
    return (
        <div className='flex flex-col w-full items-start mt-20'>
            <div className='text-[4rem] md:text-[6rem] text-white font-extrabold z-20 font-cheeseburga ml-4 md:ml-16'>ROAD MAP</div>
            <div className='z-20 flex flex-col md:flex-row items-start justify-between w-full'>
                <div className='w-[90%] md:w-[15rem] m-4 md:m-20 mt-4 md:mt-24 font-kumbh font-bold'>
                    Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.
                    <div className='mt-4 font-kumbh text-[#FFA800]'>Join us as we grow and achieve new heights.</div>
                </div>
                <img src={dogMap} className='z-20 w-[80%] md:w-[15rem] self-end -translate-x-16 -translate-y-24' alt="Central Asian Shepherd dog holding a map" />
            </div>
        </div>
    );
}

export default RoadMap;
