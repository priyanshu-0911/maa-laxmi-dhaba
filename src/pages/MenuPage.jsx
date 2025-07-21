// src/pages/MenuPage.jsx

import { motion } from 'framer-motion';
import Menu from '../components/Menu';
import { useEffect } from 'react';

export default function MenuPage() {
  // This makes sure the page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Menu />
    </motion.div>
  );
}