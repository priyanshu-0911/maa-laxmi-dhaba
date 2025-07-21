// src/components/FeaturedItem.jsx

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FeaturedItem() {
  const containerRef = useRef(null);

  // This sets up the parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // As you scroll, the image will move up and down slightly
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={containerRef} className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Column with Parallax */}
        <div className="h-[500px] rounded-2xl overflow-hidden">
          <motion.img
            src="https://images.unsplash.com/photo-1602482861292-a1b9248c1e87?q=80&w=1964&auto=format&fit=crop"
            alt="Dal Bafla"
            className="w-full h-full object-cover"
            style={{ y }} // Apply the parallax effect
          />
        </div>

        {/* Text Content Column */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center md:text-left"
        >
          <p className="text-yellow-400 font-semibold mb-2">HOUSE SPECIAL</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Dal Bafla</h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto md:mx-0">
            A traditional delicacy from the heart of Malwa. Wheat dough balls are first boiled to perfection, then baked in a traditional oven until golden brown. Served drenched in rich, aromatic dal and a generous helping of pure ghee.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full text-center shadow-lg hover:bg-yellow-300 transition-colors"
          >
            Explore Specials
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}