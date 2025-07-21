// src/components/Testimonials.jsx

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "The Dal Baafla here is simply outstanding, it has that authentic taste that reminded me of home. A must-visit place for families in Indore.",
    name: "Prakash Mehta"
  },
  {
    quote: "Awesome Paneer Tikka! Humne Chinese bhi try kiya, sab first class tha. Friends ke saath hangout karne ke liye best place hai. Full paisa vasool!",
    name: "Aditi Sharma"
  },
  {
    quote: "I ordered the Veg Kolhapuri and the flavor was just spot-on. Perfectly spiced and delicious. I can't wait to come back and try more dishes.",
    name: "Sameer Jain"
  }
];

const testimonialsVariants = {
  enter: {
    opacity: 0,
    y: 10,
  },
  center: {
    zIndex: 1,
    opacity: 1,
    y: 0,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
    y: -10,
  }
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center text-white max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our <span className="text-yellow-400">Customers Say</span>
        </h2>
        <div className="relative h-48 flex items-center justify-center">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              variants={testimonialsVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="absolute w-full px-8"
            >
              <p className="text-xl md:text-2xl italic text-zinc-300">
                "{testimonials[index].quote}"
              </p>
              <p className="mt-4 text-lg font-semibold text-yellow-400">
                - {testimonials[index].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}