// src/components/Menu.jsx

import { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'; // FIX: Added Transition
import { FiChevronDown, FiInfo } from 'react-icons/fi';
import { FaPepperHot } from 'react-icons/fa';
import { menuSections } from '../data/menu';

const MenuModal = ({ item, isOpen, closeModal }) => {
  if (!item) return null;
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog as="div" className="relative z-50" open={isOpen} onClose={closeModal}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ ease: "easeOut", duration: 0.3 }}>
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-800 text-left align-middle shadow-xl transition-all">
                  <img src={item.imageLargeUrl} alt={item.name} className="w-full h-64 object-cover" />
                  <div className="p-6 max-h-60 overflow-y-auto">
                    <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-yellow-400">{item.name}</Dialog.Title>
                    <div className="mt-2">
                      <p className="text-lg font-bold text-white">₹{item.price}</p>
                      <SpiceTag level={item.spiceLevel} />
                      <p className="text-sm text-zinc-400 mt-4">{item.description}</p>
                    </div>
                  </div>
                </Dialog.Panel>
              </motion.div>
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

const SpiceTag = ({ level }) => {
  if (!level || level === 0) return null;
  const chiliIcons = Array.from({ length: level });
  return (
    <div className="flex items-center gap-2 mt-1">
      <span className="flex items-center gap-1 text-red-500">{chiliIcons.map((_, i) => <FaPepperHot key={i} />)}</span>
      {level >= 2 && (
        <Popover className="relative">
          <Popover.Button className="text-xs text-zinc-400 hover:text-yellow-400 focus:outline-none flex items-center gap-1">
            <span>Modify?</span><FiInfo />
          </Popover.Button>
          <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
            <Popover.Panel className="absolute z-10 w-48 p-3 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg">
              <p className="text-xs text-zinc-200">Love the flavor but not the heat? Just ask! We can prepare this dish Mild or Medium for you.</p>
            </Popover.Panel>
          </Transition>
        </Popover>
      )}
    </div>
  );
};

const FilterButton = ({ label, icon, isActive, onClick }) => (
  <motion.button onClick={onClick} className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-300 ${isActive ? 'bg-yellow-400 text-black' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`} whileTap={{ scale: 0.95 }}>
    {icon ? icon : <span>{label}</span>}
    {label !== "All" && <span>{label}</span>}
  </motion.button>
);

export default function Menu() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  const handleOpenModal = (item) => { setSelectedItem(item); setModalOpen(true); };
  const handleCloseModal = () => { setModalOpen(false); };

  const activeSection = menuSections[activeIndex];
  const getFilteredItems = (items) => {
    if (activeFilter === 'all') return items;
    return items.filter(item => item.spiceLevel === activeFilter);
  };
  const filteredItems = getFilteredItems(activeSection.items);

  return (
    <>
      <section id="menu" className="py-20 bg-black text-white min-h-screen">
        <div className="container mx-auto px-4">
          <motion.h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Our</span> Full Menu
          </motion.h2>

          <div className="grid lg:grid-cols-4 lg:gap-12">
            <div className="lg:col-span-1 mb-12 lg:mb-0">
              <div className="lg:sticky lg:top-28">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {menuSections.map((section, index) => (
                    <li key={section.title}>
                      <button onClick={() => { setActiveIndex(index); setActiveFilter('all'); }} className={`w-full text-left p-3 rounded-lg text-lg transition-all duration-300 ${activeIndex === index ? 'bg-yellow-400 text-black font-bold shadow-lg' : 'text-zinc-300 hover:bg-zinc-800'}`}>
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div key={activeIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">
                    <h2 className="font-display text-3xl text-white mb-4 sm:mb-0">{activeSection.title}</h2>
                    <div className="flex items-center gap-2">
                      <FilterButton label="All" isActive={activeFilter === 'all'} onClick={() => setActiveFilter('all')} />
                      <FilterButton label="Mild" icon={<FaPepperHot className="text-orange-400/70" />} isActive={activeFilter === 1} onClick={() => setActiveFilter(1)} />
                      <FilterButton label="Medium" icon={<span className="flex text-orange-400"><FaPepperHot /><FaPepperHot /></span>} isActive={activeFilter === 2} onClick={() => setActiveFilter(2)} />
                      <FilterButton label="Spicy" icon={<span className="flex text-orange-400"><FaPepperHot /><FaPepperHot /><FaPepperHot /></span>} isActive={activeFilter === 3} onClick={() => setActiveFilter(3)} />
                    </div>
                  </div>
                  <ul className="divide-y divide-zinc-700">
                    <AnimatePresence>
                      {filteredItems.map((item) => (
                        <motion.li key={item.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => handleOpenModal(item)} whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', x: 5 }} className="p-4 cursor-pointer rounded-lg -mx-4">
                          <div className="flex items-start gap-4">
                            <img src={item.imageUrl} alt={item.name} className="w-16 h-16 md:w-20 md:h-20 rounded-md object-cover shrink-0" />
                            <div className="flex flex-col flex-grow">
                              <div className="flex justify-between items-baseline">
                                <h4 className="text-lg text-zinc-100 font-semibold">{item.name}</h4>
                                <span className="text-lg font-bold text-yellow-400 ml-4 shrink-0">₹{item.price}</span>
                              </div>
                              <SpiceTag level={item.spiceLevel} />
                              <p className="text-sm text-zinc-400 mt-2 pr-4 hidden md:block">{item.description}</p>
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      <MenuModal item={selectedItem} isOpen={modalOpen} closeModal={handleCloseModal} />
    </>
  );
}