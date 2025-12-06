import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Demo = () => {
  // State for the full-screen image modal
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (img) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Reusable Card Style
  const cardStyle = "bg-slate-950 p-4 rounded-2xl border border-white/5 shadow-lg transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:-translate-y-2 group cursor-pointer";

  // Configuration for separate ThingSpeak Charts
  const thinkSpeakCharts = [
    { img: "/chart-soil.jpg", title: "Soil Moisture", desc: "Tracks real-time soil hydration levels to prevent drying." },
    { img: "/chart-n.jpg", title: "Nitrogen (N) Level", desc: "Monitors essential nutrients required for healthy leaf growth." },
    { img: "/chart-p.jpg", title: "Phosphorus (P) Level", desc: "Tracks nutrients needed for strong roots and energy transfer." },
    { img: "/chart-k.jpg", title: "Potassium (K) Level", desc: "Monitors potassium levels vital for tree immunity and strength." },
    // Add more charts here if needed, e.g., Temperature or GPS
  ];

  return (
    <section id="demo" className="py-24 bg-slate-900 px-6 border-t border-white/5 relative">
      
      {/* --- FULL SCREEN IMAGE MODAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={closeImage}
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={closeImage} className="absolute -top-12 right-0 text-white hover:text-red-500 transition">
                <X size={32} />
              </button>
              <img src={selectedImage} alt="Full View" className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        
        {/* --- MAIN HEADER --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="bg-emerald-500/10 text-emerald-400 px-4 py-1 rounded-full text-sm font-bold border border-emerald-500/20">
            FIELD VALIDATION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Multi-Species Full System Test</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            We validated the complete feature set (Anti-Theft, Health, Solar, IoT) on <b>three distinct tree species</b>: Sandalwood, Teakwood, and Silver Wood.
          </p>
        </motion.div>

        {/* --- SECTION 1: VIDEOS --- */}
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white mb-6 border-l-4 border-emerald-500 pl-4"
        >
          Live Testing Videos 
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {[
            { src: "/demo-sandalwood.mp4", title: "Sandalwood Test", desc: "Verified All Features." },
            { src: "/demo-teak1.mp4", title: "Teakwood Test", desc: "Verified All Features." }
          ].map((vid, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`bg-slate-950 rounded-xl overflow-hidden border border-white/5 relative aspect-video hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300`}
            >
              <video className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition" controls>
                <source src={vid.src} type="video/mp4" />
              </video>
              <div className="absolute bottom-0 w-full bg-black/80 p-3 text-left backdrop-blur-sm border-t border-white/10">
                <p className="text-white text-sm font-bold">{vid.title}</p>
                <p className="text-emerald-400 text-xs">{vid.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SECTION 2: MOUNTED PHOTOS --- */}
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white mb-6 border-l-4 border-yellow-500 pl-4"
        >
          Device Mounted on Trees 
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { img: "/mount-sandalwood.jpg", label: "Sandalwood", desc: "Device successfully mounted on Sandalwood Tree." },
            { img: "/mount-teak.jpg", label: "Teakwood", desc: "Device successfully mounted on Teakwood Tree." },
            { img: "/mount-silver.jpg", label: "Silver Wood", desc: "Device successfully mounted on Silverwood Tree." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              onClick={() => openImage(item.img)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={cardStyle}
            >
              <div className="overflow-hidden rounded-lg mb-3 h-64 relative">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-white">{item.label}</h3>
              <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- SECTION 3: TEAM PHOTOS --- */}
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4"
        >
          Team with Deployed System
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { img: "/group-1.jpg", label: "Team @ Sandalwood", desc: "Team with the device mounted on Sandalwood tree." },
            { img: "/group-2.jpg", label: "Team @ Teakwood", desc: "Team with the device mounted on Teakwood tree." },
            { img: "/group-3.jpg", label: "Team @ Silver Wood", desc: "Team with the device mounted on Silver Wood tree." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              onClick={() => openImage(item.img)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={cardStyle}
            >
              <div className="overflow-hidden rounded-lg mb-3 h-56">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
              </div>
              <p className="text-center text-white font-medium">{item.label}</p>
              <p className="text-center text-slate-500 text-xs mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- SECTION 4: REAL-TIME DATA & ALERTS --- */}
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white mb-6 border-l-4 border-red-500 pl-4"
        >
          Real-Time Data & Alerts
        </motion.h3>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Side: Telegram Alert (Larger Feature Card) */}
          <motion.div 
            onClick={() => openImage("/telegram.jpg")}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${cardStyle} lg:w-1/3 flex flex-col items-center text-center h-auto justify-center`}
          >
             <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
               📱 Telegram Bot Alert
             </h4>
             <div className="rounded-xl overflow-hidden border-4 border-slate-800 shadow-lg w-full max-w-xs transform transition hover:scale-105">
               <img src="/telegram.jpg" alt="Telegram Alert" className="w-full h-auto object-cover" />
             </div>
             <p className="text-slate-400 text-sm mt-6 px-4">
               Instant security notification with <b>Image Capture</b> and precise <b>GPS Location</b> sent immediately upon threat detection.
             </p>
          </motion.div>

          {/* Right Side: ThingSpeak Charts Grid */}
          <div className="lg:w-2/3">
             <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 px-2">
               📊 ThingSpeak Live Charts
             </h4>
             <div className="grid grid-cols-2 gap-6">
                {thinkSpeakCharts.map((chart, i) => (
                  <motion.div 
                    key={i}
                    onClick={() => openImage(chart.img)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={cardStyle}
                  >
                    <div className="overflow-hidden rounded-lg mb-3 h-40 relative border border-slate-800">
                      <img src={chart.img} alt={chart.title} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-sm font-bold text-white">{chart.title}</h3>
                    <p className="text-slate-500 text-xs mt-1">{chart.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Demo;