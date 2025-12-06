import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Demo from './components/Demo';
import Developer from './components/Developer';
import Footer from './components/Footer'; // <--- IMPORT THIS

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Demo />
      <Developer />
      <Footer /> {/* <--- ADD THIS AT THE BOTTOM */}
    </div>
  );
}

export default App;