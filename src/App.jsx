import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Gallery from './components/Gallery'
import AISkills from './components/AISkills'
import AITools from './components/AITools'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-base min-h-screen text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Gallery />
        <AISkills />
        <AITools />
      </main>
      <Footer />
    </div>
  )
}
