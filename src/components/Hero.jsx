// src/components/Hero.jsx
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      if (heroBottom < window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <video
        className={`absolute w-full h-full object-cover transition-opacity ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
      >
        <source src="/hero.mp4" type="video/mp4" />
        <img src="/assets/images/restaurant.jpg" alt="Maa Laxmi Restaurant" className="w-full h-full object-cover" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center text-white">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Welcome to Maa Laxmi Restaurant</h1>
          <p className="text-xl">Savor Authentic Flavors in a Warm, Inviting Setting</p>
          <button className="inline-block px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-lg hover:bg-red-500">
            Reserve a Table
          </button>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 transform -translate-x-1/2 text-white">
        <a href="#about" className="flex items-center gap-2 group">
          <span>Scroll Down</span>
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-y-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;