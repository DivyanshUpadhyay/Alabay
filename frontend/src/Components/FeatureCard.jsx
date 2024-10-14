import React from 'react';

const FeatureCard = ({ bgColor, imageSrc, title, subtitle }) => {
    return (
        <div
            className={`relative p-4 shadow-lg rounded-lg overflow-hidden`}
            style={{ background: bgColor }}
        >
            <div className='w-full flex flex-col items-center'>
                <h2 className="text-[1.5rem] font-bold text-center font-montserrat text-white mb-2">{title}</h2>
                <p className="text-center font-montserrat font-bold text-white mb-4">{subtitle}</p>
            </div>
            <img
                src={imageSrc}
                alt={title}
                className="w-full h-auto object-cover rounded-md"
            />
        </div>
    );
};

export default FeatureCard;
