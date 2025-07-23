// src/components/Hero.jsx
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Hero = () => {
  const title = "Welcome to Mahalakshmi Dhaba";
  const words = title.split(" ");

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black hero">
      <video
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover opacity-50"
      >
        <source src="/hero.mp4" type="video/mp4" />
        <img
          src="/assets/images/restaurant.jpg"
          alt="Maa Laxmi Restaurant"
          className="w-full h-full object-cover"
        />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center md:items-start justify-center h-full px-4 md:px-16 lg:px-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl space-y-6 text-center md:text-left text-white"
        >
          <motion.h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-yellow-300 drop-shadow-lg">
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={childVariants}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p variants={childVariants} className="text-xl text-gray-100">
            Pure Desi Swad from Bengali Square, Indore
          </motion.p>
          
          <motion.div variants={childVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-yellow-400 text-black text-lg rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 shadow-lg"
            >
              Reserve a Table
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-4 md:left-16 lg:left-24 z-10 text-white">
        <a href="#menu-highlight" className="flex items-center gap-2 group">
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
  );
};

export default Hero;