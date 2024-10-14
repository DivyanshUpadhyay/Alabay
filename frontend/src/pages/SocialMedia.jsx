import React from 'react';
import phoneDog from '../assets/images/DALL·E 2024-07-29 17.36.01 - A 3D cartoon illustration of a cute furry Central Asian Shepherd dog holding a mobile phone and looking at it. The dog has expressive eyes, a fluffy c 2.png';
import twitter from '../assets/images/twitter logo 1.png';
import telegram from '../assets/images/Mask group.png';

function SocialMedia() {
    return (
        <div className='flex flex-col items-center w-full mt-20 pt-10'>
            <h1 className='text-[3rem] md:text-[4rem] font-extrabold text-[#FFA800] text-center'>SOCIAL MEDIA LINKS</h1>
            <div className='flex flex-col md:flex-row items-center gap-8 mt-10 w-full justify-center'>
                <div className='w-full md:w-72 p-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl shadow-lg relative flex flex-col'>
                    {/* Twitter Link */}
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className='flex items-center mb-2 text-white'>
                        <img src={twitter} className='w-8 h-8 mr-2' alt="Twitter Logo" />
                        <span>Twitter Link</span>
                    </a>
                    {/* Telegram Link */}
                    <a href="https://t.me/Divyansh_Upadhyay_RockinGamerz" target="_blank" rel="noopener noreferrer" className='flex items-center text-white'>
                        <img src={telegram} className='w-8 h-8 mr-2' alt="Telegram Logo" />
                        <span>Telegram Link</span>
                    </a>
                </div>

                <img src={phoneDog} className='w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem]' alt="Dog with Phone" />
            </div>
        </div>
    );
}

export default SocialMedia;
