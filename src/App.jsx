import React from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import AnimatedCube from './components/Animation';
import Pricing from './components/Pricing';
import AboutMe from './components/Aboutme';
function App() {
  return (
    <Layout>
      <Home />
      <About />
      <AboutMe />
      <Services />
      <Pricing />
      <AnimatedCube />
      <Contact />
    </Layout>
  );
}

export default App;