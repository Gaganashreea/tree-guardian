import React from 'react';

const Gallery = () => {
  return (
    <section id="overview" className="py-20 bg-slate-950 px-6 border-y border-white/5">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Project Overview</h2>
             <p className="text-slate-400 max-w-2xl mx-auto">
               From theoretical design to real-world application: The journey of building the Smart Tree Guardian.
             </p>
        </div>

        {/* =========================================
            1. THE THEORY: TECHNICAL BLOCK DIAGRAM
           ========================================= */}
        <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-900 p-8 rounded-3xl border border-white/5 shadow-2xl">
          <div className="md:w-1/2">
             <img src="/block-diagram.jpg" alt="Technical Block Diagram" className="rounded-xl shadow-black/50 shadow-2xl border border-white/10 hover:scale-105 transition duration-500" />
          </div>
          <div className="md:w-1/2 space-y-4">
            <span className="text-emerald-400 font-bold tracking-wider text-sm uppercase">Logical Architecture</span>
            <h3 className="text-3xl font-bold text-white">4-Phase Technical Workflow</h3>
            <div className="text-slate-300 text-lg leading-relaxed space-y-2">
              <p>The system follows a strict data pipeline to ensure 24/7 monitoring:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li><b className="text-white">Phase 1 (Power):</b> Hybrid Solar + Li-ion battery management.</li>
                <li><b className="text-white">Phase 2 (Input):</b> Acquisition from NPK,Water, Flame, Sound, and GPS sensors.</li>
                <li><b className="text-white">Phase 3 (Process):</b> ESP32 Core logic evaluating safety thresholds.</li>
                <li><b className="text-white">Phase 4 (Output):</b> LCD Status, Telegram Alerts & ThingSpeak Data.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* =========================================
            2. THE IDEA: HARDWARE CONCEPT (Illustration)
           ========================================= */}
     <div className="flex flex-col md:flex-row-reverse items-center gap-12 bg-slate-900 p-8 rounded-3xl border border-white/5 shadow-2xl">
          <div className="md:w-1/2">
             {/* Using the Illustration here */}
             <img src="/tree-concept.jpg" alt="Hardware Concept Illustration" className="rounded-xl shadow-black/50 shadow-xl border border-white/10 hover:scale-105 transition duration-500 w-full h-auto" />
          </div>
          <div className="md:w-1/2 space-y-4">
            <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">System Concept</span>
            <h3 className="text-3xl font-bold text-white">Hardware & Connectivity Flow</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              This conceptual model illustrates the complete ecosystem. The main <b>Smart Guardian Box</b> acts as the central hub.
              <br/><br/>
              It collects data from external probes (Soil, NPK, Water Level) and communicates securely via WiFi to the <b>Internet Cloud</b>, powering both the Telegram Bot and live ThingSpeak dashboards.
            </p>
          </div>
        </div>
 {/* 3. THE REALITY: ACTUAL FIELD DEPLOYMENT (Photo) */}
         <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-900 p-8 rounded-3xl border border-white/5 shadow-2xl">
          
          {/* IMAGE SIDE */}
          <div className="md:w-1/2 flex justify-center">
             {/* Make sure this src points to your tree photo. 
                 (Likely '/actual-deployment.jpg' if you renamed it in the previous step)
             */}
             <img 
               src="/hardware.jpg" 
               alt="Device on Teak Tree" 
               // CHANGED: max-h-[500px] -> max-h-96 (Smaller height)
               className="rounded-xl shadow-black/50 shadow-2xl border border-white/10 hover:scale-105 transition duration-500 w-auto h-auto max-h-96 object-contain mx-auto" 
             />
          </div>

          {/* TEXT SIDE */}
          <div className="md:w-1/2 space-y-4">
            <span className="text-yellow-400 font-bold tracking-wider text-sm uppercase">Real-World Implementation</span>
            <h3 className="text-3xl font-bold text-white">Trunk-Mounted Design</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Our actual prototype deployed in the field, designed for non-invasive mounting on high-value timber.
              <br/><br/>
              As seen in this photo (Location: Avati, Karnataka), the unit is securely strapped to a <b className="text-yellow-300">Teak Tree</b>.
              <br/>
              The <b>NPK Sensors</b> are monitoring the trunk sap, and the GPS module is actively logging its precise coordinates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;