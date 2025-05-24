import TopBar from './components/TopBar';
import Introduccion from './components/Introduccion';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Packs from './components/Packs';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="main-grid">
      <TopBar />
      <Introduccion />
      <Hero />
      <Features />
      <Gallery />
      <Packs />
      <About />
      <Contact />
    </div>
  );
}

export default App;
