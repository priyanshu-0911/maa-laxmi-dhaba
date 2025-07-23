// src/pages/HomePage.jsx

import { motion } from 'framer-motion';

import Hero from '../components/Hero';
import MenuHighlight from '../components/MenuHighlight';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import AboutOwner from '../components/AboutOwner'; // 1. Import the new component

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div id="home">
        <Hero />
      </div>

      <motion.div
        id="menu-highlight" // Changed id from "menu"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <MenuHighlight />
      </motion.div>

      <motion.div
        id="specials"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Specials />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Testimonials />
      </motion.div>

      {/* 2. Add the new AboutOwner section here */}
      <AboutOwner />
      
    </motion.div>
  );
}