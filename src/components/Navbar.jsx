import React from 'react';
import { Link } from 'react-scroll';
import { TreeDeciduous } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/70 backdrop-blur-lg border-b border-white/10 z-50 px-6 py-4 flex justify-between items-center">
      
      <h1 className="text-lg md:text-xl font-bold text-emerald-400 flex items-center gap-2 cursor-pointer hover:text-white transition">
        <TreeDeciduous /> Smart Tree Guardian
      </h1>
      
      <ul className="hidden md:flex gap-8 font-medium text-slate-400">
        {['Home', 'Features', 'Overview', 'Demo', 'Team'].map((item) => (
          <li key={item} className="cursor-pointer hover:text-emerald-400 hover:scale-105 transition-all">
            <Link to={item.toLowerCase()} smooth={true} offset={-70} duration={500}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;