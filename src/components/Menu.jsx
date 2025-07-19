// src/components/Menu.jsx
import { useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { menuSections } from '../data/menu';

const Card = ({ item }) => (
  <motion.div
    whileHover={{ scale: 1.08, y: -4, transition: { duration: 0.2 } }}
    className="w-64 shrink-0 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl shadow-2xl overflow-hidden"
  >
    <div className="w-full h-44 bg-zinc-700 flex items-center justify-center text-zinc-400">
      Image Soon
    </div>
    <div className="p-5">
      <h4 className="text-lg font-bold truncate">{item.name}</h4>
      <p className="text-yellow-400 font-bold text-xl mt-1">₹{item.price}</p>
    </div>
  </motion.div>
);

const SmoothSlider = ({ items }) => {
  const wrapper = useRef(null);
  const x = useRef(0); // current translateX
  const controls = useAnimationControls();

  // clone for seamless loop (3 copies)
  const cards = [...items, ...items, ...items];
  const cardWidth = 256 + 16; // card + gap
  const totalWidth = cards.length * cardWidth;

  // auto-slide loop
  useEffect(() => {
    const slide = () => {
      x.current -= cardWidth;
      if (x.current < -totalWidth / 3) x.current += totalWidth / 3;
      controls.start({ x: x.current, transition: { duration: 0.6, ease: 'easeInOut' } });
    };
    const timer = setInterval(slide, 4000);
    return () => clearInterval(timer);
  }, [controls, totalWidth, cardWidth]);

  // drag & momentum
  const handleDragEnd = (event, info) => {
    const speed = info.velocity.x;
    let target = x.current + speed * 0.3;
    // snap to nearest card
    const snap = Math.round(target / cardWidth) * cardWidth;
    if (snap < -totalWidth / 3) target += totalWidth / 3;
    if (snap > 0) target -= totalWidth / 3;
    x.current = target;
    controls.start({ x: target, transition: { type: 'spring', stiffness: 200, damping: 25 } });
  };

  return (
    <div ref={wrapper} className="overflow-hidden">
      <motion.div
        className="flex gap-4 cursor-grab"
        drag="x"
        dragConstraints={{ left: -totalWidth / 3, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        animate={controls}
        style={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      >
        {cards.map((item, idx) => <Card key={idx} item={item} />)}
      </motion.div>
    </div>
  );
};

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          <span className="text-yellow-400">Our</span> Signature Dishes
        </h2>

        {menuSections.map((section) => (
          <div key={section.title} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              {section.title}
            </h3>

            {section.items.length <= 3 ? (
              <div className="flex justify-center gap-6 flex-wrap">
                {section.items.map((item) => <Card key={item.id} item={item} />)}
              </div>
            ) : (
              <SmoothSlider items={section.items} />
            )}
          </div>
        ))}
      </div>

      {/* hide native scrollbars */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}