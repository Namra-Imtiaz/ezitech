import React, { useState, useEffect } from 'react';
import bg from '../assets/images/Capture.png'; 
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [expertTopic, setExpertTopic] = useState('web design');

  useEffect(() => {
    const topics = ['web design', 'programming', 'social skills'];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % topics.length;
      setExpertTopic(topics[currentIndex]);
    }, 2000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <section
      className="relative w-full top-0 h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
        <div className="text-center">
          <TypeAnimation
            sequence={['Learn the fundamentals with our', 1000]}
            wrapper="h1"
            cursor={false}
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Experts in <span className="inline-block text-blue-500">{expertTopic}</span>
          </h2>
          <div className="mb-2 w-3/4 md:w-1/2 mx-auto relative">
            <input
              type="text"
              placeholder="Search Internships..."
              className="w-full px-6 py-4 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-300 pr-10"
            />
            <i
              className="fas fa-search absolute top-1/2 right-6 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              aria-hidden="true"
            ></i>
          </div>
          <h5 className="text-white mb-10">
            Explore our more useful products <span className="text-white">♡</span>
          </h5>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-3xl font-bold">EZIBLOGS</div>
            <div className="text-3xl font-bold">EZIPOS</div>
            <div className="text-3xl font-bold">EZICODING</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
