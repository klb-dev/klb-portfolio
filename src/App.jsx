import {lazy, Suspense} from 'react';
const Navbar = lazy(() => import('./components/navbar/Navbar'));
const Hero = lazy(() => import('./components/hero/Hero'));
const About = lazy(() => import('./components/about/About'))
const Projects = lazy(() => import('./components/projects/Projects'));
const Skills = lazy(() => import('./components/skills/Skills'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Footer = lazy(() => import('./components/footer/Footer'));


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