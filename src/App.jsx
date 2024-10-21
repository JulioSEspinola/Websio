import React from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import AnimatedCube from './components/Animation';
function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Services />
      <AnimatedCube />
      <Contact />
    </Layout>
  );
}

export default App;