import TopBar from './components/TopBar/TopBar';
import Introduccion from './components/Introduccion/Introduccion';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Gallery from './components/Gallery/Gallery';
import Packs from './components/Packs/Packs';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
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
