// src/components/Menu.jsx
import { useEffect, useRef } from 'react';
import { motion, useAnimationControls, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { menuSections } from '../data/menu';

const Card = ({ item }) => (
  <motion.div
    whileHover={{ scale: 1.08, y: -4, transition: { duration: 0.2 } }}
    className="w-64 shrink-0 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl shadow-2xl overflow-hidden"
  >
    <div className="w-full h-44 bg-zinc-700 flex items-center justify-center text-zinc-400">
      {/* Placeholder for real images */}
      Image Soon
    </div>
    <div className="p-5">
      <h4 className="text-lg font-bold truncate">{item.name}</h4>
      <p className="text-yellow-400 font-bold text-xl mt-1">₹{item.price}</p>
    </div>
  </motion.div>
);

const SmoothSlider = ({ items }) => {
  const x = useMotionValue(0); // Use useMotionValue for seamless control
  const controls = useAnimationControls();
  const wrapperRef = useRef(null);

  // Clone for seamless loop: create 3 sets of items
  // [visible_items_cloned_from_end, original_items, visible_items_cloned_from_start]
  // This helps us transition smoothly when reaching the start/end
  const itemsPerView = 3; // Approximate number of cards visible at once in desktop
  const clonedItemsAtStart = items.slice(-itemsPerView);
  const clonedItemsAtEnd = items.slice(0, itemsPerView);
  const cards = [...clonedItemsAtStart, ...items, ...clonedItemsAtEnd];

  const cardWidth = 256 + 16; // Card width (w-64) + gap (gap-4)
  const totalItemsWidth = items.length * cardWidth; // Width of one set of original items
  const fullCarouselWidth = cards.length * cardWidth; // Total width of all 3 sets

  // Initial position to show the actual items (not the clones)
  const initialX = -(clonedItemsAtStart.length * cardWidth);

  // --- LOOPING LOGIC ---
  // This listens to the 'x' value as it animates/drags
  // If 'x' moves too far left or right (into the cloned sections),
  // it instantaneously resets 'x' to the equivalent position in the middle section.
  useMotionValueEvent(x, "change", (latest) => {
    // If we've dragged/animated past the end of the second set (into the third clone)
    if (latest < -(clonedItemsAtStart.length * cardWidth + totalItemsWidth)) {
      x.set(latest + totalItemsWidth); // Jump back one full set width
    } 
    // If we've dragged/animated past the start of the second set (into the first clone)
    else if (latest > -(clonedItemsAtStart.length * cardWidth)) {
      x.set(latest - totalItemsWidth); // Jump forward one full set width
    }
  });

  // --- AUTO-SLIDE LOGIC ---
  useEffect(() => {
    // Start animation from the current x value
    const slide = async () => {
      // Calculate target x for next slide (move left by one card)
      let targetX = x.get() - cardWidth;
      
      // Animate to the target, allowing the useMotionValueEvent to handle the seamless loop
      await controls.start({ x: targetX, transition: { duration: 0.8, ease: 'easeInOut' } });

      // After animation, the useMotionValueEvent already handles the invisible reset
    };

    // Set an interval for auto-sliding
    const timer = setInterval(slide, 4000); // Adjust interval time as needed

    // Clear interval when component unmounts
    return () => clearInterval(timer);
  }, [x, controls, cardWidth]);


  // --- DRAG & MOMENTUM LOGIC ---
  const handleDragEnd = (event, info) => {
    const currentX = x.get();
    const speed = info.velocity.x;
    let targetX = currentX + speed * 0.3; // Apply momentum

    // Snap to the nearest card (relative to the current section)
    const snapOffset = targetX % cardWidth;
    targetX -= snapOffset; // Snap to the card boundary

    // If drag was very small, snap to nearest card
    if (Math.abs(info.velocity.x) < 100) { // If velocity is low, snap to nearest card
        targetX = Math.round(currentX / cardWidth) * cardWidth;
    }

    // Animate to the snapped position
    controls.start({
      x: targetX,
      transition: { type: 'spring', stiffness: 200, damping: 25 },
    });
  };

  return (
    <div ref={wrapperRef} className="overflow-hidden">
      <motion.div
        className="flex gap-4 cursor-grab"
        drag="x"
        // Constraints are effectively infinite, useMotionValueEvent handles boundaries
        dragConstraints={{ left: -fullCarouselWidth + window.innerWidth, right: 0 }} // Add innerWidth to allow dragging to the right without blank
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        animate={controls}
        style={{ x }} // Apply x as a motion value directly
        initial={{ x: initialX }} // Set initial position to show the middle set of items
      >
        {cards.map((item, idx) => (
          <Card key={idx} item={item} /> 
        ))}
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

            {(() => {
              const filteredItemsCount = section.items.length;
              let gridColsClass = '';
              if (filteredItemsCount === 1) {
                gridColsClass = 'md:grid-cols-1 max-w-sm mx-auto'; // Single item: center it, max width for aesthetics
              } else if (filteredItemsCount === 2) {
                gridColsClass = 'md:grid-cols-2 max-w-lg mx-auto'; // Two items: two columns
              } else if (filteredItemsCount === 3) {
                gridColsClass = 'md:grid-cols-3 max-w-2xl mx-auto'; // Three items: three columns
              } else if (filteredItemsCount === 4) {
                // For 4 items, display in a 2x2 grid on medium screens, 4x1 on large screens
                gridColsClass = 'md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto';
              } else {
                // For 5 or more items, use the SmoothSlider
                return <SmoothSlider items={section.items} />;
              }

              return (
                <div className={`grid grid-cols-1 ${gridColsClass} gap-6 justify-center`}>
                  {section.items.map((item) => <Card key={item.id} item={item} />)}
                </div>
              );
            })()}

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