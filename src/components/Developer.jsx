import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Developer = () => {
  // --- TEAM DATA CONFIGURATION ---
  const team = [
    {
      name: "Dr. Ramesh M. Kagalkar",
      role: "Project Guide",
      image: "/guide.jpg",
      desc: "Provided expert mentorship and technical guidance throughout the project lifecycle.",
      isGuide: true,
      // UPDATE LINKS HERE
      linkedin: "https://www.linkedin.com/in/dr-ramesh-kagalkar-76477518b", 
      email: "mailto:rameshvtu10@gmail.com"
    },
    {
      name: "Gaganashree A",
      role: "IoT Dev",
      image: "/member1.jpg",
      desc: "Developed the IoT firmware and Web Application.",
      // UPDATE LINKS HERE
      linkedin: "https://www.linkedin.com/in/gaganashreea07",
      email: "mailto:gaganashreegowda16@gmail.com"
    },
    {
      name: "Prakruthi P.H",
      role: "Hardware Specialist",
      image: "/member2.jpg",
      desc: "Engineered the hardware circuits and solar power management.",
      // UPDATE LINKS HERE
      linkedin: "https://www.linkedin.com/in/prakruthi-ph-9476a4330/",
      email: "prakruthiphgowda@gmail.com"
    },
    {
      name: "Shree Vidhya A R",
      role: "Frontend Developer",
      image: "/member3.jpg",
      desc: "Designed the responsive UI and Data Visualization charts.",
      // UPDATE LINKS HERE
      linkedin: "https://www.linkedin.com/in/shree-vidhya-r-3666a6330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      email: "mailto:svidya2309@gmail.com"
    },
    {
      name: "N Valli Gayathri",
      role: "Research & Documentation",
      image: "/member4.jpg",
      desc: "Conducted system testing, research, and documentation.",
      // UPDATE LINKS HERE
      linkedin: "https://www.linkedin.com/in/n-valli-gayathri-0168bb376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "mailto:nvalligayathri@gmail.com"
    }
  ];

  return (
    <section id="team" className="py-24 bg-slate-950 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Meet the Team</h2>
        <p className="text-slate-400 mb-16 max-w-2xl mx-auto">
          The brilliant minds behind the IoT Enabled Smart Tree Guardian. 
          A collaborative effort bridging hardware, software, and sustainability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {team.map((member, index) => (
            <div 
              key={index} 
              className={`relative bg-slate-900 p-8 rounded-2xl border transition duration-300 hover:-translate-y-2 group
                ${member.isGuide ? 'border-yellow-500/30 hover:border-yellow-500' : 'border-white/5 hover:border-emerald-500/50'}
              `}
            >
              {member.isGuide && (
                <span className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full border border-yellow-500/30">
                  MENTOR
                </span>
              )}

              <div className={`w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-4 bg-slate-800
                ${member.isGuide ? 'border-yellow-500/50' : 'border-emerald-500/50 group-hover:border-emerald-400'}
              `}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  onError={(e) => {e.target.src = "https://via.placeholder.com/150?text=User"}}
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className={`font-medium mb-4 text-sm tracking-wide ${member.isGuide ? 'text-yellow-400' : 'text-emerald-400'}`}>
                {member.role}
              </p>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed border-t border-white/5 pt-4">
                {member.desc}
              </p>

              {/* Social Icons - Connected to Data */}
              <div className="flex justify-center gap-4">
                
                {/* LinkedIn Link */}
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-slate-800 rounded-full text-slate-400 hover:bg-blue-600 hover:text-white transition"
                  title="View LinkedIn Profile"
                >
                  <Linkedin size={18}/>
                </a>

                {/* Email Link (mailto:) */}
                <a 
                  href={member.email} 
                  className="p-2 bg-slate-800 rounded-full text-slate-400 hover:bg-red-500 hover:text-white transition"
                  title="Send Email"
                >
                  <Mail size={18}/>
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Developer;