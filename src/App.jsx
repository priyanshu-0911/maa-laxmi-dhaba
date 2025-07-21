// src/App.jsx

import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyFooterBar from './components/StickyFooterBar';
import Loader from './components/Loader';

export default function App() {
  const location = useLocation();
  
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar />
      <StickyFooterBar />
      <Toaster position="top-center" reverseOrder={false} />

      <Loader>
        <main className="bg-zinc-900">
          <AnimatePresence mode="wait">
            {/* The key tells AnimatePresence when the page changes */}
            <div key={location.pathname}>
              <Outlet />
            </div>
          </AnimatePresence>
        </main>
      </Loader>
      
      {/* The #contact div is part of the Footer component */}
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}