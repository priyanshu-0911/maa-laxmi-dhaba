// src/components/Menu.jsx

import { motion } from 'framer-motion';
import { menuSections } from '../data/menu';

// A sub-component for a single menu item in the list
const MenuItem = ({ item }) => (
  <li className="flex justify-between items-start border-b border-dashed border-zinc-700 py-4">
    <div>
      <h4 className="text-lg text-zinc-200 font-semibold">{item.name}</h4>
      <p className="text-sm text-zinc-400 mt-1 pr-4">{item.description}</p>
    </div>
    <span className="text-lg font-bold text-yellow-400 ml-4 shrink-0">₹{item.price}</span>
  </li>
);

// A sub-component for a full menu category (image + list)
const MenuCategory = ({ section, imageSide = 'left' }) => {
  // Determine flex direction for the zig-zag layout
  const direction = imageSide === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse';
  // Use the first item's image as the hero image for the category
  const heroImage = section.items[0].imageUrl || `https://placehold.co/800x600/18181b/FBBF24?text=${section.title.replace(' ', '\\n')}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${direction} gap-8 items-start mb-24`}
    >
      {/* Image Column */}
      <div className="w-full lg:w-1/2">
        <div className="sticky top-28 h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <img src={heroImage} alt={section.title} className="w-full h-full object-cover" />
        </div>
      </div>
      
      {/* Text/List Column */}
      <div className="w-full lg:w-1/2">
        <h3 className="font-display text-3xl text-yellow-400 mb-6">{section.title}</h3>
        <ul>
          {section.items.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-black text-white min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-20">
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Our</span> Full Menu
        </h2>
        
        {/* Map through sections and apply the zig-zag logic */}
        {menuSections.map((section, index) => (
          <MenuCategory 
            key={section.title} 
            section={section} 
            imageSide={index % 2 === 0 ? 'left' : 'right'} // Alternate sides
          />
        ))}
      </div>
    </section>
  );
}