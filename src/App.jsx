import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import HowWeWork from './components/HowWeWork'
import WhoWeHelp from './components/WhoWeHelp'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowWeWork />
      <WhoWeHelp />
      <Contact />
      <Footer />
    </div>
  )
}

export default App