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
import ScrollToTop from './components/ScrollToTop';
import Location from './components/Location'; // 1. Import the new component

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
      <ScrollToTop />
      <Navbar />
      <StickyFooterBar />
      <Toaster position="top-center" reverseOrder={false} />

      <Loader>
        <main className="bg-zinc-900">
          <AnimatePresence mode="wait">
            <div key={location.pathname}>
              <Outlet />
            </div>
          </AnimatePresence>
        </main>
      </Loader>
      
      {/* 2. Add the Location section before the Footer */}
      <Location />
      
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}