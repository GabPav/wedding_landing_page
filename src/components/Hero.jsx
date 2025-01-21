import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageUrl = `https://images.unsplash.com/photo-1542379510-1026e928ed4f?q=80&w=${
    windowWidth <= 480 ? '480' : windowWidth <= 768 ? '768' : '1918'
  }&auto=format&fit=crop`;

  return (
    <div
      className="w-full bg-cover flex items-center 
                 h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen 
                 bg-[center_top] sm:bg-[center_20%] md:bg-[center_40%] lg:bg-center .hero"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="text-left mx-4 sm:mx-8 md:mx-12 lg:ml-32">
        <h1 className="font-great-vibes text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white">
          Whispered Moments
        </h1>
        <a href="#contact">
          <button className="hidden sm:block bg-gray-400 bg-opacity-20 text-white px-4 py-2 sm:px-6 sm:py-3 mt-4 sm:mt-6 rounded-md text-sm sm:text-base md:text-xl font-poppins-300 hover:bg-opacity-50 transition duration-300">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
