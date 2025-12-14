import React from 'react';
import { ArrowLeft, BrainCircuit, Calendar, ChevronRight, Clock, MoreHorizontal, CheckCircle2, Zap } from 'lucide-react';
import { LiquidBackground, GlassCard, Badge } from '../ui/GlassComponents';

const schedule = [
    { id: 1, subject: "Data Structures", topic: "Red-Black Trees", time: "10:00 AM", duration: "45m", type: "Revision", status: "upcoming", confidence: 85 },
    { id: 2, subject: "Calculus III", topic: "Vector Fields", time: "11:30 AM", duration: "60m", type: "Practice", status: "upcoming", confidence: 60 },
    { id: 3, subject: "System Design", topic: "Load Balancing", time: "02:00 PM", duration: "30m", type: "Lecture", status: "pending", confidence: 90 },
];

export const StudyPlannerScreen: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col relative bg-transparent">
      <LiquidBackground />
      
      {/* Navbar */}
      <div className="pt-8 md:pt-12 px-6 pb-4 flex justify-between items-center z-10 sticky top-0">
         <div className="flex items-center gap-3">
             <h1 className="text-2xl font-bold">Study Plan</h1>
         </div>
         <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <MoreHorizontal className="w-5 h-5 text-slate-400" />
         </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-24 md:pb-8 z-10 no-scrollbar space-y-6">
        
        {/* Calendar Strip */}
        <div className="flex md:justify-start gap-4 overflow-x-auto py-2">
            {[ 
                { day: "M", date: "12", active: false },
                { day: "T", date: "13", active: true },
                { day: "W", date: "14", active: false },
                { day: "T", date: "15", active: false },
                { day: "F", date: "16", active: false },
                { day: "S", date: "17", active: false },
                { day: "S", date: "18", active: false },
            ].map((item, i) => (
                <div key={i} className={`flex-shrink-0 flex flex-col items-center gap-2 w-14 py-3 rounded-2xl border transition-all cursor-pointer ${item.active ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'}`}>
                    <span className="text-[10px] font-bold uppercase">{item.day}</span>
                    <span className={`text-sm font-bold ${item.active ? 'text-black' : 'text-white'}`}>{item.date}</span>
                    {item.active && <div className="w-1 h-1 bg-black rounded-full"></div>}
                </div>
            ))}
        </div>

        {/* AI Insight */}
        <GlassCard variant="translucent" className="p-4 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 border-violet-500/20">
            <div className="flex items-start gap-3">
                <div className="p-2 bg-violet-500 rounded-lg shadow-lg shadow-violet-500/30">
                    <BrainCircuit className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-white mb-1">Peak Focus Alert</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                        Based on your past sessions, you are 30% more effective between <strong>9 AM - 11 AM</strong>. We've scheduled your hardest topics then.
                    </p>
                </div>
            </div>
        </GlassCard>

        {/* Schedule */}
        <div>
            <div className="flex justify-between items-end mb-4">
                <h2 className="text-lg font-semibold tracking-tight">Today's Schedule</h2>
                <Badge color="cyan">3 Sessions</Badge>
            </div>

            <div className="relative border-l border-white/10 ml-3 space-y-6">
                {schedule.map((item, i) => (
                    <div key={i} className="relative pl-6">
                        {/* Timeline Dot */}
                        <div className={`absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full border-2 border-midnight ${i === 0 ? 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]' : 'bg-slate-700'}`}></div>
                        
                        <GlassCard className={`p-4 ${i === 0 ? 'border-cyan-500/30 bg-cyan-900/10' : ''}`}>
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <Badge color={item.type === 'Revision' ? 'amber' : 'purple'}>{item.type}</Badge>
                                    <span className="text-xs text-slate-400 font-mono">{item.time}</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-slate-500">
                                    <Clock className="w-3 h-3" />
                                    <span>{item.duration}</span>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold text-white">{item.subject}</h3>
                                    <p className="text-sm text-slate-400">{item.topic}</p>
                                </div>
                                {i === 0 ? (
                                    <button className="h-8 w-8 rounded-full bg-cyan-500 flex items-center justify-center text-black hover:scale-110 transition-transform shadow-lg shadow-cyan-500/20">
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                ) : (
                                     <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-slate-500">
                                        <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                                    </div>
                                )}
                            </div>

                            {/* Confidence Prediction */}
                            {i === 0 && (
                                <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2">
                                    <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                    <span className="text-[10px] text-slate-300">Predicted Retention: <span className="text-green-400 font-bold">{item.confidence}%</span></span>
                                </div>
                            )}
                        </GlassCard>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};
