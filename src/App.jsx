import Hero from './components/Hero'
import Menu from './components/Menu'
import Popular from './components/Popular'
import Story from './components/Story'
import Footer from './components/Footer'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <>
      <CustomCursor />

      <button className="cursor-hover px-6 py-3 bg-yellow-300 text-black rounded-lg fixed top-5 right-5 z-50">
        Order Now
      </button>

      <Loader>
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-zinc-900 text-white">

          {/* Hero Section */}
          <div className="snap-start">
            <Hero />
          </div>

          {/* Menu Section */}
          <div className="snap-start">
            <Menu />
          </div>

          {/* Popular Items */}
          <div className="snap-start">
            <Popular />
          </div>

          {/* Story/About Us */}
          <div className="snap-start">
            <Story />
          </div>

          {/* Footer */}
          <div className="snap-end">
            <Footer />
          </div>

        </div>
      </Loader>
    </>
  )
}
