import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { TreeDeciduous, Menu, X } from 'lucide-react'; // Added Menu & X icons

const Navbar = () => {
  // State to handle mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-950/70 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* --- YOUR PREFERRED LOGO STYLE --- */}
        <h1 className="text-lg md:text-xl font-bold text-emerald-400 flex items-center gap-2 cursor-pointer hover:text-white transition">
          <TreeDeciduous /> Smart Tree Guardian
        </h1>
        
        {/* --- DESKTOP MENU (Hidden on Mobile) --- */}
        <ul className="hidden md:flex gap-8 font-medium text-slate-400">
          {['Home', 'Features', 'Overview', 'Demo', 'Team'].map((item) => (
            <li key={item} className="cursor-pointer hover:text-emerald-400 hover:scale-105 transition-all">
              <Link to={item.toLowerCase()} smooth={true} offset={-70} duration={500}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* --- MOBILE HAMBURGER BUTTON (Added for Phone View) --- */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white hover:text-emerald-400 transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN MENU (Added for Phone View) --- */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-white/10 absolute w-full left-0 top-full shadow-2xl">
          <ul className="flex flex-col py-6 px-6 space-y-6 font-medium text-slate-400">
            {['Home', 'Features', 'Overview', 'Demo', 'Team'].map((item) => (
              <li key={item}>
                <Link 
                  to={item.toLowerCase()} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  onClick={() => setIsOpen(false)} // Close menu when clicked
                  className="block text-lg hover:text-emerald-400 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;