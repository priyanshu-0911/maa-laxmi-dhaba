// src/components/MenuHighlight.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { menuSections } from '../data/menu';

// 1. Filter for only the best categories
const highlightCategories = ["Paneer ka Jadoo", "Swadisht Sabjiyan", "Veg ka Maza"];
const allHighlightItems = menuSections
  .filter(section => highlightCategories.includes(section.title))
  .flatMap(section => section.items);

// 2. Shuffle the array and take the first 6 for a dynamic feel
const randomHighlights = allHighlightItems.sort(() => 0.5 - Math.random()).slice(0, 6);

const Card = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    className="bg-zinc-800 rounded-2xl overflow-hidden text-center shadow-lg h-full"
  >
    <img 
      src={item.imageUrl || `https://placehold.co/600x400/393942/FBBF24?text=${item.name.replace(' ', '\\n')}`} 
      alt={item.name} 
      className="w-full h-44 object-cover" 
    />
    <div className="p-5">
      <h3 className="text-xl font-bold mb-2 text-white truncate">{item.name}</h3>
      <p className="text-yellow-400 text-lg">₹{item.price}</p>
    </div>
  </motion.div>
);

export default function MenuHighlight() {
  return (
    <section id="menu-highlight" className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          A Taste of Our Best
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {randomHighlights.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-16">
          <Link
            to="/menu"
            className="inline-block bg-yellow-400 text-black font-bold px-10 py-4 rounded-full text-center shadow-lg hover:bg-yellow-300 transition-colors"
          >
            Explore the Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}