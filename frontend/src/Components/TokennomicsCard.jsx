import React from 'react';

const TokenomicsCard = ({text1,text2}) => {
  return (
    <div className='flex flex-col items-center justify-center text-left bg-[#353535] shadow-[16.62px_20.12px_35.77px_0px_#A87D29] p-2 rounded-lg w-3/4 '>
       <h2 className='text-white font-bold'>{text1}</h2>
       <h1 className='text-[#FFF280] text-3xl font-extrabold'>{text2}</h1>
    </div>
  );
};

export default TokenomicsCard;