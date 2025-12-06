import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-slate-400 py-8 text-center border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Copyright Line */}
        <p className="text-lg font-semibold text-white mb-2">
          &copy; 2025 Smart Tree Guardian
        </p>
        
        {/* Built With Line */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-sm">
          <span className="flex items-center gap-1">
            Built with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> by
          </span>
          <span className="text-emerald-400 font-medium">
            Gaganashree A, Prakruthi P.H, Shree Vidhya A R and  N Valli Gayathri
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;