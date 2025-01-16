import React from 'react';
import hero from '../assets/hero-forest.jpg';

const Hero = () => {
  return (
    <div
      className="w-full bg-cover flex items-center 
                 h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen 
                 bg-[center_top] sm:bg-[center_20%] md:bg-[center_40%] lg:bg-center .hero"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="text-left mx-4 sm:mx-8 md:mx-12 lg:ml-32">
        <h1 className="font-great-vibes text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white">
          Whispered Moments
        </h1>
        <button className="hidden sm:block bg-gray-400 bg-opacity-20 text-white px-4 py-2 sm:px-6 sm:py-3 mt-4 sm:mt-6 rounded-md text-sm sm:text-base md:text-xl font-poppins-300 hover:bg-opacity-50 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Hero;
