import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/Story'; // or About.jsx, depending on your file

export default function App() {
  return (
    <div className="bg-zinc-900 text-white scroll-smooth">
      {/* Hero Section */}
      <Hero />

      {/* Menu Section */}
      <Menu />

      {/* About / Story Section comes LAST */}
      <About />
    </div>
  );
}
