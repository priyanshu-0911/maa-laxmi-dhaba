// src/App.jsx

import { Toaster } from 'react-hot-toast'; 

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Popular from './components/Popular';
import Story from './components/Story';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />

      <Loader>
        <main className="bg-zinc-900">
          {/* We've removed the scroll-snap container. 
            Each section is now wrapped in a simple div with an ID for navigation.
          */}

          <div id="home">
            <Hero />
          </div>

          <div id="menu">
            <Menu />
          </div>

          <div id="popular">
            <Popular />
          </div>

          <div id="about">
            <Story />
          </div>

          <div id="contact">
            <Footer />
          </div>

        </main>
      </Loader>
    </>
  );
}