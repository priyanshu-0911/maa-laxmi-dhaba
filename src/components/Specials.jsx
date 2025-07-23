// src/components/Specials.jsx

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Using optimized image links (w=800 for larger images)
const specialDishes = [
  {
    name: "Lal Pari (House Special)",
    description: "Our legendary house special! A vibrant, red-hued paneer curry with a secret blend of spices for a truly magical and unforgettable taste.",
    imageUrl: "https://images.unsplash.com/photo-1668551685822-86a74b093c83?w=800&q=80&auto=format&fit=crop"
  },
  {
    name: "Dal Bafla",
    description: "A traditional Malwa delicacy. Wheat dough balls are boiled and then baked, served drenched in rich, aromatic dal and a generous helping of pure ghee.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1695295329096-d805211b853e?w=800&q=80&auto=format&fit=crop"
  },
  {
    name: "Paneer Tikka (Dry)",
    description: "Marinated paneer cubes grilled to perfection in a tandoor and tossed with onions, peppers, and dry spices for a smoky flavour.",
    imageUrl: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80&auto=format&fit=crop"
  }
];

export default function Specials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section id="specials" ref={containerRef} className="relative py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            <span className="text-yellow-400">Our Signature</span> Specials
          </h2>
          <p className="text-zinc-400 mt-2">Curated dishes that define our passion for flavour.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-1"
          >
            <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="overflow-hidden h-80">
                <motion.img src={specialDishes[0].imageUrl} alt={specialDishes[0].name} className="w-full h-full object-cover" style={{ y }} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yellow-400">{specialDishes[0].name}</h3>
                <p className="text-zinc-400 mt-2">{specialDishes[0].description}</p>
              </div>
            </div>
          </motion.div>
          <div className="lg:col-span-1 space-y-8">
            {[specialDishes[1], specialDishes[2]].map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
                className="bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl flex items-center"
              >
                <img src={dish.imageUrl} alt={dish.name} className="w-40 h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-yellow-400">{dish.name}</h3>
                  <p className="text-zinc-400 text-sm mt-1">{dish.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}