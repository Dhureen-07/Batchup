import React from 'react';
import { MessageSquare, Calendar, Award, ArrowLeft } from 'lucide-react';
import { LiquidBackground, GlassCard, Badge } from '../ui/GlassComponents';

const mentors = [
    { name: "Sarah Miller", role: "SDE II", company: "Google", branch: "CSE '23", image: "https://picsum.photos/200/200", tags: ["Cloud", "System Design"], available: true },
    { name: "David Kim", role: "Product Manager", company: "Notion", branch: "ECE '22", image: "https://picsum.photos/201/201", tags: ["Product Sense", "Strategy"], available: false },
    { name: "Priya Patel", role: "AI Researcher", company: "DeepMind", branch: "CSE '24", image: "https://picsum.photos/202/202", tags: ["ML/AI", "Research"], available: true },
    { name: "James Chen", role: "Frontend Lead", company: "Airbnb", branch: "IT '21", image: "https://picsum.photos/203/203", tags: ["React", "UI/UX"], available: true },
];

export const MentorshipScreen: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col relative">
      <LiquidBackground />
       {/* Navbar */}
      <div className="pt-8 md:pt-12 px-6 pb-4 flex items-center gap-4 z-10 sticky top-0">
         <h1 className="text-2xl font-bold">Find a Mentor</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-2 pb-24 md:pb-8 z-10 no-scrollbar space-y-6">
        
        {/* Banner */}
        <GlassCard variant="solid" className="p-5 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border-violet-500/20">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-violet-500 rounded-xl shadow-lg shadow-violet-500/20">
                    <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="font-bold text-lg">Alumni Connect</h3>
                    <p className="text-sm text-slate-300 leading-relaxed mt-1">Get 1:1 guidance from seniors who have cracked your dream roles.</p>
                </div>
            </div>
        </GlassCard>

        {/* Mentors List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mentors.map((m, i) => (
                <GlassCard key={i} variant="translucent" className="p-0 overflow-hidden group">
                    <div className="p-5 flex gap-4">
                         <div className="relative">
                            <img src={m.image} alt={m.name} className="w-14 h-14 rounded-2xl object-cover ring-2 ring-white/10" />
                            {m.available && (
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-black rounded-full"></div>
                            )}
                         </div>
                         <div className="flex-1">
                             <div className="flex justify-between items-start">
                                 <div>
                                     <h3 className="font-bold text-white">{m.name}</h3>
                                     <p className="text-sm text-cyan-400 font-medium">{m.role} @ {m.company}</p>
                                 </div>
                                 <span className="text-xs text-slate-500 font-mono">{m.branch}</span>
                             </div>
                             <div className="mt-3 flex flex-wrap gap-2">
                                 {m.tags.map(t => (
                                     <span key={t} className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-slate-300">
                                         {t}
                                     </span>
                                 ))}
                             </div>
                         </div>
                    </div>
                    {/* Actions footer */}
                    <div className="bg-white/[0.02] border-t border-white/5 p-2 grid grid-cols-2 gap-2">
                        <button className="py-2 flex items-center justify-center gap-2 text-xs font-medium text-slate-300 hover:bg-white/5 rounded-lg transition-colors">
                            <MessageSquare className="w-3.5 h-3.5" />
                            Ask Question
                        </button>
                        <button className="py-2 flex items-center justify-center gap-2 text-xs font-medium text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                            <Calendar className="w-3.5 h-3.5" />
                            Book Session
                        </button>
                    </div>
                </GlassCard>
            ))}
        </div>
      </div>
    </div>
  );
};
