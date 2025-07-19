// src/components/Hero.jsx
import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger fade in after load instead of scroll for smoother UX
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black hero">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src="/hero.mp4" type="video/mp4" />
        {/* Fallback image */}
        <img
          src="/assets/images/restaurant.jpg"
          alt="Maa Laxmi Restaurant"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <div className="max-w-2xl space-y-6 animate-fade-in-up">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-yellow-300 drop-shadow-lg">
            Welcome to Mahalakshmi Dhaba
          </h1>
          <p className="text-xl text-gray-100">
            Pure Desi Swad from Bengali Square
          </p>
          <button className="cursor-hover px-6 py-3 bg-yellow-300 text-black text-lg rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-lg">
            Reserve a Table
          </button>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-6 left-1/2 z-10 transform -translate-x-1/2 text-white">
        <a href="#menu-section" className="flex items-center gap-2 group">
          <span className="text-sm">Scroll Down</span>
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero
