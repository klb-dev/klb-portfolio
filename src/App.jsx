import {lazy, Suspense} from 'react';
import './index.min.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
const About = lazy(() => import('./components/about/About'))
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<div className='loading'>Loading Projects...</div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className='loading'>Loading Skills...</div>}>
            <Skills />
        </Suspense>
        <Contact />
      </main>
      <Suspense fallback={<div className='loading'>Loading Footer...</div>}>
          <Footer />
      </Suspense>
    </div>
  );
}

export default App;