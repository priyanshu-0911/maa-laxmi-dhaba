// src/components/Navbar.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import OpeningStatus from './OpeningStatus';

const CustomNavLink = ({ to, children, onClick }) => {
  const handleClick = () => {
    if (to.startsWith('/#')) {
      const targetId = to.substring(2);
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      className={({ isActive }) =>
        `text-lg transition-colors duration-300 ${
          isActive && !to.includes('#') ? 'text-yellow-400' : 'text-zinc-300 hover:text-yellow-300'
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/60 backdrop-blur-lg"
      >
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-white cursor-pointer">
            Maa Laxmi <span className="text-yellow-400">Dhaba</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <CustomNavLink to="/menu">Menu</CustomNavLink>
            <CustomNavLink to="/#specials">Specials</CustomNavLink>
            {/* --- NEW LINK ADDED HERE --- */}
            <CustomNavLink to="/#about">About Us</CustomNavLink>
            <CustomNavLink to="/#contact">Contact</CustomNavLink>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <OpeningStatus />
            <Link to="/menu" className="cursor-hover px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors">
              Order Now
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile Only) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none z-50">
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-black/90 pt-20 md:hidden"
          >
            <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-8 mt-8">
              <CustomNavLink to="/menu" onClick={() => setIsOpen(false)}>Menu</CustomNavLink>
              <CustomNavLink to="/#specials" onClick={() => setIsOpen(false)}>Specials</CustomNavLink>
              {/* --- NEW LINK ADDED HERE --- */}
              <CustomNavLink to="/#about" onClick={() => setIsOpen(false)}>About Us</CustomNavLink>
              <CustomNavLink to="/#contact" onClick={() => setIsOpen(false)}>Contact</CustomNavLink>
              <div className="pt-4">
                <OpeningStatus />
              </div>
              <Link to="/menu" onClick={() => setIsOpen(false)} className="cursor-hover mt-4 px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors">
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}