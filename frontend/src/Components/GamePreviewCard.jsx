import React from 'react';

const GamePreviewCard = ({ img, title, description }) => {
    return (
        <div 
            className="w-full p-4 h-64 bg-gray-100 shadow-md rounded-md"
            style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <h3 className="text-lg font-bold mt-2 invisible">{title}</h3>
            <p className='invisible'>{description}</p>
        </div>
    );
};

export default GamePreviewCard;
