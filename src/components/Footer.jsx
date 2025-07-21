// src/components/Footer.jsx

import ContactForm from './ContactForm'; // Import the new form

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          <span className="text-yellow-400">Book</span> Your Table
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column: Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Right Column: Contact Info */}
          <div className="bg-zinc-800 p-8 rounded-2xl space-y-6">
            <h3 className="text-2xl font-bold text-yellow-400">Contact Information</h3>
            <div>
              <p className="font-semibold text-lg">Location</p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Bengali+Square,+Indore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-yellow-300 transition-colors"
              >
                Bengali Square, Indore, Madhya Pradesh
              </a>
            </div>
            <div>
              <p className="font-semibold text-lg">Opening Hours</p>
              <p className="text-zinc-300">Open Daily: 11:00 AM – 11:00 PM</p>
            </div>
            <div>
              <p className="font-semibold text-lg">Phone</p>
              <a href="tel:+919876543210" className="text-zinc-300 hover:text-yellow-300 transition-colors">
                +91 98765-43210
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-zinc-500 border-t border-zinc-800 pt-8 mt-16">
          <p>&copy; {new Date().getFullYear()} Maa Laxmi Dhaba. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;