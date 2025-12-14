import React from 'react';
import { Bell, BookOpen, Briefcase, Users, Hammer, LayoutGrid, Search, TrendingUp, BrainCircuit } from 'lucide-react';
import { LiquidBackground, GlassCard, Badge, SectionHeader } from '../ui/GlassComponents';

export const DashboardScreen: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col relative bg-transparent">
      <LiquidBackground />
      
      {/* Top Bar */}
      <div className="pt-8 md:pt-12 px-6 pb-4 flex justify-between items-center z-10 sticky top-0">
        <div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-0.5">Welcome Back</p>
            <h1 className="text-2xl font-bold">Dhureen</h1>
        </div>
        <div className="relative p-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 cursor-pointer transition-colors">
            <Bell className="w-5 h-5 text-slate-300" />
            <div className="absolute top-2 right-2.5 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-24 md:pb-8 z-10 no-scrollbar space-y-8">
        
        {/* Search Input */}
        <div className="relative group max-w-2xl">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400 group-focus-within:text-cyan-400 transition-colors" />
            </div>
            <input 
                type="text" 
                placeholder="Search notes, mentors, jobs..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all"
            />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* AI Study Plan Widget */}
            <div className="lg:col-span-2">
                <div className="flex justify-between items-end mb-3 px-1">
                    <div className="flex items-center gap-2">
                        <BrainCircuit className="w-4 h-4 text-cyan-400" />
                        <h2 className="text-lg font-semibold text-white tracking-tight">Daily Focus</h2>
                    </div>
                </div>
                <GlassCard variant="translucent" className="p-6 relative overflow-hidden group h-48 flex flex-col justify-center">
                    <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
                        <BrainCircuit className="w-32 h-32 text-cyan-400 -rotate-12" />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-xs text-cyan-400 font-bold uppercase tracking-wide mb-1">Up Next • AI Recommended</p>
                                <h3 className="text-2xl font-bold text-white">Data Structures</h3>
                                <p className="text-sm text-slate-400">Trees & Graphs Revision</p>
                            </div>
                            <div className="text-right">
                                <span className="text-3xl font-bold text-white">45<span className="text-sm font-normal text-slate-500">m</span></span>
                                <p className="text-[10px] text-slate-400">Optimized for 10:00 AM</p>
                            </div>
                        </div>

                        {/* Progress */}
                        <div className="space-y-2 max-w-md">
                            <div className="flex justify-between text-xs">
                                <span className="text-slate-300">Daily Goal</span>
                                <span className="text-cyan-400 font-medium">65%</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-[65%] bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* Recent Updates */}
            <div className="lg:col-span-1 flex flex-col">
                <SectionHeader title="For You" action="View All" />
                <GlassCard className="p-4 flex gap-4 items-center flex-1">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/20 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between mb-1">
                            <h4 className="text-sm font-semibold">Placement Season</h4>
                            <Badge color="amber">Live</Badge>
                        </div>
                        <p className="text-xs text-slate-400">Resume shortlisting for Amazon starts in 2 days.</p>
                    </div>
                </GlassCard>
            </div>
        </div>

        {/* Quick Actions Grid */}
        <div>
            <SectionHeader title="Hubs" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <GlassCard variant="translucent" className="p-4 flex flex-col gap-3 group cursor-pointer">
                    <div className="p-2.5 w-fit rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                        <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm">Verified Notes</h3>
                        <p className="text-xs text-slate-400 mt-0.5">4 new uploads</p>
                    </div>
                </GlassCard>
                <GlassCard variant="translucent" className="p-4 flex flex-col gap-3 group cursor-pointer">
                    <div className="p-2.5 w-fit rounded-lg bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30 transition-colors">
                        <Users className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm">Mentors</h3>
                        <p className="text-xs text-slate-400 mt-0.5">Online now</p>
                    </div>
                </GlassCard>
                <GlassCard variant="translucent" className="p-4 flex flex-col gap-3 group cursor-pointer">
                    <div className="p-2.5 w-fit rounded-lg bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30 transition-colors">
                        <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm">Internships</h3>
                        <p className="text-xs text-slate-400 mt-0.5">Recommended</p>
                    </div>
                </GlassCard>
                 <GlassCard variant="translucent" className="p-4 flex flex-col gap-3 group cursor-pointer">
                    <div className="p-2.5 w-fit rounded-lg bg-pink-500/20 text-pink-400 group-hover:bg-pink-500/30 transition-colors">
                        <Hammer className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm">Build Studio</h3>
                        <p className="text-xs text-slate-400 mt-0.5">AI Tools</p>
                    </div>
                </GlassCard>
            </div>
        </div>
      </div>
    </div>
  );
};