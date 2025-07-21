// src/components/Navbar.jsx

import { motion } from 'framer-motion';

const NavLink = ({ href, children }) => (
  <a href={href} className="text-zinc-300 hover:text-yellow-300 transition-colors duration-300">
    {children}
  </a>
);

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <a href="#home" className="text-2xl font-bold text-white cursor-pointer">
          Maa Laxmi <span className="text-yellow-400">Dhaba</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#menu">Menu</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        
        <a href="#menu" className="cursor-hover px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors duration-300">
          Order Now
        </a>
      </div>
    </motion.nav>
  );
}