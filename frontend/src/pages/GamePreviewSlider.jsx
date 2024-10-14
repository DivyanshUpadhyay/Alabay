import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import GamePreviewCard from '../Components/GamePreviewCard';
import GamePreview1 from '../assets/images/Alabay Games/Alabay Adventure - The Lost Heritage/Abilities.png';
import GamePreview2 from '../assets/images/Alabay Games/Alabay Adventure - The Lost Heritage/artifacts.png';
import GamePreview3 from '../assets/images/Alabay Games/Alabay Guard/image 3 alabay guard.png';

const GamePreviewSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            img: GamePreview1,
            title: 'Artifact Collected',
            description: 'Explore the world to collect more!',
        },
        {
            img: GamePreview2,
            title: 'Pungent Poop',
            description: 'Collect relics and secrets!',
        },
        {
            img: GamePreview3,
            title: 'Wrath Hound',
            description: 'Use in-game to spook enemies!',
        },
        {
            img: 'https://path/to/another.jpg',
            title: 'New Game',
            description: 'Experience thrilling adventures!',
        },
        {
            img: 'https://path/to/yet-another.jpg',
            title: 'Exciting Quest',
            description: 'Embark on an exciting journey!',
        },
    ];

    const cardsPerSlide = 3; // Set to 3 for 3 cards visible per slide
    const totalCards = cards.length;

    const moveLeft = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalCards - cardsPerSlide : prevIndex - 1
        );
    };

    const moveRight = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalCards - cardsPerSlide ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="w-full mx-auto text-center flex flex-col items-center">
            <h2 className="font-montserrat text-4xl font-extrabold leading-[78.02px] mb-4 mx-4 mt-20 text-left">
                <span className="text-[#FFA800] uppercase">Game</span>
                <span className="text-black uppercase"> Preview</span>
            </h2>
            <div className="relative w-full flex items-center justify-center p-2">
                <button
                    className="absolute left-8 sm:left-16 text-4xl font-bold bg-gray-800 text-white p-2 rounded-xl h-[4rem] shadow-lg"
                    onClick={moveLeft}
                >
                    <FaArrowLeft />
                </button>

                <div className="flex overflow-hidden w-full max-w-[90vw]">
                    <div
                        className="flex transition-transform ease-in-out duration-300"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)`,
                        }}
                    >
                        {cards.map((card, index) => (
                            <div key={index} className="w-full flex-shrink-0 p-2 sm:w-1/3">
                                <GamePreviewCard
                                    img={card.img}
                                    title={card.title.toUpperCase()} // Convert title to uppercase
                                    description={card.description.toUpperCase()} // Convert description to uppercase
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="absolute right-8 sm:right-16 text-4xl font-bold bg-gray-800 text-white p-2 rounded-xl h-[4rem] shadow-lg"
                    onClick={moveRight}
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default GamePreviewSlider;
