import React from 'react';
import { Map, Briefcase, ChevronRight, CheckCircle2, Circle } from 'lucide-react';
import { LiquidBackground, GlassCard, Badge, SectionHeader } from '../ui/GlassComponents';

export const CareerScreen: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col relative">
      <LiquidBackground />
       {/* Simple Header */}
      <div className="pt-14 px-6 pb-6 z-10">
         <h1 className="text-2xl font-bold">Career & Growth</h1>
         <p className="text-slate-400 text-sm mt-1">Track your journey from campus to corporate.</p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-24 z-10 no-scrollbar space-y-8">
        
        {/* Progress Roadmap */}
        <div>
            <SectionHeader title="Your Roadmap" />
            <GlassCard variant="translucent" className="p-5">
                <div className="relative flex justify-between items-center mb-6 px-2">
                     {/* Line background */}
                    <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white/10 -z-10"></div>
                    
                    {/* Steps */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                            <CheckCircle2 className="w-5 h-5 text-black" />
                        </div>
                        <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wide">Learn</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                            <CheckCircle2 className="w-5 h-5 text-black" />
                        </div>
                        <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wide">Build</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-cyan-500 text-cyan-500 flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse"></div>
                        </div>
                        <span className="text-[10px] font-bold text-white uppercase tracking-wide">Apply</span>
                    </div>

                     <div className="flex flex-col items-center gap-2 opacity-50">
                        <div className="w-8 h-8 rounded-full bg-black border-2 border-white/20 flex items-center justify-center">
                            <Circle className="w-4 h-4 text-slate-500" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Offer</span>
                    </div>
                </div>

                <div className="bg-white/5 rounded-xl p-3 flex items-center justify-between">
                    <div className="text-xs">
                        <span className="text-slate-400 block mb-0.5">Current Focus</span>
                        <span className="text-white font-medium">Interview Prep & Resume Polish</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                </div>
            </GlassCard>
        </div>

        {/* Opportunities */}
        <div>
            <SectionHeader title="Recommended Roles" action="See All" />
            <div className="space-y-3">
                 <GlassCard variant="outline" className="p-4 flex gap-4 hover:bg-white/5 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center text-xl font-bold">
                        U
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Frontend Engineer Intern</h3>
                            <Badge color="purple">Remote</Badge>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">Uber • 2 months • ₹45k/mo</p>
                        
                        <div className="mt-3 flex items-center gap-2">
                             <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                                 <div className="h-full w-3/4 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                             </div>
                             <span className="text-[10px] text-cyan-400 font-medium">85% Match</span>
                        </div>
                    </div>
                </GlassCard>

                 <GlassCard variant="outline" className="p-4 flex gap-4 hover:bg-white/5 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-[#E1306C] text-white flex items-center justify-center text-xl font-bold">
                        I
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Product Design Intern</h3>
                            <Badge color="green">Hybrid</Badge>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">Instagram • 6 months • ₹80k/mo</p>
                         <div className="mt-3 flex items-center gap-2">
                             <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                                 <div className="h-full w-1/2 bg-slate-600"></div>
                             </div>
                             <span className="text-[10px] text-slate-400 font-medium">Skills Gap</span>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
      </div>
    </div>
  );
};
