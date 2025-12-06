import React from 'react';
import { ShieldAlert, Sprout, Zap, Wifi, MapPin, BellRing } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    { icon: <ShieldAlert className="w-8 h-8 text-red-500" />, title: "Anti-Theft Security", desc: "Vibration sensors detect illegal cutting. Sound sensors monitor suspicious noise." },
    { icon: <Sprout className="w-8 h-8 text-emerald-400" />, title: "Precision Health", desc: "Trunk-mounted NPK sensors analyze sap nutrients. Soil probes monitor hydration." },
    { icon: <Zap className="w-8 h-8 text-yellow-400" />, title: "Hybrid Power", desc: "Solar Panels by day, Li-ion Battery by night. 24/7 autonomous operation." },
    { icon: <MapPin className="w-8 h-8 text-purple-400" />, title: "GPS Tracking", desc: "Real-time Latitude/Longitude tracking prevents theft and aids recovery." },
    { icon: <Wifi className="w-8 h-8 text-blue-400" />, title: "Cloud Analytics", desc: "ESP32 logs data to ThingSpeak. ESP32-CAM captures security photos." },
    { icon: <BellRing className="w-8 h-8 text-orange-400" />, title: "Instant Alerts", desc: "Telegram notifications with images, plus local Buzzer & LCD feedback." }
  ];

  return (
    // CHANGE 1: bg-slate-900 (Much Darker, almost black, but distinct)
    <section id="features" className="py-24 bg-slate-900 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          System Capabilities
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              // CHANGE 2: Cards are bg-slate-950 (Deepest Black)
              // This creates a cool "engraved" or "dashboard slot" look
              className="bg-slate-950 p-8 rounded-2xl border border-white/5 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300 group"
            >
              <div className="mb-6 bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;