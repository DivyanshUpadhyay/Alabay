import React from 'react';
import Card from '../Components/FeatureCard';
import Dog1 from '../assets/images/DALL·E 2024-07-15 01.28.43 - A full body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed as a construction worker. The dog should have a big_ 3.png';
import Dog2 from '../assets/images/DALL·E 2024-07-15 01.31.03 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a t-shirt with an Alabay dog printed on it and we 2.png';
import Dog3 from '../assets/images/DALL·E 2024-07-15 01.32.53 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog celebrating with a trophy. The dog should have a big smile a 1.png';
import Dog4 from '../assets/images/DALL·E 2024-07-15 01.33.29 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a Viking outfit. The dog should have a big smile_ 1.png';

const FeatureCards = () => {
  const cardData = [
    {
      bgColor: 'linear-gradient(180deg, #DBC70C 0%, rgba(255, 242, 128, 0) 100%)',
      imageSrc: Dog1,
      title: 'Community Building',
      subtitle: 'and Initial Launch',
    },
    {
      bgColor: 'linear-gradient(180deg, #00D4D4 0%, rgba(65, 255, 255, 0) 100%)',
      imageSrc: Dog2,
      title: 'Merchandise',
      subtitle: 'Store Launch',
    },
    {
      bgColor: 'linear-gradient(180deg, #D427FF 0%, rgba(212, 39, 255, 0) 100%)',
      imageSrc: Dog3,
      title: 'Community Events',
      subtitle: 'and Contests',
    },
    {
      bgColor: 'linear-gradient(179.53deg, #8F3A3C 0.41%, rgba(143, 58, 60, 0) 95.85%)',
      imageSrc: Dog4,
      title: 'Expansion and New',
      subtitle: ' Features',
    },
  ];

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-8 z-20">
      {cardData.map((card, index) => (
        <Card
          key={index}
          index={index}
          bgColor={card.bgColor}
          imageSrc={card.imageSrc}
          title={card.title}
          subtitle={card.subtitle}
        />
      ))}
      <div className="absolute bottom-0 left-0 right-0 h-[14rem] bg-gradient-to-t from-white via-white/90 to-transparent"></div>
    </div>
  );
};

export default FeatureCards;
