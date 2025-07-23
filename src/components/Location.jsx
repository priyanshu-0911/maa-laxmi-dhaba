// src/components/Location.jsx

import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiExternalLink } from 'react-icons/fi';

// Using the full, correct, and working embed code from Google Maps
const mapEmbedCode = {
  __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2247122243502!2d75.90427457466143!3d22.71988767938704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2ce918267f3%3A0x1a1c478ba5b9e71b!2sMaa%20Laxmi%20Restaurant!5e0!3m2!1sen!2sin!4v1753286158201!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
};

export default function Location() {
  // Using the full, correct directions URL
  const directionsURL = "https://www.google.com/maps0";

  return (
    <section className="py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            <span className="text-yellow-400">Visit</span> Us
          </h2>
          <p className="text-zinc-400 mt-2">We're waiting to serve you authentic flavours.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Map Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <div dangerouslySetInnerHTML={mapEmbedCode} className="w-full h-full" />
          </motion.div>
          
          {/* Details Column */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FiMapPin className="text-yellow-400 text-2xl mt-1 shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Address</h3>
                <p className="text-zinc-400">Bengali Square, Indore, Madhya Pradesh</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiClock className="text-yellow-400 text-2xl mt-1 shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Opening Hours</h3>
                <p className="text-zinc-400">Open Daily: 11:00 AM – 11:00 PM</p>
              </div>
            </div>
            <a 
              href={directionsURL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-6 py-3 rounded-full text-center shadow-lg hover:bg-yellow-300 transition-colors"
            >
              Get Directions <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}