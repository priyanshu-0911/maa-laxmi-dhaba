// src/components/AboutOwner.jsx

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Manoj Satsangi",
    title: "Founder & Soul",
    bio: "The visionary who started it all, with a deep-rooted passion for authentic, traditional flavours that remind you of home.",
    imageUrl: ""
  },
  {
    name: "Sayyam Satsangi",
    title: "The Next Generation",
    bio: "Carrying the legacy forward with modern energy, ensuring every guest feels like part of our family.",
    imageUrl: ""
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function AboutOwner() {
  return (
    <section id="about" className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop" 
          alt="Dhaba ingredients" 
          className="w-full h-full object-cover opacity-10" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl font-bold mb-16"
        >
          A Legacy of <span className="text-yellow-400">Taste</span>
        </motion.h2>

        {/* Overlapping Cards Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8"
        >
          {/* Card 1: Manoj Satsangi */}
          <motion.div 
            variants={cardVariants}
            className="w-full md:w-1/2 bg-zinc-900/50 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-zinc-800"
          >
            <img 
              src={teamMembers[0].imageUrl} 
              alt={teamMembers[0].name} 
              className="w-28 h-28 rounded-full object-cover border-4 border-zinc-700 mb-4 mx-auto"
            />
            <h3 className="text-2xl font-bold text-yellow-400">{teamMembers[0].name}</h3>
            <p className="text-zinc-400 font-semibold">{teamMembers[0].title}</p>
            <p className="text-zinc-500 text-sm mt-3">{teamMembers[0].bio}</p>
          </motion.div>

          {/* Card 2: Sayyam Satsangi (Slightly Overlapping) */}
          <motion.div 
            variants={cardVariants}
            className="w-full md:w-1/2 bg-zinc-900/50 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-zinc-800 md:-ml-16 md:mt-16"
          >
            <img 
              src={teamMembers[1].imageUrl} 
              alt={teamMembers[1].name} 
              className="w-28 h-28 rounded-full object-cover border-4 border-zinc-700 mb-4 mx-auto"
            />
            <h3 className="text-2xl font-bold text-yellow-400">{teamMembers[1].name}</h3>
            <p className="text-zinc-400 font-semibold">{teamMembers[1].title}</p>
            <p className="text-zinc-500 text-sm mt-3">{teamMembers[1].bio}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}