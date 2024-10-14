import React from 'react';
import Card from './Card';

const GamePreview = () => {
  const cards = [
    { title: 'PUNGENT POOP', description: 'Collect 20 Poops', imgSrc: 'https://via.placeholder.com/50' },
    { title: 'ARTIFACT COLLECTED', description: '4/20 Collected', imgSrc: 'https://via.placeholder.com/50' },
    { title: 'EXPLORE REGIONS', description: 'Unlock New Regions', imgSrc: 'https://via.placeholder.com/50' },
    {
      title: "",
      description: "",
      imgSrc: 'https://s3-alpha-sig.figma.com/img/6347/db55/b9710d5da392dbdb229636ac10e5991a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c-BKmV6vE8SUY~22i62DiA2rjoFI8UI5V8qgLA7TanPQGLbLWSS9gl3212he2DRaeFBeJ20-doC~bSnWp3L3vUO~AJruQbupEzf7xCuJG3CgSUoAIw3kkRDSKUa6M4MClcakANfgKmGOdu9AB2kE6d0LXiVs~LEKZNvy8Alvh186nOV6cqahAp7mxEq7QVYks-oPYExa1jEfNDMjp8-AKL-jQzF9-nQD9xpudoWHqzLoY8weCnShW3-28FUGTPa9u3vmrYNJAvHne4EPF0a2ILNCj2B~24Is1NwxmKMphEz1dvZyXL7KPky6aV7B3UzSs0AQqZNtxiHee~OKLRCAAw__'
    }
  ];

  return (
    <div className="mt-12 w-full">
      <h3 className="text-[#90FFAE] text-[2rem] lg:text-[32px] mb-6">
        GAME <span className='text-[#FFFFFF]'>PREVIEW</span>
      </h3>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default GamePreview;
