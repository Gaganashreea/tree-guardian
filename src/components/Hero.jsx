import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900 via-slate-950 to-slate-950 px-6 pt-16 relative overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-5xl space-y-8 relative z-10"
      >
        {/* Yellow Badge */}
        <span className="inline-block bg-yellow-500/10 text-yellow-300 px-6 py-2 rounded-full text-sm font-bold border border-yellow-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(234,179,8,0.3)]">
          IoT Enabled Solution
        </span>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white drop-shadow-2xl">
          IoT Enabled Smart <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
            Tree Guardian
          </span>
        </h1>
        
        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
         A Solar-Powered 
Intelligent System for Tree Health Monitoring and Safety.
        </p>
        
        <div className="flex gap-4 justify-center mt-8">
          {/* --- CHANGED LINK TO "demo" --- */}
          <Link to="demo" smooth={true} offset={-70}>
            <button className="bg-emerald-500 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300 cursor-pointer">
              View Prototype
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;