// src/components/StickyFooterBar.jsx

import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';

export default function StickyFooterBar() {
  return (
    // This container is fixed to the bottom and only visible on screens smaller than 'md'
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 1.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-lg p-3 md:hidden"
    >
      <div className="container mx-auto flex justify-around items-center">
        {/* Call Us Button */}
        <a 
          href="tel:+919876543210" // Make sure to use the real phone number here
          className="flex flex-col items-center justify-center text-zinc-300 hover:text-yellow-400 transition-colors"
        >
          <FiPhone size={22} />
          <span className="text-xs mt-1">Call Us</span>
        </a>

        {/* Book a Table Button */}
        <a 
          href="#contact" 
          className="bg-yellow-400 text-black font-bold px-10 py-3 rounded-full text-center shadow-lg hover:bg-yellow-300 transition-colors"
        >
          Book a Table
        </a>
      </div>
    </motion.div>
  );
}